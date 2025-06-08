import Airtable from 'airtable'

export interface SpotifyTrack {
  name: string
  url: string
  time: string
}

export interface SpotifyCurrentTrack {
  item: {
    name: string
    duration_ms: number
    external_urls: { spotify: string }
  }
  is_playing: boolean
  progress_ms: number
  error?: any
}

export interface SpotifyRecentTrack {
  items: Array<{
    track: {
      name: string
      external_urls: { spotify: string }
    }
    played_at: string
  }>
  error?: any
}

export const useSpotify = () => {
  const config = useRuntimeConfig()
  
  Airtable.configure({ 
    endpointUrl: 'https://api.airtable.com', 
    apiKey: config.public.airtableAPIKey 
  })
  const airtableBase = Airtable.base(config.public.airtableBase)
  
  const trackData = ref<SpotifyTrack>({
    name: '',
    url: '',
    time: ''
  })
  
  const trackDataHasLoaded = ref(false)
  const lastListened = ref('')
  const recordId = ref('')
  
  const playerIsActive = computed(() => trackData.value.time === '')

  const timeUpdateInterval = ref<NodeJS.Timeout | null>(null)
  const trackUpdateTimeout = ref<NodeJS.Timeout | null>(null)

  const checkTokenValidity = (created: number, expiresIn: number = 3600): boolean => {
    const currentDate = new Date()
    const bufferTime = 300000 // 5 minutes buffer
    const expiryDate = new Date(created + (expiresIn * 1000) - bufferTime)
    return currentDate < expiryDate
  }

  const calculateLastListened = (): string => {
    if (trackData.value.time === '') {
      return ''
    }

    const rn = new Date().getTime()
    const lastPlayed = new Date(trackData.value.time).getTime()
    const milliseconds = rn - lastPlayed

    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (seconds < 60) {
      return `${seconds}s ago`
    } else if (minutes < 60) {
      return `${minutes}m ago`
    } else if (hours < 24) {
      return `${hours}h ago`
    } else if (days < 7) {
      return `${days}d ago`
    } else if (weeks < 4) {
      return `${weeks}w ago`
    } else if (months < 12) {
      return `${months}mo ago`
    } else {
      return `${years}y ago`
    }
  }

  const updateAirtable = async (token: string, refresh: string): Promise<void> => {
    try {
      await airtableBase('spotify').update([
        {
          id: recordId.value,
          fields: {
            token,
            refresh,
            created: Date.now(),
          }
        }
      ])
    } catch (error) {
      console.error('Failed to update Airtable:', error)
    }
  }

  const refreshAccessToken = async (refresh_token: string): Promise<void> => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${config.public.spotifyClientId}:${config.public.spotifyClientSecret}`)
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token
        })
      })

      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status}`)
      }

      const data = await response.json()

      if (data && !data.error) {
        await updateAirtable(data.access_token, data.refresh_token || refresh_token)
        await getCurrentPlayingTrack(data.access_token).catch(() => {
          getRecentlyPlayedTracks(data.access_token)
        })
      }
    } catch (error) {
      console.error('Failed to refresh Spotify token:', error)
    }
  }

  const getCurrentPlayingTrack = async (token: string): Promise<SpotifyCurrentTrack> => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (!response.ok) {
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After')
          console.warn(`Spotify API rate limit hit. Retry after: ${retryAfter}s`)

          await getRecentlyPlayedTracks(token)
          return { error: 'Rate limited', is_playing: false, item: null, progress_ms: 0 } as any
        }
        throw new Error(`Spotify API error: ${response.status}`)
      }

      if (response.status === 204) {
        await getRecentlyPlayedTracks(token)
        return { is_playing: false, item: null, progress_ms: 0 } as any
      }

      const data = await response.json()

      if (data && !data.error && data.item) {
        if (data.is_playing) {
          trackData.value = {
            name: data.item.name,
            url: data.item.external_urls.spotify,
            time: ''
          }

          trackDataHasLoaded.value = true

          if (trackUpdateTimeout.value) {
            clearTimeout(trackUpdateTimeout.value)
          }

          const remainingTime = data.item.duration_ms - data.progress_ms
          trackUpdateTimeout.value = setTimeout(() => {
            getCurrentPlayingTrack(token).catch(() => {
              getRecentlyPlayedTracks(token)
            })
          }, remainingTime)
        } else {
          await getRecentlyPlayedTracks(token)
        }
      } else {
        await getRecentlyPlayedTracks(token)
      }

      return data
    } catch (error) {
      console.error('Error fetching current playing track:', error)
      await getRecentlyPlayedTracks(token)
      return { error, is_playing: false, item: null, progress_ms: 0 } as any
    }
  }

  const getRecentlyPlayedTracks = async (token: string): Promise<SpotifyRecentTrack> => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })

      if (!response.ok) {
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After')
          console.warn(`Spotify API rate limit hit on recently played. Retry after: ${retryAfter}s`)
        }
        throw new Error(`Spotify API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data && !data.error && data.items && data.items.length > 0) {
        trackData.value = {
          name: data.items[0].track.name,
          url: data.items[0].track.external_urls.spotify,
          time: data.items[0].played_at
        }
      
        trackDataHasLoaded.value = true
      
        lastListened.value = calculateLastListened()

        if (timeUpdateInterval.value) {
          clearInterval(timeUpdateInterval.value)
        }

        timeUpdateInterval.value = setInterval(() => {
          lastListened.value = calculateLastListened()
        }, 60000)
      }

      return data
    } catch (error) {
      console.error('Error fetching recently played tracks:', error)
      return { error, items: [] } as any
    }
  }

  const initializeSpotify = async (): Promise<void> => {
    try {
      const records = await airtableBase('spotify').select({
        view: 'Grid view',
      }).firstPage()

      if (records && records.length > 0) {
        const record = records[0]
        const token: string = record.fields.token as string
        const refresh: string = record.fields.refresh as string
        const created: number = record.fields.created as number
        
        recordId.value = record.id
        
        const tokenIsValid = checkTokenValidity(created)

        if (tokenIsValid) {
          const data = await getCurrentPlayingTrack(token)
          if (data.error) {
            await refreshAccessToken(refresh)
          }
        } else {
          await refreshAccessToken(refresh)
        }
      }
    } catch (error) {
      console.error('Failed to initialize Spotify:', error)
    }
  }

  const cleanup = (): void => {
    if (timeUpdateInterval.value) {
      clearInterval(timeUpdateInterval.value)
      timeUpdateInterval.value = null
    }
    if (trackUpdateTimeout.value) {
      clearTimeout(trackUpdateTimeout.value)
      trackUpdateTimeout.value = null
    }
  }
  
  return {
    trackData: readonly(trackData),
    trackDataHasLoaded: readonly(trackDataHasLoaded),
    lastListened: readonly(lastListened),
    playerIsActive,
    initializeSpotify,
    cleanup
  }
}

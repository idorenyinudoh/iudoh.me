<script setup lang="ts">
import Airtable from 'airtable'

Airtable.configure({ endpointUrl: 'https://api.airtable.com', apiKey: useRuntimeConfig().public.airtableAPIKey })
const airtableBase = Airtable.base(useRuntimeConfig().public.airtableBase)
const recordId = ref('')

airtableBase('spotify').select({
  view: 'Grid view',
}).firstPage((err, records) => {
  if (err) {
    return
  }
  if (records) {
    records.forEach((record, index) => {
      if (index === 0) {
        recordId.value = record.id
        const token: string = record.fields.token as string
        const refresh: string = record.fields.refresh as string
        const expiry: number = record.fields.expiry as number
        const created: number = record.fields.created as number
        
        const tokenIsValid = checkTokenValidity(created, expiry)

        if (tokenIsValid) {
          getCurrentPlayingTrack(token).then((data) => {
            if (data.error) {
              refreshAccessToken(refresh)
            }
          }).catch(() => {
            getRecentlyPlayedTracks(token).then((data) => {
              if (data.error) {
                refreshAccessToken(refresh)
              }
            })
          })
        } else {
          refreshAccessToken(refresh)
        }
      }
    })
  }
})

const checkTokenValidity = (created: number, expiry: number) => {
  const currentDate = new Date()
  const expiryDate = new Date(expiry + created)

  if (currentDate > expiryDate) {
    return false
  }

  return true
}

const refreshAccessToken = async (refresh_token: string) => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${useRuntimeConfig().public.spotifyClientId}:${useRuntimeConfig().public.spotifyClientSecret}`)
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  const data = await response.json()

  await updateAirtable(data.access_token, data.refresh_token, data.expiry * 1000)
  await getCurrentPlayingTrack(data.access_token).catch(() => {
    getRecentlyPlayedTracks(data.access_token)
  })
}

const updateAirtable = async (token: string, refresh: string, expiry: number) => {
  airtableBase('spotify').update([
    {
      id: recordId.value,
      fields: {
        token,
        refresh,
        expiry: expiry * 1000,
        created: Date.now(),
      }
    }
  ])
}

const getCurrentPlayingTrack = async (token: string) => {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  const data = await response.json()

  if (data && data.error === undefined) {
    if (data.is_playing) {
      trackData.value = {
        name: data.item.name,
        url: data.item.external_urls.spotify,
        time: 0
      }

      setTimeout(() => {
        getCurrentPlayingTrack(token).catch(() => {
          getRecentlyPlayedTracks(token)
        })
      }, data.item.duration_ms - data.progress_ms)
    } else {
      getRecentlyPlayedTracks(token)
    }
  }

  return data
}

const getRecentlyPlayedTracks = async (token: string) => {
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  
  const data = await response.json()
  
  trackData.value = {
    name: data.items[0].track.name,
    url: data.items[0].track.external_urls.spotify,
    time: data.items[0].played_at
  }

  return data
}

const trackData = ref({
  name: '',
  url: '',
  time: 0
})

// function to generate code verifier for spotify user auth request

// const generateRandomString = (length: number) => {
//   let text = ''
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length))
//   }

//   return text
// }

// function to return code verifier as well as base64 format of sha256-hashed code verifier

// const generateCodeChallenge = async (codeVerifier: string) => {
//   const data = new TextEncoder().encode(codeVerifier)
//   const hash = await crypto.subtle.digest('SHA-256', data)
//   const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//   return { codeVerifier, codeChallenge }
// }

// request user auth and user grants permission

// const requestUserAuth = async () => {
//   const codeVerifier = generateRandomString(128)
//   const { codeChallenge } = await generateCodeChallenge(codeVerifier)
//   const state = generateRandomString(16)
//   const scope = 'user-read-currently-playing user-read-recently-played'

//   localStorage.setItem('code_verifier', codeVerifier)

//   const args = {
//     client_id: useRuntimeConfig().public.spotifyClientId,
//     response_type: 'code',
//     redirect_uri: 'http://localhost:3000/',
//     state,
//     scope,
//     code_challenge_method: 'S256',
//     code_challenge: codeChallenge,
//   }

//   window.location.href = `https://accounts.spotify.com/authorize?${new URLSearchParams(args)}`
// }

// generate access token after user has successfully granted permission

// const generateAccessToken = async (code: string) => {
//   const code_verifier = localStorage.getItem('code_verifier')!

//   const response = await fetch('https://accounts.spotify.com/api/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       grant_type: 'authorization_code',
//       code,
//       redirect_uri: 'http://localhost:3000/',
//       client_id: useRuntimeConfig().public.spotifyClientId,
//       code_verifier
//     })
//   })

//   const data = await response.json()
//   console.log(data)
//   return data.access_token
// }

// generate token if user has granted access on app mount. if not, request access

// onMounted(() => {
//   const params = new URLSearchParams(window.location.search)
//   const code = params.get('code')

//   if (!code) {
//     requestUserAuth()
//   } else {
//     generateAccessToken(code).then((token) => {
//       getCurrentPlayingTrack(token)
//     })
//   }
// })
</script>

<template>
  <section class="mt-auto md:ml-auto max-w-max">
    <div class="py-1.5 lg:py-2 pl-2 lg:pl-2.5 pr-7 lg:pr-8 rounded-[48px] flex gap-x-2 lg:gap-x-3 items-center bg-white dark:bg-[#3E3E3E]">
      <img src="~/assets/images/spotify.svg" alt="spotify logo" class="w-14 h-14">
      <div class="flex flex-col max-sm:gap-y-0.5">
        <h2 class="text-xs sm:text-sm lg:text-base text-[#666666] dark:text-[#ADA5A5] font-medium tracking-tighter">{{ trackData.time ? 'Listened' : 'Listening' }} to</h2>
        <NuxtLink :to="trackData.url" target="_blank" class="link">
          <p class="-mt-0.5 text text-sm sm:text-base lg:text-xl font-medium">{{ trackData.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
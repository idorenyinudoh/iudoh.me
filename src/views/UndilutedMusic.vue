<template>
  <Work :="props"></Work>
</template>

<script>
import Work from "@/components/Work.vue"

const props = {
    name: 'undiluted music',
    summary: 'a website that gives users access to stream and download songs.',
    screenshot1src: 'https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png',
    alt1: 'undiluted music landing page screenshot',
    purposes: [
        'A little backstory before I proceed.',
        'In my country, Nigeria, there are websites that provide both local and international music for users to stream and download. Now these websites have a couple of defaults.',
        'First of all, they are not quite user-friendly, let alone accessible.',
        'Secondly, the webmasters of these sites ensure they tag the audio files\' album covers and metadata with images and text advertising the websites.',
        'Finally, more often than not, still on the topic of advertising, these webmasters add voiceovers of their URLs to the audio files. For example, if Google were one of these sites, while listening to a song, you\'ll hear something like "Get more music at google.com" or "It\'s another hit jam from google.com".',
        'To me, this method of advertising was a form of copyright infringement. Consequently, I came up with a project idea to build a website for music streaming and download but with the actual album covers and metadata on the audio files as released by the artistes.',
        'Months later, I read an <a href="https://iptlc.org.ng/%EF%BB%BFimplications-of-illegal-downloading-of-copyrighted-music-in-nigeria-ip-perspective-introduction/", target="_blank">article</a> that explained that even this project was a form of copyright infringement. Therefore, I had to discontinue the project.'
    ],
    screenshot2src: 'https://res.cloudinary.com/idorenyinudoh/image/upload/v1627136524/portfolio/undiluted-music-artistes-page-screenshot_gva099.png',
    alt2: 'undiluted music artistes page screenshot',
    stacks: [
        'I started out the development with HTML, CSS, and Vanilla JavaScript.',
        'When I needed to start working with a database, I started working with Node, express, mongodb, and Pug (I replaced all the HTML files with their Pug equivalents).'
    ],
    challenges: [
        'Being that this was my first-ever project, the only challenge I had was... everything. From implementing what I had in my wireframes to making a button look the way I pictured it in my head &#8212; everything seemed to be difficult.',
        'Eventually, with the help of documentation and technical articles, I started to actually make progess.',
        'However, the major challenge I had was building a cross-browser compatible audio player. I wanted my audio player to have the same look and functionality across browsers. Therefore, using the default audio player wasn\'t an option.',
        'I solved this challenge by creating an audio player from scratch in a different repository. I used the HTMLAudioElement API for the entire functionality of the player and a Lottie animated icon from Icons8 for the play / pause transition.'
    ],
    screenshot3src: 'https://res.cloudinary.com/idorenyinudoh/image/upload/v1627136524/portfolio/undiluted-music-mi-abaga-page-screenshot_ftpzcx.png',
    alt3: 'undiluted music mi abaga page screenshot'
}

export default {
    name: 'UndilutedMusic',
    data() {
        return {
            props
        }
    },
    components: {
        Work
    }
}
</script>

<style>

</style>
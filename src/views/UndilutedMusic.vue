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
    ]
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
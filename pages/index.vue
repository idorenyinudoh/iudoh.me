<template lang="pug">
div
  header
    h1 Idorenyin Udoh
    p frontend developer &amp; technical writer
  section#about
    base-heading(position='left', heading='about me')
    p I'm a Frontend developer and Technical writer from Akwa Ibom, Nigeria.
    p I replicate UI designs to pixel-perfect webpages with HTML, CSS, and JavaScript. I'm proficient with Vue and Nuxt, I always work with Git, and my preferred template engine is Pug.
    p I often write concise technical articles when I learn new technologies as I want to give back to the community
      small  and make a few bucks.
    p I'm currently interning as a Software Engineer at 
      a(href='https://acumen.digital/' target='_blank') Acumen Digital
      | .
  section#works
    base-heading(position='right', heading='my works')
    article
      base-image(
        src='https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png',
        alt='undiluted music landing page screenshot'
      )
      .texts
        h3 undiluted music
        p a website that gives users access to stream and download songs.
        nuxt-link(to='/undiluted-music') Learn More
    hr
    h3 Some of my technical articles:
    base-ul
      base-li(item='CSS-Tricks')
        base-ul-ul
          base-li: a(
            href='https://css-tricks.com/give-users-control-the-media-session-api/',
            target='_blank'
          ) Give Users Control: The Media Session API
          base-li: a(
            href='https://css-tricks.com/lets-create-a-custom-audio-player/',
            target='_blank'
          ) Let's Create a Custom Audio Player
      base-li(item='freeCodeCamp')
        base-ul-ul
          base-li: a(
            href='https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/',
            target='_blank'
          ) How to Use the Lottie Library like a Pro - Lottie Resources for Designers and Developers
      base-li(item='Medium')
        base-ul-ul
          base-li: a(
            href='https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339',
            target='_blank'
          ) How to Use Lottie Animations on the Web
    p Find all my articles 
      nuxt-link(to='/articles') here
      | .
  section#contact
    base-heading(position='left', heading='contact')
    contact-form
    #socials
      p: a(href='https://linkedin.com/in/idorenyinudoh', target='_blank') linkedin
      p: a(href='https://github.com/idorenyinudoh', target='_blank') github
  the-footer
</template>

<script>
export default {
  layout: 'home',
  head: {
    meta: [
      {
        name: 'keywords',
        content: 'frontend developer, technical writer, frontend developer in nigeria, technical writer in nigeria, vue developer, nuxt developer'
      }
    ]
  }
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
  article {
    grid-template-columns: 500px 1fr;
    max-width: 1000px;
  }
}
@media screen and (min-width: 660px) and (max-width: 799px) {
  article {
    grid-template-columns: 410px 1fr;
  }
}
@media screen and (min-width: 660px) {
  .image-container {
    border-right: 1px solid;
  }

  .texts {
    padding: 20px;
  }
}
@media screen and (max-width: 659px) {
  .image-container {
    border-bottom: 1px solid;
  }

  .texts {
    padding: 20px 10px;
  }
}

header {
  height: calc(100vh - 40px - 2vw);
  padding: calc(20px + 1vw);
  display: grid;
  align-content: center;
  row-gap: 10px;
}

h1 {
  margin: 0;
  width: 90%;
}

#about {
  margin-top: 13px;
  display: grid;
  row-gap: calc(10px + 1vw);
}

small {
  font-size: 16px;
}

section:not(:last-of-type) {
  margin: calc(90px + 1vw) 0;
}

article {
  display: grid;
  border: 2px solid;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}

article:not(:last-child) {
  margin-bottom: calc(40px + 1vw);
}

hr {
  margin: calc(70px + 1vw) auto;
  border: none;
  background-color: #000;
  height: 2px;
  width: 80%;
}

.texts {
  display: grid;
  row-gap: 10px;
  align-content: center;
}

.texts a {
  width: max-content;
}

h3 {
  margin: 0;
  font-size: 24px;
  font-weight: 500;
}

.texts p,
.texts a {
  font-size: 18px;
}

#socials {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: calc(20px + 1vw);
  justify-content: center;
}
</style>
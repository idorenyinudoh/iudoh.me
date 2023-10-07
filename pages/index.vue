<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [
    {
      name: 'keywords',
      content: 'frontend developer, frontend engineer, technical writer, frontend developer in nigeria, frontend engineer in nigeria, technical writer in nigeria, vue developer, nuxt developer'
    }
  ]
})

useSeoMeta({
  title: 'Idorenyin Udoh | frontend engineer & technical writer',
  ogTitle: 'Idorenyin Udoh | frontend engineer & technical writer',
  twitterTitle: 'Idorenyin Udoh | frontend engineer & technical writer',
  description: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  ogDescription: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  twitterDescription: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  ogImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me${route.path}`,
})
</script>

<template>
  <div>
    <header>
      <h1>Idorenyin Udoh</h1>
      <hr>
      <p>frontend engineer &amp; technical writer</p>
    </header>
    <section id="about">
      <BaseHeading position="left" heading="about me" />
      <p>I'm a Frontend developer and Technical writer from Akwa Ibom, Nigeria.</p>
      <p>I replicate UI designs to pixel-perfect webpages with HTML, CSS, and JavaScript. I'm proficient with Vue and Nuxt, I always work with Git, and my preferred template engine is Pug.</p>
      <p>I often write concise technical articles when I learn new technologies as I want to give back to the community<small> and make a few bucks.</small></p>
      <p>I'm currently working as a Software Engineer at <a href="https://acumen.digital/" target="_blank">Acumen Digital</a>.</p>
    </section>
    <section id="works">
      <BaseHeading position="right" heading="my works" />
      <article>
        <BaseImage src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png" alt="undiluted music landing page screenshot" />
        <div class="texts">
          <h3>undiluted music</h3>
          <p>a website that gives users access to stream and download songs.</p>
          <NuxtLink to="/undiluted-music">Learn More</NuxtLink>
        </div>
      </article>
      <hr>
      <h3>Some of my technical articles:</h3>
      <BaseUl>
        <BaseLi item="CSS-Tricks">
          <BaseUlUl>
            <BaseLi>
              <a href="https://css-tricks.com/give-users-control-the-media-session-api/" target="_blank">Give Users Control: The Media Session API</a>
            </BaseLi>
            <BaseLi>
              <a href="https://css-tricks.com/lets-create-a-custom-audio-player/" target="_blank">Let's Create a Custom Audio Player</a>
            </BaseLi>
          </BaseUlUl>
        </BaseLi>
        <BaseLi item="freeCodeCamp">
          <BaseUlUl>
            <BaseLi>
              <a href="https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/" target="_blank">How to Use the Lottie Library like a Pro - Lottie Resources for Designers and Developers</a>
            </BaseLi>
          </BaseUlUl>
        </BaseLi>
        <BaseLi item="Medium">
          <BaseUlUl>
            <BaseLi>
              <a href="https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339" target="_blank">How to Use Lottie Animations on the Web</a>
            </BaseLi>
          </BaseUlUl>
        </BaseLi>
      </BaseUl>
      <p>Find all my articles <NuxtLink to="/articles">here</NuxtLink>.</p>
    </section>
    <section id="contact">
      <BaseHeading position="left">
        <span>find me</span>
        <span>&nbsp;</span>
        <span>online</span>
      </BaseHeading>
      <ContactSection />
    </section>
  </div>
</template>

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
hr {
  border: none;
  background-color: #000;
  height: 2px;
}
header hr {
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
section#contact h2 {
  padding-right: 0;
}
section#contact h2 span:last-of-type {
  position: absolute;
  z-index: 0;
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
section hr {
  margin: calc(70px + 1vw) auto;
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
.texts p, .texts a {
  font-size: 18px;
}
</style>
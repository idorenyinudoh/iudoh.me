<script setup lang="ts">
const articles = [
  {
    title: 'Give Users Control: The Media Session API',
    link: 'https://css-tricks.com/give-users-control-the-media-session-api/',
    date: '14 December, 2020',
    publication: 'css-tricks'
  },
  {
    title: 'Animating with Lottie',
    link: 'https://css-tricks.com/animating-with-lottie/',
    date: '11 January, 2021',
    publication: 'css-tricks'
  },
  {
    title: 'Let\'s Create a Custom Audio Player',
    link: 'https://css-tricks.com/lets-create-a-custom-audio-player/',
    date: '18 February, 2021',
    publication: 'css-tricks'
  },
  {
    title: 'How to Use Lottie Animations On the Web',
    link: 'https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339',
    date: '5 April, 2021',
    publication: 'medium'
  },
  {
    title: 'How to Use the Lottie Library like a Pro – Lottie Resources for Designers and Developers',
    link: 'https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/',
    date: '17 May, 2021',
    publication: 'freecodecamp'
  },
  {
    title: 'content-visibility',
    link: 'https://css-tricks.com/almanac/properties/c/content-visibility/',
    date: '21 June, 2021',
    publication: 'css-tricks'
  },
  {
    title: 'hyphenate-limit-chars',
    link: 'https://css-tricks.com/almanac/properties/h/hyphenate-limit-chars/',
    date: '15 July, 2021',
    publication: 'css-tricks'
  },
  {
    title: 'The Web Animations API vs CSS',
    link: 'https://blog.logrocket.com/the-web-animations-api-vs-css/',
    date: '18 August, 2021',
    publication: 'logrocket'
  },
  {
    title: 'Troubleshooting Nested Pages in Nuxt',
    link: 'https://blog.logrocket.com/troubleshooting-nested-pages-nuxt/',
    date: '24 November, 2021',
    publication: 'logrocket'
  },
  {
    title: 'Getting Started with Sourcegraph',
    link: 'https://medium.com/@idorenyinudoh10/getting-started-with-sourcegraph-bde344adb77',
    date: '14 February, 2022',
    publication: 'medium'
  },
  {
    title: 'How to Export Data from JavaScript to a CSV File',
    link: 'https://medium.com/@idorenyinudoh10/how-to-export-data-from-javascript-to-a-csv-file-955bdfc394a9',
    date: '6 June, 2022',
    publication: 'medium'
  },
  {
    title: 'How to Create a Real-time Chat Application with Nuxt',
    link: 'https://www.freecodecamp.org/news/create-a-real-time-chat-application-with-nuxt/',
    date: '10 August, 2022',
    publication: 'freecodecamp'
  },
  {
    title: 'How to Create a Global Custom Plugin in Nuxt.js',
    link: 'https://blog.logrocket.com/create-global-custom-plugin-nuxt-js/',
    date: '29 August, 2022',
    publication: 'logrocket'
  },
  {
    title: 'Integrate Blockchain Technology into Your App with Starton',
    link: 'https://medium.com/@idorenyinudoh10/integrate-blockchain-technology-into-your-app-with-starton-aeb391c1b2c3',
    date: '10 October, 2022',
    publication: 'medium'
  }
]

useSeoMeta({
  title: 'articles | Idorenyin Udoh',
  ogTitle: 'articles | Idorenyin Udoh',
  twitterTitle: 'articles | Idorenyin Udoh',
  description: 'technical articles written by Idorenyin Udoh, a frontend engineer and technical writer.',
  ogDescription: 'technical articles written by Idorenyin Udoh, a frontend engineer and technical writer.',
  twitterDescription: 'technical articles written by Idorenyin Udoh, a frontend engineer and technical writer.',
  ogImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me/articles`,
})
</script>

<template>
  <main>
    <section>
      <BaseHeading position="right" heading="my articles" />
      <BaseUl>
        <BaseLi v-for="(article, index) in articles.reverse()" :key="index">
          <a :href="article.link" target="_blank">{{ article.title }}</a>
          <small>{{ article.date }} <span class="dot">·</span>
            <span :class="[ article.publication ]">
              <span v-if="article.publication === 'css-tricks'">CSS-Tricks</span>
              <span v-else-if="article.publication === 'medium'">Medium</span>
              <span v-else-if="article.publication === 'freecodecamp'">freeCodeCamp</span>
              <span v-else-if="article.publication === 'logrocket'">LogRocket's Blog</span>
            </span>
          </small>
        </BaseLi>
      </BaseUl>
    </section>
  </main>
</template>

<style scoped>
main {
  margin-top: calc(120px + 1vw);
}
ul {
  margin-top: 0;
  margin-bottom: 0;
}
li:not(:last-of-type) {
  margin-bottom: calc(40px + 1vw);
}
small {
  display: block;
  margin: 20px 0;
  font-size: 18px;
}
.dot {
  margin: 0 5px;
}
.logrocket {
  color: #764abc;
}
.css-tricks {
  background-image: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
  background-clip: text;
  color: transparent;
}
.freecodecamp {
  color: #0a0a23;
}
</style>
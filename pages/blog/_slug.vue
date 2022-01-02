<template lang="pug">
  .container
    .breadcrumb
      a(href="/") Home
      span.material-icons chevron_right
      a(href="/blog") Blog
      span.material-icons chevron_right
      span {{ article.title }}
    h1 {{ article.title }}
    .date-tag
      p {{ formatDate(article.date) }}
      span •
      a(v-for="tag in article.tags" :href="`/blog/tag/${tag}`") {{ tag }}
    nuxt-content(:document="article")
    .disqus
      disqus
    hr
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const article = await $content('articles', slug).fetch()
    
    return {
      article
    }
  },
  head() {
    return {
      title: `${this.article.title} | Idorenyin Udoh`,
      link: [
        {
          rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.description}`
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": this.article.title,
            "image": this.article.image,
            "datePublished": this.article.date,
            "author": [{
              "@type": "Person",
              "name": "Idorenyin Udoh"
            }]
          })
        }
      ]
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 150px calc(50px + 1vw);
  margin-bottom: 0;
}
.breadcrumb {
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  column-gap: 5px;
  align-items: center;
}
.date-tag {
  margin: 30px 0 60px 0;
  display: flex;
  column-gap: 10px;
  font-size: 20px;
}
.date-tag p {
  font-size: 20px;
}
.disqus {
  margin: calc(50px + 1vw) 0;
  padding: 0 calc(30px + 1vw);
}
hr {
  width: 100%;
  height: 2px;
  margin: 0;
  border: 0;
  background-color: #000;
}
</style>
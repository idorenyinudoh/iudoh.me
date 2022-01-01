<template lang="pug">
  section.container
    article(v-for="article in articles")
      h2: a(:href="`blog/${article.slug}`") {{ article.title }}
      p.date {{ formatDate(article.date) }}
      p.desc {{ article.description }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('date', 'desc')
      .only([
        'title',
        'slug',
        'description',
        'date'
      ])
      .limit(5)
      .fetch()
    
    return {
      articles
    }
  },
  head: {
    title: 'iudoh\'s blog',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Idorenyin Udoh\'s Blog'
      }
    ]
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
h2 {
  margin: 20px 0;
  font-size: 32px;
}
.date {
  font-size: 16px;
}
.desc {
  margin: 20px 0;
}
article:not(:last-of-type) {
  margin-bottom: calc(50px + 1vw);
}
</style>
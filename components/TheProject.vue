<script setup lang="ts">
const route = useRoute()

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
  summary: {
    required: true,
    type: String,
  },
  screenshot1src: {
    required: true,
    type: String,
  },
  alt1: {
    required: true,
    type: String,
  },
  purposes: {
    required: true,
    type: Array,
  },
  screenshot2src: {
    required: true,
    type: String,
  },
  alt2: {
    required: true,
    type: String,
  },
  stacks: {
    required: true,
    type: Array,
  },
  challenges: {
    required: true,
    type: Array,
  },
  screenshot3src: {
    required: true,
    type: String,
  },
  alt3: {
    required: true,
    type: String,
  },
  screenshot4src: {
    required: true,
    type: String,
  },
  alt4: {
    required: true,
    type: String,
  },
  lessons: {
    required: true,
    type: Array,
  },
  repo: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
})

useSeoMeta({
  title: `${props.name} | Idorenyin Udoh`,
  ogTitle: `${props.name} | Idorenyin Udoh`,
  twitterTitle: `${props.name} | Idorenyin Udoh`,
  description: `${props.name} - a project built by Idorenyin Udoh`,
  ogDescription: `${props.name} - a project built by Idorenyin Udoh`,
  twitterDescription: `${props.name} - a project built by Idorenyin Udoh`,
  ogImage: props.screenshot1src,
  twitterImage: props.screenshot1src,
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me${route.path}`,
})
</script>

<template>
  <div>
    <header>
      <h1>{{ name }}</h1>
      <p>{{ summary }}</p>
      <div class="container">
        <BaseImage :src="screenshot1src" :alt="alt1" />
      </div>
    </header>
    <main>
      <section>
        <BaseHeading position="left" heading="project purpose" />
        <p v-for="(purpose, index) in purposes" :key="index" v-html="purpose" />
      </section>
      <section>
        <BaseHeading position="right" heading="tech stack" />
        <div class="container">
          <BaseImage :src="screenshot2src" :alt="alt2" />
        </div>
        <div>
          <p v-for="(stack, index) in stacks" :key="index" v-html="stack" />
        </div>
      </section>
      <section>
        <BaseHeading position="left" heading="challenges" />
        <div>
          <p v-for="(challenge, index) in challenges" :key="index" v-html="challenge" />
        </div>
        <div class="container">
          <BaseImage :src="screenshot3src" :alt="alt3" />
        </div>
      </section>
      <section>
        <BaseHeading position="right" heading="lessons" />
        <div class="container">
          <BaseImage :src="screenshot4src" :alt="alt4" />
        </div>
        <div>
          <p v-for="(lesson, index) in lessons" :key="index" v-html="lesson" />
        </div>
      </section>
      <section>
        <BaseHeading position="left" heading="check it out" />
        <p><a :href="repo" target="_blank">codebase repository</a></p>
        <p><a :href="url" target="_blank">live</a></p>
      </section>
    </main>
  </div>
</template>

<style scoped>
@media screen and (max-width: 664px) {
  header .container {
    margin: calc(25px + 1vw) auto;
  }
  section .container {
    margin: calc(5px + 1vw) auto;
  }
}

@media screen and (min-width: 665px) {
  header .container {
    margin: calc(35px + 1vw) auto;
  }
}

@media screen and (min-width: 665px) and (max-width: 768px) {
  section .container {
    margin: calc(15px + 1vw) auto;
  }
}

@media screen and (max-width: 768px) {
  header {
    margin: 120px calc(20px + 1vw) 20px calc(20px + 1vw);
  }
  section:nth-child(3) p:last-child {
    margin-bottom: calc(30px + 1vw);
  }
  section:not(:first-child):not(:nth-child(3)) p:first-child {
    margin: calc(30px + 1vw) 0 calc(10px + 1vw) 0;
  }
}

@media screen and (min-width: 769px) {
  header {
    margin: 80px calc(20px + 1vw) 20px calc(20px + 1vw);
    padding: 80px 0;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  h1 {
    align-self: flex-end;
  }
  header p {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  header .container {
    grid-row: 1 / 3;
  }
  section:not(:first-child) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: calc(20px + 1vw);
    place-items: center;
  }
  section:last-child {
    grid-template-columns: max-content max-content;
    justify-content: center;
  }
  section:last-child p:not(:first-child) {
    margin-bottom: 0;
  }
}

header {
  display: grid;
}
h1 {
  margin: 0 0 20px 0;
  width: calc(90% - 40px);
  padding-bottom: 10px;
  border-bottom: 2px solid;
}
main {
  margin-top: calc(30px + 1vw);
  display: grid;
  row-gap: calc(90px + 1vw);
}
.container {
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  border: 2px solid #000;
}
section p:not(:last-child) {
  margin-bottom: calc(10px + 1vw);
}
</style>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGTag from 'vue-gtag'
import TheFooter from './components/TheFooter.vue'
import BaseHeading from './components/BaseHeading.vue'

const app = createApp(App)

app
.use(router)
.use(VueGTag, {
    config: {
        id: 'G-7HTEDCCE8L'
    }
})

app.component('the-footer', TheFooter)
app.component('base-heading', BaseHeading)

app.mount('body')
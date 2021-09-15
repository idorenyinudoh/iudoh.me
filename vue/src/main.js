import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGTag from 'vue-gtag'
import TheFooter from './components/TheFooter.vue'
import BaseHeading from './components/BaseHeading.vue'
import BaseImage from './components/BaseImage.vue'

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
app.component('base-image', BaseImage)

app.mount('body')
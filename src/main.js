import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGTag from 'vue-gtag'

createApp(App)
.use(router)
.use(VueGTag, {
    config: {
        id: 'G-7HTEDCCE8L'
    }
})
.mount('body')

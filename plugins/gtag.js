import Vue from 'vue'
import VueGtagPlugin from 'vue-gtag'

export default ({ app }) => {
    Vue.use(VueGtagPlugin, {
        config: {
            id: app.$config.googleAnalyticsId
        }
    })
}

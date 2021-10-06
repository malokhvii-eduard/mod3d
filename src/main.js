/* Vue */
import Vue from 'vue'

/* Polyfills */
import './polyfills'

/* Plugins */
import vuetify from './plugins/vuetify'
import './plugins/meta'

/* Assets */
import './assets/styles/app.scss'

/* App */
import App from './App'
import router from './router'
import store from './store'
import workbox from './register-service-worker'

Vue.prototype.$workbox = workbox
Vue.config.productionTip = false

new Vue({ router, store, vuetify, render: (h) => h(App) }).$mount('#app')

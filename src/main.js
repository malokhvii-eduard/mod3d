/* Vue */
import Vue from 'vue'

/* Plugins */
import vuetify from './plugins/vuetify'
import './plugins/lodash'
import './plugins/meta'

/* App */
import App from './App'
import router from './router'
import store from './store'

/* Assets */
import './assets/styles/app.scss'

/* Service worker */
import workbox from './register-sw'

Vue.prototype.$workbox = workbox
Vue.config.productionTip = false

new Vue({ router, store, vuetify, render: (h) => h(App) }).$mount('#app')

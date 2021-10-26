/* Vue */
import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { app } })

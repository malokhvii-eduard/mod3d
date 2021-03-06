/* Vue */
import Vue from 'vue'
import Vuex from 'vuex'

/* Modules */
import app from './modules/app'
import content from './modules/content'
import editor from './modules/editor'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { app, content, editor } })

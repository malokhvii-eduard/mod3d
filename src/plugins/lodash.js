/* Vue */
import Vue from 'vue'
import VueLodash from 'vue-lodash'

/* Lodash */
import sortBy from 'lodash/sortBy'

Vue.use(VueLodash, {
  lodash: { sortBy }
})

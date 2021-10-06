/* Lodash */
import find from 'lodash/find'

/* Content */
import models from '@/assets/content/models.json'

const state = () => ({ models })

const getters = {
  getModelBySlug(state) {
    return (slug) => {
      return find(state.models, (model) => model.slug === slug)
    }
  }
}

export default { namespaced: true, state, getters }

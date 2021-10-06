/* Content */
import models from '@/assets/content/models.json'

const state = () => ({ models })

const getters = {
  getModelBySlug(state) {
    return (slug) => {
      return state.models.find((model) => model.slug === slug)
    }
  }
}

export default { namespaced: true, state, getters }

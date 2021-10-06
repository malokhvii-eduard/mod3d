const state = () => ({ isBusy: false, isTextureSaving: false, texture: null })

const mutations = {
  SET_IS_BUSY(state, value) {
    state.isBusy = value
  },
  SET_IS_TEXTURE_SAVING(state, value) {
    state.isTextureSaving = value
  },
  SET_TEXTURE(state, value) {
    state.texture = value
  }
}

const actions = {
  saveTexture({ commit }, getTexture) {
    commit('SET_IS_TEXTURE_SAVING', true)

    setTimeout(() => {
      const texture = getTexture()
      commit('SET_TEXTURE', texture)
      commit('SET_IS_TEXTURE_SAVING', false)
    }, 500)
  }
}

export default { namespaced: true, state, mutations, actions }

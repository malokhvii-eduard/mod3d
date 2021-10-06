/* IndexedDB */
import localForage from 'localforage'

/* WebP detection */
import supportsWebp from 'supports-webp'

const state = () => ({ isDark: true, hasWebpSupport: null })

const mutations = {
  SET_IS_DARK(state, value) {
    state.isDark = value
  },
  SET_HAS_WEBP_SUPPORT(state, value) {
    state.hasWebpSupport = value
  }
}

const actions = {
  async restoreLastTheme({ commit }) {
    let isDark = await localForage.getItem('isDark')
    if (isDark === null) {
      isDark = true
      await localForage.setItem('isDark', isDark)
    }

    /* Default theme is `dark` */
    if (!isDark) {
      commit('SET_IS_DARK', isDark)
    }
  },
  async toggleTheme({ state, commit }) {
    commit('SET_IS_DARK', !state.isDark)
    await localForage.setItem('isDark', state.isDark)
  },
  async checkWebpSupport({ state, commit }) {
    if (state.hasWebpSupport == null) {
      supportsWebp.then((hasWebpSupport) => {
        commit('SET_HAS_WEBP_SUPPORT', hasWebpSupport)
      })
    }
  }
}

export default { namespaced: true, state, mutations, actions }

/* IndexedDB */
import localForage from 'localforage'

const state = () => ({ isDark: true })

const mutations = {
  SET_IS_DARK(state, value) {
    state.isDark = value
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
  }
}

export default { namespaced: true, state, mutations, actions }

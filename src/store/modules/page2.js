const state = {
  password: ''
}

const getters = {
  // getPage1State(state) {
  //   return state
  // }
  // getRootState(state, getters, rootState) {
  //   return rootState
  // }
}

const actions = {
  actionInsertPassword({ state, commit, rootState }, val) {
    commit('mutationInsertPassword', { val })
  }
}

const mutations = {
  mutationInsertPassword(state, { val }) {
    state.password = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

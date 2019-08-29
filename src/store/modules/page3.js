const state = {}

const getters = {
  // getPage1State(state) {
  //   return state
  // }
  // getRootState(state, getters, rootState) {
  //   return rootState
  // }
}

const actions = {
  change({ state, commit, rootState }) {
    commit('change')
  }
}

const mutations = {
  change(state) {
    this.state.page1.account = 'alice'
    this.state.page2.password = '321'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

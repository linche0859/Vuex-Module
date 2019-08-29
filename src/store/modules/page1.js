const state = {
  account: ''
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
  actionInsertAccount({ state, commit, rootState }, val) {
    // console.log(val)
    commit('mutationInsertAccount', { val })
  }
}

const mutations = {
  mutationInsertAccount(state, { val }) {
    // console.log(state)
    // console.log(val)
    state.account = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

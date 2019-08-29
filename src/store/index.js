import Vue from 'vue'
import Vuex from 'vuex'
// root
import * as getters from './getters.js'
// modules
import page1 from './modules/page1'
import page2 from './modules/Page2'
import page3 from './modules/Page3'

Vue.use(Vuex)

export default new Vuex.Store({
  // root
  // 會自動蒐集全部的state
  getters,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    page1,
    page2,
    page3
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
})

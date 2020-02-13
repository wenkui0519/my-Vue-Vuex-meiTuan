import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '福州',
    userName: ''

  },
  mutations: {
    setPosition (state, val) {
      this.state.position = val
    },
    setUserName (state, val) {
      this.state.userName = val
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      commit('setPosition', val)
    }
  },
  modules: {
  }
})

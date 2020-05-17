import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emailSalona:''
  },
  getters:{
    
  },
  mutations: {
    postaviemailSalona(state, status) {
      state.emailSalona = status;
    },
  },
  actions: {
  },
  modules: {
  }
})

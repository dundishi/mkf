import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
export default new vuex.Store({
  state: {
    count: 0
  },
  getters: {
      consoleCount: state => {
          console.log('the state count : ' + state.count);
      }
  },
  mutations: {
      
  }
})
import Vue from 'vue'
import Vuex from 'vuex'
import personal from './modules/personal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personal
  }

})

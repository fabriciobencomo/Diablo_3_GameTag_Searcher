import Vue from 'vue'
import Vuex from 'vuex'

import error from './modules/error'
import loading from './modules/loading'
import oauth from './modules/oauth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    loading,
    error
  }
})

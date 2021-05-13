import Vue from 'vue'
import Vuex from 'vuex'

import loader from './modules/loader'

Vue.use(Vuex)

const modules = {
  loader
}

const store = new Vuex.Store({ modules })

export const getStore = () => {
  return store
}

export default store

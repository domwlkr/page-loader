export default {
  namespaced: true,
  state: {
    loading: 0
  },
  actions: {
    LOADED: context => {
      context.commit('DEC_LOADING')
    },
    LOADING: context => {
      context.commit('INC_LOADING')
    },
    RESET: ({ commit }) => {
      commit('RESET')
    }
  },
  mutations: {
    INC_LOADING: state => {
      state.loading = state.loading + 1
    },
    DEC_LOADING: state => {
      state.loading = state.loading - 1
    },
    // You can call reset manually if needed
    RESET: state => {
      state.loading = 0
    }
  },
  getters: {
    loading: state => state.loading > 0
  }
}

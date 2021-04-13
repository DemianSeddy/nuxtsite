export const state = () => ({
  loading: false,
  error: false,
  message: null
})

export const mutations = {
  setLoading (state, payLoad) {
    state.loading = payLoad
  },
  setError (state, payLoad) {
    state.error = true
    state.message = payLoad
  },
  setMessage (state, payLoad) {
    state.error = false
    state.message = payLoad
  },
  clearMessage (state) {
    state.error = false
    state.message = null
  }
}

export const actions = {}

export const getters = {
  getLoading (state) {
    return state.loading
  },
  getError (state) {
    return state.error
  },
  getMessage (state) {
    return state.message
  }

}

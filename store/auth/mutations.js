export default {
  SET_CURRENT_USER (state, currentUserData) {
    state.currentUser = currentUserData
  },

  SET_DISABLED(state, disabled) {
    state.isDisabled = disabled
  },

  SET_TOKEN(state, data) {
    state.token = data
  },

  SET_LOADING(state, data) {
    state.loading = data
  },
}
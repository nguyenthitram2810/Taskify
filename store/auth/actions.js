export default {
  async login({ commit }, data ) {
    commit('SET_DISABLED', true)
    try {
      const response = await this.$axios.post('/auth/login', data)
      console.log("response", response);
      commit('SET_CURRENT_USER', response.data.user)
      commit('SET_TOKEN', response.data.token)
      localStorage.setItem('currentUser', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)
    }
    catch(err) {
      throw err;
    }
    finally {
      commit('SET_DISABLED', false)
    }
  },

  logOut({ commit }) {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('currentUser')
      commit('SET_CURRENT_USER', null)
      commit('SET_TOKEN', null)
    } catch (error) {
      throw error
    }
  }
}
import qs from "qs"

export default {
  async fetchListData({ commit }, data) {
    try {
      commit('SET_LOADING', true)
      const queryString = qs.stringify({ email: data.value }, {arrayFormat: 'repeat', encode: false})
      console.log(queryString);
      const response = await this.$axios.get(`/users?${queryString}`)
      console.log("USERS", response);
      commit('SET_USERS', response.data.data)
    } catch (err) {
      throw err
    }
    finally {
      commit('SET_LOADING', false)
    }
  }, 
}
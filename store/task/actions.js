import qs from "qs"

export default {
  async fetchListData({state, commit, rootState}) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.get(`/tasks`)
      console.log("task", response);
      commit('SET_TASK', response.data.data)
    } catch (err) {
      throw err
    }
    finally {
      commit('SET_LOADING', false)
    }
  }, 
}
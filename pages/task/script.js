import {
  mapState,
  mapActions
} from 'vuex'

export default {
  layout: 'task',
  async fetch() {
    this.fetchData()
  },
  data() {
    return {
      isModalCreateOpen: false,
      categories: [
        {
          name: "TODO",
          value: 'To Do',
          tasks: [],
        },
        {
          name: "IN_PROGRESS",
          value: 'In Progress',
          tasks: [],
        },
        {
          name: "DONE",
          value: 'Done',
          tasks: [],
        }
      ]
    }
  },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks
    })
  },

  watch: {
    tasks: function(newVal, oldVal) {
      this.categories = this.categories.map((cate) => {
        return {
          ...cate,
          tasks: [...this.tasks.filter((item) => item.status === cate.name)]
        }
      })
    }
  },
  methods: {
    ...mapActions('task', ['fetchListData']),
    handleError(err) {
      if(err.response) {
        this.$notification["error"]({
          message: 'ERROR',
          description:
            err.response.data.message
        });
      }
      else {
        this.$notification["error"]({
          message: 'ERROR',
          description:
            err.message
        });
      }
    },

    async fetchData() {
      try {
        await this.fetchListData()
      }
      catch(error) {
        this.handleError(error)
      }
    },

    async editTask(cate) {
      try {
        this.isModalCreateOpen = true
      } catch (error) {
        
      }
    },

    logOut() {
      try {
        this.$store.dispatch('auth/logOut')
        this.$router.push("/login")
      } catch (error) {
        this.$notification["error"]({
          message: 'ERROR',
          description:
            err.message
        });
      }
    }
  }
}
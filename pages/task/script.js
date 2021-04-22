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
      labelCol: { span: 7 },
      wrapperCol: { span: 14 },
      fetching: false,
      timeout: null,
      form: {
        name: "",
        userIds: [],
        description: "",
        status: "TODO"
      },
      rules: {
        name: [
          { required: true, message: 'Please input task name', trigger: 'blur' },
        ],
        description: [{ required: true, message: 'Please input task description', trigger: 'blur' }],
      },
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
    tasks: function() {
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

    async fetchUser(value) {
      try {
        await this.$store.dispatch('user/fetchListData', { value })
      }
      catch(error) {
        this.handleError(error)
      }
    },

    async editTask(cate) {
    },

    openCreateTaskModal(cate) {
      this.form.status = cate.value
      this.isModalCreateOpen = true
    },

    searchUser(value) {
      console.log(value);
      clearTimeout(this.timeout)
      this.timeout = setTimeout(async() => {
        this.fetchUser(value.trim())
      }, 1000); // 1 sec delay
    }, 

    handleChange(value) {
      console.log("value change", value);
      // Object.assign(this, {
      //   value,
      //   data: [],
      //   fetching: false,
      // });
      
    },

    logOut() {
      try {
        this.$store.dispatch('auth/logOut')
        this.$router.push("/login")
      } catch (error) {
        this.$notification["error"]({
          message: 'ERROR',
          description:
          error.message
        });
      }
    }
  }
}
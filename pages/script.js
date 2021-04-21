export default {
  methods: {
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

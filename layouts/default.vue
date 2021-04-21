<template>
  <div class="theme-layout">
    <nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from '~/components/v-layout/BaseFooter'

export default {
  name: 'DefaultLayout',
  middleware: 'updateState',
  components: {
    BaseFooter
  }
}
</script>
<style lang="scss" scoped>
</style>

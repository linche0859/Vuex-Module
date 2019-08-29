<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('page2')
export default {
  name: 'page2',
  data() {
    return {
      passwordVal: this.$store.getters.getPassword
    }
  },
  methods: {
    ...mapActions(['actionInsertPassword'])
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

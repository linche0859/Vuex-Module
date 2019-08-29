<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('page1')
export default {
  name: 'page1',
  data() {
    return {
      accountVal: this.$store.getters.getAccount
    }
  },
  methods: {
    ...mapActions(['actionInsertAccount'])
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

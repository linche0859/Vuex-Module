<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('page3')
export default {
  name: 'page3',
  computed: {
    account() {
      return this.$store.getters.getAccount
    },
    password() {
      return this.$store.getters.getPassword
    }
  },
  methods: {
    ...mapActions(['change']),
    show() {
      console.log(this)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>

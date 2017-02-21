<template>
  <div class="counter-wrapper">
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>

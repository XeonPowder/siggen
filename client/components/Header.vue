<template>
  <div class="header">
    <div id="homelink">
      <router-link to="/">
        <button style="width: 25%;">Home</button>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'v-header',
    data() {
      return {
        showName: false
      }
    }
  }
</script>
<style scoped>
  #homelink {
    margin: 40px auto;
    top: 0px;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .header {
    width: 100%;
    height: 100px;
  }
</style>
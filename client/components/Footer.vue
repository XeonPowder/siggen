<template>
  <div class="footer">
    <router-link to="/about">
      <button style="width: 25%;">About</button>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'v-footer'
  }
</script>
<style scoped>
  .footer {
    text-align: center;
    width: 100%;
    height: 100px;
    margin-top: 25vh;
  }
</style>
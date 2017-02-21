<template>
  <div class="create">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1909.37 295.75"><title>title</title><text transform="translate(0 219.5) scale(0.85 1)" style="font-size:256px;font-family:MVBoli, MV Boli">Signature Creation</text></svg>
    <signature></signature>
  </div>
</template>
<script>
  import Signature from '../components/Signature'
  export default {
    components: {
      'signature': Signature
    }
  }
</script>
<style scoped>
.create {
  text-align: center;
}
</style>
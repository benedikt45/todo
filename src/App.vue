<template>
<div id="app">
  <div class="wrapper">
    <Nav />
    <router-view />
  </div>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
.wrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>

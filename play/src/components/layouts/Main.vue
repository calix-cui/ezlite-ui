<template>
  <div class="layout-main-container flex-grow h-full">
    <div class="layout-main">
      <RouterView></RouterView>
    </div>

    <Footer></Footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Footer from './MainFooter.vue'

</script>

<style lang="scss" scoped>
.layout-main-container {
  flex-basis: 75%;
}

.layout-main {
  min-height: calc(100vh - 8.5rem);
}
</style>
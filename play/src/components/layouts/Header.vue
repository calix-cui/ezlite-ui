<template>
  <div class="layout-header flex items-center">
    <Logo />
    <a-divider class="mx-0 h-6" type="vertical" />
    <NavBar />
  </div>
</template>

<script setup>
import Logo from './HeaderLogo.vue'
import NavBar from './HeaderNavBar.vue'
</script>

<style lang="scss" scoped>
.layout-header {
  z-index: 100;
  position: sticky;
  top: 0;
  height: 4rem;

  background-color: #fff;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
}
</style>
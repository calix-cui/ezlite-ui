<template>
  <div class="layout">
    <div class="layout-vertical relative">
      <Header />

      <div class="flex mt-10">
        <SideBar />
        <Main />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Main from './Main.vue'
import SideBar from './SideBar.vue'

</script>


<style lang="scss" scoped>
.layout {
  height: 100%;

  scrollbar-width: thin;
  scrollbar-color: unset;

  &-vertical {
    height: 100%;
  }
}
</style>

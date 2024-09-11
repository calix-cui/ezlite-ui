<template>
  <div class="layout-sidebar" v-show="!currentRoute[0].includes('/home')">
    <a-menu v-model:selectedKeys="currentRoute" style="min-height: calc(100vh - 4rem - 40px);" mode="inline"
      :items="items" @click="onClickComponents"></a-menu>
  </div>
</template>

<script lang="ts" setup>
import type { ItemType, MenuProps } from 'ant-design-vue';
import { reactive, ref, VueElement, watch } from 'vue';

// router
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group',
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items_components: ItemType[] = [
  getItem('组件总览', '/components/overview'),
  getItem('通用', 'common', null, [
    getItem('Button 按钮', '/components/button'),
  ], 'group'),
  getItem('布局', 'layouts', null, [
    getItem('Space 间距', '/components/space'),
  ], 'group'),
  getItem('数据展示', 'display', null, [
    getItem('Calendar 日历', '/components/calendar'),
  ], 'group'),
  getItem('其他', 'other', null, [
    getItem('Watermark 水印', '/components/watermark'),
  ], 'group'),
]

const items_utils: ItemType[] = [
  getItem('HTTP', '/utils/http'),
  getItem('防抖节流', '/utils/throttle_debounce'),
]

// 初始高亮菜单
const currentRoute = ref<string[]>(['/home']);
// 侧面菜单数据
const items = ref<ItemType[]>([])

// 监听二级路由变化
watch(
  () => route.path,
  (newVal) => {
    currentRoute.value = [newVal]

    // 如果是主页，不再更新侧面菜单数据 items
    if (newVal.includes('/home')) return

    items.value = newVal.includes('/components') ? items_components : items_utils
  },
  { immediate: true } // 在组件挂载时立即执行一次
);

const onClickComponents: MenuProps['onClick'] = ({ key }) => {
  router.push(String(key))
}

</script>

<style lang="scss" scoped>
.layout-sidebar {
  flex-basis: 25%;

  z-index: 1;
  position: sticky;
  top: 104px;

  max-height: calc(100vh - 4rem - 40px);

  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: unset;
}
</style>

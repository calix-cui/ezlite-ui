<template>
  <div class="layout-navbar flex justify-end items-center px-3 h-full">
    <a-menu v-model:selectedKeys="currentRoute" mode="horizontal" :items="routeItems" @click="onClickRoute"
      style="border-bottom: none; line-height: 64px"></a-menu>

    <a-divider class="h-6" type="vertical" />

    <a-dropdown>
      <a class="ant-dropdown-link px-4" @click.prevent>
        <div class="flex items-center">
          <TranslationOutlined class="mr-1" />
          <DownOutlined />
        </div>
      </a>
      <template #overlay>
        <a-menu v-model:selectedKeys="currentLang" :items="langItems" @click="onClickLang">
        </a-menu>
      </template>
    </a-dropdown>

    <a-divider class="h-6" type="vertical" />

    <a class="px-4" target="_blank" href="https://github.com/calix-cui/cui-react-lib">
      <GithubOutlined />
    </a>

  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { h, ref } from 'vue';
import { TranslationOutlined, GithubOutlined, DownOutlined } from '@ant-design/icons-vue'
import type { MenuProps } from 'ant-design-vue';

// 路由
const router = useRouter()
const route = useRoute()

const routeItems = ref<MenuProps['items']>([
  {
    key: '/home',
    label: '主页',
    title: '主页',
  },
  {
    key: '/components',
    label: '组件',
    title: '组件',
  },
  {
    key: '/utils',
    label: '工具',
    title: '工具',
  },
])

const currentRoute = ref<string[]>([routeItems.value!.find(item => route.path.includes(String(item!.key)))?.key + '']);

const onClickRoute: MenuProps['onClick'] = ({ key }) => {
  router.push(String(key))
}

// 国际化
const currentLang = ref<string[]>([localStorage.getItem('lang') || 'zh']);

const langItems = [
  {
    label: '中文',
    key: 'zh',
  },
  {
    label: 'English',
    key: 'en',
  }
]

const onClickLang: MenuProps['onClick'] = ({ item, key, keyPath }) => {
}

</script>

<style lang="scss" scoped>
.layout-navbar {
  flex-basis: 75%;
}
</style>

<template>
  <div class="components-calendar">
    <!-- <a-button>Default</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="text">Text</a-button>
    <a-button type="link">Link</a-button>

    <div>danger</div>
    <a-button danger>Default</a-button>
    <a-button danger type="primary">Primary</a-button>
    <a-button danger type="dashed">Dashed</a-button>
    <a-button danger type="text">Text</a-button>
    <a-button danger type="link">Link</a-button>

    <div>ghost</div>
    <div style="background-color: gray;padding: 3px;">
      <a-button ghost>Default</a-button>
      <a-button ghost type="primary">Primary</a-button>
      <a-button ghost type="dashed">Dashed</a-button>
    </div>

    <div>danger ghost</div>
    <div style="background-color: gray;padding: 3px;">
      <a-button danger ghost>Default</a-button>
      <a-button danger ghost type="primary">Primary</a-button>
      <a-button danger ghost type="dashed">Dashed</a-button>
    </div>

    <a-divider></a-divider> -->

    <a-divider orientation="left">按钮类型 type</a-divider>
    <e-button class="mr-2">Default</e-button>
    <e-button class="mr-2" type="primary">Primary</e-button>
    <e-button class="mr-2" type="dashed">Dashed</e-button>
    <e-button class="mr-2" type="text">Text</e-button>
    <e-button type="link" href="" target="_blank">Link</e-button>

    <a-divider orientation="left">危险按钮 danger</a-divider>
    <e-button class="mr-2" danger>Default</e-button>
    <e-button class="mr-2" danger type="primary">Primary</e-button>
    <e-button class="mr-2" danger type="dashed">Dashed</e-button>
    <e-button class="mr-2" danger type="text">Text</e-button>
    <e-button class="mr-2" danger type="link" href="" target="_blank"
      >Link</e-button
    >

    <a-divider orientation="left">幽灵按钮 ghost</a-divider>
    <div style="background-color: #c0c8c8; padding: 10px">
      <e-button class="mr-2" ghost>Default</e-button>
      <e-button class="mr-2" ghost type="primary">Primary</e-button>
      <e-button class="mr-2" ghost type="dashed">Dashed</e-button>
      <e-button class="mr-2" ghost danger>Danger</e-button>
    </div>

    <a-divider orientation="left">不可用状态 disabled</a-divider>
    <e-button class="mr-2" disabled>Default(disabled)</e-button>
    <e-button class="mr-2" type="primary" disabled>Primary(disabled)</e-button>
    <e-button class="mr-2" type="dashed" disabled>Dashed(disabled)</e-button>
    <e-button class="mr-2" type="text" disabled>Text(disabled)</e-button>
    <e-button type="link" href="" target="_blank" disabled
      >Link(disabled)</e-button
    >

    <a-divider orientation="left">按钮形状 shape</a-divider>
    <e-button class="mr-2" type="primary">Default</e-button>
    <e-button class="mr-2" type="primary" shape="circle">Circle</e-button>
    <e-button class="mr-2" type="primary" shape="round">Round</e-button>

    <a-divider orientation="left">按钮尺寸 size</a-divider>
    <e-button class="mr-2" type="primary">Middle</e-button>
    <e-button class="mr-2" type="primary" size="large">Large</e-button>
    <e-button class="mr-2" type="primary" size="small">Small</e-button>

    <a-divider orientation="left">icon</a-divider>
    <e-button
      class="mr-2"
      type="primary"
      shape="circle"
      :icon="h(SearchOutlined)"
    ></e-button>
    <e-button class="mr-2" type="primary">
      <template #icon>
        <div class="flex items-center">
          <component class="mr-1" :is="h(SearchOutlined)"></component>
          Search
        </div>
      </template>
    </e-button>
  </div>
</template>

<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue'
import { h, ref } from 'vue'

const onClick_btn = (type: string) => {
  alert('clicked ' + type)
}
</script>

<style lang="scss" scoped></style>

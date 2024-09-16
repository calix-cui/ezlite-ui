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

    <a-divider orientation="left">按钮类型</a-divider>
    <e-button class="mr-2">Default</e-button>
    <e-button class="mr-2" type="primary">Primary</e-button>
    <e-button class="mr-2" type="dashed">Dashed</e-button>
    <e-button class="mr-2" type="text">Text</e-button>
    <e-button type="link">Link</e-button>

    <a-divider orientation="left">危险按钮</a-divider>
    <e-button class="mr-2" danger>Default</e-button>
    <e-button class="mr-2" danger type="primary">Primary</e-button>
    <e-button class="mr-2" danger type="dashed">Dashed</e-button>
    <e-button class="mr-2" danger type="text">Text</e-button>
    <e-button class="mr-2" danger type="link">Link</e-button>

    <a-divider orientation="left">幽灵按钮</a-divider>
    <div style="background-color: #c0c8c8;padding: 10px;">
      <e-button class="mr-2" ghost>Default</e-button>
      <e-button class="mr-2" ghost type="primary">Primary</e-button>
      <e-button class="mr-2" ghost type="dashed">Dashed</e-button>
      <e-button class="mr-2" ghost danger>Danger</e-button>
    </div>

    <!-- <div>danger ghost</div>
    <div style="background-color: gray;padding: 3px;">
      <e-button class="mr-2" danger ghost>Default</e-button>
      <e-button class="mr-2" danger ghost type="primary">Primary</e-button>
      <e-button class="mr-2" danger ghost type="dashed">Dashed</e-button>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue';
import { h, ref } from 'vue';


</script>

<style lang="scss" scoped></style>
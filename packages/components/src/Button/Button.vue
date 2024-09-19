<template>
  <button
    v-if="href === undefined"
    class="ezlite-btn"
    :class="[
      'ezlite-btn-' + type,
      'ezlite-btn-shape-' + shape,
      'ezlite-btn-size-' + size,
      {
        'ezlite-btn-dangerous': danger,
        'ezlite-btn-ghost': ghost,
        // 'ezlite-btn-icon-only':
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <template v-if="icon">
      <component :is="icon"></component>
    </template>
    <slot name="icon" v-else />

    <span>
      <slot />
    </span>
  </button>
  <a
    v-else
    class="ezlite-btn"
    :class="[
      'ezlite-btn-' + type,
      'ezlite-btn-size-' + size,
      {
        'ezlite-btn-dangerous': danger,
        'ezlite-btn-ghost': ghost,
      },
    ]"
    :disabled="disabled"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({
  name: 'EButton',
})

const emit = defineEmits(['click'])

type ButtonType = 'default' | 'primary' | 'dashed' | 'link' | 'text'
type ButtonShape = 'default' | 'circle' | 'round'
type Size = 'large' | 'middle' | 'small'

// vue3.5 之后，响应式 Props 解构，不需要再响应式处理
const { type, disabled, icon } = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  danger: Boolean,
  disabled: Boolean,
  ghost: Boolean,
  href: String,
  target: String,
  loading: {
    type: [Boolean, Object] as PropType<boolean | { delay: number }>,
    default: false,
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'default',
  },
  size: {
    type: String as PropType<Size>,
    default: 'middle',
  },
  icon: null,
})

const handleClick = (e: any) => {
  if (disabled) {
    e.preventDefault()
    return
  }
  emit('click')
}
</script>

<style lang="scss" scoped>
// 各类型 danger 样式
// .default.danger
.ezlite-btn-default.ezlite-btn-dangerous:not(:disabled) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

.ezlite-btn-default.ezlite-btn-dangerous:not(:disabled):hover {
  border-color: #ff7875;
  color: #ff7875;
}

.ezlite-btn-default.ezlite-btn-dangerous:not(:disabled):active {
  border-color: #d9363e;
  color: #d9363e;
}

// .primary.danger
.ezlite-btn-primary.ezlite-btn-dangerous:not(:disabled) {
  background-color: #ff4d4f;
}

.ezlite-btn-primary.ezlite-btn-dangerous:not(:disabled):hover {
  background-color: #ff7875;
}

.ezlite-btn-primary.ezlite-btn-dangerous:not(:disabled):active {
  background-color: #d9363e;
}

// .dashed.danger
.ezlite-btn-dashed.ezlite-btn-dangerous:not(:disabled) {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

.ezlite-btn-dashed.ezlite-btn-dangerous:not(:disabled):hover {
  border-color: #ff7875;
  color: #ff7875;
}

.ezlite-btn-dashed.ezlite-btn-dangerous:not(:disabled):active {
  border-color: #d9363e;
  color: #d9363e;
}

// .text.danger
.ezlite-btn-text.ezlite-btn-dangerous:not(:disabled) {
  color: #ff4d4f;
}

.ezlite-btn-text.ezlite-btn-dangerous:not(:disabled):hover {
  background-color: #fff2f0;
  color: #ff7875;
}

.ezlite-btn-text.ezlite-btn-dangerous:not(:disabled):active {
  background-color: #fff2f0;
  color: #d9363e;
}

// .link.danger
.ezlite-btn-link.ezlite-btn-dangerous:not(:disabled) {
  color: #ff4d4f;
}

.ezlite-btn-link.ezlite-btn-dangerous:not(:disabled):hover {
  color: #ff7875;
}

.ezlite-btn-link.ezlite-btn-dangerous:not(:disabled):active {
  color: #d9363e;
}

// 各类型 ghost 样式
// .default.ghost
.ezlite-btn-default.ezlite-btn-ghost {
  color: #fff;
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
}

// .primary.ghost
.ezlite-btn-primary.ezlite-btn-ghost {
  color: #1677ff;
  background-color: transparent;
  border-color: #1677ff;
}

.ezlite-btn-primary.ezlite-btn-ghost:not(:disabled):hover {
  color: #4096ff;
  background-color: transparent;
  border-color: #4096ff;
}

.ezlite-btn-primary.ezlite-btn-ghost:not(:disabled):active {
  color: #0958d9;
  background-color: transparent;
  border-color: #0958d9;
}

// .dashed.ghost
.ezlite-btn-dashed.ezlite-btn-ghost {
  color: #fff;
  background-color: transparent;
  border-color: #fff;
}

.ezlite-btn-dashed.ezlite-btn-ghost:not(:disabled):hover {
  color: #4096ff;
  background-color: transparent;
  border-color: #4096ff;
}

.ezlite-btn-dashed.ezlite-btn-ghost:not(:disabled):active {
  color: #0958d9;
  background-color: transparent;
  border-color: #0958d9;
}

// .default.danger.ghost
.ezlite-btn-default.ezlite-btn-dangerous.ezlite-btn-ghost {
  color: #ff4d4f;
  background-color: transparent;
  border-color: #ff4d4f;
  box-shadow: none;
}

.ezlite-btn-default.ezlite-btn-dangerous.ezlite-btn-ghost:not(:disabled):hover {
  background-color: transparent;
}

.ezlite-btn-default.ezlite-btn-dangerous.ezlite-btn-ghost:not(
    :disabled
  ):active {
  background-color: transparent;
}

// .primary.danger.ghost 同上
.ezlite-btn-primary.ezlite-btn-dangerous.ezlite-btn-ghost {
  color: #ff4d4f;
  background-color: transparent;
  border-color: #ff4d4f;
  box-shadow: none;
}

.ezlite-btn-primary.ezlite-btn-dangerous.ezlite-btn-ghost:not(:disabled):hover {
  background-color: transparent;
  color: #ff7875;
  border-color: #ff7875;
}

.ezlite-btn-primary.ezlite-btn-dangerous.ezlite-btn-ghost:not(
    :disabled
  ):active {
  background-color: transparent;
  color: #d9363e;
  border-color: #d9363e;
}

// .dashed.danger.ghost
.ezlite-btn-dashed.ezlite-btn-dangerous.ezlite-btn-ghost {
  color: #ff4d4f;
  background-color: transparent;
  border-color: #ff4d4f;
  box-shadow: none;
}

.ezlite-btn-dashed.ezlite-btn-dangerous.ezlite-btn-ghost:not(:disabled):hover {
  background-color: transparent;
  color: #ff7875;
  border-color: #ff7875;
}

.ezlite-btn-dashed.ezlite-btn-dangerous.ezlite-btn-ghost:not(:disabled):active {
  background-color: transparent;
  color: #d9363e;
  border-color: #d9363e;
}

// 按钮基础样式
.ezlite-btn {
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;

  border: 1px solid transparent;
  border-radius: 6px;

  background: transparent;
  color: rgba($color: #000000, $alpha: 0.8);

  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  white-space: nowrap;
  text-align: center;
}

.ezlite-btn:not(:disabled):focus-visible {
  outline: 2px solid #91caff;
  outline-offset: 1px;
  transition: outline-offset 0s, outline 0s;
}

// 形状 shape
.ezlite-btn-shape-circle {
  min-width: 32px;
  padding-inline-start: 0;
  padding-inline-end: 0;
  border-radius: 50%;
}
.ezlite-btn-shape-round {
  border-radius: 32px;
}

// 尺寸 size
.ezlite-btn-size-large {
  font-size: 16px;
  height: 40px;
  padding: 6px 15px;
  border-radius: 8px;
}
.ezlite-btn-size-small {
  font-size: 14px;
  height: 24px;
  padding: 0px 7px;
  border-radius: 4px;
}

// 各类型基础样式
// default dashed
.ezlite-btn-default,
.ezlite-btn-dashed {
  background: #fff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}

.ezlite-btn-default:hover,
.ezlite-btn-dashed:hover {
  border-color: #40a9ff;
  color: #40a9ff;
}

.ezlite-btn-default:active,
.ezlite-btn-dashed:active {
  border-color: #0958d9;
  color: #0958d9;
}

// primary
.ezlite-btn-primary {
  background-color: #1677ff;
  color: #fff;
}

.ezlite-btn-primary:hover {
  background-color: #40a9ff;
  color: #fff;
}

.ezlite-btn-primary:active {
  background-color: #0958d9;
}

// dashed 除了 border-style，其他同 default
.ezlite-btn-dashed {
  border-style: dashed;
}

// text
.ezlite-btn-text {
  background: transparent;
  border: none;
}

.ezlite-btn-text:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.ezlite-btn-text:active {
  background-color: rgba(0, 0, 0, 0.15);
}

// link
.ezlite-btn-link {
  background: transparent;
  border: none;
  color: #1677ff;
}

.ezlite-btn-link:hover {
  color: #69b1ff;
}

.ezlite-btn-link:active {
  color: #0958d9;
}

// 不可用状态 disabled
.ezlite-btn-default:disabled,
.ezlite-btn-primary:disabled,
.ezlite-btn-dashed:disabled {
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.25);
  border-color: #d9d9d9;
  box-shadow: none;
}

.ezlite-btn-text:disabled,
.ezlite-btn-link:disabled,
.ezlite-btn-link[disabled='true'] {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.25);
}

.ezlite-btn-text:disabled:hover {
  background-color: transparent;
}
</style>

<template>
  <button :type="props.htmlType" :class="btnClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['type', 'size', 'extraClasses', 'htmlType', 'disabled'])
const btnClass = computed(() => {
  const btnDefault = 'px-2 py-1 rounded border-2 disabled:cursor-not-allowed'
  const sizeVariations = {
    large: 'text-xl px-3 py-2',
    regular: '',
    small: 'text-xs px-1 py-0.5'
  }
  const btnType = {
    primary:
      'text-gray-50 bg-fuchsia-400 hover:bg-fuchsia-500 border-fuchsia-400 hover:border-fuchsia-500',
    secondary: ' border-gray-800'
  }
  return (
    btnDefault +
    ' ' +
    sizeVariations[props.size ? props.size : 'regular'] +
    ' ' +
    btnType[props.type ? props.type : 'primary'] +
    ' ' +
    props.extraClasses
  )
})
</script>

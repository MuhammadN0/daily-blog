<template>
  <button :class="btnClass">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['type', 'size', 'extraClasses'])
const btnClass = computed(() => {
  const btnDefault = 'px-2 py-1 rounded border-2'
  const sizeVariations = {
    large: '',
    regular: '',
    small: ''
  }
  const btnType = {
    primary: 'text-gray-50 bg-fuchsia-400 hover:bg-fuchsia-500 border-fuchsia-400 hover:border-fuchsia-500',
    secondary: ' border-gray-800 text-gray-800'
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

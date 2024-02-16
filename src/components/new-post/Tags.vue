<template>
  <div class="flex gap-2 flex-wrap items-center md:gap3">
    <span>Tags:</span>
    <span
      @click="removeTag(tag)"
      class="bg-gray-300 cursor-pointer text-sm flex items-center rounded-full px-2"
      v-for="tag in props.tags"
      :key="tag"
      >{{ tag }}</span
    >
    <p v-if="props.error" class="text-xs md:text-base text-red-700 mt-1">
      {{ props.error }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['tags', 'error', 'removeTag'])
</script>

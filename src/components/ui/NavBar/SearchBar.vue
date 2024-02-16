<template>
  <form @submit.prevent="handleSubmit" class="relative">
    <v-icon
      v-if="!searchQuery.length"
      name="bi-search"
      class="absolute top-2/4 left-2 translate-y-[-50%] text-gray-400"
    />
    <input
      placeholder="Search"
      type="text"
      class="border-2 border-gray-800 rounded-full px-2 py-1 placeholder:px-5 placeholder:text-gray-400"
      v-model="searchQuery"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue'

function handleSubmit() {}
const searchQuery = ref('')
</script>

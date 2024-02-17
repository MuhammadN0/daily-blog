<template>
  <div class="flex items-center gap-1">
    <div class="hidden md:flex gap-2">
      <RouterLink
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
        :to="{ name: 'home' }"
      >
        <v-icon name="fa-home" />
      </RouterLink>
      <RouterLink
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
        :to="{ name: 'home' }"
      >
        <v-icon name="md-person" />
      </RouterLink>
      <RouterLink
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
        :to="{ name: 'new-post' }"
      >
        <v-icon name="fa-pencil-alt" />
      </RouterLink>
    </div>
    <button
      class="action-link aspect-square border-2 border-gray-800 rounded-full p-1 flex items-center justify-center md:hidden"
      @click="isMenuOpen = !isMenuOpen"
    >
      <v-icon name="bi-three-dots-vertical" />
    </button>
    <div v-if="isMenuOpen" class="absolute bg-gray-50 border-2 border-gray-800 top-[80%] right-0 flex flex-col context-memu">
      <RouterLink
        class=" py-2 px-2 hover:bg-gray-300"
        :to="{ name: 'home' }"
        @click="isMenuOpen = false"
      >
        <v-icon name="fa-home" />
        Home
      </RouterLink>
      <RouterLink
        class=" py-2 px-2 hover:bg-gray-300 border-y"
        :to="{ name: 'home' }"
        @click="isMenuOpen = false"
      >
        <v-icon name="md-person" /> Account
      </RouterLink>
      <RouterLink
        class=" py-2 px-2 hover:bg-gray-300"
        :to="{ name: 'new-post' }"
        @click="isMenuOpen = false"
      >
        <v-icon name="fa-pencil-alt" /> New Article
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

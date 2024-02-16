<template>
  <NavBar />
  <main class="px-4 min-h-dvh">
    <RouterView />
  </main>
</template>

<script setup>
import NavBar from '@/components/ui/NavBar/NavBar.vue'
</script>

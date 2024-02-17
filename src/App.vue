<template>
  <NavBar />
  <main class="px-4 pt-14  md:px-28">
    <RouterView />
  </main>
</template>

<script setup>
import NavBar from '@/components/ui/NavBar/NavBar.vue'
</script>

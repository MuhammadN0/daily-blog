<template>
  <div class="fixed w-full top-0 left-0 z-10">
    <nav class="flex items-center justify-between border-b-2 border-gray-800 px-6 py-4 md:px-28 relative bg-gray-50">
      <Logo />
      <SearchBar />
      <NavActions />
    </nav>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
import NavActions from './NavActions.vue'
import SearchBar from './SearchBar.vue'
</script>

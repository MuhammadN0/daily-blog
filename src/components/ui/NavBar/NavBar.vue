<template>
  <nav class="flex items-center justify-between border-b-2 border-gray-800 px-4 py-4 md:px-28 relative">
    <Logo />
    <SearchBar />
    <NavActions />
  </nav>
</template>

<script setup>
import Logo from './Logo.vue'
import NavActions from './NavActions.vue'
import SearchBar from './SearchBar.vue'
</script>

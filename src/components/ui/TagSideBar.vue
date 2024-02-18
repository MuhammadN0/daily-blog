<template>
  <aside class="md:col-span-1 py-10 border-r-2 border-gray-800">
    <ul class="flex flex-col gap-4">
      <li>
        <RouterLink
          class="hover:underline font-sans text-4xl"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.name === 'home' }"
          >All</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="hover:underline font-sans"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.params.searchQuery === 'awards' }"
          >Awards</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="hover:underline font-sans"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.params.searchQuery === 'how-to' }"
          >How-to</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="hover:underline font-sans"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.params.searchQuery === 'tech' }"
          >Tech</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="hover:underline font-sans"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.params.searchQuery === 'case-study' }"
          >Case study</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="hover:underline font-sans"
          :to="{ name: 'home' }"
          :class="{ ' underline ': route.params.searchQuery === 'case' }"
          >Case</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <NavBar />
  <main
    class="px-6 pt-16"
    :class="{
      'md:px-28': !viewSideBarsCondition,
      'md:grid-cols-12 md:grid': viewSideBarsCondition
    }"
  >
    <TagSideBar v-if="viewSideBarsCondition" />
    <div class="md:col-span-8">
      <RouterView />
    </div>
    <TrendingSideBar v-if="viewSideBarsCondition" />
  </main>
  <footer class="bg-gray-800 text-gray-50 py-32">
    Footer
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/ui/NavBar/NavBar.vue'
import TagSideBar from '@/components/ui/TagSideBar.vue'
import TrendingSideBar from '@/components/ui/TrendingSideBar.vue'
const route = useRoute()

const viewSideBarsCondition = computed(() => route.name === 'home' || route.name === 'post')
</script>

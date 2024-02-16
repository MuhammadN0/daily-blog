<template>
  <div class="flex items-center gap-1">
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
</template>

<script setup></script>

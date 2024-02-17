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
        :to="{ name: 'account' }"
        v-if="user?.uid?.length"
      >
        <v-icon name="md-person" />
      </RouterLink>
      <RouterLink
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
        :to="{ name: 'new-post' }"
        v-if="user?.uid?.length"
      >
        <v-icon name="fa-pencil-alt" />
      </RouterLink>
      <RouterLink
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
        :to="{ name: 'authentication' }"
        v-if="!user?.uid?.length"
      >
        <v-icon name="hi-login" />
      </RouterLink>
      <button
        @click="logout"
        v-if="user?.uid?.length"
        class="border-2 border-gray-800 rounded-full aspect-square flex items-center justify-center p-1 action-link overflow-hidden"
      >
        <v-icon name="md-logout-round" />
      </button>
    </div>
    <button
      class="action-link aspect-square border-2 border-gray-800 rounded-full p-1 flex items-center justify-center md:hidden"
      @click="isMenuOpen = !isMenuOpen"
    >
      <v-icon name="bi-three-dots-vertical" />
    </button>
    <div
      v-if="isMenuOpen"
      class="absolute bg-gray-50 border-2 border-gray-800 top-[80%] right-0 flex flex-col context-memu"
    >
      <RouterLink
        class="py-2 px-2 hover:bg-gray-300"
        :to="{ name: 'home' }"
        @click="isMenuOpen = false"
      >
        <v-icon name="fa-home" />
        Home
      </RouterLink>
      <RouterLink
        class="py-2 px-2 hover:bg-gray-300 border-y"
        :to="{ name: 'account' }"
        @click="isMenuOpen = false"
        v-if="user?.uid?.length"
      >
        <v-icon name="md-person" /> Account
      </RouterLink>
      <RouterLink
        class="py-2 px-2 hover:bg-gray-300 border-b"
        :to="{ name: 'new-post' }"
        @click="isMenuOpen = false"
        v-if="user?.uid?.length"
      >
        <v-icon name="fa-pencil-alt" /> New Article
      </RouterLink>
      <button class="py-2 px-2 flex gap-1 hover:bg-gray-300" @click="logout" v-if="user?.uid?.length"> 
        <v-icon name="md-logout-round" /> Logout
      </button>
      <RouterLink
        class="py-2 px-2 hover:bg-gray-300 border-t"
        :to="{ name: 'authentication' }"
        @click="isMenuOpen = false"
        v-if="!user?.uid?.length"
      >
        <v-icon name="hi-login" />
        Login/Register
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { logoutApi } from '@/api/authentication'
import useUser from '@/hooks/useUser'
const isMenuOpen = ref(false)
const { user } = useUser()
async function logout() {
  isMenuOpen.value = false;
  await logoutApi()
}
</script>

<template>
  <div class="py-14 text-center px-3">
    <h1 class="text-3xl font-semibold mb-2">Welcome to Daily Blog 😍</h1>
    <p>Please login to continue or register if you don't have an account 📑</p>
    <div class="mt-10 rounded-xl border-2 border-gray-800 text-left py-5 md:py-10 px-7 md:px-20">
      <h2 class="text-center text-xl font-bold mb-3">
        {{ state === 'login' ? 'Login 🚪' : 'Register 📄' }}
      </h2>
      <div class="flex items-center justify-center mb-5 md:mb-10">
        <div class="bg-gray-200 rounded-lg p-2">
          <button
            class="hover:bg-fuchsia-400 hover:text-gray-50 rounded-l px-2 py-1"
            :class="{ 'bg-fuchsia-400 text-gray-50': state === 'login' }"
            @click="state = 'login'"
          >
            Login
          </button>
          <button
            class="hover:bg-fuchsia-400 hover:text-gray-50 rounded-r px-2 py-1"
            :class="{ 'bg-fuchsia-400 text-gray-50': state === 'register' }"
            @click="state = 'register'"
          >
            Register
          </button>
        </div>
      </div>
      <LoginForm v-if="state === 'login'" />
      <RegisterForm v-else />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RegisterForm from '@/components/authentication/RegisterForm.vue'
import LoginForm from '@/components/authentication/LoginForm.vue'
const state = ref('login')
</script>

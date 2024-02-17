<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-1 mb-3 md:grid md:grid-cols-3 md:mb-6">
      <label for="email">Email address</label>
      <input
        type="email"
        placeholder="Please enter your email address"
        id="email"
        class="border-2 py-0.5 px-2 border-gray-800 rounded-full"
        :disabled="isLoading"
        v-model="email"
      />
      <p v-if="errors.email" class="text-red-700">{{ errors.email }}</p>
    </div>
    <div class="flex flex-col gap-1 mb-3 md:grid md:grid-cols-3 md:mb-6">
      <label for="password">Password</label>
      <input
        type="password"
        placeholder="Please enter your password"
        id="password"
        class="border-2 py-0.5 px-2 border-gray-800 rounded-full"
        :disabled="isLoading"
        v-model="password"
      />
      <p v-if="errors.password" class="text-red-700">{{ errors.password }}</p>
    </div>
    <div class="flex justify-end items-center gap-3">
      <AppButton html-type="reset" @click="errors = {}" type="secondary" :disabled="isLoading"
        >Cancel</AppButton
      >
      <AppButton type="primary" :disabled="isLoading">
        <template v-if="!isLoading">Submit</template>
        <v-icon name="pr-spinner" animation="spin" scale="1.5" v-else />
      </AppButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import intus from 'intus'
import { isRequired, isEmail } from 'intus/rules'
import { login } from '@/api/authentication'
import AppButton from '@/components/ui/AppButton.vue'
const isLoading = ref(false)
const errors = ref({})
const email = ref('')
const password = ref('')
async function handleSubmit() {
  isLoading.value = true
  errors.value = {}
  const validation = intus.validate(
    {
      email: email.value,
      password: password.value,
    },
    {
      email: [isRequired(), isEmail()],
      password: [isRequired()],
    },
  )
  if (!validation.passes()) {
    isLoading.value = false
    errors.value = validation.errors()
    return
  }
  await login({
    email: email.value,
    password: password.value,
  })
  isLoading.value = false
}
</script>

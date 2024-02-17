<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-1 mb-3 md:grid md:grid-cols-3 md:mb-6">
      <label for="name">Name</label>
      <input
        type="text"
        placeholder="Please enter your name"
        id="name"
        class="border-2 py-0.5 px-2 border-gray-800 rounded-full"
        :disabled="isLoading"
        v-model="name"
      />
      <p v-if="errors.name" class="text-red-700">{{ errors.name }}</p>
    </div>
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
    <div class="flex flex-col gap-1 mb-3 md:grid md:grid-cols-3 md:mb-6">
      <label for="confirm-password">Confirm your password</label>
      <input
        type="password"
        placeholder="Please enter your password again"
        id="confirm-password"
        class="border-2 py-0.5 px-2 border-gray-800 rounded-full"
        :disabled="isLoading"
        v-model="confirmPassword"
      />
      <p v-if="errors.confirmPassword" class="text-red-700">{{ errors.confirmPassword }}</p>
    </div>
    <div class="flex flex-col gap-1 mb-3 md:grid md:grid-cols-3 md:mb-6">
      <label for="image">Profile picture (optional)</label>
      <input
        type="file"
        id="image"
        class="file:rounded file:border-none file:bg-fuchsia-400 file:text-gray-50 file:px-2 file:py-1 file:hover:cursor-pointer"
        :disabled="isLoading"
        @input="handleImage"
      />
      <p v-if="errors.image" class="text-red-700">{{ errors.image }}</p>
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
import { isRequired, isSame, isEmail, isImage, isMin, isMax } from 'intus/rules'
import { register } from '@/api/authentication'
import AppButton from '@/components/ui/AppButton.vue'
const isLoading = ref(false)
const errors = ref({})
const name = ref('')
const email = ref('')
const image = ref(null)
const password = ref('')
const confirmPassword = ref('')
function handleImage(e) {
  image.value = e.target.files[0]
}
async function handleSubmit() {
  isLoading.value = true
  errors.value = {}
  const validation = intus.validate(
    {
      name: name.value,
      email: email.value,
      image: image.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    },
    {
      name: [isRequired()],
      email: [isRequired(), isEmail()],
      image: [isImage()],
      password: [isRequired(), isMin(8), isMax(20)],
      confirmPassword: [isRequired(), isSame('password')]
    },
    {
      'image.isImage': 'The file must be an image',
      'confirmPassword.isRequired': 'Password confirmation is required',
      'confirmPassword.isSame': "Passwords don't match"
    }
  )
  if (!validation.passes()) {
    isLoading.value = false
    errors.value = validation.errors()
    return
  }
  await register({
    email: email.value,
    password: password.value,
    image: image.value,
    name: name.value
  })
  isLoading.value = false
}
</script>

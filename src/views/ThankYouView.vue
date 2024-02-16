<template>
  <div class="flex justify-center text-center items-center flex-col h-dvh">
    <h1 class="text-3xl ">Thank you for submitting this article 🤟</h1>
    <p class="font-bold mb-3">Our moderators will review it soon and will be published if it meets our standards</p>
    <AppButton extra-classes="flex items-center gap-2" size="large" type="primary" @click.prevent="goHome">Go home <v-icon name="fa-home" scale="1.5" /></AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
function goHome(){
  router.push({name:'home'})
}
</script>

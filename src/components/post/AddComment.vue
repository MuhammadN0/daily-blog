<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col">
    <label for="comment-content">Add a comment</label>
    <textarea
      id="comment-content"
      class="mb-3 border-2 border-gray-800 rounded resize-none"
      v-model="content"
      :disabled="isLoading"
    ></textarea>
    <div class="flex justify-end items-center gap-3">
      <AppButton :disabled="isLoading" type="secondary" @click.prevent="content = ''"
        >Cancel</AppButton
      >
      <AppButton :disabled="isLoading">Submit</AppButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { addComment } from '@/api/comments'
import { useRoute } from 'vue-router'
const content = ref('')
const route = useRoute()
const isLoading = ref(false)
async function handleSubmit() {
  isLoading.value = true
  if (!content.value.trim().length) {
    isLoading.value = false
    return
  }
  await addComment({ content: content.value, postId: route.params.id })
  content.value = ''
  isLoading.value = false
}
</script>

<template>
  <div class="bg-slate-200 rounded px-2 py-4">
    <div class="flex items-center gap-3 mb-3">
      <div class="h-12 rounded-full aspect-square overflow-hidden flex items-center justify-center">
        <img :src="comment.photoURL" class="max-h-full" />
      </div>
      <p>{{ comment.displayName }}</p>
      <button
        @click="modalOpen = true"
        v-if="comment.uid === user?.uid"
        class="bg-red-700 text-red-50 rounded px-2 py-1"
      >
        Delete
      </button>
    </div>
    <div class="px-4">
      {{ comment.content }}
    </div>
    <Teleport to="body">
      <div
        @click.self="modalOpen = false"
        v-if="modalOpen"
        class="fixed w-full h-full top-0 left-0 z-40 flex items-center justify-center backdrop-blur-md"
      >
        <div class="bg-slate-50 rounded p-5 shadow-md">
          <h2 class="text-lg font-bold">Are you sure you want to delete this comment?</h2>
          <p class="text-slate-400 mb-4">This cannot be reversed</p>
          <div class="flex items-center justify-end gap-4">
            <AppButton @click="modalOpen = false" type="secondary">Cancel</AppButton>
            <AppButton
              @click="handleDelete"
              extra-classes="bg-red-700 hover:bg-red-900 border-red-700 hover:border-red-900"
              >
              <template v-if="!isLoading">Delete</template>
              <v-icon v-else name="pr-spinner" animation="spin"/>
              </AppButton
            >
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import useUser from '@/hooks/useUser'
import { ref } from 'vue'
import AppButton from '../ui/AppButton.vue'
import { deleteComment } from '@/api/comments'
import useGetComments from '@/hooks/useGetComments'
const { comment } = defineProps(['comment'])
const { user } = useUser()
const modalOpen = ref(false)
const { comments } = useGetComments()
const isLoading = ref(false)
async function handleDelete() {
  isLoading.value = true
  await deleteComment(comment.id)
  comments.value = comments.value.filter((comm) => comm.id !== comment.id)
  isLoading.value = false;
}
</script>

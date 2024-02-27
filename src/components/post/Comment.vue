<template>
  <div class="bg-slate-200 rounded px-2 py-4">
    <div class="flex items-center gap-3 mb-3">
      <div class="h-12 rounded-full aspect-square overflow-hidden flex items-center justify-center">
        <img :src="comment.photoURL" class="max-h-full" />
      </div>
      <p>{{ comment.displayName }}</p>
      <button @click="handleDelete" v-if="comment.uid === user.uid" class="bg-red-700 text-red-50 rounded px-2 py-1 ">Delete</button>
    </div>
    <div class="px-4">
      {{ comment.content }}
    </div>
  </div>
</template>

<script setup>
import useUser from '@/hooks/useUser';
const { comment } = defineProps(['comment'])
const {user} = useUser()
function handleDelete(){
  
}
</script>

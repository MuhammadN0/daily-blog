<template>
  <div v-if="isLoading" class="text-fuchsia-400 flex items-center justify-center py-32">
    <v-icon name="pr-spinner" animation="spin" scale="7" />
  </div>
  <PostContent v-if="post?.content"/>
  <div
    v-if="!post?.content && !isLoading"
    class="flex items-center justify-center text-center flex-col py-32"
  >
    <h2>Something went wrong ❌</h2>
    <p>
      Might be an invalid post id (check your url) or a problem with your internet connection. 🌐
    </p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useGetPost from '@/hooks/useGetPost'
import PostContent from '@/components/post/PostContent.vue'
const route = useRoute()
const { isLoading, post } = useGetPost(route.params.id)
</script>

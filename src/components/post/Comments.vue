<template>
  <div>
    <AddComment />
    <h2>Comments</h2>
    <div v-if="comments.length">
      <div v-for="comment in comments" :key="comment.id">{{ comment.content }}</div>
    </div>
    <div v-if="!isLoading && !comments.length">There're no comments at the moment.</div>
  </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import useGetComments from '@/hooks/useGetComments'
import AddComment from './AddComment.vue'
const route = useRoute()
const { isLoading, getComments, comments } = useGetComments(route.params.id)
async function handleScroll() {
  const { offsetHeight, scrollTop } = document.documentElement
  const { innerHeight } = window
  const bottomOfPage = Math.round(scrollTop) + innerHeight === offsetHeight
  if (bottomOfPage) {
    await getComments()
  }
}
getComments()
window.addEventListener('scroll', handleScroll)
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

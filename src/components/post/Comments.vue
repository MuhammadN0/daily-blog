<template>
  <div>
    <AddComment />
    <h2 class="mb-3">Comments</h2>
    <div v-if="comments.length" class="space-y-3">
      <Comment v-for="comment in comments" :comment="comment" :key="comment.id" />
    </div>
    <div v-if="!isLoading && !comments.length">There're no comments at the moment.</div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import useGetComments from '@/hooks/useGetComments'
import AddComment from './AddComment.vue'
import Comment from './Comment.vue'
const route = useRoute()
const { isLoading, getComments, comments } = useGetComments(route.params.id)
const bottomReached = ref(false)
async function handleScroll() {
  if (bottomReached.value) return
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const scrollPosition = window.scrollY || window.scrollY || document.documentElement.scrollTop
  const footerHeight = document.getElementById('footer').offsetTop
  const bottomOfViewport = scrollPosition + viewportHeight
  const bottomOfPage = bottomOfViewport >= footerHeight
  if (bottomOfPage) {
    bottomReached.value = true
    await getComments()
    bottomReached.value = false
  }
}
getComments()
window.addEventListener('scroll', handleScroll)
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

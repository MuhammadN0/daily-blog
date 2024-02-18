<template>
  <div>
    <h1>Comments</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useGetComments from '@/hooks/useGetComments';
import { onBeforeUnmount } from 'vue';
const route = useRoute()
const {isLoading,getComments,comments} = useGetComments(route.params.postId);
function handleScroll() {
  const { offsetHeight, scrollTop } = document.documentElement
  const { innerHeight } = window
  const bottomOfPage = Math.round(scrollTop) + innerHeight === offsetHeight
  if (bottomOfPage) {
    getComments()
  }
}
window.addEventListener('scroll',handleScroll);
onBeforeUnmount(() => window.removeEventListener('scroll',handleScroll))
</script>

<template>
  <div class="md:px-8 pb-10">

    <article class="py-10 flex flex-col">
      <h1 class="mb-5">{{ props?.post?.title }}</h1>
      <img :src="props?.post?.photoURL" class="self-center mb-5"/>
      <div v-html="props?.post?.content" v-if="post?.content"></div>
    </article>>
    <Comments/>
  </div>
</template>


<script setup>
import Comments from './Comments.vue'
  const props = defineProps(['post'])
</script>
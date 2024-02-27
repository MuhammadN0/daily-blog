<template>
  <div class="md:px-8 pb-10">
    <article class="py-10 flex flex-col">
      <h1 class="mb-2">{{ props?.post?.title }}</h1>
      <div class="flex items-center gap-1 mb-1">
        <div class="w-8">
          <img :src="props.post.authorImage" />
        </div>
        <div class="text-sm">
          {{ props.post.author }}
        </div>
      </div>
      <div class="text-sm text-slate-400 flex gap-2 items-center mb-5">
        <span>{{ format(props.post.createdAt.toDate(), 'dd MMM yyyy h:m aa') }}</span>
        <span class="h-1 w-1 rounded-full bg-slate-400 block"></span>
        <span>{{ Math.round(props.post.content.length / 1000) }} Min read</span>
        <span class="h-1 w-1 rounded-full bg-slate-400 block"></span>
        <span class="text-blue-400" v-for="tag in props.post.tags" :key="tag">{{ tag }}</span>
      </div>
      <img :src="props?.post?.photoURL" class="self-center mb-5" />
      <div v-html="props?.post?.content" v-if="post?.content"></div>
    </article>
    >
    <Comments />
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import Comments from './Comments.vue'
const props = defineProps(['post'])
</script>

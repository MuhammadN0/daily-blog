<template>
  <div class="md:px-8 pb-10">
    <article class="py-10 flex flex-col">
      <h1 class="mb-2">{{ post?.title }}</h1>
      <div class="flex justify-between">
        <div>
          <div class="flex items-center gap-1 mb-1">
            <div class="w-8">
              <img :src="post?.authorImage" />
            </div>
            <div class="text-sm">
              {{ post?.author }}
            </div>
          </div>
          <div class="text-sm text-slate-400 flex gap-2 items-center mb-5">
            <span>{{ format(post?.createdAt.toDate(), 'dd MMM yyyy h:m aa') }}</span>
            <span class="h-1 w-1 rounded-full bg-slate-400 block"></span>
            <span>{{ Math.round(post.content.length / 1000) }} Min read</span>
            <span class="h-1 w-1 rounded-full bg-slate-400 block"></span>
            <span class="text-blue-400" v-for="tag in post?.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="">
          <div class="font-bold">
            <span>💜</span><span>{{ post?.likes }}</span>
          </div>
          <button
            class="border-2 rounded px-2 py-1 border-slate-800"
            v-if="!post?.likedBy?.includes(user?.uid)"
            @click="handleLike"
          >
            Like 👍
          </button>
        </div>
      </div>
      <img :src="post?.photoURL" class="self-center mb-5" />
      <div v-html="post?.content" v-if="post?.content"></div>
    </article>
    <Comments />
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import Comments from './Comments.vue'
import { updatePost } from '@/api/posts'
import useGetPost from '@/hooks/useGetPost'
import { useRoute } from 'vue-router'
import useUser from '@/hooks/useUser'
const route = useRoute()
const { post } = useGetPost(route.params.id)
const { user } = useUser()
async function handleLike() {
  try {
    const newLikedBy = post.value.likedBy
      ? [...post.value.likedBy, user.value.uid]
      : [user.value.uid]
    const newLikes = post.value.likes + 1
    await updatePost({ postId: route.params.id, data: { likedBy: newLikedBy, likes: newLikes } })
    post.value.likes = newLikes
    post.value.likedBy = newLikedBy
  } catch (e) {
    console.error(e.message)
  }
}
</script>

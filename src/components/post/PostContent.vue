<template>
  <article class="py-10 flex flex-col px-8">
    <h1 class="mb-5">{{ props?.post?.title }}</h1>
    <img :src="props?.post?.photoURL" class="self-center mb-5"/>
    <div v-html="props?.post?.content" v-if="post?.content"></div>
    </article>>
</template>


<script setup>
  const props = defineProps(['post'])
</script>
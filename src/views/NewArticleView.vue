<template>
  <div>
    <h1 class="text-3xl pt-5 mb-5">Add a new post</h1>
    <form @submit.prevent="handleSubmit">
      <!-- Title -->
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5">
        <label for="title">Post title</label>
        <input
          class="px-2 py-0.5 rounded-full border border-gray-800"
          placeholder="Add a title"
          type="text"
          id="title"
          v-model="title"
          :disabled="isLoading"
        />
        <p class="text-xs text-red-700" v-if="errors.title">{{ errors.title }}</p>
      </div>
      <!-- Image -->
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5">
        <label for="image">Post image</label>
        <input
          id="image"
          type="file"
          class="file:bg-fuchsia-400 file:border-none file:text-gray-50 file:rounded file:py-1"
          @input="handleImage"
          :disabled="isLoading"
        />
        <p class="text-xs text-red-700" v-if="errors.image">{{ errors.image }}</p>
      </div>
      <!-- Body -->
      <div class="mb-3">
        <label class="mb-3">Body</label>
        <QuillEditor contentType="html" v-model:content="content" :toolbar="toolbarOptions" />
        <p v-if="errors.content" class="text-xs text-red-700 mt-1">{{ errors.content }}</p>
      </div>
      <!-- Tags -->
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5">
        <label for="tags">Add tags</label>
        <input
          v-model="tag"
          @keydown.space.prevent="addTag"
          type="text"
          id="tags"
          class="px-2 placeholder:text-xs py-0.5 rounded-full border border-gray-800"
          placeholder="Press space to add"
          :disabled="isLoading"
        />
      </div>
      <!-- Tags show -->
      <div class="flex gap-2 flex-wrap">
        Tags:
        <span class="bg-gray-300 rounded-full px-2" v-for="ttag in tags" :key="ttag">{{
          ttag
        }}</span>
        <p v-if="errors.content" class="text-xs text-red-700 mt-1">{{ errors.tags }}</p>
      </div>
      <!-- Submission -->
      <div class="flex items-center justify-end gap-3 mt-5">
        <AppButton @click="resetContent()" :disabled="isLoading" htmlType="reset" type="secondary"
          >Cancel</AppButton
        >
        <AppButton htmlType="submit" type="primary" :disabled="isLoading">
          <template v-if="!isLoading"> Submit </template>
          <v-icon name="pr-spinner" animation="spin" scale="1.5" v-else />
        </AppButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { toolbarOptions } from '@/helpers/constants'
import intus from 'intus'
import { isRequired, isImage, isNotIn } from 'intus/rules'
import { addNewPost } from '@/api/posts'
import AppButton from '@/components/ui/AppButton.vue'
const content = ref('')
const title = ref('')
const image = ref(null)
const tags = ref([])
const tag = ref('')
const errors = ref({})
const isLoading = ref(false)
const router = useRouter();
function resetContent() {
  content.value = '<p></p>'
  errors.value = {}
  tags.value = []
  tag.value = ''
}
function handleImage(e) {
  image.value = e.target.files[0]
}
function addTag(e) {
  tags.value.push(tag.value)
  tag.value = ''
}
async function handleSubmit() {
  errors.value = {}
  isLoading.value = true
  const validation = intus.validate(
    {
      title: title.value,
      content: content.value,
      image: image.value,
      tags: tags.value
    },
    {
      title: [isRequired()],
      content: [isRequired(), isNotIn(['<p></p>'])],
      image: [isRequired(), isImage()]
    },
    {
      'title.isRequired': 'A title is required',
      'content.isRequired': 'You must write something',
      'image.isRequired': 'An image is required',
      'image.isImage': 'File must be an image'
    }
  )
  if (!validation.passes() || !tags.value.length) {
    errors.value = validation.errors()
    if (!tags.value.length) errors.value.tags = 'You need at least one tag'
    isLoading.value = false
    return
  }

  await addNewPost({
    title: title.value,
    image: image.value,
    content: content.value,
    tags: tags.value
  })
  isLoading.value = false
  router.push({name:'thank-you'})
}
</script>

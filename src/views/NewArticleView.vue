<template>
  <div class="pb-12">
    <h1 class="text-3xl pt-10 mb-5">Add a new post</h1>
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5 md:gap-4">
        <label for="title">Post title</label>
        <input
          class="px-2 py-0.5 rounded-full border border-gray-800"
          placeholder="Add a title"
          type="text"
          id="title"
          v-model="title"
          :disabled="isLoading"
        />
        <p class="text-xs text-red-700 md:text-base" v-if="errors.title">{{ errors.title }}</p>
      </div>
      <!-- Image -->
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5 md:gap-4">
        <label for="image">Post image</label>
        <input
          id="image"
          type="file"
          class="file:bg-fuchsia-400 file:cursor-pointer file:border-none file:text-gray-50 file:rounded file:py-1"
          @input="handleImage"
          :disabled="isLoading"
        />
        <p class="text-xs text-red-700 md:text-base" v-if="errors.image">{{ errors.image }}</p>
      </div>
      <!-- Body -->
      <div class="mb-3">
        <label class="mb-3">Body</label>
        <QuillEditor
          contentType="html"
          :placeholder="'Add your body here'"
          v-model:content="content"
          :toolbar="toolbarOptions"
        />
        <p v-if="errors.content" class="text-xs md:text-base text-red-700 mt-1">
          {{ errors.content }}
        </p>
      </div>
      <!-- Tags -->
      <div class="grid grid-cols-3 mb-2 items-center gap-0.5">
        <label for="tags">Add tags</label>
        <input
          @keydown.space.prevent="addTag"
          v-model="tag"
          type="text"
          id="tags"
          class="px-2 placeholder:text-xs py-0.5 rounded-full border border-gray-800"
          placeholder="Press space to add"
          :disabled="isLoading"
        />
      </div>
      <Tags :tags="tags" :error="errors.tags" :removeTag="removeTag" />
      <Submission :isLoading="isLoading" :resetContent="resetContent" />
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import { toolbarOptions } from '@/helpers/constants'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import intus from 'intus'
import { isRequired, isImage, isNotIn } from 'intus/rules'
import { addNewPost } from '@/api/posts'
import Submission from '@/components/new-post/Submission.vue'
import Tags from '@/components/new-post/Tags.vue'
const content = ref('')
const title = ref('')
const image = ref(null)
const tags = ref([])
const tag = ref('')
const errors = ref({})
const isLoading = ref(false)
const router = useRouter()
function resetContent() {
  content.value = '<p></p>'
  errors.value = {}
  tags.value = []
}
function handleImage(e) {
  image.value = e.target.files[0]
}
function addTag() {
  if (tags.value.includes(tag.value) || !tag.value.length) return
  tags.value.push(tag.value)
  tag.value = ''
}
function removeTag(removedTag) {
  tags.value = tags.value.filter((_tag) => _tag !== removedTag)
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
  router.push({ name: 'thank-you' })
}
</script>

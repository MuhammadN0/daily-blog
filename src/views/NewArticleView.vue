<template>
  <div>
    <h1 class="text-3xl pt-3 mb-5">Add a new post</h1>
    <form>
      <div class="grid grid-cols-3 mb-2">
        <label for="title">Post title</label>
        <input
          class="px-2 rounded-full border border-gray-800"
          placeholder="Add a title"
          type="text"
          id="title"
        />
      </div>
      <div class="grid grid-cols-3 mb-2">
        <label for="image">Post image</label>
        <input id="image" type="file" />
      </div>
      <div>
        <label>Body</label>
        <QuillEditor :toolbar="toolbarOptions" />
      </div>
      <div class="flex items-center justify-end gap-3 mt-5">
        <AppButton type="secondary">Cancel</AppButton>
        <AppButton type="primary">Submit</AppButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { toolbarOptions } from '@/helpers/constants'
</script>

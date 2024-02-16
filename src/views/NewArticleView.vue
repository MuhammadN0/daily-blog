<template>
  <div>
    <h1>Add a new post</h1>
    <form>
      <div>
        <label for="title">Title of the post</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label for="image">Upload an image for the post</label>
        <input id="image" type="file" />
      </div>
      <div>
        <QuillEditor :toolbar="toolbarOptions" />
      </div>
    </form>
  </div>
</template>


<script setup>
  import {QuillEditor} from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  import {toolbarOptions} from '@/helpers/constants'

</script>
<template>
  <aside class="md:col-span-3 hidden md:block py-10 border-l-2 border-gray-800 pl-4 ">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span>Trending</span>
        <span class="special-blob bg-green-400"></span>
      </div>
      <AppButton size="small" @click="console.log('hllo')">View all</AppButton>
    </div>
    <div class="border-b-2 border-gray-800 pb-3">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-2xl font-semibold mb-3 block hover:underline pt-4"
        >Understanding the role of AI in software development</RouterLink
      >
      <div class="text-sm text-gray-400 flex gap-3">
        <span>9:00AM</span>
        <span>12 min read</span>
      </div>
    </div>
    <div class="border-b-2 border-gray-800 pb-3">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-2xl font-semibold mb-3 block hover:underline pt-4"
        >Maximizing business effeiency: why you need to know about the software development procces
      </RouterLink>
      <div class="text-sm text-gray-400 flex gap-3">
        <span>9:00AM</span>
        <span>12 min read</span>
      </div>
    </div>
    <div class="border-gray-800 pb-3">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-2xl font-semibold mb-3 block hover:underline pt-4"
        >Understanding the role of AI in software development</RouterLink
      >
      <div class="text-sm text-gray-400 flex gap-3">
        <span>9:00AM</span>
        <span>12 min read</span>
      </div>
    </div>
    <div>
      <h3 class="font-bold mb-3">Our authors</h3>
      <div class="flex gap-3 text-[11px] font-bold text-center mb-6">
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center justify-center w-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b"
              class="max-w-full"
            />
          </div>
          <p>Muhammad Noor</p>
          <span class="text-gray-500">CEO</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center justify-center w-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b"
              class="max-w-full"
            />
          </div>
          <p>Muhammad Noor</p>
          <span class="text-gray-500">CEO</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center justify-center w-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b"
              class="max-w-full"
            />
          </div>
          <p>Muhammad Noor</p>
          <span class="text-gray-500">CEO</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="flex items-center justify-center w-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b"
              class="max-w-full"
            />
          </div>
          <p>Muhammad Noor</p>
          <span class="text-gray-500">CEO</span>
        </div>
      </div>
    </div>
    <a
      href="https://www.linkedin.com/in/muhammadn0/"
      target="_blank"
      class="bg-gray-900 block text-center py-44 relative text-gray-50 text-4xl hover:underline overflow-hidden"
    >
      Learn More
      <div class="absolute w-14 aspect-square rounded-full bg-white -top-7 -left-7"></div>
      <div class="absolute w-14 aspect-square rounded-full bg-white -top-7 -right-7"></div>
      <div class="absolute w-14 aspect-square rounded-full bg-white -bottom-7 -left-7"></div>
      <div class="absolute w-14 aspect-square rounded-full bg-white -bottom-7 -right-7"></div>
    </a>
  </aside>
</template>

<script setup>
import AppButton from './AppButton.vue'
</script>

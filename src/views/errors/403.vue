<template>
  <div class="bg-gradient-to-r from-purple-300 to-blue-200">
    <div class="w-ful py-16 min-h-screen flex items-center justify-center">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8 px28">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-9xl font-bold text-purple-400">403</h1>
          <h1 class="text-6xl font-medium py-8">你访问的页面不存在</h1>
          <router-link
            to="/"
            class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-fuchsia-600 py-2 px-3 rounded-md"
            >首页</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

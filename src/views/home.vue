<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/bg.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <router-link :to="{ name: 'admin.home' }" class="lw-button">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="lw-button lw-danger ml-3">用户登录</router-link>
    </div>
    <div class="text-gray-300 text-sm font-mono drop-shadow-md mt-6">不积硅步无以至千里，不积小流无以成江海</div>
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: { name: 'home' }
}
</script>

<style scoped></style>

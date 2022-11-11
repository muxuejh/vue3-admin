<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800 p-4">
      <div class="logo text-gray-300 flex items-center">
        <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
        <span class="text-md">后台管理系统</span>
      </div>
      <!-- 菜单 -->
      <Menu />
    </div>
    <div class="content flex-1 bg-gray-200">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/menu.vue'
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>

<style scoped lang="scss"></style>

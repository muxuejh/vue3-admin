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
    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="m-3 p-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HistoryLink from './admin/historyLink.vue'
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  components: { Navbar, HistoryLink }
}
</script>

<style scoped lang="scss"></style>

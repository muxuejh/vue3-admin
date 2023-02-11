<template>
  <div class="admin min-h-screen w-screen flex">
    <Menu class="hidden md:block" />
    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuStore from '../store/menuStore'
import HistoryLink from './admin/historyLink.vue'
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'

menuStore().init()
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  components: { Navbar, HistoryLink }
}
</script>

<style scoped lang="scss"></style>

<template>
  <div class="admin h-screen w-screen grid grid-cols-[auto_1fr]">
    <Menu class="hidden md:block" />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <Navbar />
        <HistoryLink />
      </div>

      <div class="p-3 relative overflow-y-auto">
        <router-view #default="{ Component }">
          <Transition
            appear
            class="animate__animated"
            enter-active-class="animate__fadeInRight"
            leave-active-class="animate__fadeOutLeft"
          >
            <component :is="Component" class="absolute w-full" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuStore from '../store/menuStore'
import HistoryLink from './admin/historyLink.vue'
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
const menu = menuStore()
menu.init()

onBeforeRouteUpdate(() => {
  menu.addHistoryMenu(route)
})
</script>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  components: { Navbar, HistoryLink }
}
</script>

<style scoped lang="scss">
.animate__fadeInRight {
  animation-duration: 1s;
}
.animate__fadeOutLeft {
  animation-duration: 1s;
}
</style>

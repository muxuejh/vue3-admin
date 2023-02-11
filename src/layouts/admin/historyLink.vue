<template>
  <div class="hidden md:block p-3 border-t border-b bg-gray-50 shadow-sm" v-show="historyMenu.length">
    <div class="grid grid-flow-col gap-3 justify-start">
      <div
        href="#"
        v-for="item of historyMenu"
        class="border hover:bg-violet-600 hover:text-white duration-300 bg-white rounded-sm shadow-sm py-2 px-3 text-sm"
        :class="{ 'bg-violet-600 text-white': $route.name === item.route }"
      >
        <RouterLink :to="{ name: item.route }"> {{ item.title }}</RouterLink>
        <i class="fas fa-times ml-1 hover:text-red-600 cursor-pointer" @click="menus.removeHistoryMenu(item)"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import menuStore from '../../store/menuStore'

/* const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' }
]) */

const menus = menuStore()
const historyMenu = menus.historyMenu
</script>

<style scoped></style>

<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">后台管理系统</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) in menu.menus" :key="index">
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fa-sharp fa-solid fa-chevron-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
          </section>
        </dt>
        <dd
          v-for="(cMenu, index) in menu.children"
          :key="index"
          v-show="menu.isClick"
          :class="{ active: cMenu.isClick }"
          @click="handle(menu, cMenu)"
        >
          {{ cMenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMenu } from '../../../types/menu'
import router from '../../router'
import menuStore from '../../store/menuStore'

const menu = menuStore()

const reset = () => {
  menu.menus.forEach(menu => {
    menu.isClick = false
    menu.children.forEach(cMenu => {
      cMenu.isClick = false
    })
  })
}

const handle = (pMenu: IMenu, cMenu?: IMenu) => {
  reset()
  pMenu.isClick = true
  if (cMenu) {
    cMenu.isClick = true
    router.push({ name: cMenu.route })
  }
}
</script>

<style scoped lang="scss">
.left-container {
  dl {
    @apply text-gray-300 text-sm;
    dt {
      @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
      section {
        i {
          @apply mr-2;
        }
      }
    }
    dd {
      @apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer  duration-300 hover:bg-violet-500 bg-gray-700;
      &.active {
        @apply bg-violet-700;
      }
    }
  }
}
</style>

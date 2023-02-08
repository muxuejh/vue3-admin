<template>
  <div class="menu w-[200px] bg-gray-800 p-4">
    <div class="logo text-gray-300 flex items-center">
      <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
      <span class="text-md">后台管理系统</span>
    </div>
    <!-- 菜单 -->
    <div class="left-container">
      <dl v-for="(menu, index) in menus" :key="index">
        <dt @click="handle(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="text-md">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fa-sharp fa-solid fa-chevron-down duration-300" :class="{ 'rotate-180': menu.active }"></i>
          </section>
        </dt>
        <dd v-show="menu.active" :class="{ active: cMenu.active }" v-for="(cMenu, index) in menu.children" :key="index">
          {{ cMenu.title }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IMenuItem {
  title: string
  icon?: string
  active?: boolean
}
interface IMenu extends IMenuItem {
  children?: IMenuItem[]
}

const menus = ref<IMenu[]>([
  {
    title: '错误页面',
    icon: 'fab fa-behance-square',
    active: true,
    children: [{ title: '404页面', active: true }, { title: '403页面' }, { title: '500页面' }]
  },
  {
    title: '编辑器',
    icon: 'fab fa-behance-square',
    children: [{ title: 'markdown编辑器' }, { title: '富文本编辑器' }]
  }
])

const resetMenus = () => {
  menus.value.forEach(pMenu => {
    pMenu.active = false
    pMenu.children?.forEach(m => (m.active = false))
  })
}
const handle = (pMenu: IMenuItem, cMenu?: IMenuItem) => {
  resetMenus()
  pMenu.active = true
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

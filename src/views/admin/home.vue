<template>
  <div class="grid md:grid-flow-col gap-3">
    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="card of cards" class="cursor-pointer">
      <template #header>
        <div class="flex justify-between items-center">
          {{ card.title }}
          <el-tag type="danger" size="small" effect="dark">月</el-tag>
        </div>
      </template>
      <section class="flex justify-between items-center">
        <span class="text-1xl">3333</span>
        <i :class="[card.icon, card.iconColor]" class="text-3xl"></i>
      </section>
      <section class="text-base mt-6 flex justify-between">
        {{ card.totalTitle }}
        <span>{{ card.total }}</span>
      </section>
    </el-card>
  </div>

  <div class="mt-5 grid md:grid-cols-2 gap-3">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>用户统计</div>
      </template>
      <div id="echart1" class="w-full h-72"></div>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
        <div>用户统计</div>
      </template>
      <div id="echart2" class="w-full h-72"></div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { echart1, echart2 } from './echart'

interface ICard {
  title: string
  price: number
  icon: string
  iconColor: string
  totalTitle: string
  total: number
}
const cards = ref<ICard[]>([
  {
    title: '总人数',
    price: 24353,
    icon: 'fas fa-address-card',
    iconColor: 'text-violet-500',
    total: 3843434,
    totalTitle: '总人数'
  },
  {
    title: '销售额',
    price: 24353,
    icon: 'fas fa-apple-alt',
    iconColor: 'text-green-500',
    total: 3843434,
    totalTitle: '销售额'
  },
  {
    title: '订单数',
    price: 24353,
    icon: 'fas fa-award',
    iconColor: 'text-blue-500',
    total: 3843434,
    totalTitle: '订单数'
  },
  {
    title: '评论数',
    price: 24353,
    icon: 'fas fa-baseball-ball',
    iconColor: 'text-red-500',
    total: 3843434,
    totalTitle: '评论数'
  }
])

nextTick(() => {
  echarts.init(document.getElementById('echart1')).setOption(echart1)
  echarts.init(document.getElementById('echart2')).setOption(echart2)
})
</script>

<style scoped></style>

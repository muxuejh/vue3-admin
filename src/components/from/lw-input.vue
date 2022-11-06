<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="lw-input" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.lw-input {
  @apply w-full rounded-sm py-1 px-2 outline-none border border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>

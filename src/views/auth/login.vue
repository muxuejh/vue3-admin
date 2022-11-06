<template>
  <div class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
        <div class="mt-8">
          <lwInput />
          <lwInput class="mt-5" />
        </div>
        <lwButton class="mt-5" />
        <div class="flex gap-2 justify-center mt-5">
          <lwLink text="网站首页" />
          <lwLink text="会员注册" />
          <lwLink text="找回密码" />
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="w-full h-80 object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>

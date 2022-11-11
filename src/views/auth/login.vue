<template>
  <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div
      class="w-[720px] translate-y-32 md:translate-y-0 bg-white md:grid grid-cols-2 rounded-md shadow-md overflow-hidden"
    >
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">会员登录</h2>
          <div class="mt-8">
            <!-- <lwInput placeholder="请输入手机号或邮箱" />
          <lwInput placeholder="请输入登录密码" class="mt-5" /> -->

            <!-- <Field name="account" :rules="{ required: true, email: true }" label="账号" class="lw-input" /> -->

            <Field
              name="account"
              value="666666@qq.com"
              class="lw-input"
              label="账号"
              placeholder="请输入邮箱或手机号"
            />
            <div v-if="errors.account" class="lw-error">请输入邮箱或手机号</div>
            <!-- <ErrorMessage name="account" as="div" class="lw-error" /> -->
            <!-- autocomplete 规定输入字段是否应该启用自动完成功能 -->
            <Field
              name="password"
              value="999999"
              class="lw-input mt-3"
              label="密码"
              placeholder="请输入密码"
              type="password"
              autocomplete="off"
            />
            <ErrorMessage name="password" as="div" class="lw-error" />
          </div>
          <lwButton class="mt-5" />

          <div class="flex justify-center mt-3">
            <i class="fab fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
          </div>
        </div>

        <div class="flex gap-2 justify-center mt-5">
          <lwLink text="网站首页" />
          <lwLink text="会员注册" />
          <lwLink text="找回密码" />
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute w-full object-cover" />
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import userApi from '../../apis/userApi'
import v from '../../plugins/validate'

const { Form, Field, ErrorMessage } = v

const schema = {
  account: { required: true, regex: /.+@.+|\d{11}/ },
  password: { required: true, min: 3 }
}
// 使用 yup 定义验证规则
// const schema = v.yup.object({
//   account: v.yup.string().required().email().label('账号'),
//   password: v.yup.string().required().min(3).label('密码')
// })

const onSubmit = async values => {
  const {
    data: { token }
  } = await userApi.login(values)
  localStorage.setItem('token', token)
}

// import { reactive } from 'vue'
// const form = reactive({
//   account: '',
//   password: ''
// })
</script>

<style scoped lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>

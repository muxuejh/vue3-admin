<template>
  <form @submit="onSubmit">
    <section>
      <input type="text" v-model="usernameValue" />
      <p class="error">{{ errors.username }}</p>
    </section>
    <section>
      <input type="text" v-model="passwordValue" />
      <p class="error">{{ errors.password }}</p>
    </section>
    <button class="border bg-violet-500 text-white">提交表单</button>
  </form>
</template>

<script setup lang="ts">
import v from '../../plugins/validate'

// import { defineRule, useField, configure, useForm } from 'vee-validate'
// import { required, min, max, confirmed, email } from '@vee-validate/rules'
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
// import * as yup from 'yup'
// import { ref } from 'vue'

// defineRule('required', required)
// defineRule('email', email)

// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// })

const { handleSubmit, errors } = v.useForm({
  initialValues: {
    username: '张三',
    password: ''
  },
  validationSchema: {
    // username: { required: true, email: true },
    username: v.yup.string().required().email().label('账号'),
    password: { required: true }
  }
})
const { value: usernameValue } = v.useField('username', {}, { label: '用户名' })
const { value: passwordValue } = v.useField('password', {}, { label: '密码' })

const onSubmit = handleSubmit(values => {
  console.log(values)
  alert('表单验证成功')
})
</script>

<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
  .error {
    @apply bg-red-600;
  }
}
</style>

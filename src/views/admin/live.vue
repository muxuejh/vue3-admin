<template>
  <div>
    <Form @submit="onSubmit">
      <Field
        label="账号"
        name="account"
        :rules="{ required: true, email: true }"
        :validate-on-input="true"
        #default="{ field, errorMessage }"
      >
        <input type="text" v-bind="field" />
        <hr />
        <p>{{ errorMessage }}</p>
      </Field>
      <!-- <ErrorMessage name="account" /> -->
      <button class="border bg-violet-500 text-white">提交表单</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import v from '../../plugins/validate'

const { Form, Field } = v
// import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// import { required, min, max, confirmed, email } from '@vee-validate/rules'
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'

// import { defineRules } from '@/plugins/validate'
// import { ref } from 'vue'

// const account = ref<string>('')

// defineRules()

// defineRule('required', required)
// defineRule('email', email)

// configure({
//   generateMessage: localize('zh_CN', zh_CN)
// })

// const emailRule = value => {
//   return /@/.test(value) ? true : '邮箱格式错误'
// }

const onSubmit = values => {
  console.log(values)
  alert('表单验证成功')
}
</script>

<style scoped lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-800;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
}
</style>

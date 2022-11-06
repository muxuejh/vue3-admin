<template>
  <input
    type="text"
    class="lw-input"
    :value="props.modelValue"
    @input="$emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String
})
</script>

<style scoped lang="scss">
.lw-input {
  @apply w-full rounded-sm py-1 px-2 outline-none border border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>

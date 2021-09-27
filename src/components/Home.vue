<script setup lang="ts">
const props = defineProps<{
  title: string
}>()

const emit = defineEmits(['changetheme'])

</script>

<template>
  <h1 class="title">
    {{ props.title }}
  </h1>
  <button class="btn" @click="emit('changetheme')">
    Change Theme
  </button>
</template>

<style scoped>
  .title {
    @apply text-5xl font-bold text-green-500
  }
  .btn {
    @apply px-4 py-2 rounded shadow text-xl font-semibold text-white bg-green-500 hover:bg-opacity-80 mt-5
  }
</style>
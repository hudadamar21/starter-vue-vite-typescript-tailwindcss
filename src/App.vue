<script setup lang="ts">
import Home from "@/components/Home.vue"

const changeTheme = () => document.body.classList.toggle('dark')

</script>

<template>
  <section class="section-home">
    <Home 
      title="Vue + Vite + Typescript + Tailwindcss"
      @changetheme="changeTheme"
    />
  </section>
</template>

<style>
 .section-home {
   @apply 
    flex flex-col 
    items-center justify-center 
    h-screen 
    bg-gray-200 dark:bg-gray-800
    transition duration-300;
 }
</style>

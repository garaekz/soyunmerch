<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNavbar from './components/MainNavbar.vue';
</script>

<template>
  <MainNavbar />
  <!-- TODO: Remove color before deploy -->
  <div class="min-h-screen h-fit bg-red-400">
    <RouterView />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

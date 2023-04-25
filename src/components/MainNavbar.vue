<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="w-full h-16 flex items-center sticky top-0 bg-white">
    <div class="px-4 flex lg:max-w-screen-2xl lg:mx-auto w-full items-center justify-between">
      <button class="lg:hidden h-8 w-8">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </button>
      <div class="hidden lg:flex gap-8">
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Shop' }">Shop</RouterLink>
      </div>
      <img src="http://dagacoding.com/wp-content/uploads/2019/10/Daga_icono-1.png" alt="Logo" class="h-8">
      <div class="flex gap-3">
        <button class="h-8 w-8">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z">
            </path>
          </svg>
        </button>
        <button class="h-8 w-8">
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
            </path>
          </svg>
        </button>
      </div>
    </div>
</nav></template>
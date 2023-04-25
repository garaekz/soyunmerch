<script setup lang="ts">
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});

// TODO: Move maxRating to env settings
const maxRating = 5;
const roundedRating = Math.round(props.rating * 2) / 2;
const fullStars = Math.floor(roundedRating);
const halfStars = roundedRating % 1 !== 0 ? 1 : 0;
const emptyStars = maxRating - fullStars - halfStars;
</script>
<template>
  <div class="flex">
    <template v-for="i in fullStars" :key="i">
      <span class="w-6 text-gray-600">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z">
          </path>
        </svg>
      </span>
    </template>
    <div v-if="halfStars" class="relative w-6">
      <span class="w-6 text-gray-400 opacity-75">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z">
          </path>
        </svg>
      </span>
      <!-- TODO: Mencionar esto en stream clip-path -->
      <span class="absolute w-6 text-gray-600 top-0 left-0" style="clip-path: inset(0 50% 0 0);">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z">
          </path>
        </svg>
      </span>
    </div>
    <template v-for="i in emptyStars" :key="i">
      <span class="w-6 text-gray-400 opacity-75">
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z">
          </path>
        </svg>
      </span>
    </template>
  </div>
</template>
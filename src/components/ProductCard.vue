<script setup lang="ts">
import { ref } from 'vue';
import StarRating from './StarRating.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const currentImage = ref(props.product.image);
</script>

<template>
  <div class="bg-gray-200 rounded-4xl w-full mx-2 flex flex-col p-2">
    <div class="flex flex-col">
      <img class="w-full rounded-4xl object-cover h-64" :src="currentImage"
      @mouseenter="currentImage = product.secondaryImage"
      @mouseleave="currentImage = product.image"
      alt="Product Image" />
      <div class="flex flex-col p-8">
        <h1 class="text-2xl font-bold">
          {{ product.name }}
        </h1>
        <p class="text-xl font-semibold text-gray-600">
          ${{ product.price }}
        </p>
        <div class="flex">
          <div class="flex">
            <StarRating :rating="product.rating" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
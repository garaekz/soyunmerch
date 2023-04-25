<script setup lang="ts">
import FilterCard from '../components/FilterCard.vue';
import ProductCard from '../components/ProductCard.vue';

const dummyProducts = [
  {
    slug: 'product-slug-for-dev-purposes-1',
    name: 'Product Name 1',
    price: 15.99,
    rating: 4.5,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q223_Short_Sleeve_California_MarinePique_001_530x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q223_Short_Sleeve_California_MarinePique_002_530x.progressive.jpg',
  },
  {
    slug: 'product-slug-for-dev-purposes-2',
    name: 'Product Name 2',
    price: 34.87,
    rating: 3.5,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q223_Short_Sleeve_California_Steeple_Grey_Pique_001_638x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q223_Short_Sleeve_California_Steeple_Grey_Pique_004_638x.progressive.jpg',
  },
  {
    slug: 'product-slug-for-dev-purposes-3',
    name: 'Product Name 3',
    price: 12.99,
    rating: 4.0,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/INDIGO1_276x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q222_SSWester-Indigo_003_638x.progressive.jpg',
  },
  {
    slug: 'product-slug-for-dev-purposes-4',
    name: 'Product Name 4',
    price: 15.99,
    rating: 4.5,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/The_Sheffield_Sport_Coat_NaturalLinen_Front_638x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q223_SheffieldSportCoat_NaturalLinen_Lifestyle_001_816x.progressive.jpg',
  },
  {
    slug: 'product-slug-for-dev-purposes-5',
    name: 'Product Name 5',
    price: 7.49,
    rating: 2.5,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q418_product_ojai_jacket_washed_coal_001_761141fc-63e4-4aae-98a9-7853e15e52ec_638x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/mens_workshop_Q418_product_ojai_jacket_washed_coal_002_1969365b-bc3e-4cac-a743-aa89eb78e4db_638x.progressive.jpg',
  },
  {
    slug: 'product-slug-for-dev-purposes-6',
    name: 'Product Name 6',
    price: 15.99,
    rating: 4.5,
    image: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q422_WorkhorseVest-CamoBossDuck_00001_638x.progressive.jpg',
    secondaryImage: 'https://cdn.shopify.com/s/files/1/0070/1922/products/instock_m_q422_WorkhorseVest-CamoBossDuck_00004_638x.progressive.jpg',
  }
]
</script>

<template>
  <div class="flex flex-col sm:flex-row px-4 lg:max-w-screen-2xl lg:mx-auto w-full gap-5 py-8">
    <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <FilterCard />
    </div>
    <div class="w-full sm:w-1/2 lg:w-2/3 xl:w-3/4">
      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <template v-for="product in dummyProducts" :key="i">
          <div class="w-full lg:basis-1/3">
            <ProductCard :product="product" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
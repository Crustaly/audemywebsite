<script setup>
const props = defineProps({
  smallScreen: Boolean,
  icon: String,
  title: String,
});

const path = '/assets/images/our-projects/researchtech/';
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col items-center w-full gap-[15px] py-4 text-center">
      <div class="flex justify-center">
        <div class="game-resource-icon-card relative">
          <img :src="path + icon" alt="icon" class="w-[55px] absolute" />
        </div>
      </div>
      <div class="flex flex-col items-center font-poppins">
        <h2 class="game-resource-card-caption-small text-center" v-if="title">
          {{ title }}
        </h2>
      </div>
    </div>
  </div>
</template>

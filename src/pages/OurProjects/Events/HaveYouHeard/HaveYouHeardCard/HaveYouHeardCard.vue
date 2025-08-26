<script setup>
const props = defineProps({
  smallScreen: Boolean,
  icon: String,
  title: String,
  caption: String,
});
const path = '/assets/images/our-projects/';
</script>

<template>
  <!-- RWD Layout: 
    - Mobile & small screens: Column; icon (top) & text (bottom)
    - Medium+: Row; icon (left) & text (right)
  -->
  <div
    class="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center"
  >
    <!-- CARD ICON -->
    <div class="w-full md:w-3/12 flex justify-center items-center">
      <div class="game-resource-icon-card">
        <img :src="path + icon" aria-hidden="true" class="w-[75%]" />
      </div>
    </div>
    <!-- CARD TITLE & CAPTION -->
    <div class="w-full md:w-9/12 flex justify-center text-center md:text-left">
      <div>
        <h4 class="page-text font-semibold">
          {{ title }}
        </h4>
        <p class="page-text">
          {{ caption }}
        </p>
      </div>
    </div>
  </div>
</template>

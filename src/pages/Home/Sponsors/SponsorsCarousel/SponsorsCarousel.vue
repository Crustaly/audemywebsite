<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import sponsorsData from '../../../../assets/sponsorsDB/sponsors.json';

const currentIndex = ref(0);
let interval;

const startAutoScroll = () => {
  interval = setInterval(() => {
    next();
  }, 2500);
};

const next = () => {
  if (currentIndex.value < sponsorsData.sponsors.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="overflow-hidden relative w-full">
    <div
      class="flex justify-content transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(sponsor, index) in sponsorsData.sponsors"
        :key="index"
        class="flex-none w-full"
      >
        <!-- NOTES: 
          1. Manually add prefix to image path:
            - Since <SponsorsCarousel/> is nested in a subdirectory
          2. Use flex wrapper and object-contain to align logos horizontally
        -->
        <div class="h-full flex">
          <img
            :src="'../' + sponsor.src"
            :alt="sponsor.alt"
            :class="[
              'h-auto mx-auto object-contain',
              sponsor.isLogoWide === 'true' ? 'w-[35%]' : 'w-[70%]',
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

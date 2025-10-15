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
      class="flex justify-content w-full transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(sponsor, index) in sponsorsData.sponsors"
        :key="index"
        class="flex-none w-full"
      >
        <!-- NOTE: Manually add prefix to image path 
          - since <SponsorsCarousel/> is nested in a subdirectory
        -->
        <img
          :src="'../' + sponsor.src"
          :alt="sponsor.alt"
          :class="[
            'h-auto mx-auto',
            sponsor.isLogoWide === 'true' ? 'w-[50%]' : 'w-[75%]',
          ]"
        />
      </div>
    </div>
  </div>
</template>

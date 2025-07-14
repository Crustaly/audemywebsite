<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentIndex = ref(0);
const items = [
  '/assets/images/sponsors/google.png',
  '/assets/images/sponsors/desmos.png',
  '/assets/images/sponsors/tacobell.png',
  '/assets/images/sponsors/wolframalpha.svg',
  '/assets/images/sponsors/intel.svg',
  '/assets/images/sponsors/hersheys.svg',
  '/assets/images/sponsors/k4c.svg',
  '/assets/images/sponsors/ncwit.png',
];

let interval;

const startAutoScroll = () => {
  interval = setInterval(() => {
    next();
  }, 2500);
};

const next = () => {
  if (currentIndex.value < items.length - 1) {
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
  <div class="carousel-container overflow-hidden relative w-full mobile:h-32">
    <div
      class="carousel flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-item flex-none w-full h-auto mobile:h-32"
      >
        <img :src="item" class="w-full h-auto object-cover" alt="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.carousel {
  display: flex;
  width: 100%;
  height: 400px;
}

.carousel-item {
  flex: 0 0 100%;
}
</style>

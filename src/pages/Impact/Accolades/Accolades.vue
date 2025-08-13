<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import AccoladesCard from './AccoladesCard.vue';

const items = [
  {
    icon: 'intel-logo.png',
    text: 'Intel Global AI Festival Winner',
  },
  {
    icon: 'dailypoint-logo.png',
    text: 'Daily Point of Light Honoree',
  },
  {
    icon: 'texas-logo.png',
    text: 'Yellow Rose of Texas Award',
  },
  {
    icon: 'technovation-logo.png',
    text: 'Technovation National Semifinalist',
  },
  {
    icon: 'acm-logo.png',
    text: 'ACM Published Research',
  },
];

let smallScreen = ref(window.innerWidth <= 450);

const updateScreenWidth = () => {
  smallScreen.value = window.innerWidth <= 450;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="my-10 flex-col w-full py-10 relative font-poppins">
    <!-- ACCOLADES HEADER: ACCENT & TITLE -->
    <div
      class="flex flex-col items-center justify-center mobile:justify-center w-[80%] mx-auto"
    >
      <div class="w-full">
        <h3 class="page-header-accent">ACCOLADES AND RECOGNITION</h3>
      </div>
      <div>
        <h2 class="page-header">
          A
          <span class="font-semibold text-primary-color"> testament </span>
          to our work
        </h2>
      </div>
    </div>
    <!-- MAIN CONTENT -->
    <div class="flex justify-center">
      <div class="w-full">
        <div
          id="div_about_us"
          class="flex-wrap flex mobile:flex-col items-center flex-cols-2 md:flex-cols-3 justify-center mx-10 my-10 gap-12"
        >
          <AccoladesCard
            v-for="(item, index) in items"
            :key="index"
            :icon="item.icon"
            :text="item.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

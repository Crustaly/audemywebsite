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
  <div class="flex w-full px-20 relative font-poppins">
    <!-- MAIN CONTENT -->
    <div
      class="flex flex-col items-center justify-center mobile:justify-center w-full h-[10%] mb-4"
    >
      <div class="w-full">
        <h3 class="page-header-accent">ACCOLADES AND RECOGNITION</h3>
      </div>

      <div class="max-w-[519px]">
        <h2 class="page-header">
          A
          <span class="font-semibold text-primary-color"> testament </span>
          to our work
        </h2>
      </div>

      <div class="flex justify-center">
        <div class="w-full">
          <div
            id="div_about_us"
            class="mobile:flex-wrap flex justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:gap-4 mobile:flex-col"
          >
            <AccoladesCard
              v-for="(item, index) in items"
              :key="index"
              :icon="item.icon"
              :text="item.text"
              :smallScreen="smallScreen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

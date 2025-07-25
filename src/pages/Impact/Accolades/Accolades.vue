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
  <div class="flex w-full px-20 relative">
    <!-- MAIN CONTENT -->
    <div
      class="flex flex-col items-center justify-center mobile:justify-center w-full h-[10%] mb-36 tablet:mb-[265px] mobile:mb-[129px]"
    >
      <div class="w-full">
        <h3
          class="font-poppins text-small-text-color text-[12px] font-[500] mobile:w-auto text-center tracking-[3.6px] mb-4 text-[#6E777C] font-semibold"
        >
          ACCOLADES AND RECOGNITION
        </h3>
      </div>

      <div class="max-w-[519px]">
        <h2
          class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400]"
        >
          A
          <span style="color: #077bb3" class="font-semibold"> testament </span>
          to our work
        </h2>
      </div>

      <div class="flex justify-center">
        <div class="w-full">
          <div
            id="div_about_us"
            class="flex justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:gap-4 mobile:flex-col"
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

<style scoped>
@media screen and (max-width: 450px) {
  #div_about_us {
    flex-wrap: wrap;
  }
}

.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}
</style>

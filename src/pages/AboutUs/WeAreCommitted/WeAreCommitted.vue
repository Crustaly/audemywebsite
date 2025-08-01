<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import WeAreCommittedCard from './WeAreCommittedCard.vue';

const items = [
  {
    icon: 'bulb2.svg',
    text: 'Invest funding in the latest technologies and resources',
  },
  {
    icon: 'ai.svg',
    text: "Use AI tools to tailor games for blind children's needs",
  },
  {
    icon: 'globe.svg',
    text: 'Make our games available to a wider audience',
  },
];

let smallScreen = ref(window.innerWidth <= 450);
let tabletScreen = ref(window.innerWidth <= 1024 && window.innerWidth > 450);

const updateScreenWidth = () => {
  smallScreen.value = window.innerWidth <= 450;
  tabletScreen.value = window.innerWidth <= 1024 && window.innerWidth > 450;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <div class="flex flex-wrap w-full pl-10 pr-10 mt-20 relative mobile:flex-col">
    <!-- FLEX CONTAINER FOR ITEMS AND IMAGE -->
    <div class="flex w-full justify-between items-center mobile:flex-col">
      <!-- LEFT PORTION -->
      <div
        class="flex flex-col items-start justify-start w-1/2 mobile:w-full mobile:items-center mb-16"
      >
        <div>
          <h3
            class="font-poppins text-small-text-color text-[#6e777c] text-[12px] font-[600] mobile:w-auto text-left tracking-[3.6px] mobile:text-center"
          >
            GROWTH & FUTURE HORIZONS
          </h3>
        </div>

        <div class="max-w-[430px] w-full mobile:text-center">
          <h2
            class="font-poppins text-4xl tablet:text-[32px] mobile:text-[24px] font-[400]"
          >
            We are committed to do much more
          </h2>
        </div>

        <div class="flex justify-center mt-6 w-full">
          <div class="max-w-[744px] w-full">
            <div
              id="div_about_us"
              class="flex flex-col justify-between mt-[40px] gap-4 mobile:gap-4"
            >
              <WeAreCommittedCard
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

      <!-- RIGHT PORTION -->
      <div
        class="relative w-1/2 mobile:w-full mobile:mt-10 flex justify-center"
      >
        <img
          src="/assets/images/our-projects/Mask group.png"
          :class="[
            'absolute w-[90%] object-cover -top-48 -z-10 mobile:hidden',
            tabletScreen ? '-right-28' : '-right-40',
            'tablet-cloud',
          ]"
          alt="Image"
        />
        <img
          src="/assets/images/about-us/childPlaying-tablet.png"
          alt="Image of student"
          class="z-10 object-contain w-[80%] h-auto mobile:w-full"
        />
      </div>
      <img
        src="/assets/images/impact/orangeStar.png"
        alt="Orange Star"
        class="absolute bottom-[10rem] left-[52rem] z-10 mobile:hidden tablet:hidden tablet-hide"
      />
      <img
        src="/assets/images/about-us/blueStar2.svg"
        alt="Blue Star"
        class="absolute w-[81px] bottom-[5rem] right-[5rem] z-10 mobile:hidden"
      />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 450px) {
  #div_about_us {
    flex-wrap: wrap;
  }

  h2 {
    font-size: 18px;
    text-align: center;
  }

  .scroll-top-button {
    position: fixed;
    bottom: 10px;
    right: 10px;
    padding: 8px;
    font-size: 14px;
  }
}

@media screen and (max-width: 1024px) {
  .tablet-hide {
    display: none;
  }
}
</style>

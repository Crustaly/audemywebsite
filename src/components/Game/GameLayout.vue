<template>
  <div
    class="min-h-screen font-poppins"
    :style="{ 'background-color': bgColor }"
  >
    <div class="w-full">
      <GamePagesHeader />
    </div>

    <GamePagesFooter
      :handleSthNotWorkingButtonClick="handleSthNotWorkingButtonClick"
      :currentAudios="currentAudios"
    />

    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <!-- Desktop & mobile -->
      <div v-show="!isTablet" class="absolute top-20 right-20">
        <img
          src="/assets/gameImages/moon.png"
          alt="Decorative moon"
          :class="isMobile ? 'w-[120px] h-auto' : 'w-[165px] h-auto'"
        />
      </div>
      <!-- Tablet Only -->
      <template v-if="isTablet">
        <!-- Left image -->
        <div class="absolute left-0 z-0 top-20">
          <img
            src="/assets/gameImages/stars-clouds.png"
            alt="Decorative cloud"
            class="w-[230px] h-auto transform -scale-x-100"
          />
        </div>
        <!-- Right image -->
        <div class="absolute right-0 z-0 bottom-[50px]">
          <img
            src="/assets/gameImages/rainbow.png"
            alt="Decorative rainbow"
            class="w-[220px] h-auto"
          />
        </div>
      </template>
      <!-- Desktop Only -->
      <template v-else-if="isDesktop">
        <!-- Left image -->
        <div class="absolute bottom-0 left-0 z-0 bottom-[50px]">
          <img
            src="/assets/gameImages/rainbow.png"
            alt="Decorative rainbow"
            class="w-[300px] h-auto transform -scale-x-100"
          />
        </div>
      </template>
      <!-- Mobile Only -->
      <template v-if="isMobile">
        <!-- Only left image for mobile -->
        <div class="absolute left-3 bottom-5 z-0">
          <img
            src="/assets/gameImages/shooting-star.png"
            alt="Decorative star"
            class="w-[170px] h-auto"
          />
        </div>
      </template>
    </div>

    <!-- Main Content -->
    <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div class="relative w-[70%]">
        <!-- Back Button Container -->
        <div
          v-show="!isMobile"
          class="absolute md:top-1/4 lg:top-1/5 left-[-10%] z-30"
        >
          <button @click="goBack">
            <img
              src="/assets/gameImages/buttons/arrow-back.svg"
              class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
              alt="Back to Game Zone"
            />
          </button>
        </div>

        <div
          class="flex flex-col justify-center items-center relative z-10 mx-auto"
          :class="[isMobile ? 'w-[95%] my-5' : 'w-[90%]']"
        >
          <!-- Back Button for Mobile -->
          <div v-show="isMobile" class="self-center mb-5">
            <button @click="goBack">
              <img
                src="/assets/gameImages/buttons/arrow-back.svg"
                class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                alt="Back to Game Zone"
              />
            </button>
          </div>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import GamePagesHeader from '../../pages/Header/GamePagesHeader.vue';
import GamePagesFooter from '../../pages/Footer/GamePagesFooter.vue';

const props = defineProps({
  bgColor: {
    type: String,
    required: true,
  },
  isTablet: {
    type: Boolean,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
  currentAudios: {
    type: Array,
    required: true,
  },
  handleSthNotWorkingButtonClick: {
    type: Function,
    required: true,
  },
  goBack: {
    type: Function,
    required: true,
  },
});

const isDesktop = computed(() => !props.isTablet && !props.isMobile);
</script>

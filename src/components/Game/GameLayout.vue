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
      <!-- Sun - Only for desktop -->
      <div
        v-show="!isTablet && !isMobile"
        class="absolute top-20 right-60 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="#FFD137" />
        </svg>
      </div>
      <!-- Clouds - Different for tablet -->
      <template v-if="isTablet">
        <!-- Left cloud for tablet -->
        <div class="absolute left-0 z-0 bottom-[150px]">
          <img
            src="/assets/gameImages/cloud-bg-Tab-left.png"
            alt="Decorative cloud"
            class="w-[300px] h-auto"
          />
        </div>
        <!-- Right cloud for tablet -->
        <div class="absolute bottom-0 right-0 z-0 bottom-[50px]">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            class="w-[300px] h-auto"
          />
        </div>
      </template>
      <!-- Clouds for desktop -->
      <template v-else-if="isDesktop">
        <div class="absolute bottom-0 left-0 z-0 bottom-[50px]">
          <img
            src="/assets/gameImages/cloud-bg.png"
            alt="Decorative cloud"
            class="w-[400px] h-auto"
          />
        </div>
      </template>
      <!-- Mobile-specific clouds -->
      <template v-if="isMobile">
        <!-- Only right cloud for mobile -->
        <div class="absolute right-0 z-0 bottom-[20px]">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            class="w-[250px]"
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

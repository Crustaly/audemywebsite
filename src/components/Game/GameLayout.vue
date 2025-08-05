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
        <div class="absolute left-0 z-0" style="bottom: 150px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-left.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
        </div>
        <!-- Right cloud for tablet -->
        <div class="absolute bottom-0 right-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
        </div>
      </template>
      <!-- Clouds for desktop -->
      <template v-else-if="isDesktop">
        <div class="absolute bottom-0 left-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg.png"
            alt="Decorative cloud"
            style="width: 400px; height: auto"
          />
        </div>
      </template>
      <!-- Mobile-specific clouds -->
      <template v-if="isMobile">
        <!-- Only right cloud for mobile -->
        <div class="absolute right-0 z-0" style="bottom: 20px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 250px"
          />
        </div>
      </template>
    </div>

    <!-- Main Content -->
    <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div class="relative w-full max-w-[800px]">
        <!-- Back Button Container -->
        <div v-show="!isMobile" class="absolute top-4 left-4 z-30">
          <button @click="goBack">
            <img
              src="/assets/gameImages/buttons/arrow-back.svg"
              class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
              alt="Back Button Image"
            />
          </button>
        </div>

        <div
          class="flex flex-col justify-center items-center relative z-10 mx-auto"
          :class="[
            isMobile
              ? 'h-[calc(60vh-144px)] w-[95%] mt-16'
              : 'h-[calc(60vh-64px)] w-[90%]',
          ]"
        >
          <!-- Back Button for Mobile -->
          <div v-show="isMobile" class="self-center -mt-32 mb-8">
            <button @click="goBack">
              <img
                src="/assets/gameImages/buttons/arrow-back.svg"
                class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                alt="Back Button Image"
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

<script setup>
/*
 * GameProgressBar.vue:
 * - Decorative, dynamic game progress bar UI
 * - Used in <GameHeader/>
 */

/* --- PROPS --- */

const props = defineProps({
  /* showCaptions: Flag to control visibility of Qns, feedback, & answers
    - Set to 'true' if all 3 conditions met: 
    - 1. Game is playing, 
    - 2. Intro audio is completed, 
    - 3. Game has remaining questions to be played
  */
  showCaptions: {
    type: Boolean,
    required: false,
    default: false,
  },
  /* currentQuestionIndex: Index for current question */
  currentQuestionIndex: {
    type: Number,
    required: false,
    default: 0,
  },
});

import { computed } from 'vue';
const progressBarIndex = computed(() => props.currentQuestionIndex + 1);
</script>

<template>
  <div
    v-if="showCaptions"
    aria-hidden="true"
    class="flex flex-col items-center gap-y-3 w-full mb-3"
  >
    <div class="text-[14px] md:text-[15px] 2xl:text-[18px]">
      <div class="flex gap-x-2">
        <span class="hidden md:inline-block">Question</span>
        <span class="inline-block md:hidden">Q</span>
        <p class="inline-block mr-3">{{ currentQuestionIndex + 1 }} of 5</p>
      </div>
    </div>
    <div class="flex w-full gap-x-3">
      <div
        v-for="n in 5"
        :key="n"
        class="w-1/5 h-[8px] rounded-[16px] border transition ease-in duration-300"
        :class="[
          n <= progressBarIndex ? 'bg-primary-color' : 'bg-[#edf7fc]',
          { 'animate-pulse': n === progressBarIndex },
        ]"
      ></div>
    </div>
  </div>
</template>

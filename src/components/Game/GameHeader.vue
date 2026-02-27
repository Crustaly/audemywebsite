<template>
  <div :class="gameHeaderClasses">
    <!-- Decorative Question Progress Bar -->
    <GameProgressBar
      :showCaptions="showCaptions"
      :currentQuestionIndex="currentQuestionIndex"
    />
    <div class="my-3">
      <!-- Icon RWD: 
        - Switch to bottom-left (mobile + small screens only)
        - To reduce vertical scrolling & avoid overlap w/ 'Something Not Working' button  
      -->
      <img
        :src="iconSrc"
        aria-hidden="true"
        :class="[
          'duration-300 h-auto w-[50px] md:w-[70px] md:h-[70px]',
          isMobile ? 'absolute -bottom-3 -left-3' : '',
        ]"
      />
    </div>
    <h1
      :class="[
        isMobile
          ? 'text-[25px] leading-[28px]'
          : 'text-[35px] leading-[70px] lg:text-[40px]',
      ]"
      class="font-poppins font-semibold text-center duration-300"
    >
      {{ title }}
    </h1>
    <div
      :class="[isMobile ? 'w-[280px]' : 'w-[420px]']"
      class="font-poppins leading-[24px] text-center text-[#000000] mobile:px-5 p-3 mobile:m-5 m-0"
    >
      <!-- Accessibility & Usability: 
        - Screen readers: Skip duplicate content (Qs are narrated via TTS API)
        - Sighted users: Dynamic captions persists until game ends
      -->
      <div
        v-if="showCaptions"
        aria-hidden="true"
        class="flex flex-col items-center gap-y-3"
      >
        <!-- Vue transition wrapper for fade effects -->
        <transition
          enter-active-class="transition duration-300 ease-in"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-300 ease-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <QuestionCaptions
            v-if="!isAnswerPlaying"
            :title="title"
            :description="description"
            :currentQuestion="currentQuestion"
            :showAnswerOnly="showAnswerOnly"
            key="question-caption"
          />

          <!-- Show feedback & answer once final transcription is ready & validated -->
          <AnswerCaptions
            v-else
            :title="title"
            :currentQuestion="currentQuestion"
            :isCorrect="isCorrect"
            :firstMatchingAnswer="firstMatchingAnswer"
            key="answer-caption"
          />
        </transition>
      </div>
      <p v-else class="mobile:text-[16px] text-[18px] 2xl:text-[20px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* --- IMPORTS --- */

import { gameHeaderClasses } from './GameHeaderConstants.js';

import GameProgressBar from './GameProgressBar.vue';
import QuestionCaptions from './QuestionCaptions.vue';
import AnswerCaptions from './AnswerCaptions.vue';

/* --- PROPS --- */

const props = defineProps({
  iconSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
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
  /* currentQuestion: Captions for current game question */
  currentQuestion: {
    type: Object,
    required: false,
    default: null,
  },
  /* currentQuestionIndex: Index for current question */
  currentQuestionIndex: {
    type: Number,
    required: false,
    default: 0,
  },
  /* isAnswerPlaying (flag): 
  - True: If feedback audio is playing for current question 
  - Controlled & returned by useGameCore.js: toggleRecording() 
  */
  isAnswerPlaying: {
    type: Boolean,
    required: false,
    default: false,
  },
  /* isCorrect (flag): 
  - True: If user answer is correct 
  - Controlled & returned by useGameCore.js: toggleRecording() 
  */
  isCorrect: {
    type: Boolean,
    required: false,
    default: false,
  },
  /* firstMatchingAnswer: 
  - Accounts for answers with synonyms or number formats (eg. plurality, '3' vs 'three')
  - Controlled & returned by useGameQuestions.js: validateAnswer() 
  */
  firstMatchingAnswer: {
    type: String,
    required: false,
    default: '',
  },
  /* showAnswerOnly (flag): 
  - True: Show answer & feedback captions only 
  - Hide questions for 'Spelling Bee' & 'Car Counting' 
  */
  showAnswerOnly: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

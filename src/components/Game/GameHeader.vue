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
        <QuestionCaptions
          v-if="!isAnswerPlaying"
          :title="title"
          :description="description"
          :currentQuestion="currentQuestion"
          :showAnswerOnly="showAnswerOnly"
        />

        <!-- Show feedback & answer once final transcription is ready & validated -->
        <div
          v-if="isAnswerPlaying"
          aria-hidden="true"
          class="flex flex-col items-center justify-center gap-y-5 w-full"
        >
          <div
            class="flex flex-col md:flex-row items-center w-full md:items-stretch rounded-[16px] shadow-md"
          >
            <div
              :class="[
                feedbackClasses,
                isCorrect
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-800',
              ]"
            >
              <span v-if="isCorrect">
                <img
                  aria-hidden="true"
                  src="/assets/gameImages/correct.png"
                  class="h-[25px] md:h-[35px]"
                />
              </span>
              <span v-else>
                <img
                  aria-hidden="true"
                  src="/assets/gameImages/wrong.png"
                  class="h-[25px] md:h-[35px]"
                />
              </span>
            </div>
            <div
              class="relative w-full md:w-3/4 p-2 flex flex-col items-center justify-center"
            >
              <!-- Decorative transparent background for answer legibility -->
              <div
                aria-hidden="true"
                :class="[
                  transparentBgClasses,
                  'rounded-b-[16px] md:rounded-l-[0px] md:rounded-r-[16px]',
                ]"
              ></div>
              <div
                class="relative flex flex-col gap-y-2 z-10 text-[15.5px] md:text-[16px] 2xl:text-[20px]"
              >
                <p
                  :class="[
                    'font-semibold',
                    isCorrect ? 'text-green-700' : 'text-red-800',
                  ]"
                >
                  {{ isCorrect ? 'Correct!' : 'Incorrect!' }}
                </p>
                <p>
                  <span class="font-semibold"> Answer: </span>
                  <!-- 1. Check special case: 'Car Counting' 
                    - Game passes 'getCurrentAnswer()' return value as 'currentQuestion' prop 
                  -->
                  <!-- 2. Check if game accepts answers with synonyms or numbers -->
                  {{
                    title == 'Car Counting' // Check #1
                      ? currentQuestion
                      : firstMatchingAnswer !== '' // Check #2
                        ? firstMatchingAnswer
                        : currentQuestion['A'][0]
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="mobile:text-[16px] text-[18px] 2xl:text-[20px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
/* --- IMPORTS --- */

import {
  gameHeaderClasses,
  feedbackClasses,
  transparentBgClasses,
} from './GameHeaderConstants.js';

import GameProgressBar from './GameProgressBar.vue';
import QuestionCaptions from './QuestionCaptions.vue';

/* --- PROPS --- */

defineProps({
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

<script setup>
/*
 * AnswerCaptions.vue:
 * - Dynamic, timed captions for game answers and user feedback
 * - Used in <GameHeader/> as a visual alternative to audio-based feedback
 */

/* --- IMPORTS --- */

import { computed } from 'vue';

import {
  feedbackClasses,
  transparentBgClasses,
} from './GameHeaderConstants.js';

/* --- PROPS --- */

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  /* currentQuestion: Captions for current game question */
  currentQuestion: {
    type: Object,
    required: false,
    default: null,
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
});

/* --- COMPUTED PROPERTIES --- */

// Compute final answer captions
const captionText = computed(() => {
  if (props.title === 'Car Counting') {
    // 1. Check special case: 'Car Counting'
    // - Game passes 'getCurrentAnswer()' return value as 'currentQuestion' prop
    return props.currentQuestion;
  } else if (props.firstMatchingAnswer !== '') {
    // 2. Check if game accepts answers with synonyms or numbers
    // - Align answer UI captions with transcript
    return props.firstMatchingAnswer;
  } else {
    // 3. Default: First answer choice
    return props.currentQuestion['A'][0];
  }
});
</script>

<template>
  <div
    aria-hidden="true"
    class="flex flex-col items-center justify-center gap-y-5 w-full"
  >
    <div
      class="flex flex-col md:flex-row items-center w-full md:items-stretch rounded-[16px] shadow-md"
    >
      <div
        :class="[
          feedbackClasses,
          isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-800',
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
            {{ captionText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

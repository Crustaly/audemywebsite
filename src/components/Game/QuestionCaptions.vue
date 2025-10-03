<script setup>
/*
 * QuestionCaptions.vue:
 * - Dynamic, timed captions for game questions
 * - Used in <GameHeader/> as a visual alternative to audio-based Q's
 */

/* --- IMPORTS --- */

import {
  multipleChoiceClasses,
  transparentBgClasses,
  multipleChoiceGames,
  multiPartsGames,
} from './GameHeaderConstants.js';

/* --- PROPS --- */

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  /* currentQuestion: Captions for current game question */
  currentQuestion: {
    type: Object,
    required: false,
    default: null,
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

/* --- HELPER FUNCTIONS --- */

/* splitMCQs():
 * - Helper function to handle multiple-choice game Q's
 * - Based on 'multipleChoiceGames' list
 */
const splitMCQs = (fullQuestion) => {
  // Expected format (fullQuestion): Question followed by list of answer choices
  const questionParts = fullQuestion.split('?');

  // Split removes '?' delimiter, so manually add char back in UI
  const question = questionParts[0] + '?';

  // Splits multiple-choice options by a comma delimiter
  let choices = questionParts[1].split(',');

  // Special case: Trim trailing 'or ' from last answer choice
  // Ex: 'Independence, Liberty, Constraint, or Automony?'
  let lastChoice = choices.at(-1);
  if (lastChoice.includes('or ')) {
    lastChoice = lastChoice.replace('or ', '');
    // Concatenate subarrays
    choices = choices.slice(0, -1).concat(lastChoice);
  }

  return { question, choices };
};

/* splitMultiPartsQs():
 * - Helper function to handle multiple-part game Q's
 * - Based on 'multiPartsGames' list
 */
const splitMultiPartsQs = (fullQuestion) => {
  // Expected format (fullQuestion): Prompt (sentence) followed by question
  // Ex: 'There are 3 apples and 2 bananas. How many fruits are there in total?'

  const questionParts = fullQuestion.split('.');
  // Split removes '.' delimiter, so manually add char back in UI
  const prompt = questionParts[0] + '.';
  const question = questionParts[1];

  return { prompt, question };
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row justify-center items-center md:items-stretch"
  >
    <div
      class="relative z-0 text-[15.5px] md:text-[16px] 2xl:text-[20px] my-2 w-full"
    >
      <!-- Decorative transparent background for question legibility -->
      <div
        aria-hidden="true"
        :class="[transparentBgClasses, '[rounded-[16px]']"
      ></div>

      <!-- 1. Special case: Format multiple-choice questions -->
      <div v-if="multipleChoiceGames.includes(title)" class="relative z-10">
        <p>{{ splitMCQs(currentQuestion['Q'])['question'] }}</p>
        <!-- RWD: flex container for answer choices -->
        <div class="px-10 flex flex-wrap justify-between items-center">
          <div
            v-for="choice in splitMCQs(currentQuestion['Q'])['choices']"
            :key="choice"
            :class="multipleChoiceClasses"
          >
            <p>{{ choice }}</p>
          </div>
        </div>
      </div>

      <!-- 2. Check if question has multiple parts (prompt + question) -->
      <div v-else-if="multiPartsGames.includes(title)" class="relative z-10">
        <!-- Split multiple part question for better readability -->
        <p>{{ splitMultiPartsQs(currentQuestion['Q'])['prompt'] }}</p>
        <p class="mt-3 md:mt-5">
          {{ splitMultiPartsQs(currentQuestion['Q'])['question'] }}
        </p>
      </div>

      <!-- 3. Fill in the blank question: Non-MCQ and Non-multiple parts game -->
      <p v-else-if="!showAnswerOnly" class="relative z-10">
        {{ currentQuestion['Q'] }}
      </p>

      <!-- 4. Otherwise: Show game description for 'Spelling Bee' & 'Car Counting' -->
      <p
        v-else-if="showAnswerOnly"
        class="mobile:text-[16px] text-[18px] 2xl:text-[20px] relative z-10"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

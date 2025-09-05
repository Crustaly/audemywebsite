<template>
  <div :class="gameHeaderClasses">
    <!-- Decorative Question Progress Bar -->
    <div
      v-if="showCaptions"
      aria-hidden="true"
      class="flex flex-col items-center gap-y-3 w-full mb-3"
    >
      <div class="text-[14px] md:text-[15px] 2xl:text-[18px]">
        <div class="flex gap-x-2">
          <span class="hidden md:inline-block">Question</span>
          <span class="inline-block md:hidden">Q</span>
          <p class="inline-block mr-3">{{ numOfAudiosPlayed + 1 }} of 5</p>
        </div>
      </div>
      <div class="flex w-full gap-x-3">
        <div
          v-for="n in 5"
          :key="n"
          class="w-1/5 h-[8px] rounded-[16px] border"
          :class="
            n <= numOfAudiosPlayed + 1 ? 'bg-primary-color' : 'bg-[#edf7fc]'
          "
        ></div>
      </div>
    </div>
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
        <div
          v-if="!isAnswerPlaying"
          class="flex flex-col md:flex-row justify-center items-center md:items-stretch"
        >
          <div
            class="relative text-[15.5px] md:text-[16px] 2xl:text-[20px] my-2 w-full"
          >
            <!-- Decorative transparent background for question legibility -->
            <div
              aria-hidden="true"
              :class="[transparentBgClasses, '[rounded-[16px]']"
            ></div>

            <!-- 1. Special case: Format multiple-choice questions -->
            <div
              v-if="multipleChoiceGames.includes(title)"
              class="relative z-10"
            >
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
            <div
              v-else-if="currentQuestion && multiPartsGames.includes(title)"
              class="relative z-10"
            >
              <!-- Split multiple part question for better readability -->
              <p>{{ splitMultiPartsQs(currentQuestion['Q'])['prompt'] }}</p>
              <p class="mt-3 md:mt-5">
                {{ splitMultiPartsQs(currentQuestion['Q'])['question'] }}
              </p>
            </div>

            <!-- 3. Fill in the blank question: Non-MCQ and Non-multiple parts game -->
            <p v-else-if="currentQuestion" class="relative z-10">
              {{ currentQuestion['Q'] }}
            </p>

            <!-- 4. Otherwise: Show game description for 'Spelling Bee' & 'Car Counting' -->
            <p
              v-else
              class="mobile:text-[16px] text-[18px] 2xl:text-[20px] relative z-10"
            >
              {{ description }}
            </p>
          </div>
        </div>

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
              class="flex gap-x-2 md:flex-col items-center justify-center rounded-t-[16px] md:rounded-l-[16px] md:rounded-r-[0px] w-full md:w-1/4 text-[16px] lg:text-[18px] 2xl:text-[20px] p-1"
              :class="
                isCorrect
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-800'
              "
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
              <div class="relative z-10 text-[15.5px] md:text-[16px]">
                <p
                  :class="[
                    'font-semibold',
                    isCorrect ? 'text-green-700' : 'text-red-800',
                  ]"
                >
                  {{ isCorrect ? 'Correct!' : 'Incorrect!' }}
                </p>
                <p>
                  <span class="font-semibold">Answer: </span
                  >{{ currentQuestion['A'][0] }}
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
/* --- EXTRACTED RWD & STYLE CLASSES --- */

// Extracted RWD classes for outermost <GameHeader/> wrapper
const gameHeaderClasses = [
  'relative', // RWD & positioning layout
  'flex',
  'flex-col',
  'items-center',
  'mobile:w-[70%]', // RWD size
  'w-[400px]',
  'md:w-full',
  'bg-cross-lines', // Styling & spacing
  'py-5',
  'px-12',
  'md:p-10',
  'my-2',
  'md:my-5',
  'rounded-[16px]',
  'shadow-md',
];

// Extracted style classes for multiple-choice captions
const multipleChoiceClasses = [
  'bg-[#edf7fc]',
  'rounded-full',
  'p-0',
  'md:p-1',
  'my-3',
  'ease-in',
  'duration-300',
  'w-full' /* Mobile & small screens: Column layout */,
  'md:w-[45%]' /* Medium+ screens: Row layout */,
];

// Shared styles for transparent bg behind captions
const transparentBgClasses = [
  '-z-1',
  'absolute',
  'top-0',
  'left-0',
  'bg-white',
  'w-full',
  'h-full',
  'opacity-70',
  'rounded-b-[16px]',
  'md:rounded-l-[0px]',
  'md:rounded-r-[16px]',
];

/* --- CONSTANTS FOR MCQ & MULTI-PART QUESTION TYPES --- */

const multipleChoiceGames = [
  'Vocabulary Vortex',
  'Polar Pairing',
  'Odd One Out',
];

const multiPartsGames = ['Fruit Frenzy', 'Monkey Madness', 'Shape Shark'];

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
  /* numOfAudiosPlayed: Index for current question */
  numOfAudiosPlayed: {
    type: Number,
    required: false,
    default: 1,
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

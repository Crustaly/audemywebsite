<template>
  <div
    class="relative flex flex-col items-center bg-cross-lines py-5 px-12 md:p-10 my-5 rounded-[16px] mobile:w-[70%] w-[400px] md:w-full shadow-md"
  >
    <div class="my-2">
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
          ? 'text-[25px] leading-[35px]'
          : 'text-[40px] leading-[70px] lg:text-[50px]',
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
      <div v-if="showQuestions" aria-hidden="true">
        <p
          class="p-3 font-semibold bg-[#edf7fc] rounded-full w-[60%] mx-auto text-[16px] md:text-[20px]"
        >
          Question {{ numOfAudiosPlayed + 1 }}
        </p>
        <div class="mobile:text-[16px] md:text-[16.5px] my-2">
          <!-- 1. Special case: Format multiple-choice questions -->
          <div v-if="multipleChoiceGames.includes(title)">
            <p>{{ splitMCQs(currentQuestion['Q'])['prompt'] }}</p>
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

          <!-- 2. Non-multiple choice game question -->
          <p v-else-if="currentQuestion">{{ currentQuestion['Q'] }}</p>

          <!-- 3. Otherwise: Show game description for 'Spelling Bee' & 'Car Counting' -->
          <p v-else class="mobile:text-[16px] text-[18px]">
            {{ description }}
          </p>
        </div>
      </div>
      <p v-else class="mobile:text-[16px] text-[18px]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
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
  /* showQuestions: Flag to control visibility of question captions 
    - Set to 'true' if all 3 conditions met: 
    - 1. Game is playing, 
    - 2. Intro audio is completed, 
    - 3. Game has remaining questions to be played
  */
  showQuestions: {
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
});

// TODO: Update this list of MCQ games as needed
const multipleChoiceGames = [
  'Vocabulary Vortex',
  'Polar Pairing',
  'Odd One Out',
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

/* splitMCQs():
 * - Helper function to handle multiple-choice game Q's
 * - Based on 'multipleChoiceGames' list
 */
const splitMCQs = (fullQuestion) => {
  const questionParts = fullQuestion.split('?');

  // Split removes '?' delimiter, so manually add char back in UI
  const prompt = questionParts[0] + '?';

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

  return { prompt, choices };
};
</script>

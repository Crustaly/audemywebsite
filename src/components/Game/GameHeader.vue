<template>
  <div
    class="flex flex-col items-center bg-cross-lines p-10 my-5 rounded-[16px] mobile:w-[70%] w-full shadow-md"
  >
    <div class="my-2">
      <img
        :src="iconSrc"
        alt="Game icon"
        class="mobile:w-[50px] mobile:h-auto w-[70px] h-[70px]"
      />
    </div>
    <h1
      :class="[
        isMobile
          ? 'text-[30px] leading-[50px]'
          : 'text-[40px] leading-[70px] lg:text-[50px]',
      ]"
      class="font-poppins font-semibold text-center"
    >
      {{ title }}
    </h1>
    <div
      :class="[isMobile ? 'w-[280px]' : 'w-[420px]']"
      class="font-poppins leading-[24px] text-center text-[#000000] mobile:px-5 p-3 mobile:m-5 m-0"
    >
      <!-- Accessibility: 
        - Screen readers: Skip duplicate output (since questions are narrated via TTS API)
        - Sighted users: Captions remain visible & readable throughout game (until <GameOver />)
      -->
      <div v-if="showQuestions" aria-hidden="true">
        <p
          class="p-3 font-semibold bg-[#edf7fc] rounded-full w-[60%] mx-auto mobile:text-[18px] text-[20px]"
        >
          Question {{ numOfAudiosPlayed + 1 }}:
        </p>
        <div class="mobile:text-[16px] md:text-[18px] my-2">
          <div v-if="multipleChoiceGames.includes(title)">
            <!-- Special case: Format multiple-choice questions -->
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
          <p v-else>{{ currentQuestion['Q'] }}</p>
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
    type: String,
    required: false,
  },
  /* numOfAudiosPlayed: Index for current question (tracks game progress) */
  numOfAudiosPlayed: {
    type: Number,
    required: false,
    default: 1,
  },
});

const multipleChoiceGames = ['Vocabulary Vortex']; // TODO: Update this list of games as needed

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

/* splitMCQs(): Helper function to handle multiple-choice game Q's
  - Based on 'multipleChoiceGames' list 
*/
const splitMCQs = (fullQuestion) => {
  const questionParts = fullQuestion.split('?');
  const prompt = questionParts[0] + '?'; // split removes '?' delimiter, so manually add char back
  const choices = questionParts[1].split(','); // list of multiple choice, separated by ',' (comma)
  return { prompt, choices };
};
</script>

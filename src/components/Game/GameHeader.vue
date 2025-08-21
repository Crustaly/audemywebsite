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
        <p class="mobile:text-[16px] text-[18px] my-2">
          {{ currentQuestion['Q'] }}
        </p>
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
</script>

<template>
  <div
    class="flex flex-col items-center bg-cross-lines p-10 mt-5 mb-5 rounded-[16px] w-full shadow-md"
  >
    <div class="mb-2 mt-2">
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
          : 'text-[50px] leading-[70px] lg:text-[55px]',
      ]"
      class="font-poppins font-semibold tracking-normal text-center mobile:mb-1 mb-6"
    >
      {{ title }}
    </h1>
    <div
      :class="[isMobile ? 'w-[300px] h-[24px]' : 'w-[420px] h-[24px]']"
      class="font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-center mt-2 mb-8 text-[#000000]"
    >
      <!-- Accessibility: 
        - Screen readers: Skip duplicate output (since questions are narrated via TTS API)
        - Sighted users: Captions remain visible & readable throughout game (until <GameOver />)
      -->
      <div v-if="showQuestions" aria-hidden="true">
        <p class="font-semibold text-[18px] border-b-2 border-primary-color">
          Question {{ numOfAudiosPlayed + 1 }}:
        </p>
        <p class="my-2">{{ currentQuestion['Q'] }}</p>
      </div>
      <p v-else>
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

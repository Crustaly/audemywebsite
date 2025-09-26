<template>
  <GameLayout
    :bgColor="gameConfig.bgColor"
    :isTablet="isTablet"
    :isMobile="isMobile"
    :currentAudios="currentAudios"
    :handleSthNotWorkingButtonClick="handleSthNotWorkingButtonClick"
    :goBack="goBack"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <GameHeader
        :iconSrc="gameConfig.iconSrc"
        :title="gameConfig.title"
        :description="gameConfig.description"
        :isMobile="isMobile"
        :showCaptions="
          playButton &&
          !isIntroPlaying &&
          numOfAudiosPlayed > 0 &&
          numOfAudiosPlayed < 5
        "
        :currentQuestionIndex="currentQuestionIndex"
        :currentQuestion="getCurrentAnswer()"
        :isAnswerPlaying="isAnswerPlaying"
        :isCorrect="isCorrect"
        :showAnswerOnly="true"
      />

      <PlayButton v-if="playButton === false" @play-click="playButton = true" />

      <div
        v-else-if="numOfAudiosPlayed < 5 && playButton === true"
        class="flex flex-col p-4 justify-center"
        id="content"
      >
        <StartQuestionsButton
          v-show="numOfAudiosPlayed === 0"
          :isIntroPlaying="isIntroPlaying"
          @start-click="startFirstQuestion"
        />

        <GameControls
          v-show="!isIntroPlaying && numOfAudiosPlayed > 0"
          :isTablet="isTablet"
          :isMobile="isMobile"
          :isRecording="isRecording"
          :isFinalResult="isFinalResult"
          :isIntroPlaying="isIntroPlaying"
          :isButtonCooldown="isButtonCooldown"
          :transcription="transcription"
          :numOfAudiosPlayed="numOfAudiosPlayed"
          :recordButtonText="recordButtonText"
          :recordButtonClasses="recordButtonClasses"
          :recordButtonTitle="recordButtonTitle"
          :isButtonDisabled="isButtonDisabled"
          @record-click="toggleRecording"
          @repeat-click="repeatQuestion"
        />
      </div>

      <GameOver v-else :score="score" />
    </div>
  </GameLayout>
</template>

<script setup>
// 1. Imports
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import GameLayout from '../../../components/Game/GameLayout.vue';
import GameControls from '../../../components/Game/GameControls.vue';
import GameHeader from '../../../components/Game/GameHeader.vue';
import PlayButton from '../../../components/Game/PlayButton.vue';
import StartQuestionsButton from '../../../components/Game/StartQuestionsButton.vue';
import GameOver from '../../../components/Game/GameOver.vue';

// Configs for <GameHeader/> UI props
import { gameConfigs } from '../../../config/gameConfigs';
const gameConfig = gameConfigs.carCounting;

import { useCarCounting } from '../../../composables/useCarCounting';
import { useDeviceDetection } from '../../../composables/useDeviceDetection';
import { useGameUI } from '../../../composables/useGameUI';
import { useGameNavigation } from '../../../composables/useGameNavigation';
import { requestMicPermission } from '../../../Utilities/requestMicAccess';
import {
  playIntro,
  playQuestion,
  playSound,
  stopAudios,
  playScore,
} from '../../../Utilities/playAudio';
import {
  startListening,
  stopListening,
} from '../../../Utilities/speechRecognition';

// 2. Props / Emits
// (none in this component)

// 3. Refs & Reactive State
// Arrays (static data)
const currentAudios = [];

const carCounting = useCarCounting();

const {
  isPlaying,
  currentQuestionIndex,
  generateCarQuestions,
  playCarSequence,
  validateCarAnswer,
  getCurrentAnswer,
  moveToNextQuestion,
  hasMoreQuestions,
  isGameComplete,
} = carCounting;

const score = ref(0);
const isRecording = ref(false);
const isFinalResult = ref(false);
const transcription = ref('');
const isAnswerPlaying = ref(false);
const isCorrect = ref(false);
const hasStartedFirstQuestion = ref(false);

// UI control states
const playButton = ref(false);
const isIntroPlaying = ref(false);
const isButtonCooldown = ref(false);

// Device Detection
const { isTablet, isMobile, isDesktop } = useDeviceDetection();

const gameState = {
  isIntroPlaying,
  isButtonCooldown,
  isRecording,
  isFinalResult,
};

const gameUI = useGameUI(gameState);

const { goBack, handleSthNotWorkingButtonClick } = useGameNavigation(
  currentAudios,
  'math'
);

// 4. Computed Properties
const numOfAudiosPlayed = computed(() => {
  if (hasStartedFirstQuestion.value && currentQuestionIndex.value === 0) {
    return 1;
  }
  return currentQuestionIndex.value;
});

const isButtonDisabled = computed(
  () => gameUI.isButtonDisabled.value || isPlaying.value
);

const recordButtonClasses = computed(() => [
  ...gameUI.recordButtonClasses.value,
  isPlaying.value ? 'opacity-50 cursor-not-allowed' : '',
]);

const recordButtonTitle = computed(() => {
  if (isPlaying.value) return 'Please wait until the question finishes playing';
  return gameUI.recordButtonTitle.value;
});

const recordButtonText = gameUI.recordButtonText;

const hasQuestionsRemaining = computed(() => hasMoreQuestions());

// 5. Watch/WatchEffect
// (no global watch/watchEffect in this component)

// 6. Lifecycle Hooks
onMounted(() => {
  console.log('Requesting microphone access...');
  requestMicPermission();

  generateCarQuestions();

  // Watch play button to start intro
  watch(playButton, (newVal) => {
    if (newVal) {
      isIntroPlaying.value = true;
      const introAudio = playIntro(gameConfig.introAudio);
      currentAudios.push(introAudio);
      introAudio.onended = () => {
        isIntroPlaying.value = false;
      };
    }
  });
});

onUnmounted(() => {
  // Stop audio playback and cleanup listeners
  console.log('Navigated Back!');
  stopAudios(currentAudios);
});

// 7. Functions/Methods

/**
 * Plays the next question with sequential car sounds
 */
const playNextQuestion = async () => {
  if (hasMoreQuestions() && !isPlaying.value) {
    isButtonCooldown.value = true;

    // Stop all current audios
    stopAudios(currentAudios);
    currentAudios.length = 0; // Clear the array

    try {
      await playCarSequence(currentAudios);
    } finally {
      isButtonCooldown.value = false;
    }
  }
};

/**
 * Toggles the recording state when the record button is clicked
 */
const toggleRecording = async () => {
  if (hasMoreQuestions() && !isIntroPlaying.value && !isPlaying.value) {
    if (!isRecording.value) {
      // Start recording
      isRecording.value = true;
      isFinalResult.value = false;
      playSound('ding-sound.mp3');

      startListening(
        (transcript) => {
          transcription.value = transcript;
        },
        false,
        (status) => {
          switch (status) {
            case 'listening':
              isFinalResult.value = false;
              break;
            case 'interim':
              isFinalResult.value = false;
              break;
            case 'final':
              isFinalResult.value = true;
              break;
            case 'ended':
              isFinalResult.value = true;
              break;
            case 'error':
              isFinalResult.value = false;
              break;
          }
        }
      );
    } else {
      if (isFinalResult.value) {
        isButtonCooldown.value = true;
        console.log('Processing recording...');

        // Get the final transcript
        const finalTranscript = transcription.value;

        stopListening();

        // Process the answer
        console.log('User Answer:', finalTranscript);
        console.log('Correct Answer:', getCurrentAnswer());

        isCorrect.value = validateCarAnswer(finalTranscript);

        isAnswerPlaying.value = true;

        if (isCorrect.value) {
          score.value++;
          console.log('Correct Answer!');
          await playSound('correctaudio.mp3');
        } else {
          console.log('Wrong Answer!');
          await playSound('incorrectaudio.mp3');

          const incorrectAudio = 'The correct answer is ' + getCurrentAnswer();
          await playQuestion(incorrectAudio);
        }

        // Reset reactive values before playing next question
        transcription.value = '';
        isRecording.value = false;
        isFinalResult.value = false;
        isAnswerPlaying.value = false;
        isCorrect.value = false;
        moveToNextQuestion();

        if (!isGameComplete()) {
          playNextQuestion();
        } else {
          playScore(score.value);
        }
      }
    }
  }
};

/**
 * Repeats the current question
 */
const repeatQuestion = () => {
  if (
    hasMoreQuestions() &&
    !isPlaying.value &&
    !isIntroPlaying.value &&
    !isButtonCooldown.value
  ) {
    isButtonCooldown.value = true;

    console.log(
      'Repeating question for Car Counting game - Question #' +
        (currentQuestionIndex.value + 1)
    );

    playNextQuestion();

    // Delay of 4 seconds
    setTimeout(() => {
      isButtonCooldown.value = false;
    }, 4000);
  } else if (isIntroPlaying.value) {
    console.log('Cannot repeat question while introduction is playing');
  } else if (isPlaying.value) {
    console.log('Cannot repeat question while audio is playing');
  } else if (isButtonCooldown.value) {
    console.log('Please wait before repeating the question again');
  }
};

/**
 * Starts the first question
 * Only used for mobile devices
 */
const startFirstQuestion = () => {
  console.log('Starting first question...');
  hasStartedFirstQuestion.value = true;

  // Remain at current index 0
  // since toggleRecording() calls moveToNextQuestion()
  playNextQuestion();
};

// 8. Exposed Values
// (none exposed in this component)
</script>

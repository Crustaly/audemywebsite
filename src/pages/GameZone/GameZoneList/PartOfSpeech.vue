<template>
  <GameLayout
    bgColor="#6FFFC6"
    :isTablet="isTablet"
    :isMobile="isMobile"
    :currentAudios="currentAudios"
    :handleSthNotWorkingButtonClick="handleSthNotWorkingButtonClick"
    :goBack="goBack"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <GameHeader
        iconSrc="/assets/gameImages/buttons/gameButtons/pos.svg"
        title="Part of Speech"
        description="Noun, verb, or adjective?"
        :isMobile="isMobile"
      />

      <PlayButton v-if="playButton === false" @play-click="playButton = true" />

      <div
        v-else-if="numOfAudiosPlayed < 5 && playButton === true"
        class="flex flex-col p-4 justify-center"
        id="content"
      >
        <StartQuestionsButton
          v-show="(isTablet || isMobile) && numOfAudiosPlayed === 0"
          :isIntroPlaying="isIntroPlaying"
          @start-click="startFirstQuestion"
        />

        <GameControls
          v-show="
            !(isTablet || isMobile) ||
            (!isIntroPlaying && numOfAudiosPlayed > 0)
          "
          :isTablet="isTablet"
          :isMobile="isMobile"
          :isRecording="isRecording"
          :isIntroPlaying="isIntroPlaying"
          :isButtonCooldown="isButtonCooldown"
          :transcription="transcription"
          :numOfAudiosPlayed="numOfAudiosPlayed"
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
const randQueNum = [];
let questionsDb = [];

// Game state variables
const numOfAudiosPlayed = ref(0);
const score = ref(0);
const isRecording = ref(false);
const transcription = ref('');

// UI control states
const playButton = ref(false);
const isIntroPlaying = ref(false);
const isButtonCooldown = ref(false);

// Device Detection
const isTablet = ref(false);
const isMobile = ref(false);

// 4. Computed Properties
const isDesktop = computed(() => !isTablet.value && !isMobile.value);

const currentQuestion = computed(() => {
  if (
    numOfAudiosPlayed.value < 5 &&
    questionsDb.length > 0 &&
    randQueNum.length > numOfAudiosPlayed.value
  ) {
    return questionsDb[randQueNum[numOfAudiosPlayed.value]];
  }
  return null;
});

const isButtonDisabled = computed(
  () => isIntroPlaying.value || isButtonCooldown.value
);

const recordButtonClasses = computed(() => [
  'flex items-center justify-center shadow-md',
  isTablet.value
    ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
    : isMobile.value
      ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
      : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
  isRecording.value ? 'bg-red-500' : 'bg-[#087BB4]',
  'text-white',
  isButtonDisabled.value ? 'opacity-50 cursor-not-allowed' : '',
]);

const recordButtonTitle = computed(() => {
  if (isIntroPlaying.value)
    return 'Please wait until the introduction finishes';
  if (isButtonCooldown.value)
    return 'Please wait before repeating the question again';
  return 'Record your answer';
});

// 5. Watch/WatchEffect
// (no global watch/watchEffect in this component)

// 6. Lifecycle Hooks
onMounted(() => {
  console.log('Requesting microphone access...');
  requestMicPermission();

  checkDeviceType();
  window.addEventListener('resize', checkDeviceType);

  generateQuestions();

  // Watch play button to start intro
  watch(playButton, (newVal) => {
    if (newVal) {
      isIntroPlaying.value = true;
      const introAudio = playIntro('/partOfSpeech/partofspeechintro.mp3');
      currentAudios.push(introAudio);
      introAudio.onended = () => {
        isIntroPlaying.value = false;
        // Only auto-play next question on desktop
        if (isDesktop.value) {
          playNextQuestion();
        }
      };
    }
  });
});

onUnmounted(() => {
  // Stop audio playback and cleanup listeners
  console.log('Navigated Back!');
  stopAudios(currentAudios);
  window.removeEventListener('resize', checkDeviceType);
});

// 7. Functions/Methods
/**
 * Checks the device type on mount and on window resize
 */
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width <= 1024) {
    // Medium devices (tablets, including iPad Pro width)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width > 1024) {
    // Large devices (laptops/desktops)
    isTablet.value = false;
    isMobile.value = false;
  } else {
    // Extra small devices (phones)
    isTablet.value = false;
    isMobile.value = true;
  }
};

/**
 * Generates part of speech questions using JSON file
 */
const generateQuestions = () => {
  console.log('Generating Questions...');
  // Generate 5 random numbers for the questions
  while (randQueNum.length < 5) {
    let num = Math.floor(Math.random() * 10);
    if (!randQueNum.includes(num)) {
      randQueNum.push(num);
    }
  }
  // Fetch questions from JSON file
  fetch('/assets/questionsDb/partOfSpeechDB.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Questions:', data['PartOfSpeechGame']['Questions']['Easy']);
      // Process the questions data as needed
      questionsDb = data['PartOfSpeechGame']['Questions']['Easy'];
    })
    .catch((error) => {
      console.error('Error fetching questions:', error);
    });
};

/**
 * Plays the next question
 */
const playNextQuestion = async () => {
  if (numOfAudiosPlayed.value < 5 && currentQuestion.value) {
    console.log(currentQuestion.value);

    isButtonCooldown.value = true;
    await playQuestion(currentQuestion.value['Q']);
    isButtonCooldown.value = false;
  }
};

/**
 * Toggles the recording state when the record button is clicked
 */
const toggleRecording = () => {
  if (numOfAudiosPlayed.value < 5 && !isIntroPlaying.value) {
    if (!isRecording.value) {
      isRecording.value = true;

      startListening((transcript) => {
        transcription.value = transcript;
      }, false);
    } else {
      isButtonCooldown.value = true;
      console.log('Processing recording...');

      const finalTranscript = transcription.value;

      // Process the answer
      const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
      console.log('Question is: ', question['Q']);
      console.log('User Answer:', finalTranscript);
      console.log('Correct Answer:', question['A']);

      const userWords = finalTranscript
        .toLowerCase()
        .replace(/[.,!?]/g, '')
        .split(/\s+/);

      const correctAnswers = Array.isArray(question['A'])
        ? question['A'].map((a) => a.toLowerCase())
        : [question['A'].toLowerCase()];

      if (userWords.some((word) => correctAnswers.includes(word))) {
        score.value++;
        console.log('Correct Answer!');
        playSound('correctaudio.mp3');
      } else {
        console.log('Wrong Answer!');
        playSound('incorrectaudio.mp3');
        const incorectAudio = 'The correct answer is ' + question['A'][0];

        setTimeout(() => {
          currentAudios.push(playQuestion(incorectAudio));
        }, 1000);
      }

      stopListening();
      isRecording.value = false;
      numOfAudiosPlayed.value++;

      setTimeout(() => {
        transcription.value = '';
        console.log('Recording processed and stopped');

        if (numOfAudiosPlayed.value < 5) {
          setTimeout(() => {
            playNextQuestion();
          }, 2000);
        } else {
          console.log('Game Over!');
          setTimeout(() => {
            playScore(score.value);
          }, 2000);
        }
      }, 1000);
    }
  }
};

/**
 * Handles the back button click
 */
const goBack = () => {
  console.log('Going back...');
  // Stop all audio playback before navigating away
  stopAudios(currentAudios);
  // Force navigate to the game zone page
  window.location.href = '/game-zone';
};

/**
 * Repeats the current question
 */
const repeatQuestion = () => {
  if (
    numOfAudiosPlayed.value < 5 &&
    !isIntroPlaying.value &&
    !isButtonCooldown.value
  ) {
    isButtonCooldown.value = true;

    console.log(
      'Repeating question for Part of Speech game - Question #' +
        (numOfAudiosPlayed.value + 1)
    );

    playNextQuestion();

    // Delay of 4 seconds
    setTimeout(() => {
      isButtonCooldown.value = false;
    }, 4000);
  } else if (isIntroPlaying.value) {
    console.log('Cannot repeat question while introduction is playing');
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
  numOfAudiosPlayed.value = 1;
  playNextQuestion();
};

/**
 * Handles the something not working button click
 */
const handleSthNotWorkingButtonClick = () => {
  console.log('Navigating to Troubleshooting Page...');
  // Stop all audio playback before navigating away
  stopAudios(currentAudios);
  // Force navigate to the game zone page
  window.location.href = '/troubleshooting';
};

// 8. Exposed Values
// (none exposed in this component)
</script>

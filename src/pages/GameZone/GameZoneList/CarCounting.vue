<template>
  <GameLayout
    bgColor="#FBEB86"
    :isTablet="isTablet"
    :isMobile="isMobile"
    :currentAudios="currentAudios"
    :handleSthNotWorkingButtonClick="handleSthNotWorkingButtonClick"
    :goBack="goBack"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <GameHeader
        iconSrc="/assets/gameImages/buttons/gameButtons/cc.svg"
        title="Car Counting"
        description="How many cars are passing by?"
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
const answers = [];

// Game state variables
const numOfAudiosPlayed = ref(0);
const score = ref(0);
const isRecording = ref(false);
const isFinalResult = ref(false);
const transcription = ref('');
const isPlaying = ref(false);

// UI control states
const playButton = ref(false);
const isIntroPlaying = ref(false);
const isButtonCooldown = ref(false);

// Device Detection
const isTablet = ref(false);
const isMobile = ref(false);

// 4. Computed Properties
const isDesktop = computed(() => !isTablet.value && !isMobile.value);

const isButtonDisabled = computed(
  () =>
    isIntroPlaying.value ||
    isButtonCooldown.value ||
    isPlaying.value ||
    (isRecording.value && !isFinalResult.value)
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
  isButtonDisabled.value || isPlaying.value
    ? 'opacity-50 cursor-not-allowed'
    : '',
]);

const recordButtonTitle = computed(() => {
  if (isIntroPlaying.value)
    return 'Please wait until the introduction finishes';
  if (isButtonCooldown.value || isPlaying.value)
    return 'Please wait until the question finishes playing';
  if (isRecording.value && !isFinalResult.value)
    return 'Processing your speech...';
  return 'Record your answer';
});

const recordButtonText = computed(() => {
  if (isRecording.value && !isFinalResult.value) {
    return isTablet.value || isMobile.value
      ? 'Processing...'
      : 'Processing Speech...';
  }
  return isRecording.value
    ? 'Stop Recording'
    : isTablet.value || isMobile.value
    ? 'Record'
    : 'Record Answer';
});

const repeatButtonTitle = computed(() => {
  if (isIntroPlaying.value)
    return 'Please wait until the introduction finishes';
  if (isPlaying.value) return 'Please wait while the question is playing';
  if (isButtonCooldown.value)
    return 'Please wait before repeating the question again';
  return 'Repeat the current question';
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
      const introAudio = playIntro('/gameIntroAudio/carCountIntro.mp3');
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
 * Handles the back button click
 */
const goBack = () => {
  console.log('Going back...');
  // Stop all audio playback before navigating away
  stopAudios(currentAudios);
  // Save the source category to sessionStorage
  sessionStorage.setItem('gameCategory', 'math');
  // Force navigate to the game zone page
  window.location.href = '/game-zone';
};

/**
 * Generates random number of cars as Questions
 */
const generateQuestions = () => {
  console.log('Generating Questions...');
  // Generate 5 random numbers for the questions
  while (randQueNum.length < 5) {
    let num = Math.floor(Math.random() * 5) + 1;
    if (!randQueNum.includes(num)) {
      randQueNum.push(num);
      const answerMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
      };
      answers.push(answerMap[num]);
    }
  }
  console.log('Random Numbers: ', randQueNum);
  console.log('Answers: ', answers);
};

/**
 * Plays the next question with sequential car sounds
 */
const playNextQuestion = async () => {
  if (numOfAudiosPlayed.value < 5 && !isPlaying.value) {
    isButtonCooldown.value = true;
    isPlaying.value = true;

    // Stop all current audios
    stopAudios(currentAudios);
    currentAudios.length = 0; // Clear the array

    const audiosToPlay = [];

    await playQuestion('Question Number ' + (numOfAudiosPlayed.value + 1));

    // Add the car passing by audios
    for (let i = 0; i < randQueNum[numOfAudiosPlayed.value]; i++) {
      audiosToPlay.push('/assets/carCounting/carpassby.mp3');
    }

    // Play all car audios in sequence
    for (const audioSrc of audiosToPlay) {
      await new Promise((resolve) => {
        console.log('Playing - ' + audioSrc);
        const audio = new Audio(audioSrc);
        audio.play();
        audio.onended = resolve;
        currentAudios.push(audio);
      });
    }

    // Add the final audio
    await playQuestion('How many cars did you hear?');

    isPlaying.value = false;
    isButtonCooldown.value = false;
  }
};

/**
 * Toggles the recording state when the record button is clicked
 */
const toggleRecording = async () => {
  if (
    numOfAudiosPlayed.value < 5 &&
    !isIntroPlaying.value &&
    !isPlaying.value
  ) {
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
        console.log('Correct Answer:', randQueNum[numOfAudiosPlayed.value]);

        const cleanedInput = finalTranscript
          .trim()
          .toLowerCase()
          .replace(/[^\w\s]/g, ''); // removes punctuation
        if (
          cleanedInput.includes(answers[numOfAudiosPlayed.value].toLowerCase())
        ) {
          score.value++;
          console.log('Correct Answer!');
          await playSound('correctaudio.mp3');
        } else {
          console.log('Wrong Answer!');
          await playSound('incorrectaudio.mp3');

          const incorectAudio =
            'The correct answer is ' + answers[numOfAudiosPlayed.value];
          await playQuestion(incorectAudio);
        }

        transcription.value = '';
        isRecording.value = false;
        isFinalResult.value = false;
        numOfAudiosPlayed.value++;

        const isGameOver = numOfAudiosPlayed.value >= 5;

        if (!isGameOver) {
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
    numOfAudiosPlayed.value < 5 &&
    !isPlaying.value &&
    !isIntroPlaying.value &&
    !isButtonCooldown.value
  ) {
    isButtonCooldown.value = true;

    console.log(
      'Repeating question for Car Counting game - Question #' +
        (numOfAudiosPlayed.value + 1)
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
  numOfAudiosPlayed.value = 1; // This will trigger the buttons to show
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

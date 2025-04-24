<template>
  <div class="min-h-screen font-poppins bg-[#F9AEB0]">
    <!-- Header -->
    <div class="w-full">
      <GamePagesHeader />
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <!-- Sun - Only for desktop -->
      <div
        v-show="!isTablet && !isMobile"
        class="absolute top-20 right-60 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="#FFD137" />
        </svg>
      </div>
      <!-- Clouds - Different for tablet -->
      <template v-if="isTablet">
        <!-- Left cloud for tablet -->
        <div class="absolute left-0 z-0" style="bottom: 150px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-left.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
          <!-- Paper plane above left cloud -->
          <div
            class="absolute"
            style="width: 82px; height: 82px; top: -350px; left: 50.05px"
          >
            <img
              src="/assets/gameImages/paperPlane.png"
              alt="Paper plane"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
        <!-- Right cloud for tablet -->
        <div class="absolute bottom-0 right-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
        </div>
      </template>
      <!-- Clouds for desktop -->
      <template v-else-if="isDesktop">
        <div class="absolute bottom-0 left-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg.png"
            alt="Decorative cloud"
            style="width: 400px; height: auto"
          />
        </div>
      </template>
      <!-- Mobile-specific clouds -->
      <template v-if="isMobile">
        <!-- Only right cloud for mobile -->
        <div class="absolute right-0 z-0" style="bottom: 20px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 250px"
          />
        </div>
      </template>
    </div>

    <!-- Main Content -->
    <div class="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div class="relative w-full max-w-[800px]">
        <!-- Back Button Container -->
        <div v-show="!isMobile" class="absolute top-4 left-4 z-30">
          <button @click="goBack">
            <img
              src="/assets/gameImages/buttons/arrow-back.svg"
              class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
              alt="Back Button Image"
            />
          </button>
        </div>

        <!-- Game Elements Container -->
        <div
          class="flex flex-col justify-center items-center relative z-10 mx-auto"
          :class="[
            isMobile
              ? 'h-[calc(60vh-144px)] w-[95%] mt-16'
              : 'h-[calc(60vh-64px)] w-[90%]',
          ]"
        >
          <!-- Back Button for Mobile -->
          <div v-show="isMobile" class="self-center -mt-32 mb-8">
            <button @click="goBack">
              <img
                src="/assets/gameImages/buttons/arrow-back.svg"
                class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                alt="Back Button Image"
              />
            </button>
          </div>

          <div class="flex flex-col justify-center items-center mb-8">
            <!-- Game icon and title -->
            <div class="flex flex-col items-center">
              <div class="mb-2">
                <img
                  src="/assets/gameImages/buttons/gameButtons/book.svg"
                  alt="Game icon"
                  class="w-[70px] h-[70px]"
                />
              </div>
              <h1
                :class="[
                  isMobile
                    ? 'text-[56px] leading-[60px]'
                    : 'text-[64px] leading-[70px]',
                ]"
                class="font-poppins font-semibold tracking-normal text-center mb-6"
              >
                Vocabulary Vortex
              </h1>
              <p
                :class="[
                  isMobile ? 'w-[350px] h-[24px]' : 'w-[397px] h-[24px]',
                ]"
                class="font-poppins font-normal text-[16px] leading-[24px] tracking-normal text-center mt-2 mb-8 text-[#777777]"
              >
                Dive into the vocabulary vortex and match the word to its
                definition.
              </p>
            </div>

            <div v-if="playButton === false">
              <button
                @click="playButton = true"
                class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
              >
                Play
              </button>
            </div>
            <div
              v-else-if="numOfAudiosPlayed < 5 && playButton === true"
              class="flex flex-col p-4 justify-center"
              id="content"
            >
              <!-- Mobile/Tablet Start Questions Button - Only show before questions start -->
              <div v-show="(isTablet || isMobile) && numOfAudiosPlayed === 0">
                <button
                  @click="startFirstQuestion"
                  class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b] mb-6"
                  :disabled="isIntroPlaying"
                  :class="{ 'opacity-50 cursor-not-allowed': isIntroPlaying }"
                >
                  {{ isIntroPlaying ? 'Please wait...' : 'Start Questions' }}
                </button>
              </div>

              <!-- Different button styling for tablet -->
              <div
                v-show="
                  !(isTablet || isMobile) ||
                  (!isIntroPlaying && numOfAudiosPlayed > 0)
                "
                :class="[
                  isTablet
                    ? 'flex gap-[25px] mb-6'
                    : isMobile
                    ? 'flex flex-col gap-4 mb-6'
                    : 'flex gap-6 mb-6',
                ]"
              >
                <!-- Record Answer Button -->
                <button
                  @click="toggleRecording"
                  :class="recordButtonClasses"
                  style="box-shadow: 10px 10px 20px 0px #32323233"
                  :disabled="isButtonDisabled"
                  :title="recordButtonTitle"
                >
                  <span class="text-lg font-medium">
                    {{
                      isRecording
                        ? 'Stop Recording'
                        : isTablet || isMobile
                        ? 'Record'
                        : 'Record Answer'
                    }}
                  </span>
                  <img
                    src="/assets/gameImages/buttons/mic.png"
                    class="w-6 h-6"
                    alt="Record Icon"
                  />
                </button>

                <!-- Repeat Question Button -->
                <button
                  @click="repeatQuestion"
                  :class="[
                    'flex items-center justify-center shadow-md',
                    isTablet
                      ? 'w-[200px] h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
                      : isMobile
                      ? 'w-full h-[60px] pt-5 pr-[30px] pb-5 pl-[30px] gap-[10px] rounded-[20px]'
                      : 'gap-2.5 w-[234px] h-[116px] pt-5 pr-7 pb-5 pl-7 rounded-[20px]',
                    'bg-white border border-[#0096D6] text-[#0096D6]',
                    isIntroPlaying || isButtonCooldown
                      ? 'opacity-50 cursor-not-allowed'
                      : '',
                  ]"
                  style="box-shadow: 10px 10px 20px 0px #32323233"
                  :disabled="isIntroPlaying || isButtonCooldown"
                  :title="
                    isIntroPlaying
                      ? 'Please wait until the introduction finishes'
                      : isButtonCooldown
                      ? 'Please wait before repeating the question again'
                      : 'Repeat the current question'
                  "
                >
                  <span class="text-lg font-medium">{{
                    isTablet || isMobile ? 'Repeat' : 'Repeat Question'
                  }}</span>
                  <img
                    src="/assets/gameImages/buttons/repeat.png"
                    class="w-6 h-6"
                    alt="Repeat Icon"
                  />
                </button>
              </div>

              <div
                id="transcript"
                v-show="
                  !(isTablet || isMobile) ||
                  (!isIntroPlaying && numOfAudiosPlayed > 0)
                "
                class="text-center text-xl font-bold pt-2 pb-1"
              >
                You said: {{ transcription }}
              </div>
            </div>

            <!-- Game over section -->
            <div v-else>
              <div class="text-center text-3xl font-bold pt-2 pb-1">
                Game Over
              </div>
              <div class="text-center text-xl font-medium pt-2 pb-1">
                Score: {{ score }} / 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. Imports
import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import GamePagesHeader from '../../Header/GamePagesHeader.vue';
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
    return 'Please wait until the question finishes playing';
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
      const introAudio = playIntro('/vocabVortex/vortexintro.mp3');
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
  } else if (width >= 768 && width < 1024) {
    // Medium devices (tablets)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width >= 1024) {
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
  // Force navigate to the game zone page
  window.location.href = '/game-zone';
};

/**
 * Generates vocabulary questions using JSON file
 */
const generateQuestions = () => {
  console.log('Generating Questions...');
  // Generate 5 random numbers for the questions
  while (randQueNum.length < 5) {
    let num = Math.floor(Math.random() * 15);
    if (!randQueNum.includes(num)) {
      randQueNum.push(num);
    }
  }
  // Fetch questions from JSON file
  fetch('/assets/questionsDb/VocabVortexDB.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Questions:', data['VocabVortexGame']['Questions']['Easy']);
      // Process the questions data as needed
      questionsDb = data['VocabVortexGame']['Questions']['Easy'];
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
        isButtonCooldown.value = false;
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
      'Repeating question for Vocabulary Vortex game - Question #' +
        (numOfAudiosPlayed.value + 1)
    );

    playNextQuestion();

    // Delay of 5 seconds
    setTimeout(() => {
      isButtonCooldown.value = false;
    }, 5000);
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
  numOfAudiosPlayed.value = 1; // This will trigger the buttons to show
  playNextQuestion();
};

// 8. Exposed Values
// (none exposed in this component)
</script>

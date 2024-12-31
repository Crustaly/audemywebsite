<template>
  <div class="flex flex-col justify-center items-center h-screen font-poppins bg-[#FAEDD6]">
    <div class="flex mt-2 mb-2 w-1/2">
      <button onclick="history.back()"> <img src="/assets/gameImages/buttons/arrow-back.svg"
          class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300" /></button>
    </div>
    <div class="flex flex-col my-2 mx-56 h-96 justify-center items-center">
      <div class="m-10 py-4 text-center">
        <h1 class="text-4.5xl font-bold">Multiplication Madness</h1>
      </div>
      <div v-if="numOfAudiosPlayed < 5" class="flex flex-col p-4 justify-center" id="content">
        <div class="flex flex-row gap-4">
          <div class="p-2 px-5 text-[#087bb4]">&#9432; Hold 'SPACE' to say the answer</div>
        </div>
        <div id="transcript" class="text-center text-xl font-bold pt-2 pb-1">You said: {{ transcription }}</div>
      </div>
      <div v-else>
        <div class="text-center text-3xl font-bold pt-2 pb-1">Game Over</div>
        <div class="text-center text-xl font-medium pt-2 pb-1">Score: {{ score }}/5</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { requestMicPermission } from '../../../Utilities/requestMicAccess'
  import { playIntro, playQuestion, playSound, stopAudios } from '../../../Utilities/playAudio';
  import { startListening, stopListening } from '../../../Utilities/speechRecognition';

  let currentAudios = [], randQueNum = [], questionsDb = [];
  let numOfAudiosPlayed = ref(0), score = ref(0);
  let isListening = ref(false), transcription = ref('');

  // Generate multiplication questions using Json file
  const generateQuestions = () => {
    console.log('Generating Questions...');
    // Generate 5 random numbers for the questions
    while (randQueNum.length < 5) {
      let num = Math.floor(Math.random() * 15);
      if (!randQueNum.includes(num)) {
        randQueNum.push(num);
      }
    }
    console.log('Random Numbers:', randQueNum);
    // Fetch questions from JSON file
    fetch('/src/assets/questionsDb/additionDb.json')
      .then(response => response.json())
      .then(data => {
        console.log('Questions:', data['AdditionGame']['Questions']['Easy']);
        questionsDb = data['AdditionGame']['Questions']['Easy'];
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }

  // Play the next question
  const playNextQuestion = () => {
    if (numOfAudiosPlayed.value < 5) {
      const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
      currentAudios.push(playQuestion(question['Q']));
    }
  };

  // Handle the spacebar events
  const handleKeyDown = (event) => {
    if (event.code === 'Space' && !isListening.value && numOfAudiosPlayed.value < 5) {
      isListening.value = true;
      startListening((transcript) => {
        const question = questionsDb[randQueNum[numOfAudiosPlayed.value]];
        console.log('Question is: ', question['Q']);
        console.log('User Answer:', transcript);
        console.log('Correct Answer:', question['A']);
        transcription.value = transcript;
        if (transcript.trim() === question['A']) {
          score.value++;
          console.log('Correct Answer!');
          playSound('correctaudio.mp3');
        } else {
          console.log('Wrong Answer!');
          playSound('incorrectaudio.mp3');
        }
        stopListening();
        isListening.value = false;
        numOfAudiosPlayed.value++;
        if (numOfAudiosPlayed.value < 5) {
          setTimeout(() => {
            playNextQuestion();
          }, 2000);
        }
      });
    }
  };

  // Stop listening on keyup
  const handleKeyUp = (event) => {
    if (event.code === 'Space' && isListening.value) {
      stopListening();
      isListening.value = false;
    }
  };

  onMounted(() => {    
    // Request microphone access on page load
    console.log('Requesting microphone access...');
    requestMicPermission();
    
    // Generate questions
    generateQuestions();
    
    // Play introduction audio
    const introAudio = playIntro('multiplicationintro.mp3');
    currentAudios.push(introAudio);
    console.log('AudiosList: ', currentAudios);

    // Delay the start of the first question until the intro audio is finished
    introAudio.onended = () => {
      playNextQuestion();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  })

  onUnmounted(() => {
    console.log('Navigate Back!');
    stopAudios(currentAudios);
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  })
</script>
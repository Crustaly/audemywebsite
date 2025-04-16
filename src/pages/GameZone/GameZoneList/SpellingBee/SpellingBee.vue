<script>
//Import ref state for state management
import { ref, onMounted, onUnmounted } from 'vue'
import { requestMicPermission } from './methods/RequestMicPermission';
import { RecordAnswer } from './methods/RecordAnswer';
import { getQuestion } from './methods/getQuestion';

export default {
  setup() {


    //Answers to audio files 1-5 and game variables
    const answers = ['drive', 'great', 'mystery', 'exciting', 'table'];
    const userAnswer = ref('')
    const score = ref(0);
    const result = ref(0);
    const round = ref(1);
    const audioPlayer = ref(null)
    const audioSrc = ref('')
    let cleanup = null

    // Request mic permissions and RecordAnswer when the component mounts
    onMounted(() => {
      requestMicPermission();
      cleanup = RecordAnswer(userAnswer)
      .catch(error => {
        console.error("Error during recording:", error);
      });
    });
    onUnmounted(() => {
      //Unmount event listeners when the component unmounts
      if (cleanup) {
        cleanup()
      }
    })

    const playAudio = () => {
  // Send current round to getQuestion method to fetch path to audio file
  audioSrc.value = getQuestion(round.value);
  
  if (audioPlayer.value) {
    // Set up error handling for loading errors
    audioPlayer.value.onerror = function(e) {
      console.error("Audio loading error:", e);
      
      // Check if there's an HTTP error status available
      if (audioPlayer.value.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
        const errorUrl = audioPlayer.value.src;
        
        // Check for specific HTTP error codes in the error message or response
        // Note: The exact error info depends on browser implementation
        fetch(errorUrl, { method: 'HEAD' })
          .then(response => {
            if (!response.ok) {
              switch (response.status) {
                case 401:
                  alert('Unauthorized: You don\'t have permission to access this audio file.');
                  break;
                case 400:
                  alert('Bad Request: The audio file request was invalid.');
                  break;
                case 405:
                  alert('Method Not Allowed: The request method is not supported.');
                  break;
                case 429:
                  alert('Too Many Requests: Please try again later.');
                  break;
                default:
                  alert('Error loading audio file. Please try again later.');
              }
            }
          })
          .catch(() => {
            alert('Error loading audio file. Please try again later.');
          });
      } else {
        alert('Error loading audio file. Please try again later.');
      }
    };
    
    // Play Audio
    audioPlayer.value.src = audioSrc.value;
    // Load new audio file
    audioPlayer.value.load();
    // Wait for load of file
    // play() is already async by default
    audioPlayer.value.play()
      .catch(error => {
        console.error("Error playing audio:", error); // Handle any playback errors
        alert('Error playing audio. Please try again later.');
      });
  }
};



    return {
      userAnswer,
      score,
      result,
      round,
      audioPlayer,
      audioSrc,
      playAudio
    };
  },
};


</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="flex flex-col my-20 mx-56 bg-orange-200 h-96 border-2 border-orange-300 rounded-lg shadow-lg justify-center items-center">
      <div class="m-10 py-4">
        <h1 class="barriecito-regular text-5xl font-bold" id="barriecito-regular">Welcome to Spelling Bee</h1>
      </div>
      <div class="flex flex-col p-4 justify-center" id="content">
        <div class="flex flex-row gap-4">
          <div class="bg-green-400 p-2 shadow-lg rounded-lg px-5 text-green-700 border-2 border-green-700 font-medium">
            Hit
            'SHIFT' to play the question</div>
          <div class="bg-red-300 p-2 shadow-lg rounded-lg px-5 text-red-700 border-2 border-red-700 font-medium">Hold
            'SPACE' to record your answer</div>
          <!-- Add Audio player so student can repeat the question again -->
          <audio ref="audioPlayer" :src="audioSrc" />
          <button @click="playAudio">Play Audio</button>
        </div>

        <div id="transcript" class="text-center pt-2 pb-1">You said:{{ userAnswer }}</div>
        <div id="answer" class="text-center pt-1 pb-2">Result:{{ result }}</div>
        <div id="score" class="text-center pt-1 pb-2">Score:{{ score }}</div>
      </div>

    </div>
  </div>
</template>

<template>
  <div class="flex flex-col justify-between items-center h-screen py-12 font-poppins bg-[#E6E1F3]">
    <div class="flex justify-between mt-2 mb-2 w-3/4">
      <button onclick="history.back()"> 
        <img src="/assets/gameImages/buttons/arrow-back.svg"
          class="bg-white border-2 rounded-lg border-black h-14 p-3 shadow-md hover:bg-gray-300" />
      </button>
      <button onclick="history.back()" class="bg-white border-2 rounded-lg border-black h-14 p-5 shadow-md flex gap-3 items-center hover:bg-gray-300"> 
        <div><i class="material-icons">input</i></div>
        <div class=" font-semibold">Log in</div>
      </button>
    </div>
    <div class="border-2 w-3/4 flex text-center">
      <div class="text-4.5xl font-bold">Multiplication Madness</div>
    </div>
    <div class="flex flex-col my-2 mx-56 w-3/4 justify-center items-center bg-white rounded-[10px] border-[2px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D]">
      <div class="flex flex-col justify-center w-full" id="content">
        <!-- Progress Bar -->
        <div>
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        </div>

        <!-- Media Controls -->
        <div class="flex justify-between items-end w-full px-4">
          <!-- Previous Button -->
          <div class="flex flex-col items-center">
            <div><i class="text-3xl material-icons">skip_previous</i></div>
            <div>Previous</div>
          </div>
          <!-- Rewind 5s Button -->
          <div class="flex flex-col items-center">
            <div><i class="text-3xl material-icons">replay_5</i></div>
            <div>Rewind</div>
          </div>
          
          <!-- Play Button -->
          <div class="flex flex-col items-center">
            <div><i class="text-5xl material-icons">play_circle_outline</i></div>
            <div>Play</div>
          </div>
          <!-- Repeat Button -->
          <div class="flex flex-col items-center">
            <div><i class="text-3xl material-icons">repeat</i></div>
            <div>Repeat</div>
          </div>
          
          <!-- Next Button -->
          <div class="flex flex-col items-center">
            <div><i class="text-3xl material-icons">skip_next</i></div>
            <div>Next</div>
          </div>
        </div>

        <div id="transcript" class="text-center text-xl font-bold pt-2 pb-1">You said: {{ transcription }}</div>
        <div class="text-center text-xl pt-1 pb-2" v-text="gameOverMessage"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recognition: null,
      isRecording: false,
      audioContext: null,
      answers: ["48", "30", "36", "15", "35"],
      points: 0,
      audioNum: 0,
      transcription: '',
      resultMessage: '',
      gameOverMessage: '',
      recordSound: new Audio('/assets/generalAudio/ding-sound.mp3'),
      currentAudios: [],
      timeoutId: null // To store the setTimeout ID
    };
  },
  methods: {
    // Request microphone permission and initialize AudioContext
    requestMicPermission() {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          console.log("Microphone access granted");
          this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
          this.initializeSpeechRecognition();
        })
        .catch((error) => {
          console.error("Microphone access denied:", error);
        });
    },

    // Method to play the game introduction audio
    playIntroAudio() {
      const introAudioPath = '/assets/multiplicationmadness/multiplicationintro.mp3';
      console.log('Playing introduction audio:', introAudioPath);
      const audio = new Audio(introAudioPath);
      this.currentAudios.push(audio);
      audio.play();
    },

    // Initialize the SpeechRecognition API
    initializeSpeechRecognition() {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Transcription:", transcript);

        //this.$refs.transcript.textContent = `You said: ${transcript}`;
        this.transcription = transcript;
        this.checkAnswer(transcript, this.audioNum);
        this.audioNum++;
        //this.displayScore();
        console.log('Audio Number: ', this.audioNum);
        this.endGame();
      };

      this.recognition.onerror = (event) => {
        console.error("Recognition error:", event.error);
      };

      this.recognition.onend = () => {
        this.isRecording = false;
        console.log("Stopped recording");
      };
    },

    // Start speech recognition
    startRecording() {
      if (!this.isRecording && this.audioContext) {
        this.recognition.start();
        this.isRecording = true;
        console.log("Started recording...");
        this.recordSound.play();
      }
    },

    // Stop speech recognition
    stopRecording() {
      if (this.isRecording) {
        this.recognition.stop();
      }
    },

    // Play audio for the current question
    playAudio(audioNum) {
      let path = `/assets/multiplicationmadness/mult${audioNum + 1}.mp3`;
      console.log('Playing audio path:', path);
      let audio = new Audio(path);
      this.currentAudios.push(audio);
      audio.play();
    },

    // Check if the spoken answer is correct
    checkAnswer(answer, audioNum) {
      console.log(this.answers[audioNum]);
      let correct = new Audio('/assets/generalAudio/correctaudio.mp3');
      let incorrect = new Audio('/assets/generalAudio/incorrectaudio.mp3');
      if (answer === this.answers[audioNum]) {
        this.resultMessage = `CORRECT`;
        this.points++;
        correct.play();
      } else {
        this.resultMessage = `INCORRECT`;
        incorrect.play();
      }
    },

    // Clear all audios (pause or stop them)
    stopAllAudios() {
      this.currentAudios.forEach(audio => {
        audio.pause();   // Stop the audio
        audio.currentTime = 0; // Reset playback time
      });
      this.currentAudios = []; // Clear the array
    },

    // Clear timeout if it exists
    clearScheduledAudio() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId); // Clear the scheduled timeout
        this.timeoutId = null;
      }
    },

    // End the game and display final score
    endGame() {
      if (this.audioNum === 5) {
        console.log('Game Over! Your Final Scored is: ' + this.points);
        this.gameOverMessage = `Game Over! Your Final Scored is: ${this.points}/5`;
        //this.$refs.content.textContent = `Game Over! Your Final Score: ${this.points}/5`;
        if (this.points === 5) {
          let score = new Audio(`/assets/generalAudio/fivecorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        } else if (this.points === 4) {
          let score = new Audio(`/assets/generalAudio/fourcorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        } else if (this.points === 3) {
          let score = new Audio(`/assets/generalAudio/threecorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        } else if (this.points === 2) {
          let score = new Audio(`/assets/generalAudio/twocorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        } else if (this.points === 1) {
          let score = new Audio(`/assets/generalAudio/onecorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        } else {
          let score = new Audio(`/assets/generalAudio/zerocorrect.mp3`);
          setTimeout(() => {
            score.play();
          }, 2000);
        }
      } else {
        console.log('Game not over yet');
      }
    },

    // Handle keypress for recording and playing audio
    handleKeyDown(event) {
      if (event.key === ' ' && !this.isRecording) {
        this.startRecording();
      } else if (event.shiftKey && this.audioNum < 6) {
        this.stopAllAudios();         // Stop all playing audios
        console.log('Audio button pressed!');
        this.playAudio(this.audioNum);
      }
    },

    handleKeyUp(event) {
      if (event.key === ' ' && this.isRecording) {
        this.stopRecording();
      }
    },
  },

  mounted() {
    // Request microphone access on page load
    this.requestMicPermission();

    // Play introduction audio
    this.playIntroAudio();

    // Play question one
    this.timeoutId = setTimeout(() => {
      this.playAudio(this.audioNum);
    }, 21000);

    // Add event listeners for spacebar and shift key
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  },

  beforeUnmount() {
    // Remove event listeners when component is destroyed
    console.log('Navigate Back!');
    this.stopAllAudios();         // Stop all playing audios when navigating away
    this.clearScheduledAudio();   // Clear timeout when navigating away
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
};
</script>
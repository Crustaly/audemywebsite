<template>
  <GameLayout
    :backgroundColor="'#FFBCEE'"
    :title="'Animal Addition'"
    :subtitle="'Add up the animals!'"
    :iconPath="'/assets/gameImages/buttons/gameButtons/addition.svg'"
    :playButton="playButton"
    :isRecording="isRecording"
    :isIntroPlaying="isIntroPlaying"
    :isButtonCooldown="isButtonCooldown"
    :numOfAudiosPlayed="numOfAudiosPlayed"
    @goBack="goBack"
    @startFirstQuestion="startFirstQuestion"
    @toggleRecording="toggleRecording"
    @repeatQuestion="repeatQuestion"
    @updatePlayButton="(val) => (playButton = val)"
  />
</template>

<script setup>
import GameLayout from "./GameComponents/GameLayout.vue";
import {
  playIntro,
  playQuestion,
  playSound,
  stopAudios,
  playScore,
} from "../../../Utilities/playAudio";
import {
  startListening,
  stopListening,
} from "../../../Utilities/speechRecognition";
import { onMounted, onUnmounted, ref, watch, computed } from "vue";

// Function to handle back button click
const goBack = () => {
  console.log("Going back...");
  // Stop all audio playback before navigating away
  stopAudios(currentAudios);
  // Save the source category to sessionStorage
  sessionStorage.setItem("gameCategory", "math");
  // Force navigate to the game zone page
  window.location.href = "/game-zone";
};

const currentAudios = [];
const randQueNum = [];
const numOfAudiosPlayed = ref(0);
const score = ref(0);
const questionsDb = ref([]);
const isListening = ref(false);
const transcription = ref("");
const playButton = ref(false);
const isIntroPlaying = ref(false);
const isRecording = ref(false);
const isButtonCooldown = ref(false);

// Generate addition questions using Json file
const generateQuestions = () => {
  console.log("Generating Questions...");
  fetch("/assets/questionsDb/additionDb.json")
    .then((response) => response.json())
    .then((data) => {
      let allQuestions = [
        ...data["AdditionGame"]["Questions"]["Easy"],
        ...data["AdditionGame"]["Questions"]["Medium"],
        ...data["AdditionGame"]["Questions"]["Hard"],
      ];

      // Only need 5 random questions
      while (randQueNum.length < 5) {
        let num = Math.floor(Math.random() * allQuestions.length);
        if (!randQueNum.includes(num)) {
          randQueNum.push(num);
        }
      }
      questionsDb.value = allQuestions;
      console.log("Questions generated!");
      console.log(questionsDb.value);
    })
    .catch((error) => {
      console.error("Error fetching questions:", error);
    });
};

// Play the next question
const playNextQuestion = () => {
  if (numOfAudiosPlayed.value < 5) {
    const question = questionsDb.value[randQueNum[numOfAudiosPlayed.value]];
    console.log(question);
    currentAudios.push(playQuestion(question["Q"]));
  }
};

// Toggle recording state when record button is clicked
const toggleRecording = () => {
  if (numOfAudiosPlayed.value < 5 && !isIntroPlaying.value) {
    if (!isRecording.value) {
      isRecording.value = true;

      startListening((transcript) => {
        transcription.value = transcript;
      }, false);
    } else {
      isButtonCooldown.value = true;
      console.log("Processing recording...");

      const finalTranscript = transcription.value;

      // Process the answer
      const question = questionsDb.value[randQueNum[numOfAudiosPlayed.value]];
      console.log("Question is: ", question["Q"]);
      console.log("User Answer:", finalTranscript);
      console.log("Correct Answer:", question["A"]);

      if (
        question["A"].some((answer) =>
          finalTranscript.trim().toLowerCase().includes(answer.toLowerCase())
        )
      ) {
        score.value++;
        console.log("Correct Answer!");
        playSound("correctaudio.mp3");
      } else {
        console.log("Wrong Answer!");
        playSound("incorrectaudio.mp3");
        console.log("Correct Answer is: ", question["A"]);
        const incorectAudio = "The correct answer is " + question["A"][0];

        setTimeout(() => {
          currentAudios.push(playQuestion(incorectAudio));
        }, 1000);
      }

      // Stop listening
      stopListening();
      isRecording.value = false;
      numOfAudiosPlayed.value++;

      // Reset transcription for next question
      setTimeout(() => {
        transcription.value = "";
        isButtonCooldown.value = false;
        console.log("Recording processed and stopped");

        // Move to next question or end game
        if (numOfAudiosPlayed.value < 5) {
          setTimeout(() => {
            playNextQuestion();
          }, 2000);
        } else {
          console.log("Game Over!");
          setTimeout(() => {
            playScore(score.value);
          }, 2000);
        }
      }, 1000);
    }
  }
};

// Repeat the current question
const repeatQuestion = () => {
  if (
    numOfAudiosPlayed.value < 5 &&
    !isIntroPlaying.value &&
    !isButtonCooldown.value
  ) {
    // Set cooldown flag
    isButtonCooldown.value = true;

    // logging message for repeating question
    console.log(
      "Repeating question for Animal Addition game - Question #" +
        (numOfAudiosPlayed.value + 1)
    );

    // Play the question
    playNextQuestion();

    // Delay of 5 seconds
    setTimeout(() => {
      isButtonCooldown.value = false;
    }, 5000);
  } else if (isIntroPlaying.value) {
    console.log("Cannot repeat question while introduction is playing");
  } else if (isButtonCooldown.value) {
    console.log("Please wait before repeating the question again");
  }
};

// Add new function to handle first question start
const startFirstQuestion = () => {
  console.log("Starting first question...");
  numOfAudiosPlayed.value = 1; // This will trigger the buttons to show
  playNextQuestion();
};

onMounted(() => {
  // Generate questions
  generateQuestions();

  watch(playButton, (newVal) => {
    if (newVal) {
      isIntroPlaying.value = true;
      const introAudio = playIntro("/animalAddition/additionintro.mp3");
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
  console.log("Navigated Back!");
  stopAudios(currentAudios);
});
</script>

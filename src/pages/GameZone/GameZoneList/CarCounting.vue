<template>
    <div
        class="flex flex-col justify-center items-center h-screen font-poppins bg-[#FAEDD6]"
    >
    <div class="flex mt-2 mb-2 w-1/2">
    <button @click="handleBack">
        <img
            src="/assets/gameImages/buttons/arrow-back.svg"
            class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
            alt="Back Button Image"
        />
    </button>
</div>

        <div class="flex flex-col my-2 mx-56 h-96 justify-center items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="text-4.5xl font-bold">Car Counting</h1>
            </div>
            <div v-if="playButton === false">
                <button
                    @click="playButton = true"
                    class="bg-[#087bb4] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
                    alt="Play Button Image"
                >
                    Play
                </button>
            </div>
            <div
                v-else-if="numOfAudiosPlayed < 5 && playButton === true"
                class="flex flex-col p-4 justify-center"
                id="content"
            >
                <div class="flex flex-row gap-4">
                    <div class="p-2 px-5 text-[#087bb4]">
                        &#9432; Hold 'SPACE' to say the answer | Press 'R' to repeat question
                    </div>
                </div>
                <div
                    id="transcript"
                    class="text-center text-xl font-bold pt-2 pb-1"
                >
                    You said: {{ transcription }}
                </div>
            </div>
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
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { requestMicPermission } from "../../../Utilities/requestMicAccess";
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

const currentAudios = [], randQueNum = [], answers = [];
let numOfAudiosPlayed = ref(0), score = ref(0);
let questionsDb = [], isListening = ref(false), transcription = ref("");
let playButton = ref(false);
let isAnsweringPeriod = ref(false); // New flag to track answering period

const generateQuestions = () => {
    console.log("Generating Questions...");
    while (randQueNum.length < 5) {
        let num = Math.floor(Math.random() * 5) + 1;
        if (!randQueNum.includes(num)) {
            randQueNum.push(num);
            const answerMap = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" };
            answers.push(answerMap[num]);
        }
    }
    console.log("Random Numbers: ", randQueNum);
    console.log("Answers: ", answers);
};

import { playAudioPath } from "../../../Utilities/playAudio"; 

const playNextQuestion = async () => {
    if (numOfAudiosPlayed.value < 5) {
        isAnsweringPeriod.value = false; // Disable answering during question

        await playQuestion("Question Number " + (numOfAudiosPlayed.value + 1));

        for (let i = 0; i < randQueNum[numOfAudiosPlayed.value]; i++) {
            await playAudioPath("/assets/carCounting/carpassby.mp3");
        }

        await playQuestion("How many cars did you hear? Hold 'SPACE' to say the answer");

        isAnsweringPeriod.value = true; // Enable answering after question
        numOfAudiosPlayed.value++;
    }
};

// Handle the spacebar events
const handleKeyDown = (event) => {
    if (event.code === "KeyR" && numOfAudiosPlayed.value < 5) {
        playNextQuestion();
        return;
    }

    if (event.code === "Space" && !isListening.value && numOfAudiosPlayed.value < 5) {
        if (!isAnsweringPeriod.value) {
            console.log("Cannot answer yet! Wait for the question to finish.");
            return;
        }

        isListening.value = true;
        playSound("ding-sound.mp3");

        startListening((transcript) => {
            console.log("User Answer:", transcript);
            console.log("Correct Answer:", answers[numOfAudiosPlayed.value - 1]); // Fix indexing
            transcription.value = transcript.trim().toLowerCase();
console.log("Raw User Answer:", transcription.value); // Debugging Log

// Convert recognized numbers (e.g., "3") to words (e.g., "three")
const numberToWordMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five"
};

// Try parsing the user's response into an integer
const parsedNumber = parseInt(transcription.value);

if (!isNaN(parsedNumber) && numberToWordMap[parsedNumber]) {
    transcription.value = numberToWordMap[parsedNumber];
}

console.log("Converted User Answer:", transcription.value);
console.log("Correct Answer:", answers[numOfAudiosPlayed.value - 1]); // Debugging Log

// Compare the converted answer
if (transcription.value === answers[numOfAudiosPlayed.value - 1]) {
    score.value++;
    console.log("Correct Answer!");
    playSound("correctaudio.mp3");
} else {
    console.log("Wrong Answer!");
    playSound("incorrectaudio.mp3");
}
            stopListening();
            isListening.value = false;
            isAnsweringPeriod.value = false; // Reset answering period

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
        });
    }
};

// Stop listening on keyup
const handleKeyUp = async (event) => {
    if (event.code === "Space" && isListening.value) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        stopListening();
        isListening.value = false;
    }
};

onMounted(() => {
    console.log("Requesting microphone access...");
    requestMicPermission();

    generateQuestions();

    watch(playButton, (newVal) => {
        if (newVal) {
            const introAudio = playIntro("/carCounting/carCountIntro.mp3");
            currentAudios.push(introAudio);
            introAudio.onended = playNextQuestion;
        }
    });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
    console.log("Navigated Back!");
    stopAudios(currentAudios);
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
});



const handleBack = () => {
    console.log("Stopping all audios before navigating...");

    stopAudios(currentAudios); // Stop all audio
    currentAudios.length = 0;  // Clear audio array

    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);

    // Forcefully go back and refresh the page
    setTimeout(() => {
        console.log("Navigating to game zone and refreshing...");
        window.location.href = "../game-zone"; // Navigate & refresh
    }, 500); // Short delay to ensure audio stops
};




</script>

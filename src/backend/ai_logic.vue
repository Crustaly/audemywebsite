<template>
    <div class="flex flex-col justify-center items-center h-screen bg-teal-100">
        <div class="flex mt-2 mb-2 w-1/2">
            <button onclick="history.back()">
                <img
                    src="/assets/gameImages/buttons/arrow-back.svg"
                    class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                />
            </button>
        </div>
        <div class="flex flex-col items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="barriecito-regular text-6xl font-bold">
                    Animal Addition
                </h1>
                <div class="flex flex-col p-4 justify-center" id="content">
                    <div class="pt-2 pb-1">You said: {{ transcript }}</div>
                    <div class="pt-1 pb-2">Result: {{ result }}</div>
                    <div id="score" class="pt-1 pb-2" ref="scoreRef">
                        Score: {{ points }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                { question: "What is 8 plus 8?", answer: "16" },
                { question: "What is 12 plus 15?", answer: "27" },
                { question: "What is 5 plus 4?", answer: "nine" },
                { question: "What is 7 plus 8?", answer: "15" },
                { question: "What is 14 plus 15?", answer: "29" },
            ],
            recognition: null,
            isRecording: false,
            audioContext: null,
            points: 0,
            questionNum: 0,
            transcript: "",
            result: "",
            currentAudios: [],
            recordSound: new Audio("/assets/generalAudio/ding-sound.mp3"),
        };
    },
    methods: {
        async playAudioPath(audioPath) {
            return new Promise((resolve, reject) => {
                const audio = new Audio(audioPath);
                this.currentAudios.push(audio); // Track this audio for later stopping
                audio.play();

                audio.onended = () => resolve();
                audio.onerror = (error) => reject(error);
            });
        },

        async requestMicPermission() {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                console.log("Microphone access granted");
                this.audioContext = new (window.AudioContext ||
                    window.webkitAudioContext)();
                this.initializeSpeechRecognition();
            } catch (error) {
                console.error("Microphone access denied:", error);
            }
        },
        initializeSpeechRecognition() {
            window.SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = "en-US";
            this.recognition.continuous = false;
            this.recognition.interimResults = false;

            this.recognition.onresult = async (event) => {
                const transcript = event.results[0][0].transcript;
                console.log("Transcription:", transcript);
                this.transcript = transcript;
                await this.checkAnswer(transcript, this.questionNum);
                this.questionNum++;
                this.displayScore();

                if (this.questionNum < this.questions.length) {
                    await this.askQuestion(this.questionNum);
                } else {
                    await this.endGame();
                }
            };

            this.recognition.onerror = (event) => {
                console.error("Recognition error:", event.error);
            };

            this.recognition.onend = () => {
                this.isRecording = false;
                console.log("Stopped recording");
            };
        },
        startRecording() {
            if (!this.isRecording && this.audioContext) {
                this.recognition.start();
                this.isRecording = true;
                console.log("Started recording...");
                this.recordSound.play();
            }
        },
        stopRecording() {
            if (this.isRecording) {
                this.recognition.stop();
                this.isRecording = false;
                this.recordSound.pause();
            }
        },
        async askQuestion(questionNum) {
            const questionText = this.questions[questionNum].question;
            console.log("Asking question:", questionText);

            return new Promise((resolve) => {
                const msg = new SpeechSynthesisUtterance();
                msg.text = questionText;
                window.speechSynthesis.speak(msg);

                msg.onend = () => {
                    console.log("Question asked, waiting for user input...");
                    resolve();
                };
            });
        },
        async checkAnswer(answer, questionNum) {
            const correctAnswer = this.questions[questionNum].answer;
            console.log("Expected answer:", correctAnswer);
            if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                this.result = "Result: CORRECT";
                await this.playAudioPath(
                    "/assets/generalAudio/correctaudio.mp3"
                );
                this.points++;
            } else {
                this.result = "Result: INCORRECT";
                await this.playAudioPath(
                    "/assets/generalAudio/incorrectaudio.mp3"
                );
            }
        },
        displayScore() {
            const myScoreDiv = this.$refs.scoreRef;
            myScoreDiv.textContent = "Score: " + this.points;
        },
        async endGame() {
            const myScoreDiv = this.$refs.scoreRef;
            if (myScoreDiv) {
                myScoreDiv.textContent = `Game Over! Your Final Score: ${this.points}/5`;
            } else {
                console.error("Score ref not found in endGame.");
            }

            await this.playAudioPath("/assets/generalAudio/youGot.mp3");
            await this.playAnswer(this.points);
            await this.playAudioPath("/assets/generalAudio/outof.mp3");
            await this.playAnswer(5);
        },
        playAnswer(points) {
            return new Promise((resolve) => {
                const msg = new SpeechSynthesisUtterance();
                msg.text = points.toString();
                window.speechSynthesis.speak(msg);

                msg.onend = () => resolve();
            });
        },
        async playIntroAudio() {
            return new Promise((resolve) => {
                let audioIntro = new Audio(
                    "/assets/animalAddition/additionintro.mp3"
                );
                this.currentAudios.push(audioIntro); // Track intro audio
                console.log("Playing intro audio now ...");
                audioIntro.play();

                audioIntro.onended = () => {
                    console.log("Intro audio ended.");
                    resolve();
                };
            });
        },
        handleKeyDown(event) {
            if (event.key === " " && !this.isRecording) {
                this.startRecording();
            }
        },
        handleKeyUp(event) {
            if (event.key === " " && this.isRecording) {
                this.stopRecording();
            }
        },
        handleBeforeUnload(event) {
            this.stopAllAudios();
            if (this.recognition) {
                this.stopRecording();
            }
        },
        stopAllAudios() {
            this.currentAudios.forEach((audio) => {
                audio.pause();
                audio.currentTime = 0;
            });
            this.currentAudios = [];
        },
    },
    async mounted() {
        await this.requestMicPermission();
        //await this.playIntroAudio();
        await this.askQuestion(this.questionNum);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("keyup", this.handleKeyUp);
        window.addEventListener("beforeunload", this.handleBeforeUnload);
    },
    beforeUnmount() {
        this.stopAllAudios();
        if (this.recognition) {
            this.stopRecording();
        }

        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("keyup", this.handleKeyUp);
        window.removeEventListener("beforeunload", this.handleBeforeUnload);
    },
};
</script>
<style scoped>
/* Background color */
.bg-teal-100 {
    background-color: #faedd6;
    /* Light beige background similar to the image */
}

/* Font settings for title */
.barriecito-regular {
    font-family: "Barriecito", sans-serif;
    color: #2f2f2f;
    /* Dark text color similar to the example */
    text-align: center;
}
</style>

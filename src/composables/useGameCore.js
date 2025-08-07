import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { requestMicPermission } from '../Utilities/requestMicAccess';
import {
  playIntro,
  playQuestion,
  playSound,
  stopAudios,
  playScore,
  playMusic,
  stopMusic,
} from '../Utilities/playAudio';
import { startListening, stopListening } from '../Utilities/speechRecognition';
import { useGameQuestions } from './useGameQuestions';
import { useGameUI } from './useGameUI';

export function useGameCore(gameConfig) {
  const currentAudios = [];

  const score = ref(0);
  const isRecording = ref(false);
  const isFinalResult = ref(false);
  const transcription = ref('');

  const playButton = ref(false);
  const isIntroPlaying = ref(false);
  const isButtonCooldown = ref(false);

  const gameQuestions = useGameQuestions(gameConfig);

  const gameState = {
    isIntroPlaying,
    isButtonCooldown,
    isRecording,
    isFinalResult,
  };

  const gameUI = useGameUI(gameState);

  const playNextQuestion = async () => {
    if (
      gameQuestions.hasMoreQuestions() &&
      gameQuestions.currentQuestion.value
    ) {
      console.log(gameQuestions.currentQuestion.value);

      isButtonCooldown.value = true;
      await playQuestion(gameQuestions.currentQuestion.value['Q']);
      isButtonCooldown.value = false;
    }
  };

  const toggleRecording = async () => {
    if (gameQuestions.hasMoreQuestions() && !isIntroPlaying.value) {
      if (!isRecording.value) {
        isRecording.value = true;
        isFinalResult.value = false;

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

          const finalTranscript = transcription.value;

          stopListening();

          const question = gameQuestions.currentQuestion.value;
          console.log('Question is: ', question['Q']);
          console.log('User Answer:', finalTranscript);
          console.log('Correct Answer:', question['A']);

          const isCorrect = gameQuestions.validateAnswer(
            finalTranscript,
            question
          );

          if (isCorrect) {
            score.value++;
            console.log('Correct Answer!');
            await playSound('correctaudio.mp3');
          } else {
            console.log('Wrong Answer!');
            await playSound('incorrectaudio.mp3');

            console.log('Correct Answer is: ', question['A']);
            const incorrectAudio = 'The correct answer is ' + question['A'][0];
            await playQuestion(incorrectAudio);
          }

          transcription.value = '';
          isRecording.value = false;
          isFinalResult.value = false;
          gameQuestions.moveToNextQuestion();

          if (!gameQuestions.isGameComplete()) {
            playNextQuestion();
          } else {
            playScore(score.value);
          }
        }
      }
    }
  };

  const goBack = () => {
    console.log('Going back...');
    stopAudios(currentAudios);
    sessionStorage.setItem('gameCategory', gameConfig.category);
    window.location.href = '/game-zone';
  };

  const repeatQuestion = () => {
    if (
      gameQuestions.hasMoreQuestions() &&
      !isIntroPlaying.value &&
      !isButtonCooldown.value
    ) {
      isButtonCooldown.value = true;

      console.log(
        `Repeating question for ${gameConfig.title} - Question #${
          gameQuestions.currentQuestionIndex.value + 1
        }`
      );

      playNextQuestion();

      setTimeout(() => {
        isButtonCooldown.value = false;
      }, 5000);
    } else if (isIntroPlaying.value) {
      console.log('Cannot repeat question while introduction is playing');
    } else if (isButtonCooldown.value) {
      console.log('Please wait before repeating the question again');
    }
  };

  const startFirstQuestion = () => {
    console.log('Starting first question...');
    gameQuestions.moveToNextQuestion();
    playNextQuestion();
  };

  const handleSthNotWorkingButtonClick = () => {
    console.log('Navigating to Troubleshooting Page...');
    stopAudios(currentAudios);
    window.location.href = '/troubleshooting';
  };

  const startGame = () => {
    playButton.value = true;
  };

  onMounted(() => {
    console.log('Requesting microphone access...');
    requestMicPermission();

    gameQuestions.generateQuestions();

    watch(playButton, async (newVal) => {
      if (newVal) {
        isIntroPlaying.value = true;

        if (gameConfig.introAudio) {
          const introAudio = playIntro(gameConfig.introAudio);
          currentAudios.push(introAudio);

          // If the game has specific background music, play it.
          if (gameConfig.bgmAudio) {
            console.log(
              'Playing pre-recorded intro audio and bgm simultaneously...'
            );
            playMusic(gameConfig.bgmAudio);
          }

          // This event fires when the pre-recorded audio file ends
          introAudio.onended = () => {
            // Add this check to stop the music when the intro is over
            if (gameConfig.bgmAudio) {
              stopMusic();
            }

            isIntroPlaying.value = false;
            if (gameUI.isDesktop.value) {
              playNextQuestion();
            }
          };
        } else {
          // Start the background music
          playMusic();

          // Play the intro via TTS
          console.log('Playing intro via TTS...');
          await playQuestion(gameConfig.introText); // Wait for TTS to finish

          // Stop music after TTS intro
          stopMusic();
          isIntroPlaying.value = false;
          if (gameUI.isDesktop.value) {
            playNextQuestion();
          }
        }
      }
    });
  });

  const cleanup = () => {
    console.log('Navigated Back!');
    stopAudios(currentAudios);
  };

  onUnmounted(() => {
    cleanup();
  });

  return {
    numOfAudiosPlayed: gameQuestions.currentQuestionIndex,
    score,
    isRecording,
    isFinalResult,
    transcription,
    playButton,
    isIntroPlaying,
    isButtonCooldown,
    isTablet: gameUI.isTablet,
    isMobile: gameUI.isMobile,
    isDesktop: gameUI.isDesktop,
    questionsDb: gameQuestions.questionsDb,
    currentAudios,
    currentQuestion: gameQuestions.currentQuestion,
    isButtonDisabled: gameUI.isButtonDisabled,
    recordButtonClasses: gameUI.recordButtonClasses,
    recordButtonTitle: gameUI.recordButtonTitle,
    recordButtonText: gameUI.recordButtonText,
    generateQuestions: gameQuestions.generateQuestions,
    playNextQuestion,
    toggleRecording,
    goBack,
    repeatQuestion,
    startFirstQuestion,
    handleSthNotWorkingButtonClick,
    startGame,
    cleanup,
    validateAnswer: gameQuestions.validateAnswer,
  };
}

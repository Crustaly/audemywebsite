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
  const hasStartedFirstQuestion = ref(false);

  /* 
  isAnswerPlaying (flag): 
  - True: If final transcription is ready & validated
  - False: Otherwise
  */
  const isAnswerPlaying = ref(false);

  const isCorrect = ref(false);

  /* firstMatchingAnswer: 
  - Accounts for answers with synonyms or number formats (eg. plurality, '3' vs 'three')
  - Empty string: If !isCorrect 
  */
  const firstMatchingAnswer = ref('');

  let customLogic = null;
  if (gameConfig.usesCustomLogic && gameConfig.customLogic) {
    customLogic = gameConfig.customLogic();
  }

  const gameQuestions = useGameQuestions(gameConfig);

  const gameState = {
    isIntroPlaying,
    isButtonCooldown,
    isRecording,
    isFinalResult,
  };

  const gameUI = useGameUI(gameState);

  const numOfAudiosPlayed = computed(() => {
    const currentIndex = customLogic
      ? customLogic.currentQuestionIndex.value
      : gameQuestions.currentQuestionIndex.value;

    if (hasStartedFirstQuestion.value && currentIndex === 0) {
      return 1;
    }
    return currentIndex;
  });

  const playNextQuestion = async () => {
    if (customLogic) {
      if (customLogic.hasMoreQuestions() && !customLogic.isPlaying.value) {
        isButtonCooldown.value = true;

        stopAudios(currentAudios);
        currentAudios.length = 0;

        try {
          await customLogic.playCarSequence(currentAudios);
        } finally {
          isButtonCooldown.value = false;
        }
      }
    } else {
      if (
        gameQuestions.hasMoreQuestions() &&
        gameQuestions.currentQuestion.value
      ) {
        console.log(gameQuestions.currentQuestion.value);

        isButtonCooldown.value = true;
        await playQuestion(gameQuestions.currentQuestion.value['Q']);
        isButtonCooldown.value = false;
      }
    }
  };

  const toggleRecording = async () => {
    const hasQuestions = customLogic
      ? customLogic.hasMoreQuestions()
      : gameQuestions.hasMoreQuestions();

    const isAudioPlaying = customLogic ? customLogic.isPlaying.value : false;

    if (hasQuestions && !isIntroPlaying.value && !isAudioPlaying) {
      if (!isRecording.value) {
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

          const finalTranscript = transcription.value;

          stopListening();

          if (customLogic) {
            console.log('User Answer:', finalTranscript);
            console.log('Correct Answer:', customLogic.getCurrentAnswer());

            isCorrect.value = customLogic.validateCarAnswer(finalTranscript);

            isAnswerPlaying.value = true;

            if (isCorrect.value) {
              score.value++;
              console.log('Correct Answer!');
              await playSound('correctaudio.mp3');
            } else {
              console.log('Wrong Answer!');
              await playSound('incorrectaudio.mp3');

              const incorrectAudio =
                'The correct answer is ' + customLogic.getCurrentAnswer();
              await playQuestion(incorrectAudio);
            }

            transcription.value = '';
            isRecording.value = false;
            isFinalResult.value = false;
            isAnswerPlaying.value = false;
            isCorrect.value = false;
            customLogic.moveToNextQuestion();

            if (!customLogic.isGameComplete()) {
              playNextQuestion();
            } else {
              playScore(score.value);
            }
          } else {
            const question = gameQuestions.currentQuestion.value;
            console.log('Question is: ', question['Q']);
            console.log('User Answer:', finalTranscript);
            console.log('Correct Answer:', question['A']);

            [isCorrect.value, firstMatchingAnswer.value] =
              gameQuestions.validateAnswer(finalTranscript, question);

            isAnswerPlaying.value = true;

            if (isCorrect.value) {
              score.value++;
              console.log('Correct Answer!');
              await playSound('correctaudio.mp3');
            } else {
              console.log('Wrong Answer!');
              await playSound('incorrectaudio.mp3');

              console.log('Correct Answer is: ', question['A']);
              const incorrectAudio =
                'The correct answer is ' + question['A'][0];
              await playQuestion(incorrectAudio);
            }

            transcription.value = '';
            isRecording.value = false;
            isFinalResult.value = false;
            isAnswerPlaying.value = false;
            isCorrect.value = false;
            firstMatchingAnswer.value = '';

            gameQuestions.moveToNextQuestion();

            if (!gameQuestions.isGameComplete()) {
              playNextQuestion();
            } else {
              playScore(score.value);
            }
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
    const hasQuestions = customLogic
      ? customLogic.hasMoreQuestions()
      : gameQuestions.hasMoreQuestions();

    const isAudioPlaying = customLogic ? customLogic.isPlaying.value : false;

    if (
      hasQuestions &&
      !isIntroPlaying.value &&
      !isButtonCooldown.value &&
      !isAudioPlaying
    ) {
      isButtonCooldown.value = true;

      const currentIndex = customLogic
        ? customLogic.currentQuestionIndex.value
        : gameQuestions.currentQuestionIndex.value;

      console.log(
        `Repeating question for ${gameConfig.title} - Question #${
          currentIndex + 1
        }`
      );

      playNextQuestion();

      setTimeout(
        () => {
          isButtonCooldown.value = false;
        },
        customLogic ? 4000 : 5000
      );
    } else if (isIntroPlaying.value) {
      console.log('Cannot repeat question while introduction is playing');
    } else if (isAudioPlaying) {
      console.log('Cannot repeat question while audio is playing');
    } else if (isButtonCooldown.value) {
      console.log('Please wait before repeating the question again');
    }
  };

  const startFirstQuestion = () => {
    console.log('Starting first question...');
    hasStartedFirstQuestion.value = true;

    // Remain at index 0
    // since toggleRecording() calls moveToNextQuestion()
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

    if (customLogic) {
      customLogic.generateCarQuestions();
    } else {
      gameQuestions.generateQuestions();
    }

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

  // Computed for button disabled state (includes custom isPlaying)
  const isButtonDisabled = computed(() => {
    const baseDisabled = gameUI.isButtonDisabled.value;
    if (customLogic) {
      return baseDisabled || customLogic.isPlaying.value;
    }
    return baseDisabled;
  });

  // Computed for button classes (includes custom isPlaying)
  const recordButtonClasses = computed(() => {
    const baseClasses = gameUI.recordButtonClasses.value;
    if (customLogic && customLogic.isPlaying.value) {
      return [...baseClasses, 'opacity-50 cursor-not-allowed'];
    }
    return baseClasses;
  });

  // Computed for button title (includes custom isPlaying)
  const recordButtonTitle = computed(() => {
    if (customLogic && customLogic.isPlaying.value) {
      return 'Please wait until the question finishes playing';
    }
    return gameUI.recordButtonTitle.value;
  });

  // Computed for current answer (for GameHeader display)
  const currentAnswer = computed(() => {
    if (customLogic && isAnswerPlaying.value) {
      return customLogic.getCurrentAnswer();
    }
    return null;
  });

  return {
    numOfAudiosPlayed,
    currentQuestionIndex: customLogic
      ? customLogic.currentQuestionIndex
      : gameQuestions.currentQuestionIndex,
    score,
    isRecording,
    isFinalResult,
    transcription,
    playButton,
    isIntroPlaying,
    isButtonCooldown,
    isAnswerPlaying,
    isCorrect,
    firstMatchingAnswer,
    isTablet: gameUI.isTablet,
    isMobile: gameUI.isMobile,
    isDesktop: gameUI.isDesktop,
    questionsDb: gameQuestions.questionsDb,
    currentAudios,
    currentQuestion: customLogic ? null : gameQuestions.currentQuestion,
    currentAnswer,
    isButtonDisabled,
    recordButtonClasses,
    recordButtonTitle,
    recordButtonText: gameUI.recordButtonText,
    generateQuestions: customLogic
      ? customLogic.generateCarQuestions
      : gameQuestions.generateQuestions,
    playNextQuestion,
    toggleRecording,
    goBack,
    repeatQuestion,
    startFirstQuestion,
    handleSthNotWorkingButtonClick,
    startGame,
    cleanup,
    validateAnswer: customLogic
      ? customLogic.validateCarAnswer
      : gameQuestions.validateAnswer,
  };
}

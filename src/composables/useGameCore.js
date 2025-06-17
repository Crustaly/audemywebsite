import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { requestMicPermission } from '../Utilities/requestMicAccess';
import {
  playIntro,
  playQuestion,
  playSound,
  stopAudios,
  playScore,
} from '../Utilities/playAudio';
import { startListening, stopListening } from '../Utilities/speechRecognition';
import { useDeviceDetection } from './useDeviceDetection';

export function useGameCore(gameConfig) {
  const currentAudios = [];
  const randQueNum = [];

  const numOfAudiosPlayed = ref(0);
  const score = ref(0);
  const isRecording = ref(false);
  const transcription = ref('');

  const playButton = ref(false);
  const isIntroPlaying = ref(false);
  const isButtonCooldown = ref(false);

  const { isTablet, isMobile, isDesktop } = useDeviceDetection();
  const questionsDb = ref([]);

  const currentQuestion = computed(() => {
    if (
      numOfAudiosPlayed.value < 5 &&
      questionsDb.value.length > 0 &&
      randQueNum.length > numOfAudiosPlayed.value
    ) {
      return questionsDb.value[randQueNum[numOfAudiosPlayed.value]];
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

  const generateQuestions = () => {
    console.log('Generating Questions...');
    fetch(`/assets/questionsDb/${gameConfig.dbFile}`)
      .then((response) => response.json())
      .then((data) => {
        let allQuestions = [
          ...data[gameConfig.dbKey]['Questions']['Easy'],
          ...data[gameConfig.dbKey]['Questions']['Medium'],
          ...data[gameConfig.dbKey]['Questions']['Hard'],
        ];

        while (randQueNum.length < 5) {
          let num = Math.floor(Math.random() * allQuestions.length);
          if (!randQueNum.includes(num)) {
            randQueNum.push(num);
          }
        }
        questionsDb.value = allQuestions;
        console.log('Questions generated!');
        console.log(questionsDb.value);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  const playNextQuestion = async () => {
    if (numOfAudiosPlayed.value < 5 && currentQuestion.value) {
      console.log(currentQuestion.value);

      isButtonCooldown.value = true;
      await playQuestion(currentQuestion.value['Q']);
      isButtonCooldown.value = false;
    }
  };

  const validateAnswer = (finalTranscript, question) => {
    const userWords = finalTranscript
      .toLowerCase()
      .replace(/[.,!?]/g, '')
      .split(/\s+/);

    const correctAnswers = Array.isArray(question['A'])
      ? question['A'].map((a) => a.toLowerCase())
      : [question['A'].toLowerCase()];

    return userWords.some((word) => correctAnswers.includes(word));
  };

  const toggleRecording = async () => {
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

        const question = questionsDb.value[randQueNum[numOfAudiosPlayed.value]];
        console.log('Question is: ', question['Q']);
        console.log('User Answer:', finalTranscript);
        console.log('Correct Answer:', question['A']);

        const isCorrect = validateAnswer(finalTranscript, question);

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

        stopListening();
        isRecording.value = false;
        numOfAudiosPlayed.value++;

        const isGameOver = numOfAudiosPlayed.value >= 5;

        if (!isGameOver) {
          playNextQuestion();
        } else {
          playScore(score.value);
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
      numOfAudiosPlayed.value < 5 &&
      !isIntroPlaying.value &&
      !isButtonCooldown.value
    ) {
      isButtonCooldown.value = true;

      console.log(
        `Repeating question for ${gameConfig.title} - Question #${
          numOfAudiosPlayed.value + 1
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
    numOfAudiosPlayed.value = 1;
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

    generateQuestions();

    watch(playButton, (newVal) => {
      if (newVal) {
        isIntroPlaying.value = true;
        const introAudio = playIntro(gameConfig.introAudio);
        currentAudios.push(introAudio);
        introAudio.onended = () => {
          isIntroPlaying.value = false;
          if (isDesktop.value) {
            playNextQuestion();
          }
        };
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
    numOfAudiosPlayed,
    score,
    isRecording,
    transcription,
    playButton,
    isIntroPlaying,
    isButtonCooldown,
    isTablet,
    isMobile,
    isDesktop,
    questionsDb,
    currentAudios,
    currentQuestion,
    isButtonDisabled,
    recordButtonClasses,
    recordButtonTitle,
    generateQuestions,
    playNextQuestion,
    toggleRecording,
    goBack,
    repeatQuestion,
    startFirstQuestion,
    handleSthNotWorkingButtonClick,
    startGame,
    cleanup,
    validateAnswer,
  };
}

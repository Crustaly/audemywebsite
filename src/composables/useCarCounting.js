import { ref } from 'vue';
import { playQuestion } from '../Utilities/playAudio';

export function useCarCounting() {
  const randQueNum = [];
  const answers = [];
  const isPlaying = ref(false);
  const currentQuestionIndex = ref(0);

  const generateCarQuestions = () => {
    randQueNum.length = 0;
    answers.length = 0;

    while (randQueNum.length < 5) {
      let num = Math.floor(Math.random() * 5) + 1;
      if (!randQueNum.includes(num)) {
        randQueNum.push(num);
        const answerMap = {
          1: 'one',
          2: 'two',
          3: 'three',
          4: 'four',
          5: 'five',
        };
        answers.push(answerMap[num]);
      }
    }
  };

  const playCarSequence = async (currentAudios) => {
    if (currentQuestionIndex.value >= 5 || isPlaying.value) {
      return;
    }

    isPlaying.value = true;

    try {
      if (currentAudios) {
        currentAudios.length = 0;
      }

      const audiosToPlay = [];

      await playQuestion('Question Number ' + (currentQuestionIndex.value + 1));

      for (let i = 0; i < randQueNum[currentQuestionIndex.value]; i++) {
        audiosToPlay.push('/assets/carCounting/carpassby.mp3');
      }

      for (const audioSrc of audiosToPlay) {
        await new Promise((resolve) => {
          console.log('Playing - ' + audioSrc);
          const audio = new Audio(audioSrc);
          audio.play();
          audio.onended = resolve;
          if (currentAudios) {
            currentAudios.push(audio);
          }
        });
      }

      await playQuestion('How many cars did you hear?');
    } finally {
      isPlaying.value = false;
    }
  };

  const validateCarAnswer = (transcript) => {
    const cleanedInput = transcript
      .trim()
      .toLowerCase()
      .replace(/[^\w\s]/g, '');

    const expectedAnswer = answers[currentQuestionIndex.value];
    return cleanedInput.includes(expectedAnswer.toLowerCase());
  };

  const getCurrentAnswer = () => {
    return answers[currentQuestionIndex.value];
  };

  const getCurrentCarCount = () => {
    return randQueNum[currentQuestionIndex.value];
  };

  const moveToNextQuestion = () => {
    currentQuestionIndex.value++;
  };

  const hasMoreQuestions = () => {
    return currentQuestionIndex.value < 5;
  };

  const isGameComplete = () => {
    return currentQuestionIndex.value >= 5;
  };

  const resetGame = () => {
    currentQuestionIndex.value = 0;
    randQueNum.length = 0;
    answers.length = 0;
    isPlaying.value = false;
  };

  return {
    randQueNum,
    answers,
    isPlaying,
    currentQuestionIndex,
    generateCarQuestions,
    playCarSequence,
    validateCarAnswer,
    getCurrentAnswer,
    getCurrentCarCount,
    moveToNextQuestion,
    hasMoreQuestions,
    isGameComplete,
    resetGame,
  };
}

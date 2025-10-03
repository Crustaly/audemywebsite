import { ref } from 'vue';
import { playQuestion } from '../Utilities/playAudio';

export function useCarCounting() {
  const randQueNum = [];
  const answers = [];
  const isPlaying = ref(false);
  const currentQuestionIndex = ref(0);

  // Default: Account for transcript answers with word-based numbers ('three')
  const digitToWordMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
  };

  // Account for transcript answers with digit-based numbers ('3')
  const wordToDigitMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };

  const isWordBasedFormat = ref(false); // If transcript contains word-based number

  const generateCarQuestions = () => {
    randQueNum.length = 0;
    answers.length = 0;

    while (randQueNum.length < 5) {
      let num = Math.floor(Math.random() * 5) + 1;
      if (!randQueNum.includes(num)) {
        randQueNum.push(num);
        answers.push(digitToWordMap[num]);
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
    const wordBasedAnswer = expectedAnswer.toLowerCase();

    // Check if transcript contains word-based (eg: 'three') or digit-based number ('3')
    if (cleanedInput.includes(wordBasedAnswer)) {
      isWordBasedFormat.value = true;
      return true;
    } else {
      // Toggle flag
      isWordBasedFormat.value = false;

      // Get matching digit-based value, using word-based transcript
      const digitBasedAnswer = wordToDigitMap[wordBasedAnswer];

      // Split transcript into parts & check for single digits only
      // Example: Reject '500' vs accept '5'
      const cleanedInputParts = cleanedInput.split(' ');

      for (let part of cleanedInputParts) {
        if (part.length == 1 && part.includes(digitBasedAnswer)) {
          return true;
        }
        // Otherwise: Skip any parts longer > 1 char
        // (already checked for wordBasedAnswer)
      }
      return false; // Transcript does not contain wordBasedAnswer or digitBasedAnswer
    }
  };

  const getCurrentAnswer = () => {
    const wordBasedAnswer = answers[currentQuestionIndex.value];
    // Return answer as word-based or digit-based format (to align with transcript)
    return isWordBasedFormat.value
      ? wordBasedAnswer
      : wordToDigitMap[wordBasedAnswer];
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

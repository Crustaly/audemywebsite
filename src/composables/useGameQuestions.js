import { ref, computed } from 'vue';

export function useGameQuestions(gameConfig) {
  const questionsDb = ref([]);
  const questionIndices = [];
  const currentQuestionIndex = ref(0);

  const currentQuestion = computed(() => {
    if (
      currentQuestionIndex.value < 5 &&
      questionsDb.value.length > 0 &&
      questionIndices.length > currentQuestionIndex.value
    ) {
      return questionsDb.value[questionIndices[currentQuestionIndex.value]];
    }
    return null;
  });

  const generateQuestions = () => {
    fetch(`/assets/questionsDb/${gameConfig.dbFile}`)
      .then((response) => response.json())
      .then((data) => {
        let allQuestions = [
          ...data[gameConfig.dbKey]['Questions']['Easy'],
          ...data[gameConfig.dbKey]['Questions']['Medium'],
          ...data[gameConfig.dbKey]['Questions']['Hard'],
        ];

        while (questionIndices.length < 5) {
          let num = Math.floor(Math.random() * allQuestions.length);
          if (!questionIndices.includes(num)) {
            questionIndices.push(num);
          }
        }
        questionsDb.value = allQuestions;
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  const validateAnswer = (finalTranscript, question) => {
    const cleanedInput = finalTranscript.trim().toLowerCase();

    let foundMatch = ''; // 1st matching answer in transcript; used to align captions
    let isCorrect = false; // Default

    // 1. Check if game needs "spelling" validation
    if (gameConfig.validationType === 'spelling') {
      isCorrect = question['A'].some((answer) =>
        cleanedInput.includes(answer.toLowerCase())
      );
      return [isCorrect, foundMatch];
    }

    // 2. Default: Assume answer list does not contain whitespace
    const correctAnswers = Array.isArray(question['A'])
      ? question['A'].map((a) => a.toLowerCase())
      : [question['A'].toLowerCase()];

    // Split transcript into words to avoid false positives
    // Ex: 'car' (answer) vs 'this is a carton' (transcript) --> Mark as incorrect
    const userWords = cleanedInput.replace(/[.,!?]/g, '').split(/\s+/);
    foundMatch = userWords.find((word) => correctAnswers.includes(word));

    // 3. Finally: Check if answer list includes whitespace or phrase (2+ words)
    if (foundMatch === undefined) {
      const whitespaceAnswers = correctAnswers.filter((answer) =>
        answer.includes(' ')
      );
      if (whitespaceAnswers.length) {
        // At least one answer choice contains whitespace
        // Ex: 'right angled triangle' or 'black and white'
        foundMatch = whitespaceAnswers.find((phrase) =>
          cleanedInput.includes(phrase)
        );
      }
    }

    // NOTE: find() returns undefined if no matching answer
    if (foundMatch === undefined) {
      foundMatch = ''; // Set to empty string
    }
    isCorrect = foundMatch !== '';
    return [isCorrect, foundMatch];
  };

  const hasMoreQuestions = () => {
    return currentQuestionIndex.value < 5;
  };

  const moveToNextQuestion = () => {
    currentQuestionIndex.value++;
  };

  const resetQuestions = () => {
    currentQuestionIndex.value = 0;
    questionIndices.length = 0;
  };

  const isGameComplete = () => {
    return currentQuestionIndex.value >= 5;
  };

  return {
    questionsDb,
    currentQuestionIndex,
    currentQuestion,
    generateQuestions,
    validateAnswer,
    hasMoreQuestions,
    moveToNextQuestion,
    resetQuestions,
    isGameComplete,
  };
}

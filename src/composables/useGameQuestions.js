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
    const userWords = finalTranscript
      .toLowerCase()
      .replace(/[.,!?]/g, '')
      .split(/\s+/);

    const correctAnswers = Array.isArray(question['A'])
      ? question['A'].map((a) => a.toLowerCase())
      : [question['A'].toLowerCase()];

    return userWords.some((word) => correctAnswers.includes(word));
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

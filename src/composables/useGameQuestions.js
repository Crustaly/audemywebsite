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

    let foundMatch = ''; // 1st match in transcript

    // matchingIndex: Maps 'foundMatch' in original answers
    let matchingIndex = -1;

    // firstMatchingAnswer: Answer choice at 'matchingIndex'
    // - Preserves capitalization for <AnswerCaptions/> (ex: proper nouns)
    let firstMatchingAnswer = '';

    let isCorrect = false;

    // 1. Check if game needs "spelling" validation
    if (gameConfig.validationType === 'spelling') {
      isCorrect = question['A'].some((answer) =>
        cleanedInput.includes(answer.toLowerCase())
      );
      return [isCorrect, firstMatchingAnswer];
    }

    // 2. Default: Assume answer list does not contain whitespace
    const correctAnswers = Array.isArray(question['A'])
      ? question['A'].map((a) => a.toLowerCase())
      : [question['A'].toLowerCase()];

    // Split transcript into words to avoid false positives
    // Ex: 'car' (answer) vs 'this is a carton' (transcript) --> Mark as incorrect
    const userWords = cleanedInput.replace(/[.,!?]/g, '').split(/\s+/);
    foundMatch = userWords.find((word) => correctAnswers.includes(word));

    // 3. Check if answer list includes whitespace or phrase (2+ words)
    // (Skip below if-block if 'foundMatch' exists)
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

    // 4. Map 'foundMatch' to original answers
    // to preserve capitalization (proper nouns)
    if (foundMatch !== undefined) {
      matchingIndex = correctAnswers.findIndex(
        (answerChoice) => answerChoice === foundMatch
      );
      firstMatchingAnswer = question['A'][matchingIndex];
    }

    isCorrect = matchingIndex !== -1; // findIndex() returns -1 if match DNE
    return [isCorrect, firstMatchingAnswer];
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

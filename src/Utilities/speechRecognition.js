let recognition = null;
let isRecognizing = false;

// Initialize Speech Recognition
const initSpeechRecognition = () => {
  if (!recognition) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech Recognition API not supported in this browser.");
      return null;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    console.log("Speech Recognition initialized.");
  }

  return recognition;
};

// Start Listening
export const startListening = (onResultCallback) => {
  if (isRecognizing) {
    console.warn("Speech recognition is already active.");
    return;
  }

  const recognizer = initSpeechRecognition();
  if (!recognizer) return;

  isRecognizing = true;

  recognizer.onstart = () => {
    console.log("Speech recognition started.");
  };

  recognizer.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log("Recognized speech:", transcript);
    if (onResultCallback) {
      onResultCallback(transcript);
    }
  };

  recognizer.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    stopListening();
  };

  recognizer.onend = () => {
    console.log("Speech recognition ended.");
    isRecognizing = false;
  };

  recognizer.start();
};

// Stop Listening
export const stopListening = () => {
  if (!isRecognizing || !recognition) {
    console.warn("Speech recognition is not active.");
    return;
  }

  recognition.stop();
  isRecognizing = false;
  console.log("Speech recognition stopped.");
};

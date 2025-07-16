let recognition = null;
let isListening = false;

// Initialize Speech Recognition
const initSpeechRecognition = () => {
  if (!recognition) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error('Speech Recognition API not supported in this browser.');
      return null;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    console.log('Speech Recognition initialized.');
  }

  return recognition;
};

// Pre-initialize speech recognition
export function preInitSpeechRecognition() {
  if (!recognition) {
    try {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = true;
    } catch (error) {
      console.error('Error pre-initializing speech recognition:', error);
    }
  }
}

// Start Listening
export function startListening(callback, autoStop = true, statusCallback) {
  if (isListening) {
    stopListening();
    setTimeout(() => {
      startListening(callback, autoStop, statusCallback);
    }, 100);
    return;
  }

  if (!recognition) {
    preInitSpeechRecognition();
  }

  try {
    if (recognition.continuous !== undefined) {
      recognition.stop();
    }
  } catch (error) {}

  setTimeout(() => {
    try {
      recognition.continuous = !autoStop;
      recognition.interimResults = true;

      recognition.onstart = () => {
        isListening = true;
        statusCallback && statusCallback('listening');
        console.log('Speech recognition started');
      };

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript.toLowerCase())
          .join('');
        callback(transcript);

        const isFinal = event.results[event.results.length - 1].isFinal;
        statusCallback && statusCallback(isFinal ? 'final' : 'interim');

        if (autoStop && isFinal) {
          stopListening();
        }
      };

      recognition.onend = () => {
        console.log('Speech recognition ended');
        isListening = false;
        statusCallback && statusCallback('ended');
        if (!autoStop && isListening) {
          try {
            recognition.start();
          } catch (error) {
            console.error('Error restarting recognition:', error);
            isListening = false;
          }
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        isListening = false;
        statusCallback && statusCallback('error', event.error);
      };

      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      isListening = false;
      statusCallback && statusCallback('error', error);
    }
  }, 50);
}

// Stop Listening
export function stopListening() {
  isListening = false;
  if (recognition) {
    try {
      recognition.stop();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  }
}

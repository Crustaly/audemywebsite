let recognition = null;
let isListening = false;

// Initialize Speech Recognition
const initSpeechRecognition = () => {
    if (!recognition) {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error(
                "Speech Recognition API not supported in this browser."
            );
            return null;
        }

        recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        console.log("Speech Recognition initialized.");
    }

    return recognition;
};

// Pre-initialize speech recognition
export function preInitSpeechRecognition() {
    if (!recognition) {
        try {
            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US';
            recognition.interimResults = true;
        } catch (error) {
            console.error('Error pre-initializing speech recognition:', error);
        }
    }
}

// Start Listening
export function startListening(callback, autoStop = true) {
    // If recognition is already listening, stop it first
    if (isListening) {
        stopListening();
    }
    
    // Ensure recognition object exists
    if (!recognition) {
        preInitSpeechRecognition();
    }
    
    // Set new parameters for this session
    recognition.continuous = !autoStop;
    
    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript.toLowerCase())
            .join('');
        callback(transcript);
        
        if (autoStop && event.results[0].isFinal) {
            stopListening();
        }
    };
    
    recognition.onend = () => {
        if (!autoStop && isListening) {
            recognition.start();
        } else {
            isListening = false;
        }
    };
    
    try {
        recognition.start();
        isListening = true;
    } catch (error) {
        console.error('Error starting speech recognition:', error);
    }
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

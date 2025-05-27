// This function initializes and allows the user to record their answer
export function RecordAnswer(userAnswer) {
  return new Promise((resolve) => {
    let isRecording = false;
    let transcript = '';

    // Initialize speech recognition system with its settings
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    // Event handler for user saying their answer
    const handleKeyDown = (event) => {
      if (event.key === 'Shift' && !isRecording) {
        isRecording = true;
        recognition.start();
        console.log('Recording started...');
      }
    };

    // Event handler for when user finishes saying their answer
    const handleKeyUp = (event) => {
      if (event.key === 'Shift' && isRecording) {
        isRecording = false;
        recognition.stop();
      }
    };

    // When the SpeechRecognition API has finished checking, it returns the word
    recognition.onresult = (event) => {
      transcript = event.results[0][0].transcript;
      console.log('Transcription:', transcript);
      userAnswer.value = transcript;
      resolve(transcript); // Resolve the promise with the transcript
    };

    // Attach event listeners to the document
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Optional cleanup function to remove event listeners
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  });
}

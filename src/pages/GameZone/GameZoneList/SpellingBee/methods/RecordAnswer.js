// This function initializes and allows the user to record their answer
export function RecordAnswer(userAnswer) {
  return new Promise((resolve, reject) => {
    let isRecording = false
    let transcript = ''
    // Initialize speech recognition system with its settings
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
    
    // Check if SpeechRecognition is available in the browser
    if (!window.SpeechRecognition) {
      alert('Speech recognition is not supported in your browser. Please try another browser.');
      reject('Speech recognition not supported');
      return;
    }
    
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = false
    
    // Event handler for user saying their answer
    const handleKeyDown = event => {
      if (event.key === 'Shift' && !isRecording) {
        isRecording = true
        try {
          recognition.start()
          console.log('Recording started...')
        } catch (error) {
          console.error('Error starting speech recognition:', error)
          alert('Error starting speech recognition. Please try again.');
          isRecording = false
          reject(error)
        }
      }
    }
    
    // Event handler for when user finishes saying their answer
    const handleKeyUp = event => {
      if (event.key === 'Shift' && isRecording) {
        isRecording = false
        recognition.stop()
      }
    }
    
    // When the SpeechRecognition API has finished checking, it returns the word
    recognition.onresult = event => {
      transcript = event.results[0][0].transcript
      console.log('Transcription:', transcript)
      userAnswer.value = transcript
      resolve(transcript) // Resolve the promise with the transcript
    }
    
    // Handle SpeechRecognition errors
    recognition.onerror = event => {
      console.error('Speech recognition error:', event.error)
      
      // Handle specific error types
      switch (event.error) {
        case 'network':
          alert('Network error occurred. Please check your internet connection.');
          break;
        case 'not-allowed':
        case 'permission-denied':
          alert('Microphone access denied. Please allow microphone access to use this feature.');
          break;
        case 'aborted':
          // Don't show alert for user-initiated abort
          break;
        case 'no-speech':
          alert('No speech was detected. Please try again.');
          break;
        default:
          alert('Error occurred during speech recognition. Please try again.');
      }
      
      isRecording = false
      reject(event.error)
    }
    
    // Handle when recognition ends (for any reason)
    recognition.onend = () => {
      isRecording = false
    }
    
    // Attach event listeners to the document
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    
    // Optional cleanup function to remove event listeners
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
      recognition.abort() // Make sure to clean up the recognition object
    }
  })
}
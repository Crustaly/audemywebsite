// Declare a variable to hold the AudioContext
let audioContext;

// Function to request microphone permissions from the user
export async function requestMicPermission() {
  // Check if the browser supports the mediaDevices API and getUserMedia method
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      // Request access to the user's microphone
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // If audioContext hasn't been created yet, initialize it
      if (!audioContext) {
        // Create a new AudioContext, using either standard or webkit-prefixed constructor
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
    } catch (error) {
      console.error('Microphone access denied:', error);
      // Rethrow the error so it can be handled by the calling function
      throw error;
    }
  } else {
    // Log a message if getUserMedia is not supported in the browser
    console.error('getUserMedia not supported on your browser!');
  }
}

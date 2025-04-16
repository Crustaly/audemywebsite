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
        try {
          // Create a new AudioContext, using either standard or webkit-prefixed constructor
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (audioError) {
          console.error("Failed to create AudioContext:", audioError);
          alert("Failed to initialize audio system. Please try refreshing the page.");
          throw audioError;
        }
      }
      
      return true; // Permission granted successfully
    } catch (error) {
      console.error("Microphone access issue:", error);
      
      // Handle specific error types with user-friendly messages
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        alert("Microphone access denied. Please allow microphone access to use this feature.");
      } else if (error.name === 'NotFoundError') {
        alert("No microphone detected. Please connect a microphone and try again.");
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        alert("Your microphone is busy or not working properly. Please check your device.");
      } else if (error.name === 'OverconstrainedError') {
        alert("Your microphone doesn't meet the required constraints. Please try another device.");
      } else if (error.name === 'TypeError') {
        alert("There was a problem with your audio settings. Please try again.");
      } else {
        alert("Failed to access microphone. Please check your settings and try again.");
      }
      
      // Rethrow the error so it can be handled by the calling function
      throw error;
    }
  } else {
    // Log a message if getUserMedia is not supported in the browser
    console.error("getUserMedia not supported on your browser!");
    alert("Your browser doesn't support microphone access. Please try a different browser.");
    throw new Error("getUserMedia not supported");
  }
}
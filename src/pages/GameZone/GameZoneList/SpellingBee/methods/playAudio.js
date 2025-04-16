import { getQuestion } from './getQuestion';

export function playAudio(round, audioPlayer) {
  // Send current round to getQuestion method to fetch path to audio file
  const audioSrc = getQuestion(round.value);
  
  if (audioPlayer.value) {
    // Set up error handling for loading errors
    audioPlayer.value.onerror = function(e) {
      const error = e.target.error;
      
      // Handle specific HTTP error codes
      if (error.name === 'MediaError') {
        if (error.message && error.message.includes('401')) {
          alert('Unauthorized: You don\'t have permission to access this audio file.');
        } else if (error.message && error.message.includes('400')) {
          alert('Bad Request: The request for the audio file was invalid.');
        } else if (error.message && error.message.includes('405')) {
          alert('Method Not Allowed: The request method is not supported.');
        } else if (error.message && error.message.includes('429')) {
          alert('Too Many Requests: Please try again later.');
        } else {
          alert('Error loading audio file. Please try again later.');
        }
      } else {
        console.error("Error loading audio:", error);
        alert('Error loading audio file. Please try again later.');
      }
    };
    
    // Play Audio
    audioPlayer.value.src = audioSrc;
    // Load new audio file
    audioPlayer.value.load();
    // Wait for load of file
    // play() is already async by default
    audioPlayer.value.play()
      .catch(error => {
        console.error("Error playing audio:", error); // Handle any playback errors
        alert('Error playing audio. Please try again later.');
      });
  }
}
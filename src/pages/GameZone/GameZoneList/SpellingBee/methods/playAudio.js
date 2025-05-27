import { getQuestion } from './getQuestion';

export function playAudio(round, audioPlayer) {
  //Send current round to getQuestion method to fetch path to audio file
  const audioSrc = getQuestion(round.value);

  if (audioPlayer.value) {
    //Play Audio
    audioPlayer.value.src = audioSrc;
    //Load new audio file
    audioPlayer.value.load();

    //Wait for load of file
    //play() is already async by default
    audioPlayer.value
      .play() // Play the audio
      .catch((error) => {
        console.error('Error playing audio:', error); // Handle any playback errors
      });
  }
}

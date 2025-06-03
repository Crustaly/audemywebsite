export function playIntro(audioFile) {
  // Play introduction audio
  const introAudioPath = '/assets' + audioFile;
  console.log('Playing introduction audio:', introAudioPath);
  const audio = new Audio(introAudioPath);
  audio.play();

  return audio;
}

export async function playQuestion(question) {
  try {
    const audioBlob = await getTTSAudio(question); // Wait for TTS to generate
    if (!audioBlob) {
      console.error('Audio generation failed.');
      return;
    }

    const audioURL = URL.createObjectURL(audioBlob);
    await playAudioPath(audioURL); // Ensure this function handles promises properly
  } catch (error) {
    console.error('Error in playQuestion:', error);
  }
}
export async function getTTSAudio(text) {
  try {
    const response = await fetch('/api/generate-tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate TTS');
    }

    return await response.blob();
  } catch (error) {
    console.error('Error fetching TTS audio:', error);
    return null;
  }
}

export async function playSound(audioFile) {
  try {
    const introAudioPath = '/assets/generalAudio/' + audioFile;
    console.log('Playing introduction audio:', introAudioPath);
    await playAudioPath(introAudioPath);
  } catch (error) {
    console.error('Error in playSound:', error);
  }
}

let currentAudios = [];

export function playAudioPath(path) {
  return new Promise((resolve, reject) => {
    let audio = new Audio(path);
    currentAudios.push(audio);

    audio.onended = () => {
      resolve();
    };

    audio.onerror = (error) => {
      reject(new Error('Audio playback failed: ' + error.message));
    };

    audio
      .play()
      .then(() => {
        console.log('Audio playback started successfully.');
      })
      .catch((error) => {
        console.warn('⚠️ Playback blocked or failed:', error);
        reject(new Error('Playback blocked or failed: ' + error.message));
      });
  });
}

export function playScore(score) {
  const scoreAudioPath = '/assets/generalAudio/' + score + 'correct.mp3';
  console.log('Playing Final score audio:', scoreAudioPath);
  const audio = new Audio(scoreAudioPath);
  audio.play();

  return audio;
}

export function stopAudios(audioList) {
  audioList.forEach((audio) => {
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
  audioList.length = 0;
}

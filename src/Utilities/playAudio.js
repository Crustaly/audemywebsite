export function playIntro(audioFile) {
    // Play introduction audio
    const introAudioPath = '/assets/multiplicationmadness/'+audioFile;
    console.log('Playing introduction audio:', introAudioPath);
    const audio = new Audio(introAudioPath);
    audio.play();

    return audio;
}

export function playQuestion(text) {
    // Play question - Text to speech
    console.log('Playing question:', text);
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

export function playSound(audioFile) {
    // Play introduction audio
    const introAudioPath = '/assets/generalAudio/'+audioFile;
    console.log('Playing introduction audio:', introAudioPath);
    const audio = new Audio(introAudioPath);
    audio.play();

    return audio;
}

export function stopAudios(audioList) {
    audioList.forEach(audio => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
    audioList.length = 0;
}
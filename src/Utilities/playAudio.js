export function playIntro(audioFile) {
    // Play introduction audio
    const introAudioPath = "/assets" + audioFile;
    console.log("Playing introduction audio:", introAudioPath);
    const audio = new Audio(introAudioPath);
    audio.play();

    return audio;
}

export async function playQuestion(question) {
    try {
        const audioBlob = await getTTSAudio(question); // Wait for TTS to generate
        if (!audioBlob) {
            console.error("Audio generation failed.");
            return;
        }

        const audioURL = URL.createObjectURL(audioBlob);
        await playAudioPath(audioURL); // Ensure this function handles promises properly
    } catch (error) {
        console.error("Error in playQuestion:", error);
    }
}
export async function getTTSAudio(text) {
    try {
        const response = await fetch("/api/generate-tts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            if (response.status === 400) {
              alert("Bad request: The text provided is invalid or missing.");
              throw new Error("Bad request");
            } else if (response.status === 401) {
              alert("Unauthorized: Authentication required for text-to-speech service.");
              throw new Error("Unauthorized");
            } else if (response.status === 405) {
              alert("Method not allowed: This operation is not supported.");
              throw new Error("Method not allowed");
            } else if (response.status === 429) {
              alert("Too many requests: Rate limit exceeded. Please try again later.");
              throw new Error("Too many requests");
            } else {
              alert("Text-to-speech generation failed. Please try again later.");
              throw new Error("Failed to generate TTS");
            }
          }

        return await response.blob();
    } catch (error) {
        console.error("Error fetching TTS audio:", error);
        return null;
    }
}

export function playSound(audioFile) {
    // Play introduction audio
    const introAudioPath = "/assets/generalAudio/" + audioFile;
    console.log("Playing introduction audio:", introAudioPath);
    const audio = new Audio(introAudioPath);
    audio.play();

    return audio;
}
let currentAudios = [];
export function playAudioPath(path) {
    return new Promise((resolve) => {
        let audio = new Audio(path);
        currentAudios.push(audio); // Track the audio in the array
        audio.play()
            .then(() => {
                console.log("Audio playback started successfully.");
                resolve();
            })
            .catch((err) => {
                console.warn("⚠️ Playback blocked or failed:", err);
                resolve();
            });

        // audio.onplay = () => {
        //     this.isRecording = true;
        // };

        // audio.onended = () => {
        //     this.isRecording = false;
        //     console.log("Audio ended.");
        resolve();
        // };
    });
}

export function playScore(score) {
    const scoreAudioPath = "/assets/generalAudio/" + score + "correct.mp3";
    console.log("Playing Final score audio:", scoreAudioPath);
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

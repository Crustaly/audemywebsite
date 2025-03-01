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
            return null;  // Return null instead of undefined
        }

        const audioURL = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioURL);

        return new Promise((resolve) => {
            audio.play();
            audio.onended = resolve;
        });
    } catch (error) {
        console.error("Error in playQuestion:", error);
        return null;
    }
}

export async function getTTSAudio(text) {
    try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"; // Fallback
        const response = await fetch(`${API_URL}/generate-tts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to generate TTS: ${errorText}`);
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
        audio.play();
        audio.onended = resolve;
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

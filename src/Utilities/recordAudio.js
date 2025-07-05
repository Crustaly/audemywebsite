export const recordAudio = (onStart, onStop) => {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, {
            type: 'audio/webm',
          });
          const reader = new FileReader();
          reader.onloadend = () => {
            onStop && onStop(); // Notify recording stopped
            resolve(reader.result); // Return the base64 audio content
          };
          reader.onerror = reject;
          reader.readAsArrayBuffer(audioBlob);
        };

        // Start recording
        onStart && onStart(); // Notify recording started
        mediaRecorder.start();

        // Automatically stop recording after a duration
        setTimeout(() => {
          mediaRecorder.stop();
          stream.getTracks().forEach((track) => track.stop());
        }, 7000); // Adjust duration as needed
      })
      .catch((err) => {
        reject(`Error accessing microphone: ${err.message}`);
      });
  });
};

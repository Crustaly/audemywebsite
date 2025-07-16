const speech = require('@google-cloud/speech');
const fs = require('fs');

export const getGCPCredentials = () => {
  // for Vercel, use environment variables
  return process.env.GCP_PRIVATE_KEY
    ? {
        credentials: {
          client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GCP_PRIVATE_KEY,
        },
        projectId: process.env.GCP_PROJECT_ID,
      }
    : // for local development, use gcloud CLI
      {};
};
const client = new speech.SpeechClient(getGCPCredentials());

// Function to transcribe audio
const transcribeAudio = async (audioContent) => {
  const audio = {
    content: audioContent.toString('base64'),
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };

  const request = {
    audio: audio,
    config: config,
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join('\n');
    return transcription;
  } catch (error) {
    console.error('Error during transcription:', error);
    throw error;
  }
};

module.exports = { transcribeAudio };

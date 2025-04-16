import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import dotenv from "dotenv";

dotenv.config();
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
const client = new TextToSpeechClient(getGCPCredentials());

export default async function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({ message: "Welcome to the TTS API" });
    }
    if (req.method === "POST") {
        console.log("POST request received");
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: "Text is required",
                message: "Please provide text to convert to speech" 
              });
        }

        try {
            const request = {
                input: { text },
                voice: {
                    languageCode: "en-US",
                    ssmlGender: "NEUTRAL",
                    name: "en-US-Standard-H",
                },
                audioConfig: { audioEncoding: "MP3" },
            };

            const [response] = await client.synthesizeSpeech(request);

            res.setHeader("Content-Type", "audio/mpeg");
            res.status(200).send(response.audioContent);
        } catch (error) {
            console.error("Error generating TTS:", error);
            
            // Handle specific error codes
            if (error.code === 401 || error.code === "UNAUTHENTICATED") {
              return res.status(401).json({ 
                error: "Authentication failed",
                message: "Failed to authenticate with Google Cloud. Please check your credentials." 
              });
            } else if (error.code === 400 || error.code === "INVALID_ARGUMENT") {
              return res.status(400).json({ 
                error: "Invalid request",
                message: "The request to Google Cloud TTS service was invalid. Please check your input." 
              });
            } else if (error.code === 429 || error.code === "RESOURCE_EXHAUSTED") {
              return res.status(429).json({ 
                error: "Rate limit exceeded",
                message: "Too many requests sent to Google Cloud TTS service. Please try again later." 
              });
            } else {
              return res.status(500).json({ 
                error: "Failed to generate TTS",
                message: "An unexpected error occurred while generating speech."
              });
            }
          }
        } else {
          return res.status(405).json({ 
            error: "Method Not Allowed",
            message: "This endpoint only accepts GET and POST requests."
          });
        }
      }

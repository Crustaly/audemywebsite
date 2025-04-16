import express from "express";
import dotenv from "dotenv";
import testDbHandler from "./test_db.js";
import generateAudioHandler from "./generate_audio.js";
dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());

// Wrapper function to catch errors
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// API Routes with error handling
app.all("/api/test_db", asyncHandler(testDbHandler));
app.all("/api/generate-tts", asyncHandler(generateAudioHandler));

// Enhanced Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  
  // Handle specific status codes
  if (err.status === 400 || err.name === "ValidationError") {
    return res.status(400).json({
      error: "Bad Request",
      message: "The request was invalid or improperly formatted.",
      details: err.message
    });
  } else if (err.status === 401 || err.name === "UnauthorizedError") {
    return res.status(401).json({
      error: "Unauthorized",
      message: "Authentication is required and has failed or has not been provided.",
      details: err.message
    });
  } else if (err.status === 405) {
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "The requested method is not supported for this endpoint.",
      details: err.message
    });
  } else if (err.status === 429) {
    return res.status(429).json({
      error: "Too Many Requests",
      message: "Rate limit exceeded. Please try again later.",
      details: err.message
    });
  }
  
  // Default 500 error
  res.status(err.status || 500).json({
    error: "Internal Server Error",
    message: "An unexpected error occurred on the server.",
    details: err.message,
  });
});

// Serve static frontend
app.use(express.static("dist"));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.listen(PORT, () => {
  console.log(`Server running locally at http://localhost:${PORT}/`);
});
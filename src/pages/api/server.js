/* 
    DO NOT RUN THIS FILE.
    Author: Shrikrishna Bhat
    This file is only for testing to be used by INTERNAL DEVELOPERS ONLY.
    This file is not part of the main application.
    This file is only for testing the API routes.
    This file is not part of the main application.
*/

import express from 'express';
import dotenv from 'dotenv';
import testDbHandler from './test_db.js';
import generateAudioHandler from './generate_audio.js';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.json());

// Wrapper function to catch errors
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// API Routes with error handling
app.all('/api/test_db', asyncHandler(testDbHandler));
app.all('/api/generate-tts', asyncHandler(generateAudioHandler));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    details: err.message,
  });
});

// Serve static frontend
app.use(express.static('dist'));
app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.listen(PORT, () => {
  console.log(`Server running locally at http://localhost:${PORT}/`);
});

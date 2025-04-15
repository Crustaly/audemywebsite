// src/services/api.js
import axios from 'axios';
import { useErrorStore } from '../stores/errorStore';

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptors = () => {
  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      // Add auth token if available
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Get error store
      const errorStore = useErrorStore();
      
      // Get response data
      const statusCode = error.response?.status;
      
      // Handle different error statuses
      if (statusCode) {
        // Special handling for auth errors
        if (statusCode === 401) {
          // Clear user session
          localStorage.removeItem('auth_token');
          // Redirect to login if needed
          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }
        
        // Set error in store with status code
        errorStore.setError({
          code: statusCode,
          message: error.response?.data?.message,
          // Custom duration for certain errors if needed
          duration: statusCode === 429 ? 10000 : undefined, 
        });
      } else if (error.request) {
        // Request was made but no response received (network error)
        errorStore.setError({
          code: 0,
          message: 'Network error. Please check your connection.',
          type: 'error',
        });
      } else {
        // Something happened in setting up the request
        errorStore.setError({
          code: 0,
          message: error.message || 'An unexpected error occurred.',
          type: 'error',
        });
      }
      
      return Promise.reject(error);
    }
  );
  
  return api;
};

export default api;
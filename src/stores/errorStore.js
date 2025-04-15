// src/stores/errorStore.js
import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
  state: () => ({
    error: null,
    visible: false,
    timeout: null,
    duration: 5000, 
  }),

  getters: {
    hasError: (state) => !!state.error,
    errorMessage: (state) => state.error?.message || '',
    errorType: (state) => state.error?.type || 'error',
    isVisible: (state) => state.visible,
  },

  actions: {
    setError(error) {
      // Clear any existing timeout
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.error = {
        code: error.code,
        message: error.message || this.getDefaultMessage(error.code),
        type: this.getErrorType(error.code),
      };
      this.visible = true;

      // Auto-hide after duration
      this.timeout = setTimeout(() => {
        this.visible = false;
      }, error.duration || this.duration);
    },

    clearError() {
      this.error = null;
      this.visible = false;
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    },

    getDefaultMessage(code) {
      switch (code) {
        case 400:
          return 'Invalid request. Please check your data and try again.';
        case 401:
          return 'You are not authorized. Please log in again.';
        case 403:
          return 'You do not have permission to access this resource.';
        case 404:
          return 'Resource not found.';
        case 405:
          return 'This operation is not allowed.';
        case 429:
          return 'Too many requests. Please try again later.';
        case 500:
          return 'Server error. Please try again later.';
        default:
          return 'An unexpected error occurred. Please try again.';
      }
    },

    getErrorType(code) {
      // Map HTTP codes to alert types
      if (code >= 500) return 'error';
      if (code >= 400) return 'warning';
      if (code >= 300) return 'info';
      return 'error';
    },
  },
});
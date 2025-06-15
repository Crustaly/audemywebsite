/*
 * useErrorAlert.js:
 *
 * - Reusable Vue composable for displaying a temporary error message (if any) on frontend
 * - Used in Sign Up, Log In, Forgot Password, and Reset Password forms
 */

import { ref } from 'vue';

export const useErrorAlert = () => {
  const errors = ref(false);
  const errorMessage = ref('');

  const showErrorAlert = (
    message = 'An unexpected error occurred. Please try again later.'
  ) => {
    errors.value = true;
    errorMessage.value = message;
    setTimeout(() => {
      errors.value = false;
    }, 5000);
  };

  return {
    errors,
    errorMessage,
    showErrorAlert,
  };
};

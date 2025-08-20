/*
 * usePasswordFeedback.js:
 *
 * - `getPasswordStrengthMessage()` and `matchAndInputMessage` provide consistent, dynamic password feedback for:
 *    - Frontend UI (user-facing)
 *    - Backend console (debug logs during development)
 *
 * - Shared across Sign Up and Reset Password forms
 */

import { computed } from 'vue';

export const usePasswordFeedback = ({
  password,
  confirmPassword,
  passwordsMatch,
  isWeakPassword,
  hasEnoughChars,
  hasPersonalInfo,
}) => {
  // getPasswordStrengthMessage(): Called when both password fields are filled
  const getPasswordStrengthMessage = () => {
    // Check if password meets strength criteria
    if (!isWeakPassword.value) {
      return 'Great! Passwords match and your password is strong.';
    }

    // Build message based on unmet password strength criteria
    let message = 'Weak password! Please use letters, numbers, and symbols';
    const issues = [];

    if (!hasEnoughChars.value) {
      issues.push('at least 8 characters');
    }

    if (hasPersonalInfo.value) {
      issues.push('no name or email');
    }

    if (issues.length) {
      message += ` (${issues.join(' and ')})`;
    }

    message += '.';
    return message;
  };

  // matchAndInputMessage: Computed message for password match status and input completion
  const matchAndInputMessage = computed(() => {
    if (passwordsMatch.value === true) {
      return getPasswordStrengthMessage();
    } else if (passwordsMatch.value === false) {
      // Check if user cleared any password fields
      if (password.value === '') {
        return confirmPassword.value === ''
          ? 'cleared'
          : 'Please enter a password.';
      } else if (confirmPassword.value === '') {
        return 'Please confirm your password.';
      } else {
        return 'Oops! Passwords do not match. Please try again.';
      }
    } else {
      // Confirm password is empty and never touched
      return 'cleared';
    }
  });

  const feedbackClass = computed(() => {
    const errorClasses = 'bg-red-50 border-red-500 text-red-800';
    const successClasses = 'bg-green-50 border-green-500 text-green-800';

    if (passwordsMatch.value === true) {
      return isWeakPassword.value ? errorClasses : successClasses;
    } else {
      return errorClasses;
    }
  });

  return {
    matchAndInputMessage,
    feedbackClass,
    getPasswordStrengthMessage,
  };
};

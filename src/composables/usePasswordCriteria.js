/*
 * usePasswordCriteria.js:
 *
 * - Reusable composable to validate password strength and check
 * for Personally Identifiable Information (PII), like name or email
 *
 * - Used in Sign Up and Reset Password forms
 */

import { ref, computed } from 'vue';

export const usePasswordCriteria = ({
  password,
  firstName = ref(''),
  lastName = ref(''),
  email = ref(''),
  fullName = ref(''),
}) => {
  // Reactive flags for password strength criteria
  const hasEnoughChars = ref(false); // Password length >= 8 chars
  const hasPersonalInfo = ref(false); // Password contains PII (name / email)
  const hasLowercase = ref(false);
  const hasUppercase = ref(false);
  const hasNumber = ref(false);
  const hasSpecialChar = ref(false); // Printable ASCII special chars

  // Validate password against criteria and update flags
  const checkCriteriaPassed = () => {
    hasEnoughChars.value = password.value.length >= 8;
    hasLowercase.value = /[a-z]/.test(password.value);
    hasUppercase.value = /[A-Z]/.test(password.value);
    hasNumber.value = /[0-9]/.test(password.value);
    hasSpecialChar.value = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(
      password.value
    );

    // Check if password contains any PII (case-insensitive)
    const passwordLower = password.value.toLowerCase();

    // Default: Reset flag
    hasPersonalInfo.value = false;

    // Helper function: Checks if password contains any part of name
    const containNameParts = (nameRef) => {
      // Trim and split name into parts: first, middle(s), and last
      // Example: 'Robert Downey Junior' --> ['Robert', 'Downey', 'Junior']
      const nameParts = nameRef.value.trim().split(/\s+/);
      const namePartsLower = nameParts.map((part) => part.toLowerCase());
      const hasNamePart = namePartsLower.some((part) =>
        passwordLower.includes(part)
      );
      return hasNamePart;
    };

    // For Sign Up: Check firstName and lastName input fields
    if (firstName.value) {
      if (containNameParts(firstName)) {
        hasPersonalInfo.value = true;
        return;
      }
    }

    if (lastName.value) {
      if (containNameParts(lastName)) {
        hasPersonalInfo.value = true;
        return;
      }
    }

    // For both Sign Up & Reset Password: Check email handle
    if (email.value) {
      const [emailHandle] = email.value.split('@'); // Ignore domain
      const emailLower = emailHandle.toLowerCase();

      // Skip check if email handle is empty
      // Edge case: "@gmail.com" --> "" (empty string, which would always match)
      if (emailLower && passwordLower.includes(emailLower)) {
        hasPersonalInfo.value = true;
        return;
      }
    }

    // (WIP) For Reset Password: Check fullName from database
    if (fullName.value) {
      if (containNameParts(fullName)) {
        hasPersonalInfo.value = true;
        return;
      }
    }
  };

  // Computed flag: true if password is weak
  // (If it fails min criteria or fewer than 2 additional criteria)
  const isWeakPassword = computed(() => {
    // Required: Min length and no personal info
    const meetsRequiredCriteria =
      hasEnoughChars.value && !hasPersonalInfo.value;

    // And must pass at least two of the following:
    const additionalCriteria = [
      hasLowercase.value,
      hasUppercase.value,
      hasNumber.value,
      hasSpecialChar.value,
    ];
    const additionalPassedCount = additionalCriteria.reduce(
      (sum, passed) => sum + (passed ? 1 : 0),
      0
    );
    return !meetsRequiredCriteria || additionalPassedCount < 2;
  });

  return {
    hasEnoughChars,
    hasPersonalInfo,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
    checkCriteriaPassed,
    isWeakPassword,
  };
};

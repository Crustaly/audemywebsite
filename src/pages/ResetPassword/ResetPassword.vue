<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import PasswordToggle from '../../components/AccountPages/PasswordToggle.vue';
import PasswordChecklist from '../../components/AccountPages/PasswordChecklist.vue';

import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

var linkExpired = ref(false); // flag for link expired error on frontend
const password = ref('');
const confirmPassword = ref('');
const passwordsMatch = ref(false);
const showPassword = ref(false); // Toggle password visibility
const token = ref('');
const router = useRouter();
const isLoading = ref(false); // For loading state
const formSubmitted = ref(false); // For final error message on submission

// Check for password strength: Require no personal info
const fullName = ref('');
const email = ref('');

const errors = ref(false);
const errorMessage = ref('');

const resetErrors = () => {
  setTimeout(() => {
    errors.value = false;
  }, 5000);
};

// Reusable Composables
import { usePasswordCriteria } from '../../composables/usePasswordCriteria.js';
import { usePasswordFeedback } from '../../composables/usePasswordFeedback.js';

// Reactive flags from usePasswordCriteria() used by <PasswordChecklist/>
// to render dynamic icons and validate password strength
const {
  hasEnoughChars,
  hasPersonalInfo,
  hasLowercase,
  hasUppercase,
  hasNumber,
  hasSpecialChar,
  checkCriteriaPassed,
  isWeakPassword,
} = usePasswordCriteria({
  password,
  email,
  fullName,
});

// usePasswordFeedback(): Returns live feedback and styling based on password inputs
const { matchAndInputMessage, feedbackClass } = usePasswordFeedback({
  password,
  confirmPassword,
  passwordsMatch,
  isWeakPassword,
  hasEnoughChars,
  hasPersonalInfo,
});

onMounted(async () => {
  // Get the token from the URL query parameters
  const query = new URLSearchParams(window.location.search);
  token.value = query.get('token');

  if (!token.value) {
    linkExpired.value = true;
    errorMessage.value =
      'Invalid password reset link. Please request a new one.';
    return; // Skip API call below if invalid token
  }

  // API call to securely fetch user's basic info (first name, last name, and email)
  // Instead of using '?user=' from URL query (since it is tamperable)
  try {
    const getUserBasicsResponse = await fetch(
      `/api/reset_password_get_user_basics`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    const jsonResponse = await getUserBasicsResponse.json().catch(() => ({}));

    if (!getUserBasicsResponse.ok) {
      handleApiError(
        getUserBasicsResponse.status,
        jsonResponse.message || 'Failed to find matching user or expired token'
      );
      return;
    }

    // Otherwise, successful API call
    const { full_name, email_address } = jsonResponse;
    console.log('JSON Response for GET API: ', jsonResponse);
    console.log('User basic info: ', full_name, email_address);

    fullName.value = full_name;
    email.value = email_address;
  } catch (error) {
    console.log('reset_password_get_user_basics API Error: ', error);
  }
});

// Watch password fields for changes
watch([password, confirmPassword], () => {
  // Reset formSubmitted when either password changes
  formSubmitted.value = false;

  // Check password strength and confirmation match
  checkCriteriaPassed();
  validatePasswords();
});

// validatePasswords(): Compute passwords match status & errors flag
const validatePasswords = () => {
  // Default: Reset password match status
  passwordsMatch.value = false;

  if (password.value && confirmPassword.value) {
    // Both passwords filled
    passwordsMatch.value = password.value === confirmPassword.value;
  }

  // If passwords match, set errors to false (opposite)
  // Covers edge case: Either password field is empty
  errors.value = !passwordsMatch.value;

  // Generate password strength feedback
  errorMessage.value = matchAndInputMessage;
  return;
};

const handleApiError = (status, message) => {
  switch (status) {
    case 400:
      errorMessage.value =
        'Bad request: ' + (message || 'Please check your input');
      break;
    case 401:
      linkExpired.value = true;
      errorMessage.value = 'Password reset link is invalid or has expired';
      break;
    case 403:
      errorMessage.value =
        "Forbidden: You don't have permission to reset this password";
      break;
    case 404:
      errorMessage.value = 'User not found';
      break;
    case 405:
      errorMessage.value = 'Method not allowed';
      break;
    case 429:
      errorMessage.value = 'Too many requests: Please try again later';
      break;
    case 500:
      linkExpired.value = true;
      errorMessage.value =
        'Internal server error: Password reset link may have expired';
      break;
    default:
      errorMessage.value = message || 'An error occurred during password reset';
  }
};

const resetConfirm = async (event) => {
  event.preventDefault(); // prevent default form submission which would reload the page

  formSubmitted.value = true;

  // Check for empty password field(s)
  if (!password.value || !confirmPassword.value) {
    errors.value = true;
    errorMessage.value = 'Please fill in required fields.';
    return;
  }

  // Check for empty token parameter in URL
  if (!token.value) {
    errors.value = true;
    errorMessage.value =
      'Invalid password reset link. Please request a new one.';
    return;
  }

  // Ensure passwords meet strength criteria and match before submission
  checkCriteriaPassed();
  validatePasswords(); // Updates flags: passwordsMatch & errors
  if (errors.value || !passwordsMatch.value) {
    return;
  }

  if (isWeakPassword.value) {
    errors.value = true;
    errorMessage.value =
      'Weak password! Please use letters, numbers, and symbols (no name or email).';
    return;
  }

  // Otherwise: Valid token & passwords match and are strong
  isLoading.value = true; // Show loading UI

  // API call to reset password
  try {
    const resetResponse = await fetch(`/api/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token.value,
        newPassword: password.value,
      }),
    });

    // Handle the response from the API based on the status code
    console.log('Reset Password response:', resetResponse.status);
    if (!resetResponse.ok) {
      // Get response body if available
      let errorData = {};
      try {
        errorData = await resetResponse.json();
      } catch (e) {
        // If response body can't be parsed as JSON, continue with empty error data
      }

      handleApiError(resetResponse.status, errorData.message);
      return;
    }

    // Successful API response: Reset error states
    linkExpired.value = false;
    errorMessage.value = '';

    // Route to reset-confirm page if password reset was successful
    router.push('/reset-confirm');
  } catch (error) {
    // Throw error and set the flag to true to display the error message on the frontend
    console.error('Error: ', error);
    errorMessage.value =
      'Connection error: Please check your internet connection and try again';
  } finally {
    isLoading.value = false; // Hide loading UI
  }
};
</script>

<template>
  <div v-if="isLoading" class="loading-overlay">Loading...</div>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="reset-password-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="reset-password-banner"
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div
      id="reset-password-form-container"
      class="form-container-view-height lg:col-span-2"
    >
      <h1 class="form-title">Create a new password</h1>
      <form @submit="resetConfirm" method="post" class="form-wrapper">
        <!-- PASSWORD FIELD -->
        <div>
          <label for="password" class="form-label"> Password </label>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form-input-full"
            id="password"
            name="password"
            placeholder="Create your best password"
            minlength="8"
            maxlength="15"
          />
        </div>
        <!-- CONFIRM PASSWORD FIELD -->
        <div>
          <label for="confirm_password" class="form-label">
            Confirm Password
          </label>
          <input
            v-model="confirmPassword"
            :type="showPassword ? 'text' : 'password'"
            class="form-input-full"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
            minlength="8"
            maxlength="15"
          />
        </div>
        <!-- TOGGLE PASSWORD VISIBILITY -->
        <PasswordToggle
          :showPassword="showPassword"
          @password-toggle="showPassword = !showPassword"
          class="mb-8"
        />
        <!-- PASSWORD STRENGTH CHECKLIST -->
        <!-- TODO: Add fade effects to PasswordChecklist, error message, & expired link alert UI -->
        <PasswordChecklist
          v-show="isWeakPassword || !passwordsMatch"
          :hasEnoughChars="hasEnoughChars"
          :hasPersonalInfo="hasPersonalInfo"
          :hasLowercase="hasLowercase"
          :hasUppercase="hasUppercase"
          :hasNumber="hasNumber"
          :hasSpecialChar="hasSpecialChar"
        />
        <!-- Password match feedback container (Using computed properties) -->
        <!-- Accessibility: feedback is muted while typing; final error announced on submit -->
        <div
          v-show="matchAndInputMessage !== 'cleared'"
          :class="feedbackClass"
          class="feedback-box"
          aria-hidden="true"
        >
          <p class="font-medium">
            {{ matchAndInputMessage }}
          </p>
        </div>
        <!-- Final error message: On form submission -->
        <div class="form-error-wrapper" v-show="errors && formSubmitted">
          <div class="error-message" role="alert">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- CHECK IF RESET PASSWORD LINK EXPIRED -->
        <div class="form-error-wrapper" v-if="linkExpired">
          <div class="error-message" role="alert">
            <p>Password reset link expired!</p>
            <br />
            <a href="./forgot-password" class="auth-link">
              Generate a new link?
            </a>
          </div>
        </div>
        <!-- RESET / SUBMIT NEW PASSWORD BUTTON -->
        <div class="form-action-container">
          <button type="submit" class="primary-button">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

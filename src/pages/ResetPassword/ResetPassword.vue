<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import PasswordToggle from '../../components/AccountPages/PasswordToggle.vue';

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

var linkExpired = ref(false); // flag for link expired error on frontend
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false); // Toggle password visibility
const token = ref('');
const router = useRouter();
const isLoading = ref(false); // For loading state

import { useErrorAlert } from '../../Utilities/useErrorAlert';
const { errors, errorMessage, showErrorAlert } = useErrorAlert();

onMounted(() => {
  // Get the token from the URL query parameters
  const query = new URLSearchParams(window.location.search);
  token.value = query.get('token');

  if (!token.value) {
    errorMessage.value =
      'Invalid password reset link. Please request a new one.';
  }
});

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

  // Reset error states
  errors.value = false;
  linkExpired.value = false;
  errorMessage.value = '';

  if (!token.value) {
    errorMessage.value =
      'Invalid password reset link. Please request a new one.';
    return;
  }

  // pre-condition checks for the password and confirm password fields
  if (password.value != confirmPassword.value || password.value.length < 8) {
    // Set the flag to true to display the error message on the frontend
    errors.value = true;
    errorMessage.value =
      'Passwords do not match or is not at least 8 characters long';
    return;
  } else {
    errors.value = false;

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
        <!-- HINT MESSAGES FOR PASSWORD -->
        <div
          class="form-hint"
          :class="{ 'text-red-700': errors, 'text-body': !errors }"
        >
          <div role="alert">
            <span>Your password must be at least 8 characters long.</span>
          </div>
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
        <!-- ERROR MESSAGES FOR PASSWORD CONFIRMATION -->
        <div class="form-hint" v-if="errors">
          <div role="alert" class="text-red-700">
            <span>Passwords do not match.</span>
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

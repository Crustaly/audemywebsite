<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

var linkExpired = ref(false); // flag for link expired error on frontend
const password = ref('');
const confirmPassword = ref('');
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
  <div v-if="isLoading" class="loading-overlay">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
  <div
    :class="[
      'relative',
      !isTablet && !isMobile ? 'px-14' : '',
      isTablet ? 'px-6' : '',
      isMobile ? 'px-8' : '',
    ]"
    ref="content"
  >
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="reset-password-container"
    :class="[
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : '',
    ]"
  >
    <Banner
      id="reset-password-banner"
      :CarlImgPath="'/assets/images/impact/globe-icon.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div
      id="reset-password-form-container"
      class="pt-[20px] pb-[20px] mb-[40px] mt-[40px] text-center"
      :class="[!isTablet && !isMobile ? 'mt-[0px] mb-[0px]' : '']"
    >
      <h1 class="text-[#151E22] mobile:text-[28px] text-[35px]">
        Create a new password
      </h1>
      <form
        @submit="resetConfirm"
        method="post"
        class="w-[80%] ml-[10%] mt-[20px] pt-[20px] pb-[20px]"
      >
        <!-- PASSWORD FIELD -->
        <div>
          <label for="password" class="block text-[#0C0D0D] font-semibold">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            class="w-[80%] outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="password"
            name="password"
            placeholder="Create your best password"
          />
        </div>
        <!-- ERROR MESSAGES FOR PASSWORD -->
        <div
          class="reset-password-error"
          :class="{ 'text-red-700': errors, 'text-[#2F3E45]': !errors }"
        >
          <div role="alert">
            <span class="block sm:inline">
              Your password must be at least 8 characters long.
            </span>
          </div>
        </div>
        <!-- CONFIRM PASSWORD FIELD -->
        <div>
          <label
            for="confirm_password"
            class="block text-[#0C0D0D] font-semibold"
          >
            Confirm Password
          </label>
          <input
            v-model="confirmPassword"
            type="password"
            class="w-[80%] outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
          />
        </div>
        <!-- ERROR MESSAGES FOR PASSWORD CONFIRMATION -->
        <div class="reset-password-error" v-if="errors">
          <div role="alert" class="text-red-700">
            <span class="block sm:inline"> Passwords do not match. </span>
          </div>
        </div>
        <!-- CHECK IF RESET PASSWORD LINK EXPIRED -->
        <div class="mt-8 mb-3" v-if="linkExpired">
          <div
            class="bg-red-100 border-red-500 text-red-800 mb-6 p-3 ml-[10%] rounded-lg border-2 shadow-md min-h-[56px] text-base font-medium w-[80%]"
            role="alert"
          >
            <p>Password reset link expired!</p>
            <br />
            <a
              href="./forgot-password"
              class="text-[#087BB4] hover:text-[#0C587D] underline font-medium"
            >
              Generate a new link?
            </a>
          </div>
        </div>
        <!-- RESET / SUBMIT NEW PASSWORD BUTTON -->
        <div class="mt-[40px] mb-[40px] w-full">
          <button
            type="submit"
            class="h-[55px] w-[280px] font-semibold text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semibold shadow-[4px_4px_0px_black]"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* * * * * Default: Mobile view (max-width: 639px) * * * * */

form label,
.reset-password-error {
  margin-bottom: 5px;
  text-align: left;
  width: 80%;
  margin-left: 10%;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

form input {
  margin-bottom: 20px;
}

.reset-password-error {
  margin-bottom: 20px;
}

/* * * * * Large Devices (≥1025px) * * * * */
@media only screen and (min-width: 1025px) {
  #reset-password-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  }

  #reset-password-banner {
    grid-area: 1 / span 1;
    height: 100%;
  }

  #reset-password-form-container {
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 1 / span 2;
  }
}
</style>

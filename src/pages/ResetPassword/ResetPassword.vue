<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const errors = ref(false); // flag to display error on frontend
var linkExpired = ref(false); // flag for link expired error on frontend
const password = ref('');
const confirmPassword = ref('');
const token = ref('');
const router = useRouter();

let errorMessage = ref('');

onMounted(() => {
  // Get the token from the URL query parameters
  const query = new URLSearchParams(window.location.search);
  token.value = query.get('token');

  if (!token.value) {
    errorMessage.value =
      'Invalid password reset link. Please request a new one.';
  }
});

const showErrorAlert = (message) => {
  errors.value = true;
  errorMessage.value = message;
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
    }
  }
};
</script>

<template>
  <div
    class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
  >
    <div
      class="w-5/12 md:w-full sm:w-full relative flex items-center jusitfy-center"
    >
      <div class="w-full flex flex-col justify-center items-center gap-14 z-10">
        <img
          src="/assets/images/LoginImg/icons.svg"
          alt="logo icon"
          class="w-[50%] h-[50%]"
        />
        <img
          src="/assets/images/LoginImg/logo-icon.svg"
          alt="logo icon"
          class="w-[45%] h-[45%]"
        />
      </div>
      <img
        src="/assets/images/LoginImg/wave-icon.svg"
        alt="wave icon"
        class="absolute -bottom-[15%] right-0 w-full -z-1"
      />
    </div>

    <div
      class="w-7/12 md:w-full sm:w-full bg-white flex flex-col items-center justify-center border-2"
    >
      <form
        @submit="resetConfirm"
        method="post"
        class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%] my-4"
      >
        <div
          class="text-[#151E22] text-center w-7/12 mb-10 mobile:w-full mobile:mb-4"
        >
          <h1 class="text-[36px] mobile:text-[24px]">Create a new Password</h1>
        </div>

        <div class="w-7/12 max-w-[450px]">
          <!-- PASSWORD FIELD -->
          <div class="mb-[8px] mobile:w-full">
            <label for="password" class="block text-[#0C0D0D] font-semiBold"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="w-full outline-none border-2 border-black h-[48px] px-4 rounded-[8px]"
              id="password"
              name="password"
              placeholder="Create your best password"
            />
          </div>

          <div
            class="mb-6"
            :class="{ 'text-red-700': errors, 'text-[#2F3E45]': !errors }"
          >
            <div role="alert">
              <span class="block sm:inline"
                >Your password must be at least 8 characters long</span
              >
            </div>
          </div>

          <!-- CONFIRM PASSWORD FIELD -->
          <div class="mb-[8px] mobile:w-full">
            <label
              for="confirm_password"
              class="block text-[#0C0D0D] font-semiBold"
              >Confirm Password</label
            >
            <input
              v-model="confirmPassword"
              type="password"
              class="w-full outline-none border-2 border-black h-[48px] px-4 rounded-[8px]"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
            />
          </div>
          <div class="mb-6" v-if="errors">
            <div role="alert" class="text-red-700">
              <span class="block sm:inline">Passwords do not match</span>
            </div>
          </div>
          <div class="mb-6" v-if="linkExpired">
            <div role="alert" class="text-red-700">
              <span class="block sm:inline">Password reset link expired!</span>
              <a
                href="./forgot-password"
                class="underline text-[#087BB4] font-medium"
                >Generate a new link?</a
              >
            </div>
          </div>
          <div class="flex justify-center w-full pt-4">
            <button
              type="submit"
              class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
            >
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

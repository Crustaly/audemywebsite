<template>
  <ScrollUpButton />
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
    id="login-container"
    :class="[
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : '',
    ]"
  >
    <Banner
      id="login-banner"
      :CarlImgPath="'/assets/images/LoginImg/logo-icon.svg'"
      bgColor="#f5bc8d"
      curveColor="#f8cba6"
      :isPageShort="showSchoolForm"
    />
    <!-- SHOW LOG IN FORM, IF NOT LOGGED IN -->
    <div
      v-if="!userSession && !showSchoolForm"
      id="login-form-container"
      class="pt-[20px] pb-[20px] mb-[40px] mt-[40px] text-center"
      :class="[!isTablet && !isMobile ? 'mt-[0px] mb-[0px]' : '']"
    >
      <h1 class="text-[#151E22] mobile:text-[28px] text-[35px]">
        Hi there, welcome back!
      </h1>
      <!-- LOG IN FORM -->
      <form
        ref="loginForm"
        @submit="login"
        method="post"
        class="w-[80%] ml-[10%] mt-[20px] pt-[20px] pb-[20px]"
      >
        <!-- ERROR MESSAGES -->
        <div class="mt-8 mb-3" v-if="errors">
          <div
            class="bg-red-100 border-red-500 text-red-800 mb-6 p-3 ml-[10%] rounded-lg border-2 shadow-md min-h-[56px] text-base font-medium w-[80%]"
            role="alert"
          >
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- EMAIL FIELD -->
        <div>
          <label class="block text-[#0C0D0D] font-semibold" for="email">
            Email Address
          </label>
          <input
            v-model="email"
            type="email"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="email"
            name="email"
            placeholder="Enter your email address"
            autocomplete="email"
          />
        </div>
        <!-- PASSWORD FIELD -->
        <div>
          <div id="forgot-password-grid">
            <label for="password" class="text-[#0C0D0D] font-semibold">
              Password
            </label>
            <div id="forgot-password-link">
              <a
                href="./forgot-password"
                class="text-[#087BB4] hover:text-[#0C587D] underline font-medium"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <input
            v-model="password"
            type="password"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <!-- OPTIONAL SIGN UP GRID -->
        <div
          id="signup-grid"
          class="text-[16px] font-semibold mobile:text-[14px] mobile:px-4"
        >
          <p id="signup-caption" class="text-[#0C0D0D]">New to Audemy?</p>
          <div id="signup-link">
            <a
              href="signup"
              class="text-[#087BB4] w-auto hover:text-[#0C587D] underline"
            >
              Sign Up
            </a>
          </div>
        </div>
        <!-- GET STARTED BTN -->
        <div class="mt-[40px] mb-[40px] w-full">
          <button
            type="submit"
            class="h-[55px] w-[280px] py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
          >
            Log in
          </button>
        </div>
        <!-- DECORATIVE "OR" DIVIDER -->
        <div
          class="flex text-gray-500 w-full justify-center items-center gap-2 mt-4"
          aria-hidden="true"
        >
          <div>
            <hr class="w-[180px] h-0.5 bg-gray-500 rounded-sm" />
          </div>
          <div>or</div>
          <div>
            <hr class="w-[180px] h-0.5 bg-gray-500 rounded-sm" />
          </div>
        </div>
        <!-- GOOGLE OAUTH LOG IN -->
        <div
          class="mt-[20px] pt-[20px] pb-[20px]"
          aria-label="Google Login"
          aria-labelledby="Google Login"
        >
          <GoogleLogin :callback="callback" />
        </div>
      </form>
    </div>
    <!-- SHOW SCHOOL FORM, IF CURRENTLY LOGGED IN -->
    <div
      v-if="showSchoolForm"
      id="school-form-container"
      class="pt-[20px] pb-[20px] mb-[40px] mt-[40px]"
      :class="[!isTablet && !isMobile ? 'mt-[0px] mb-[0px]' : '']"
    >
      <form
        @submit.prevent="updateSchool"
        ref="schoolForm"
        method="post"
        class="w-[80%] ml-[10%] mt-[20px] pt-[20px] pb-[20px]"
      >
        <h1 class="text-[#151E22] mobile:text-[28px] text-[35px] text-center">
          Enter Your School
        </h1>
        <div id="school-form">
          <label for="school" class="text-[#0C0D0D] font-semibold">
            School
          </label>
          <input
            v-model="school"
            type="text"
            name="school"
            id="school"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
            placeholder="Enter your school's name"
          />
          <div class="mt-[40px] mb-[40px] w-full text-center">
            <button
              type="submit"
              class="h-[55px] w-[280px] py-3 font-bold rounded-[8px] text-white bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semibold shadow-[4px_4px_0px_black]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
// Components
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Banner from '../../components/AccountPages/Banner.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { ref, onMounted } from 'vue';
import { GoogleLogin } from 'vue3-google-login';
import { useRouter } from 'vue-router';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { handleGoogleCallback, handleSchoolUpdate } from '../api/auth/google';

const email = ref('');
const password = ref('');
var authKey = ref('');
const userSession = ref(null);
const userProfile = ref(null);
const school = ref(''); // Store school input
const showSchoolForm = ref(false); // Control form visibility
const isLoading = ref(false); // For loading state
const router = useRouter();
var OAuthResponse = ref(null);

import { useErrorAlert } from '../../Utilities/useErrorAlert';
const { errors, errorMessage, showErrorAlert } = useErrorAlert();

onMounted(() => {
  const session = Cookies.get('audemyUserSession');
  if (session) {
    const parsed = JSON.parse(session);
    // console.log("Parsed session:", parsed);

    let token = parsed.token || parsed; // Check if parsed is an object with a token or just the token itself.

    if (typeof token === 'string') {
      try {
        const decoded = jwtDecode(token); // Decode the token only if it's a string
        const currentTime = Math.floor(Date.now() / 1000);

        const toEST = (unix) =>
          new Date(unix * 1000).toLocaleString('en-US', {
            timeZone: 'America/New_York',
            hour12: false,
          });

        console.log('Current Time (EST):', toEST(currentTime));
        console.log('Expiry Time (EST):', toEST(decoded.exp));

        if (decoded.exp < currentTime) {
          Cookies.remove('audemyUserSession');
          userSession.value = null;
          router.push('/login');
        } else {
          userSession.value = parsed;
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        Cookies.remove('audemyUserSession');
        userSession.value = null;
        router.push('/login');
      }
    } else {
      console.error('Invalid token format:', token);
      Cookies.remove('audemyUserSession');
      userSession.value = null;
      router.push('/login');
    }
  }
});

const handleApiError = (status, message) => {
  switch (status) {
    case 400:
      showErrorAlert(message || 'Bad request: Please check your input');
      break;
    case 401:
      showErrorAlert(message || 'Unauthorized: Invalid credentials');
      break;
    case 403:
      showErrorAlert(
        message ||
          "Forbidden: You don't have permission to access this resource"
      );
      break;
    case 404:
      showErrorAlert(message || 'Resource not found');
      break;
    case 405:
      showErrorAlert(message || 'Method not allowed');
      break;
    case 429:
      showErrorAlert(message || 'Too many requests: Please try again later');
      break;
    case 500:
      showErrorAlert(
        message || 'Internal server error. Please try again later.'
      );
      break;
    case 502:
      showErrorAlert(
        message || 'Internal server error. Please try again later.'
      );
      break;
    case 503:
      showErrorAlert(
        message || 'Internal server error. Please try again later.'
      );
      break;
    case 504:
      showErrorAlert(
        message || 'Internal server error. Please try again later.'
      );
      break;
    default:
      // Handle other errors
      showErrorAlert(message || 'Unexpected error occurred.');
  }
};

const resetErrors = () => {
  setTimeout(() => {
    errors.value = false;
  }, 5000);
};

const login = async (event) => {
  event.preventDefault();
  if (!email.value || !password.value) {
    handleApiError(400, 'Email and password are required');
    resetErrors();
    return;
  }

  isLoading.value = true; // Show loading UI

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: { email: email.value, password: password.value },
      }),
    });

    // // Log response before parsing
    // const textResponse = await response.text();
    // console.log("Raw Response:", textResponse);
    // Check if response is JSON before trying to parse it
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const errorText = await response.text();
      console.error('Non-JSON response:', errorText);

      if (!response.ok) {
        console.log('response not okay');
        handleApiError(response.status, errorText || 'No details provided');
        console.log('alert message displayed');
        return;
      }

      console.log('Success with non-JSON response');
      window.location.href = '/login';
      return;
    }

    const data = await response.json();
    // console.log("Response Data:", data);

    if (!response.ok) {
      handleApiError(response.status, data.error || 'Failed to login');
      return;
    }

    authKey.value = response.headers.get('authorization');

    Cookies.set(
      'audemyUserSession',
      JSON.stringify({ token: authKey.value, user: data.user }),
      { expires: 7 } // Set cookie with token and user data
    );
    userSession.value = { token: authKey.value, user: data.user };
    router.push('/game-zone');
  } catch (error) {
    console.error('Error:', error);
    showErrorAlert('Connection error: Please check your internet connection');
  } finally {
    isLoading.value = false; // Hide loading UI
  }
};

const callback = async (response) => {
  OAuthResponse = response.credential;
  isLoading.value = true; // Show loading UI

  try {
    await handleGoogleCallback(
      response,
      userProfile,
      showSchoolForm,
      userSession,
      router
    );
  } catch (error) {
    console.error('Error:', error);
    showErrorAlert('Connection error: Please check your internet connection');
  } finally {
    isLoading.value = false; // Hide loading UI
  }
};

const updateSchool = async () => {
  isLoading.value = true; // Show loading UI
  try {
    await handleSchoolUpdate(
      school,
      userProfile,
      OAuthResponse,
      userSession,
      showSchoolForm,
      router
    );
  } catch (error) {
    console.error('Error updating school:', error);
    showErrorAlert('Connection error: Please check your internet connection');
  } finally {
    isLoading.value = false; // Hide loading UI
  }
};

const logout = () => {
  Cookies.remove('audemyUserSession');
  userSession.value = null;
  userProfile.value = null;
  router.push('/login');
};
</script>

<style scoped>
/* * * * * Default: Mobile view (max-width: 639px) * * * * */

label {
  margin-bottom: 5px;
  text-align: left;
  width: 80%;
}

input {
  margin-bottom: 20px;
}

#signup-grid,
#forgot-password-grid {
  display: grid;
  grid-template-columns: auto auto;
}

#signup-caption,
#signup-link {
  margin-top: 10px;
  margin-bottom: 10px;
}

#signup-grid {
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

#signup-caption,
#forgot-password-grid label {
  grid-column: 1;
  text-align: left;
}

#forgot-password-link {
  margin-bottom: 5px; /* to align with Password label */
}

#signup-link,
#forgot-password-link {
  grid-column: 2;
  text-align: right;
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

/* * * * * Large Devices (≥1025px) * * * * */
@media only screen and (min-width: 1025px) {
  #login-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  }

  #login-banner {
    grid-area: 1 / span 1;
    height: 100%;
  }

  #login-form-container,
  #school-form-container {
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 1 / span 2;
    padding-bottom: 50px;
  }
}
</style>

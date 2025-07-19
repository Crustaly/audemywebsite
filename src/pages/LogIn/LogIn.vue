<template>
  <ScrollUpButton />
  <div v-if="isLoading" class="loading-overlay">Loading...</div>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div id="login-container" class="content-container lg:grid lg:grid-cols-3">
    <Banner
      id="login-banner"
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/LoginImg/logo-icon.svg'"
      bgColor="#f5bc8d"
      curveColor="#f8cba6"
      :isPageShort="showSchoolForm"
    />
    <!-- SHOW LOG IN FORM, IF NOT LOGGED IN -->
    <div
      v-if="!userSession && !showSchoolForm"
      id="login-form-container"
      class="form-container-view-height lg:mt-0 lg:mb-0 lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">Hi there, welcome back!</h1>
      <!-- LOG IN FORM -->
      <form ref="loginForm" @submit="login" method="post" class="form-wrapper">
        <!-- ERROR MESSAGES -->
        <div class="form-error-wrapper" v-if="errors">
          <div class="error-message" role="alert">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- EMAIL FIELD -->
        <div>
          <label class="form-label" for="email">Email Address</label>
          <input
            v-model="email"
            type="email"
            class="form-input-full"
            id="email"
            name="email"
            placeholder="Enter your email address"
            autocomplete="email"
          />
        </div>
        <!-- PASSWORD FIELD -->
        <div>
          <div class="grid grid-cols-2">
            <label for="password" class="form-label col-start-1">
              Password
            </label>
            <div class="mb-[5px] col-start-2 text-right my-auto">
              <a href="./forgot-password" class="auth-link">
                Forgot password?
              </a>
            </div>
          </div>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="form-input-full"
            id="password"
            name="password"
            placeholder="Enter your password"
            minlength="8"
            maxlength="15"
          />
          <!-- TOGGLE PASSWORD VISIBILITY -->
          <PasswordToggle
            :showPassword="showPassword"
            @password-toggle="showPassword = !showPassword"
            class="mb-0"
          />
        </div>
        <!-- OPTIONAL SIGN UP GRID -->
        <div class="auth-grid">
          <p class="auth-grid-caption">New to Audemy?</p>
          <div class="auth-grid-link">
            <a href="signup" class="auth-link">Sign Up</a>
          </div>
        </div>
        <!-- LOGIN BUTTON -->
        <div class="form-action-container">
          <button type="submit" class="secondary-button">Log in</button>
        </div>
        <!-- DECORATIVE "OR" DIVIDER -->
        <div class="divider-container" aria-hidden="true">
          <hr class="divider-line" />
          <span>or</span>
          <hr class="divider-line" />
        </div>
        <!-- GOOGLE OAUTH LOG IN -->
        <div
          class="auth-provider-container"
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
      class="form-container-view-height lg:mt-0 lg:mb-0 lg:col-span-2 lg:pb-[50px]"
    >
      <form
        @submit.prevent="updateSchool"
        ref="schoolForm"
        method="post"
        class="form-wrapper"
      >
        <h1 class="form-title text-center">Enter Your School</h1>
        <!-- ERROR MESSAGES -->
        <div class="form-error-wrapper" v-if="errors">
          <div class="error-message" role="alert">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- SCHOOL NAME FIELD -->
        <div id="school-form">
          <label for="school" class="form-label">School</label>
          <input
            v-model="school"
            type="text"
            name="school"
            id="school"
            class="form-input-full"
            placeholder="Enter your school's name"
          />
          <div class="form-action-container">
            <button type="submit" class="primary-button">Submit</button>
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
import PasswordToggle from '../../components/AccountPages/PasswordToggle.vue';

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
const showPassword = ref(false); // Toggle password visibility
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
  if (!school.value) {
    handleApiError(400, 'School name is required');
    resetErrors();
    return;
  }

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

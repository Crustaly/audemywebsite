<template>
  <ScrollUpButton />
  <div v-if="isLoading" class="loading-overlay">Loading...</div>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div id="signup-container" class="content-container lg:grid lg:grid-cols-3">
    <!-- Mobile-first decorative, custom banner -->
    <Banner
      id="signup-banner"
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/SignUpImg/signup-carl.png'"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="showSchoolForm"
    />
    <!-- SIGN UP FORM -->
    <div
      v-if="!userSession && !showSchoolForm"
      id="signup-form-container"
      class="form-container-view-height lg:col-span-2"
    >
      <h1 class="form-title">Sign up to get started!</h1>
      <!-- Google OAUTH OPTION -->
      <div
        class="auth-provider-container"
        aria-label="Google Login"
        aria-labelledby="Google Login"
      >
        <GoogleLogin :callback="callback" />
      </div>
      <!-- DECORATIVE "OR" DIVIDER -->
      <div class="divider-container" aria-hidden="true">
        <hr class="divider-line" />
        <span>or</span>
        <hr class="divider-line" />
      </div>
      <!-- FORM FIELD -->
      <form
        ref="signupForm"
        @submit="submitForm"
        method="post"
        class="form-wrapper"
        id="signup-form"
      >
        <!-- FIRST & LAST NAME -->
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-4">
          <div>
            <label class="form-label" for="first_name"> First Name </label>
            <input
              v-model="firstName"
              type="text"
              class="form-input-full"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label class="form-label" for="last_name"> Last Name </label>
            <input
              v-model="lastName"
              type="text"
              class="form-input-full"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <!-- SCHOOL FIELD -->
        <div>
          <label for="school_name" class="form-label"> School </label>
          <input
            v-model="schoolName"
            type="text"
            class="form-input-full"
            id="school_name"
            name="school_name"
            placeholder="Enter your school's name"
          />
        </div>
        <!-- EMAIL FIELD -->
        <div>
          <label class="form-label" for="email">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-input-full"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <!-- PASSWORD FIELD -->
        <div>
          <label for="password" class="form-label"> Password </label>
          <input
            v-model="password"
            type="password"
            class="form-input-full"
            id="password"
            name="password"
            placeholder="Create your best password"
            @input="validatePasswords"
          />
        </div>
        <!-- CONFIRM PASSWORD FIELD -->
        <div class="relative">
          <label for="confirm_password" class="form-label">
            Confirm Password
          </label>
          <input
            v-model="confirmPassword"
            type="password"
            class="form-input-full"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
            @input="validatePasswords"
            @blur="handleConfirmBlur"
          />
        </div>
        <!-- Password match feedback container (Using computed properties) -->
        <div
          v-show="confirmTouched"
          class="feedback-box"
          :class="feedbackClass"
          v-if="feedbackMessage !== 'cleared'"
        >
          <p class="font-medium" role="alert">
            {{ feedbackMessage }}
          </p>
        </div>

        <div class="auth-grid text-center lg:text-left">
          <p class="auth-grid-caption">Already have an Audemy account?</p>
          <div class="auth-grid-link">
            <a href="login" class="auth-link"> Log in </a>
          </div>
        </div>
        <!-- ERROR MESSAGES -->
        <div class="form-error-wrapper" v-if="errors">
          <div class="error-message" role="alert">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- GET STARTED BTN -->
        <div class="form-action-container">
          <button
            type="button"
            @click="submitForm"
            class="primary-button"
            value="Get Started"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
    <!-- SHOW SCHOOL FORM FOR FIRST-TIME GOOGLE OAUTH USERS -->
    <div
      v-if="showSchoolForm"
      id="school-form-container"
      class="form-container-view-height lg:col-span-2"
    >
      <form
        @submit.prevent="updateSchool"
        ref="schoolForm"
        method="post"
        class="form-wrapper"
      >
        <h1 class="form-title text-center">Enter Your School</h1>
        <div id="school-form">
          <label for="school" class="form-label"> School </label>
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

import { ref, watch, onMounted, computed } from 'vue';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from 'vue3-google-login';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { handleGoogleCallback, handleSchoolUpdate } from '../api/auth/google';

var OAuthResponse = ref(null);
const router = useRouter();
const userProfile = ref(null);
const userSession = ref(null);
const showSchoolForm = ref(false); // Control form visibility

const signupForm = ref(null);
const passwordsMatch = ref(false);
const showFeedback = ref(true);
const firstName = ref('');
const lastName = ref('');
const schoolName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const confirmTouched = ref(false);
const formSubmitted = ref(false);
const debugMessage = ref('Please confirm your password');
const isLoading = ref(false);

import { useErrorAlert } from '../../Utilities/useErrorAlert';
const { errors, errorMessage, showErrorAlert } = useErrorAlert();

const resetErrors = () => {
  setTimeout(() => {
    errors.value = false;
  }, 5000);
};

const submitForm = async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  if (
    !firstName.value ||
    !lastName.value ||
    !schoolName.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    showErrorAlert('Please fill in required fields');
    resetErrors();
    return;
  }

  // Set formSubmitted to true
  formSubmitted.value = true;

  // Force validation check before submission
  validatePasswords();

  // Check if passwords match
  if (!passwordsMatch.value) {
    debugMessage.value = "Form submission stopped: passwords don't match";
    showErrorAlert('Passwords do not match. Please try again.');
    return;
  }

  isLoading.value = true; // Show loading UI

  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          first_name: first_name.value,
          last_name: last_name.value,
          // birthday: signupForm.value.birthday.value,
          school_name: school_name.value,
          email: email.value,
          password: password.value,
          confirm_password: confirm_password.value,
        },
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get('content-type');
      let extractedMessage = 'An unexpected error occurred. Please try again.';
      let parsedData = null; // To hold the parsed JSON object if successful

      if (contentType && contentType.includes('application/json')) {
        // If it's JSON, try to parse it
        try {
          parsedData = await response.json();
          extractedMessage =
            parsedData.error ||
            parsedData.message ||
            `Server error (JSON): Status ${response.status}`;
        } catch (e) {
          // 5. If JSON parsing fails (e.g., malformed JSON), set a specific message
          extractedMessage = `Could not parse server response (expected JSON). Status: ${response.status}`;
        }
      } else {
        // If it's not JSON, handle as text
        const errorText = await response.text();
        console.error('Non-JSON error response:', errorText);
        try {
          parsedData = JSON.parse(errorText);
          extractedMessage =
            parsedData.error || parsedData.message || errorText;
        } catch (e) {
          extractedMessage =
            errorText.trim() !== ''
              ? errorText
              : `Server error (text): Status ${response.status}`;
        }
      }

      // Now handle based on status code
      switch (response.status) {
        case 400:
          showErrorAlert(
            extractedMessage || 'Bad request: Please check your input'
          );
          break;
        case 401:
          showErrorAlert(
            extractedMessage || 'Unauthorized: Invalid credentials'
          );
          break;
        case 403:
          showErrorAlert(
            extractedMessage ||
              "Forbidden: You don't have permission to access this resource"
          );
          break;
        case 404:
          showErrorAlert(extractedMessage || 'Resource not found');
          break;
        case 405:
          showErrorAlert(extractedMessage || 'Method not allowed');
          break;
        case 429:
          showErrorAlert(
            extractedMessage || 'Too many requests: Please try again later'
          );
          break;
        case 500:
          showErrorAlert(
            extractedMessage || 'Internal server error. Please try again later.'
          );
          break;
        case 502:
          showErrorAlert(
            extractedMessage || 'Internal server error. Please try again later.'
          );
          break;
        case 503:
          showErrorAlert(
            extractedMessage || 'Internal server error. Please try again later.'
          );
          break;
        case 504:
          showErrorAlert(
            extractedMessage || 'Internal server error. Please try again later.'
          );
          break;
        default:
          // Try to get error message from response if it's JSON
          showErrorAlert(
            extractedMessage || `Unexpected error: Status ${response.status}`
          );
      }

      // Instead of throwing an error, just return to stop execution
      return;
    }

    // Continue with normal execution if response is OK
    const data = await response.json();

    console.log('Success:', data);
    //! Go To login
    console.log('Signup Successful', data);

    const loginResponse = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email.value, // Use the ref directly
          password: password.value, // Use the ref directly
        },
      }),
    });

    if (!loginResponse.ok) {
      const loginContentType = loginResponse.headers.get('content-type');
      let loginData;

      if (loginContentType && loginContentType.includes('application/json')) {
        try {
          loginData = await loginResponse.json();
        } catch (e) {
          console.error('Error parsing login JSON:', e);
        }
      }

      switch (loginResponse.status) {
        case 400:
          alert('Invalid login request. Please check your information.');
          break;
        case 401:
          alert('Invalid email or password. Please try again.');
          break;
        case 404:
          alert('Account not found. Please check your email.');
          break;
        case 429:
          alert('Too many login attempts. Please try again later.');
          break;
        case 500:
          showErrorAlert('Internal server error. Please try again later.');
          break;
        case 502:
          showErrorAlert('Internal server error. Please try again later.');
          break;
        case 503:
          showErrorAlert('Internal server error. Please try again later.');
          break;
        case 504:
          showErrorAlert('Internal server error. Please try again later.');
          break;
        default:
          alert(
            `Login error: ${
              (loginData && loginData.error) || 'Something went wrong'
            }`
          );
      }

      // Return without throwing error to prevent dual alerts
      return;
    }

    const loginData = await loginResponse.json();
    console.log('Login Successful', loginData);

    if (loginData.token) {
      Cookies.set('audemyUserSession', JSON.stringify(loginData.token), {
        expires: 7, // Set the cookie to expire in 7 days
        secure: true,
      });
      window.location.href = '/game-zone';
    } else {
      showErrorAlert('Token not found');
      return;
    }
    signupForm.value?.reset?.();
  } catch (error) {
    console.error('Error:', error.message);
    // Only show error alert if it hasn't been shown by the code above
    showErrorAlert(`Error: ${error.message}`);
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
    console.error(error.message);
    showErrorAlert(error.message);
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
    console.error(error.message);
    showErrorAlert(error.message);
  } finally {
    isLoading.value = false; // Hide loading UI
  }
};

const validatePasswords = () => {
  // Always show feedback
  showFeedback.value = true;

  if (password.value && confirmPassword.value) {
    // Both fields have values, set match status
    passwordsMatch.value = password.value === confirmPassword.value;
    debugMessage.value = passwordsMatch.value
      ? 'Passwords are a match.'
      : 'Passwords do not match.';
  } else if (confirmTouched.value && confirmPassword.value === '') {
    // If user has interacted with confirm field but it's now empty
    passwordsMatch.value = false;
    debugMessage.value = 'Please confirm your password';
  } else if (formSubmitted.value) {
    // If form was submitted but confirm password is empty
    passwordsMatch.value = false;
    debugMessage.value = 'Please confirm your password';
  } else if (confirmPassword.value) {
    // Confirm password has a value but doesn't match
    passwordsMatch.value = false;
    debugMessage.value = 'Passwords do not match.';
  } else {
    // Confirm password is empty and never touched
    passwordsMatch.value = null;
    debugMessage.value = 'Please confirm your password';
  }

  // console.log("passwordsMatch after:", passwordsMatch.value);
};

const handleConfirmBlur = () => {
  confirmTouched.value = true;
  validatePasswords();
};

onMounted(() => {
  // Force feedback to show for debugging
  showFeedback.value = true;
  validatePasswords();
});

// Watch both password fields for changes
watch(password, () => {
  validatePasswords();
});

watch(confirmPassword, () => {
  validatePasswords();
});

// Reset formSubmitted when either password changes
watch([password, confirmPassword], () => {
  // Reset formSubmitted whenever either password changes after form submission
  if (formSubmitted.value) {
    formSubmitted.value = false;
  }

  // If user is typing in confirm field, mark it as touched
  if (confirmPassword.value) {
    confirmTouched.value = true;
  }
});

const feedbackMessage = computed(() => {
  if (passwordsMatch.value === true) {
    return 'Yeye! Passwords are a match!';
  } else if (passwordsMatch.value === false) {
    // Check if user cleared any password fields
    if (password.value === '') {
      if (confirmPassword.value === '') {
        return 'cleared';
      } else {
        return 'Please enter a password.';
      }
    } else if (confirmPassword.value === '') {
      return 'Please confirm your password.';
    } else {
      return 'Oops! Passwords do not match. Please Try again.';
    }
  } else {
    // Case: passwordsMatch.value === null
    return 'Please confirm your password.';
  }
  return 'Please confirm your password.'; // Null case
});

const feedbackClass = computed(() => {
  if (passwordsMatch.value === true) {
    return 'bg-green-100 border-green-500 text-green-800';
  } else if (passwordsMatch.value === false) {
    return 'bg-red-100 border-red-500 text-red-800';
  } else {
    return 'bg-gray-100 border-gray-400 text-gray-800';
  }
});
</script>

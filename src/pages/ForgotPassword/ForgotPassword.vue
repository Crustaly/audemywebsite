<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const errors = ref(false); // flag to display error on frontend
const email = ref(''); // email input field value
const router = useRouter();
const errorMessage = ref('');
const isLoading = ref(false); // For loading state

const showErrorAlert = (message) => {
  errors.value = true;
  errorMessage.value = message;
  setTimeout(() => {
    errors.value = false;
  }, 5000);
};

const sendResetEmail = async (event) => {
  // prevent default form submission which would reload the page
  event.preventDefault();
  console.log('Sending reset email to:', email.value);

  isLoading.value = true; // Show loading UI

  // API call to send reset email
  try {
    const emailResponse = await fetch(`/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
      }),
    });
    // Handle the response from the API based on the status code
    console.log('Response:', emailResponse.status);
    // Get the response data
    const responseData = await emailResponse.json().catch(() => ({}));

    if (!emailResponse.ok) {
      switch (emailResponse.status) {
        case 400:
          showErrorAlert('Bad request: Please check your input');
          break;
        case 401:
          showErrorAlert('Unauthorized: Invalid credentials');
          break;
        case 403:
          showErrorAlert(
            "Forbidden: You don't have permission to access this resource"
          );
          break;
        case 404:
          if (!email.value) {
            showErrorAlert('Please enter your email.');
          } else {
            showErrorAlert('No account found with that email address.');
          }
          break;
        case 405:
          showErrorAlert('Method not allowed');
          break;
        case 429:
          showErrorAlert('Too many requests: Please try again later');
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
          // Handle other errors
          alert('Unexpected error occurred.');
      }
      // Return to prevent further execution
      return;
    } else {
      // Route to reset-link-sent page if email sent successfully
      console.log('Email sent successfully.');
      router.push('/reset-link-sent');
    }
  } catch (error) {
    // Handle network errors
    console.error('Error: ', error);
    errors.value = true;
    alert('Network error. Please check your connection and try again.');
  } finally {
    isLoading.value = false; // Hide loading UI
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
    id="forgot-pw-container"
    :class="[
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : '',
    ]"
  >
    <Banner
      id="forgot-pw-banner"
      :CarlImgPath="'/assets/images/impact/globe-icon.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div
      id="forgot-pw-form-container"
      class="pt-[20px] pb-[20px] mb-[40px] mt-[40px] text-center"
      :class="[!isTablet && !isMobile ? 'mt-[0px] mb-[0px]' : '']"
    >
      <h1 class="text-[#151E22] mobile:text-[28px] text-[35px]">
        Let's reset your password
      </h1>
      <br />
      <p class="w-[80%] ml-[10%]">
        Enter the email associated with your account and we’ll send you a link
        to reset your password.
      </p>
      <!-- FORGOT PASSWORD FORM -->
      <form
        @submit="sendResetEmail"
        method="post"
        class="w-[80%] ml-[10%] mt-[20px] pt-[20px] pb-[20px]"
      >
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
        <!-- ERROR MESSAGES -->
        <div class="mt-8 mb-3" v-if="errors">
          <div
            class="bg-red-100 border-red-500 text-red-800 mb-6 p-3 ml-[10%] rounded-lg border-2 shadow-md min-h-[56px] text-base font-medium w-[80%]"
            role="alert"
          >
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- RETURN TO LOGIN OPTION -->
        <div
          id="login-grid"
          class="text-[16px] font-semibold text-[#0C0D0D] mobile:text-[14px] mobile:px-4"
        >
          <p id="login-caption" class="mt-[10px] mb-[10px]">Return to Login?</p>
          <div id="login-link">
            <a
              href="login"
              class="text-[#087BB4] w-auto hover:text-[#0C587D] underline"
            >
              Log in
            </a>
          </div>
        </div>
        <!-- SUBMIT BUTTON -->
        <div class="mt-[40px] mb-[40px] w-full">
          <button
            type="submit"
            class="h-[55px] w-[280px] font-semibold text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semibold shadow-[4px_4px_0px_black]"
          >
            Send link to email
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

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

#login-grid {
  display: grid;
  grid-template-columns: auto auto;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

#login-caption,
#login-link {
  margin-top: 10px;
  margin-bottom: 10px;
}

#login-caption {
  grid-column: 1;
  text-align: left;
}

#login-link {
  grid-column: 2;
  text-align: right;
}

/* * * * * Large Devices (≥1025px) * * * * */
@media only screen and (min-width: 1025px) {
  #forgot-pw-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  }

  #forgot-pw-banner {
    grid-area: 1 / span 1;
    height: 100%;
  }

  #forgot-pw-form-container {
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 1 / span 2;
    padding-bottom: 50px;
  }
}
</style>

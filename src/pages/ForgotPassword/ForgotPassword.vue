<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import LoadingOverlay from '../../components/PageDecorations/LoadingOverlay.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref(''); // email input field value
const router = useRouter();
const isLoading = ref(false); // For loading state

import { useErrorAlert } from '../../Utilities/useErrorAlert';
const { errors, errorMessage, showErrorAlert } = useErrorAlert();

const sendResetEmail = async (event) => {
  // prevent default form submission which would reload the page
  event.preventDefault();

  if (!email.value) {
    showErrorAlert('Email is required to send reset link.');
    return;
  }

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
  <LoadingOverlay v-if="isLoading" />
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="forgot-pw-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="forgot-pw-banner"
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div
      id="forgot-pw-form-container"
      class="form-container-view-height lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">Let's reset your password</h1>
      <br />
      <p class="form-description">
        Enter the email associated with your account and we’ll send you a link
        to reset your password.
      </p>
      <!-- FORGOT PASSWORD FORM -->
      <form @submit="sendResetEmail" method="post" class="form-wrapper">
        <!-- EMAIL INPUT -->
        <div>
          <label class="form-label" for="email"> Email Address </label>
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
        <!-- ERROR MESSAGES -->
        <div class="mt-8 mb-3" v-if="errors">
          <div class="error-message" role="alert">
            <p>{{ errorMessage }}</p>
          </div>
        </div>
        <!-- RETURN TO LOGIN OPTION -->
        <div class="auth-grid">
          <p class="auth-grid-caption">Return to Login?</p>
          <div class="auth-grid-link">
            <a href="login" class="auth-link">Log in</a>
          </div>
        </div>
        <!-- SUBMIT BUTTON -->
        <div class="form-action-container">
          <button type="submit" class="primary-button">
            Send link to email
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

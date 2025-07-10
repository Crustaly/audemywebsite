<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const user = ref('');
const token = ref('');

onMounted(() => {
  // Get the token from the URL query parameters
  const query = new URLSearchParams(window.location.search);
  user.value = query.get('user');
  token.value = query.get('token');
});

const toResetPswd = () => {
  // Route to reset-password page when continue button is clicked
  router.push('/reset-password?user=' + user.value + '&token=' + token.value);
};
</script>

<template>
  <div :class="['page-container']" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="reset-landing-page-container"
    :class="['content-container', 'reset-page-grid-layout']"
  >
    <Banner
      id="reset-landing-page-banner"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
      class="reset-page-banner-grid-area"
    />
    <div
      id="reset-landing-page-form-container"
      class="form-container-view-height lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">Hello, {{ user }}</h1>
      <br />
      <p class="form-description">
        A request has been made to reset your password. If you made this
        request, please click the button below.
      </p>
      <!-- RESET PASSWORD FORM -->
      <form @submit="toResetPswd" method="post" class="form-wrapper">
        <div class="mt-[40px] mb-[40px] w-full">
          <button type="submit" class="primary-button">Continue</button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

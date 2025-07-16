<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const userSession = ref(null);
const showSchoolForm = ref(false); // Control form visibility
const router = useRouter();

onMounted(() => {});

const forgotPassword = async (event) => {
  router.push('/forgot-password');
};
</script>

<template>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="reset-link-sent-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="reset-link-sent-banner"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
      class="lg:col-span-1 lg:h-full"
    />
    <!-- SHOW RESET FORM IF NOT LOGGED IN -->
    <div
      v-if="!userSession && !showSchoolForm"
      id="reset-link-sent-form-container"
      class="form-container-view-height lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">Email Sent!</h1>
      <br />
      <p class="form-description">
        Check your email and open the link we sent to continue.
      </p>
      <!-- FORGOT PASSWORD FORM -->
      <form @submit="forgotPassword" method="post" class="form-wrapper">
        <div class="mt-[40px] mb-[40px] w-full">
          <button
            type="submit"
            class="primary-button font-semibold hover:bg-[#0C587D] hover:cursor-pointer"
          >
            Use another email
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>

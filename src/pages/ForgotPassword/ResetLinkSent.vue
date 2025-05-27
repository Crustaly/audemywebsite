<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const userSession = ref(null);
const showSchoolForm = ref(false); // Control form visibility
const router = useRouter();

onMounted(() => {});

const forgotPassword = async (event) => {
  router.push('/forgot-password');
};
</script>

<template>
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
    id="reset-link-sent-container"
    :class="[
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : '',
    ]"
  >
    <Banner
      id="reset-link-sent-banner"
      :CarlImgPath="'/assets/images/impact/globe-icon.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <!-- SHOW RESET FORM IF NOT LOGGED IN -->
    <div
      v-if="!userSession && !showSchoolForm"
      id="reset-link-sent-form-container"
      class="pt-[20px] pb-[20px] mb-[40px] mt-[40px] text-center"
      :class="[!isTablet && !isMobile ? 'mt-[0px] mb-[0px]' : '']"
    >
      <h1 class="text-[#151E22] mobile:text-[28px] text-[35px]">Email Sent!</h1>
      <br />
      <p class="w-[80%] ml-[10%]">
        Check your email and open the link we sent to continue.
      </p>
      <!-- FORGOT PASSWORD FORM -->
      <form
        @submit="forgotPassword"
        method="post"
        class="w-[80%] ml-[10%] mt-[20px] pt-[20px] pb-[20px]"
      >
        <div class="mt-[40px] mb-[40px] w-full">
          <button
            type="submit"
            class="h-[55px] w-[280px] font-semibold text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semibold shadow-[4px_4px_0px_black]"
          >
            Use another email
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* * * * * Large Devices (≥1025px) * * * * */
@media only screen and (min-width: 1025px) {
  #reset-link-sent-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  }

  #reset-link-sent-banner {
    grid-area: 1 / span 1;
    height: 100%;
  }

  #reset-link-sent-form-container {
    margin-top: 0px;
    margin-bottom: 0px;
    grid-area: 1 / span 2;
    padding-bottom: 50px;
  }
}
</style>

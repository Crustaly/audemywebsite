<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const toGameZone = () => {
  router.push('/game-zone');
};
</script>

<template>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="reset-confirm-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="reset-confirm-banner"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
      class="lg:col-span-1 lg:h-full"
    />
    <div
      id="reset-confirm-form-container"
      class="form-container-view-height lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">You're all set!</h1>
      <br />
      <p class="form-description">
        Use the password you just created the next time you log in.
      </p>
      <!-- GO TO GAME ZONE FORM -->
      <form @submit="toGameZone" method="post" class="form-wrapper">
        <div class="form-action-container">
          <button
            type="submit"
            class="primary-button font-semibold hover:bg-[#0C587D] hover:cursor-pointer"
          >
            Return to Game Zone
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

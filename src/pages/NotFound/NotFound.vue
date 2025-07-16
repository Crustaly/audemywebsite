<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const toGameZone = () => {
  // Route to game-zone page when button is clicked
  router.push('/game-zone');
};
</script>

<template>
  <div class="page-container" ref="content">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div
    id="page-not-found-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="page-not-found-banner"
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div
      id="page-not-found-form-container"
      class="form-container-view-height lg:col-span-2 lg:pb-[50px]"
    >
      <h1 class="form-title">404: Oops! Page doesn't exist!</h1>
      <br />
      <p class="form-description">Please try again, or check your URL.</p>
      <!-- RETURN TO GAME ZONE FORM -->
      <form @submit="toGameZone" method="post" class="form-wrapper">
        <div class="form-action-container">
          <button type="submit" class="primary-button">
            Return to Game Zone
          </button>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ReturnToGameZoneButton from '../../components/ReturnToGameZoneButton/ReturnToGameZoneButton.vue';
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
      :CarlImgPath="'/assets/images/impact/carl-globe.svg'"
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
      <!-- RETURN TO GAME ZONE LANDING PAGE BUTTON -->
      <ReturnToGameZoneButton />
    </div>
  </div>
  <Footer />
</template>

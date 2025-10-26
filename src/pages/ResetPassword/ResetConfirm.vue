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
    id="reset-confirm-container"
    class="content-container lg:grid lg:grid-cols-3"
  >
    <Banner
      id="reset-confirm-banner"
      :CarlImgPath="'/assets/images/impact/carl-globe.svg'"
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
      <!-- RETURN TO GAME ZONE LANDING PAGE BUTTON -->
      <ReturnToGameZoneButton />
    </div>
  </div>
  <Footer />
</template>

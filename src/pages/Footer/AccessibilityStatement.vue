<script setup>
import Banner from '../../components/AccountPages/Banner.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const toGameZoneLandingPage = () => {
  // Route to Game Zone Landing Page when button is clicked
  router.push('/game-zone-landing-page');
};
</script>

<template>
  <div class="page-container">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <div class="content-container lg:grid lg:grid-cols-3">
    <Banner
      class="lg:col-span-1 lg:h-full"
      :CarlImgPath="'/assets/images/impact/globe 1.svg'"
      :isImageWide="false"
      bgColor="#B1C7D0"
      curveColor="#E5F0F5"
      :isPageShort="true"
    />
    <div class="form-container-view-height lg:col-span-2 lg:pb-[50px]">
      <h1 class="form-title">Accessibility Statement</h1>
      <br />
      <div class="form-description">
        <p>
          <i><span class="font-semibold">Last updated:</span> July 18, 2025</i>
        </p>
        <br />
        <p>
          At <span class="text-primary-color font-bold">Audemy</span>, we are
          committed to making our educational games and digital resources
          accessible for everyone. We believe all learners, educators, and
          parents or guardians should be able to engage with our content with
          ease.
        </p>
        <br />
        <p>
          We strive to provide an inclusive platform for all visitors and follow
          the
          <span>
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              class="page-link"
            >
              Web Content Accessibility Guidelines
            </a>
            (WCAG) 2.2, Levels A and AA.
          </span>
          From design to development, we work closely with accessibility
          specialists and combine manual and automated tests to improve Audemy's
          screen reader compatibility, keyboard navigation, and overall
          usability. Our tools and methods include Google Lighthouse, VoiceOver,
          and Color Contrast Analyzer.
        </p>
        <br />
        <p>
          If you encounter any difficulties using our site or have questions,
          please reach out at
          <a href="mailto:connect@audemy.org" class="page-link">
            connect@audemy.org</a
          >. We value your feedback and will do our best to help.
        </p>
        <br />
        <p class="font-semibold">
          Thanks for visiting—let's
          <span class="font-semibold text-primary-color"><i>play</i></span> !
        </p>
      </div>
      <!-- RETURN TO GAME ZONE FORM -->
      <form @submit="toGameZoneLandingPage" method="post" class="form-wrapper">
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

<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Hero from "./Hero/Hero.vue";
import Footer from "../../components/Footer/Footer.vue";
import AboutUs from "./AboutUs/AboutUs.vue";
import CTA from "./CTA/CTA.vue";
import Testimonials from "./Testimonials/Testimonials.vue";
import Events from "./Events/Events.vue";
import Sponsors from "./Sponsors/Sponsors.vue";
import TechShowcase from "./TechShowcase/TechShowcase.vue";
import Impact from "./Impact/Impact.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import { ref, onMounted, onUnmounted } from 'vue';

// Device detection
const isTablet = ref(false);
const isMobile = ref(false);

// Check device type on mount and on window resize
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width < 1024) {
    // Medium devices (tablets)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width >= 1024) {
    // Large devices (laptops/desktops)
    isTablet.value = false;
    isMobile.value = false;
  } else {
    // Extra small devices (phones)
    isTablet.value = false;
    isMobile.value = true;
  }
};

// Add event listeners
onMounted(() => {
  checkDeviceType();
  window.addEventListener('resize', checkDeviceType);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDeviceType);
});
</script>

<template>
  <ScrollUpButton />
  <div 
    :class="[
      'relative', 
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : ''
    ]" 
    ref="content"
  >
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    <Hero />
  </div>
  <div 
    :class="[
      !isTablet && !isMobile ? 'px-20 mt-40' : '',
      isTablet ? 'px-10 mt-32' : '',
      isMobile ? 'px-5 mt-20' : ''
    ]"
  >
    <AboutUs />
    <Sponsors />
    <Impact />
  </div>
  <Testimonials />
  <div 
    :class="[
      !isTablet && !isMobile ? 'px-20' : '',
      isTablet ? 'px-10' : '',
      isMobile ? 'px-5' : ''
    ]"
  >
    <TechShowcase />
    <Events />
    <CTA />
  </div>
  <Footer />
</template>

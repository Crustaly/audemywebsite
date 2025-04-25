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

import { useDeviceType } from '../../utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();

</script>

<template>
  <ScrollUpButton />
  <div 
    :class="[
      'relative', 
      !isTablet && !isMobile ? 'px-14' : '',
      isTablet ? 'px-6' : '',
      isMobile ? 'px-8' : ''
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

<script setup>
// Components
import Header from '../../components/Header/Header.vue';
import Hero from './Hero/Hero.vue';
import Footer from '../../components/Footer/Footer.vue';
import AboutUs from './AboutUs/AboutUs.vue';
import CTA from './CTA/CTA.vue';
import Testimonials from './Testimonials/Testimonials.vue';
import Sponsors from './Sponsors/Sponsors.vue';
import TechShowcase from './TechShowcase/TechShowcase.vue';
import Impact from './Impact/Impact.vue';
import WhatWeDo from './WhatWeDo/WhatWeDo.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import PressList from '../Impact/PressList/PressList.vue';
</script>

<template>
  <ScrollUpButton />
  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    <Hero />
    <Impact />
    <WhatWeDo />
  </div>
  <div
    class="relative px-5 mt-20 md:px-10 md:mt-32 lg:px-20 lg:mt-40 font-poppins"
  >
    <Sponsors />
    <TechShowcase />
  </div>
  <Testimonials />
  <div class="relative px-5 mt-20 md:px-10 lg:px-20 font-poppins">
    <PressList />
  </div>
  <Footer />
</template>

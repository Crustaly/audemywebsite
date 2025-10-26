<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import CarlsJourney from './CarlsJourney/CarlsJourney.vue';
import Volunteers from './Volunteers/Volunteers.vue';
import TopDecoration from './TopDecoration/TopDecoration.vue';
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    <TopDecoration />
    <Volunteers />
    <CarlsJourney />
  </div>

  <Footer />
</template>

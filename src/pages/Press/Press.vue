<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import PressList from '../Impact/PressList/PressList.vue';
import Accolades from '../Impact/Accolades/Accolades.vue';
import Sponsors from '../Home/Sponsors/Sponsors.vue';
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <PressList />
  <Accolades />
  <Sponsors />

  <Footer />
</template>

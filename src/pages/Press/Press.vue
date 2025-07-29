<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import PressList from '../Impact/PressList/PressList.vue';
import Accolades from '../Impact/Accolades/Accolades.vue';
import Sponsors from '../Home/Sponsors/Sponsors.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();
</script>

<template>
  <ScrollUpButton />

  <div
    :class="[
      'relative',
      !isTablet && !isMobile ? 'px-14' : '',
      isTablet ? 'px-6' : '',
      isMobile ? 'px-8' : '',
    ]"
    ref="content"
  >
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>
  <PressList />
  <Accolades />
  <Sponsors />

  <Footer />
</template>

<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

// Main content
import Accolades from './Accolades/Accolades.vue';
import OurReach from './OurReach/OurReach.vue';
import CollaboratingSchools from './CollaboratingSchools/CollaboratingSchools.vue';
import ResearchTech from '../OurProjects/ResearchTech/ResearchTech.vue';
import HaveYouHeard from '../OurProjects/Events/HaveYouHeard/HaveYouHeard.vue';
import KatyYouthHacks from '../OurProjects/Events/KatyYouthHacks/KatyYouthHacks.vue';
import SocialMedia from '../OurProjects/Social/SocialMedia.vue';
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>

  <div class="relative w-[80%] md:w-full mx-auto font-poppins">
    <OurReach />
  </div>

  <CollaboratingSchools />

  <div class="relative w-[80%] md:w-[90%] mx-auto py-10 font-poppins">
    <Accolades />
    <ResearchTech />
  </div>

  <div class="flex justify-center px-10 py-10 my-36">
    <div class="md:w-full">
      <HaveYouHeard />
    </div>
  </div>

  <div class="flex justify-center mx-10 my-10">
    <div class="md:w-full">
      <KatyYouthHacks />
    </div>
  </div>

  <div class="flex justify-center px-10 py-10 my-36">
    <div class="md:w-[80%]">
      <SocialMedia />
    </div>
  </div>

  <Footer />
</template>

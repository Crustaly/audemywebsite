<script setup>
// Components
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import Accolades from './Accolades/Accolades.vue';
import OurReach from './OurReach/OurReach.vue';
import CollaboratingSchools from './CollaboratingSchools/CollaboratingSchools.vue';
import ProjectsInAction from '../OurProjects/ProjectsInAction/ProjectsInAction.vue';
import ResearchTech from '../OurProjects/ResearchTech/ResearchTech.vue';
import HaveYouHeard from '../OurProjects/Events/HaveYouHeard/HaveYouHeard.vue';
import KatyYouthHacks from '../OurProjects/Events/KatyYouthHacks/KatyYouthHacks.vue';
import SocialMedia from '../OurProjects/Social/SocialMedia.vue';
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

  <!--div class="flex justify-center px-8 md:px-14 xl:mt-20">
    <div class="md:w-full md:mt-10">
      <ProjectsInAction />
    </div>
  </div-->

  <OurReach />

  <CollaboratingSchools />
  <Accolades />

  <div class="flex justify-center px-8 md:px-14 mt-36">
    <div class="md:w-full">
      <ResearchTech />
    </div>
  </div>

  <div class="flex justify-center px-8 md:px-14 mt-36">
    <div class="md:w-full">
      <HaveYouHeard />
    </div>
  </div>
  <div class="flex justify-center px-8 md:px-14 mt-36">
    <div class="md:w-full">
      <KatyYouthHacks />
    </div>
  </div>

  <div class="flex justify-center px-8 md:px-14 my-36">
    <div class="md:w-full">
      <SocialMedia />
    </div>
  </div>
  <Footer />
</template>

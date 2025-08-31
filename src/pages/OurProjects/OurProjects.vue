<script setup>
// Components
import Header from '../../components/Header/Header.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import ProjectsInAction from './ProjectsInAction/ProjectsInAction.vue';
import Hero from './Hero/Hero.vue';
import ResearchTech from './ResearchTech/ResearchTech.vue';
import HaveYouHeard from './Events/HaveYouHeard/HaveYouHeard.vue';
import KatyYouthHacks from './Events/KatyYouthHacks/KatyYouthHacks.vue';
import SocialMedia from './Social/SocialMedia.vue';
import Footer from '../../components/Footer/Footer.vue';
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
  </div>

  <div class="flex flex-col font-poppins">
    <!-- Accessibility: Hide decorative image carousel from SR output -->
    <div class="flex justify-center px-8 md:px-14">
      <div class="md:w-full">
        <ProjectsInAction />
      </div>
    </div>

    <div class="flex justify-center px-8 md:px-14 mt-36">
      <div class="md:w-full">
        <ResearchTech />
      </div>
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
  </div>

  <Footer />
</template>

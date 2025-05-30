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
  <div class="flex flex-col">
    <div class="px-4 md:px-8">
      <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    </div>

    <ScrollUpButton />

    <div class="flex justify-center px-8 md:px-14 xl:mt-20">
      <div class="md:w-full md:mt-10">
        <ProjectsInAction />
      </div>
    </div>

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

    <div>
      <Footer />
    </div>
  </div>
</template>

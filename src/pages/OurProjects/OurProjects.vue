<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import ProjectsInAction from "./ProjectsInAction/ProjectsInAction.vue";
import Hero from "./Hero/Hero.vue";
import ResearchTech from "./ResearchTech/ResearchTech.vue";
import HaveYouHeard from "./Events/HaveYouHeard/HaveYouHeard.vue";
import KatyYouthHacks from "./Events/KatyYouthHacks/KatyYouthHacks.vue";
import SocialMedia from "./Social/SocialMedia.vue";
import Footer from "../../components/Footer/Footer.vue";

import { useDeviceType } from "../../Utilities/checkDeviceType";
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
    </div>

    <div class="mobile:px-5">
        <ProjectsInAction />
        <ResearchTech />
    </div>

    <div id="div_events" class="py-10 mobile:px-5">
        <HaveYouHeard />
        <KatyYouthHacks />
    </div>

    <div class="mobile:px-5">
        <SocialMedia />
    </div>

    <Footer />
</template>

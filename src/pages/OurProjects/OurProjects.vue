<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import Hero from "./Hero/Hero.vue";
import ResearchTech from "./ResearchTech/ResearchTech.vue";
import HaveYouHeard from "./Events/HaveYouHeard/HaveYouHeard.vue";
import KatyYouthHacks from "./Events/KatyYouthHacks/KatyYouthHacks.vue";
import SocialMedia from "./Social/SocialMedia.vue";
import Footer from "../../components/Footer/Footer.vue";
</script>

<template>
    <ScrollUpButton />
    <div class="px-16 relative" ref="content">
        <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    </div>

    <div class="mobile:px-5">
        <Hero />
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

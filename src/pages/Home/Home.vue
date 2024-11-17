<script setup>
// Components
import Header from "../../components/Header/Header.vue";
import Hero from "./Hero/Hero.vue";
import Footer from "../../components/Footer/Footer.vue";
import AboutUs from "./AboutUs/AboutUs.vue";
import CTA from "./CTA/CTA.vue";
import Testimonials from "./Testimonials/Testimonials.vue";
import Events from "./Events/Events.vue";
import Sponsors from "./Sponsors/Sponsors.vue";
import TechShowcase from "./TechShowcase/TechShowcase.vue";
import Impact from "./Impact/Impact.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
</script>

<template>
    <ScrollUpButton />
    <div class="px-20 mobile:px-5 relative" ref="content">
        <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
        <Hero />
    </div>

    <div class="px-20 mobile:px-5 mt-40 mobile:mt-20">
        <AboutUs />
        <Sponsors />
        <Impact />
    </div>

    <Testimonials />
    <div class="px-20 mobile:px-5">
        <TechShowcase />
        <Events />
        <CTA />
    </div>
    <Footer />
</template>

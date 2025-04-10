<script setup>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import Foundation from "./Foundation/Foundation.vue";
import CarlsJourney from "./CarlsJourney/CarlsJourney.vue";
import Volunteers from "./Volunteers/Volunteers.vue";
import WeAreCommitted from "./WeAreCommitted/WeAreCommitted.vue";
import CallToAction from "./CallToAction/CallToAction.vue";
</script>

<template>
    <ScrollUpButton />

    <div class="px-16 relative" ref="content">
        <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
        <Foundation />
        <Volunteers />
        <CarlsJourney />
        <WeAreCommitted />
        <CallToAction />
    </div>

    <Footer />
</template>

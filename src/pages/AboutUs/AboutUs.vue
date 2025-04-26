<script setup>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import CarlsJourney from "./CarlsJourney/CarlsJourney.vue";
import Volunteers from "./Volunteers/Volunteers.vue";
import TopDecoration from "./TopDecoration/TopDecoration.vue";

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
        <TopDecoration />
        <Volunteers />
        <CarlsJourney />
    </div>
    
    <Footer />
</template>
<script setup>
// Components
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton.vue";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import Accolades from "./Accolades/Accolades.vue";
import PressList from "./PressList/PressList.vue";
import OurReach from "./OurReach/OurReach.vue";
import CollaboratingSchools from "./CollaboratingSchools/CollaboratingSchools.vue";
import ImpactInAction from "./ImpactInAction/ImpactInAction.vue";

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
    
    <ImpactInAction />
    <PressList />
    <CollaboratingSchools />
    <Accolades />
    <OurReach />
    
    <Footer />
</template>
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
</script>
<template>
    <ScrollUpButton />

    <div class="px-16 relative" ref="content">
        <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
        <OurReach />
    </div>
    <CollaboratingSchools />

    <ImpactInAction />
    <Accolades />
    <PressList />
    <Footer />
</template>

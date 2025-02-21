<template>

    <header class="grid grid-cols-[auto_1fr] items-center py-12 relative">
        <div class="text-lg font-bold">
            <RouterLink to="/home">
                <img
                    :src="logoPath"
                    alt="audemy logo"
                    class="hover:cursor-pointer absolute top-7 h-[60px]"
                    v-if="logoPath"
                />
            </RouterLink>
            <p v-if="!logoPath">audemy</p>
        </div>

        <!-- Desktop Navigation Links -->
        <ul
            :class="
                'flex space-x-8 justify-center font-poppins font-semibold ' +
                (textColor ?? 'text-[#151e22]')
            "
            v-if="!isMobileView"
        >
            <li>
                <RouterLink
                    to="/home"
                    class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                    >Home</RouterLink
                >
            </li>
            <li>
                <RouterLink
                    to="/about-us"
                    class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                    >About us</RouterLink
                >
            </li>
            <li>
                <RouterLink
                    to="/our-projects"
                    class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                    >Our projects</RouterLink
                >
            </li>
            <li>
                <RouterLink
                    to="/impact"
                    class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                    >Impact</RouterLink
                >
            </li>
            <li>
                <RouterLink
                    to="/game-zone"
                    class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                    >Game zone</RouterLink
                >
            </li>
        </ul>

        <!-- Mobile Hamburger Menu -->
        <div v-if="isMobileView" class="absolute top-7 right-0 p-4">
            <button @click="toggleMenu" class="text-xl">&#9776;</button>
            <transition 
                enter-active-class="animate-fade-slide-in"
                leave-active-class="animate-fade-slide-out"
            >
                <ul
                    v-if="isMenuOpen"
                    class="flex flex-col space-y-4 mt-2 bg-white p-4 shadow-md rounded-lg font-poppins font-semibold text-[#151e22]"
                >
                    <li>
                        <RouterLink
                            to="/home"
                            class="hover:text-[#087bb4]"
                            @click="toggleMenu"
                            >Home</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/about-us"
                            class="hover:text-[#087bb4]"
                            @click="toggleMenu"
                            >About us</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/our-projects"
                            class="hover:text-[#087bb4]"
                            @click="toggleMenu"
                            >Our projects</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/impact"
                            class="hover:text-[#087bb4]"
                            @click="toggleMenu"
                            >Impact</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/game-zone"
                            class="hover:text-[#087bb4]"
                            @click="toggleMenu"
                            >Game zone</RouterLink
                        >
                    </li>
                </ul>
            </transition>
        </div>
    </header>

</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    logoPath: {
        type: [String, null],
        required: false,
    },
    textColor: {
        type: [String, null],
        required: false,
    },
});

const isMobileView = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const checkScreenSize = () => {
    isMobileView.value = window.innerWidth <= 768;
};

// Add resize listener to check screen size
onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
});
</script>

<style lang="scss" scoped>
@media (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
button {
    position: relative;
    top: 0.5rem;
    font-size: 2rem;
}
@media (max-width: 768px) {
    ul {
        position: fixed;
        right: 4%;
        top: 6rem;
        width: 90%;
        max-width: 200px;
        z-index: 10;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: #fff;
    }

    li {
        padding: 0.5rem 1rem;
        text-align: center;
    }
}
</style>

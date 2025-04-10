<template>
    <!-- Header height = 60px logo + 32px top offset (top-8) + 32px bottom padding = 124px. -->
    <!-- Logo size is fixed to maintain a consistent UI across viewports. -->  
    <header id="header-grid" class="relative h-[124px]">
        <!-- Logo Section -->
        <div id="logo-item" class="text-lg font-bold absolute left-2 top-8 z-10">
            <RouterLink to="/home">
                <img
                    :src="logoPath"
                    alt="logo"
                    class="hover:cursor-pointer h-[60px]"
                    v-if="logoPath"
                />
            </RouterLink>
            <p v-if="!logoPath">audemy</p>
        </div>

        <!-- Hamburger Button for Mobile -->
        <div id="nav-btn-item" v-if="isMobileView" class="absolute right-4 top-12 z-30">
            <button @click="toggleMenu" class="text-2xl">&#9776;</button>
        </div>

        <!-- Desktop Navigation Links -->
        <nav id="nav-links-grid" v-if="!isMobileView" class="justify-end py-2">
            <ul id="router-links-grid" class="font-poppins font-semibold" 
                :class="[
                    textColor ?? 'text-[#151e22]',
                    isTabletView ? 'space-x-2x text-sm' : 'space-x-4'
                ]">
                <li id="home-item">
                    <RouterLink
                        to="/home"
                        class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                        >Home</RouterLink
                    >
                </li>
                <li id="about-item">
                    <RouterLink
                        to="/about-us"
                        class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                        >About us</RouterLink
                    >
                </li>
                <li id="projects-item">
                    <RouterLink
                        to="/our-projects"
                        class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                        >Our projects</RouterLink
                    >
                </li>
                <li id="impact-item">
                    <RouterLink
                        to="/impact"
                        class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                        >Impact</RouterLink
                    >
                </li>
                <li id="games-item">
                    <RouterLink
                        to="/game-zone"
                        class="px-2 pb-2 hover:text-[#087bb4] hover:border-b-2 border-[#087bb4]"
                        >Game zone</RouterLink
                    >
                </li>
            </ul>
        </nav>

        <!-- Mobile Menu Overlay -->
        <div 
            v-if="isMobileView && isMenuOpen" 
            class="fixed inset-0 bg-black bg-opacity-50 z-40"
            @click="closeMenu"
        ></div>

        <!-- Mobile Slide-in Menu -->
        <div
            v-if="isMobileView && isMenuOpen"
            class="fixed inset-y-0 right-0 bg-white z-50 w-4/5 max-w-xs flex flex-col overflow-hidden"
        >
            <div class="flex justify-end p-4">
                <button @click="closeMenu" class="text-2xl">&times;</button>
            </div>
            
            <nav class="flex-1">
                <ul class="flex flex-col px-6 font-poppins font-semibold">
                    <li>
                        <RouterLink
                            to="/home"
                            class="block py-4 hover:text-[#087bb4]"
                            @click="closeMenu"
                        >Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/about-us"
                            class="block py-4 hover:text-[#087bb4]"
                            @click="closeMenu"
                        >About us</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/our-projects"
                            class="block py-4 hover:text-[#087bb4]"
                            @click="closeMenu"
                        >Our projects</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/impact"
                            class="block py-4 hover:text-[#087bb4]"
                            @click="closeMenu"
                        >Impact</RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/game-zone"
                            class="block py-4 hover:text-[#087bb4]"
                            @click="closeMenu"
                        >Game zone</RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="border-t py-6 px-6">
                <div class="flex justify-around">
                    <a href="#" aria-label="Instagram">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="GitHub">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter/X">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { defineProps, ref, onMounted, onUnmounted, nextTick } from "vue";

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
const isTabletView = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};

const checkScreenSize = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTabletView.value = false;
    isMobileView.value = true;
  } else if (width >= 768 && width <= 1024) { 
    // Medium devices (tablets, including iPad Pro width)
    isTabletView.value = true;
    isMobileView.value = false;
  } else if (width > 1024) { 
    // Large devices (laptops/desktops)
    isTabletView.value = false;
    isMobileView.value = false;
  } else {
    // Extra small devices (phones)
    isTabletView.value = false;
    isMobileView.value = true;
  }
};

// Add resize listener to check screen size
onMounted(() => {
    // Initial check
    checkScreenSize();
    
    nextTick(() => {
        checkScreenSize();
    });
    
    window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
    document.body.style.overflow = '';
});
</script>

<style>
/* Default: Mobile view (max-width: 639px) */
#header-grid {
    display: grid;
    grid-template-areas: 'logo . . . . rightmost';
}

#logo-item {
    grid-column: 1 / span 5;
}

#logo-item img {
    /* Prevent logo image from resizing to maintain a consistent UI */
    height: 60px;
    width: auto;
    object-fit: contain;
}

#nav-btn-item {
    grid-column: 6 / span 1;
}

/* Align nav links with logo */
#router-links-grid > li {
    align-self: center;
}

/* Medium and Large Devices (≥768px) */
@media only screen and (min-width: 768px) {
    #logo-item {
        grid-column: 1 / span 5;
    }

    #nav-links-grid {
        grid-column: 6 / span 1;
        display: grid;
        grid-template-areas: '. . . . .';
    }

    #router-links-grid {
        grid-column: 1 / span 5;
        display: grid;
        grid-template-area: 'home about projects impact games';
    }

    #home-item {
        grid-column: 1 / span 1;
    }

    #about-item {
        grid-column: 2 / span 1;
    }

    #projects-item {
        grid-column: 3 / span 1;
    }

    #impact-item {
        grid-column: 4 / span 1;
    }

    #games-item {
        grid-column: 5 / span 1;
    }
}
</style>
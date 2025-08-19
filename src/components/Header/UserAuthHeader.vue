<template>
  <!-- Logo size fixed at 155x51px (width x height) for consistent UI across viewports. -->
  <!-- 
  Responsive grid layout: 
    - Mobile, small, & medium screens: 
      - Single Row: Logo (9/12 cols) + Hamburger icon (3/12 cols)
      - Navbar links overlay: flex column
    - Large+ screens: 
      - Logo (lg: 3/12 | xl: 2/12 cols) + Navbar links (lg: 9/12 | xl: 10/12 cols)
      - Each navbar link / button: flex column
  -->
  <header
    id="header-grid"
    class="relative h-[115px] grid grid-cols-12 md:gap-[21px] items-center"
  >
    <!-- Logo Section -->
    <div
      id="logo-item"
      class="col-span-9 lg:col-span-3 xl:col-span-2 text-lg font-bold pl-2 z-10"
    >
      <router-link to="/home" aria-hidden="true" tabindex="-1">
        <img
          id="header-logo"
          :src="logoPath"
          alt="logo"
          class="hover:cursor-pointer h-[51px] w-[155px] inline-block"
          v-if="logoPath"
        />
      </router-link>
      <p v-if="!logoPath">Audemy</p>
    </div>

    <!-- Hamburger Button for Mobile, Small, & Medium Screens -->
    <div
      id="nav-btn-item"
      v-if="isMobileView || isTabletView"
      class="col-start-10 col-span-3 text-right z-30"
    >
      <button
        @click="toggleMenu"
        class="text-2xl"
        aria-label="Open Navigation Menu"
      >
        &#9776;
      </button>
    </div>

    <!-- Desktop Navigation Links -->
    <nav
      id="nav-links-grid"
      v-if="!isMobileView & !isTabletView"
      class="lg:col-start-4 lg:col-span-9 xl:col-start-3 xl:col-span-10 py-2"
    >
      <ul id="router-links-grid" :class="[...navLinksGridClasses]">
        <li id="home-item">
          <router-link to="/home" class="navbar-link-desktop">
            Home
          </router-link>
        </li>
        <li id="about-item">
          <router-link to="/about-us" class="navbar-link-desktop">
            Our Team
          </router-link>
        </li>
        <!-- NOTE: REMOVED OUR PROJECTS FROM NAVBAR (content combined w/ Impact page) -->
        <!--
        <li id="projects-item">
          <router-link to="/our-projects" class="navbar-link-desktop">
            Our Projects
          </router-link>
        </li>
        -->
        <li id="impact-item">
          <router-link to="/impact" class="navbar-link-desktop">
            Impact
          </router-link>
        </li>
        <li id="press-item">
          <router-link to="/press" class="navbar-link-desktop">
            Press & Recognition
          </router-link>
        </li>
        <li id="game-toolkit-item">
          <router-link to="/game-toolkit" class="navbar-link-desktop"
            >Game Toolkit</router-link
          >
        </li>
        <li id="accessibility-studio-item">
          <router-link to="/accessibility-studio" class="navbar-link-desktop"
            >Accessibility Studio</router-link
          >
        </li>
        <li id="games-item">
          <router-link to="/game-zone-landing-page" class="navbar-link-desktop">
            Game Zone
          </router-link>
        </li>
        <li v-if="userSession" id="logout-btn-item">
          <button
            id="logout-btn-desktop"
            class="base-logout-btn lg:w-[70px] xl:w-[145px] text-center flex flex-row"
            @click="logout"
          >
            <span id="logout-text-desktop"> Logout </span>
            <img
              id="google-profile-desktop"
              v-if="userSession.user && userSession.user.imageUrl"
              :src="userSession.user.imageUrl"
              aria-hidden="true"
              class="navbar-profile-desktop"
            />
            <img
              id="default-profile-desktop"
              v-else
              src="../../assets/character/default-profile.png"
              aria-hidden="true"
              class="navbar-profile-desktop"
            />
          </button>
        </li>
        <li v-else id="login-btn-item">
          <router-link
            id="login-btn-desktop"
            to="/login"
            class="base-login-btn lg:w-[70px] xl:w-[145px] text-center"
          >
            Log in
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="(isMobileView || isTabletView) && isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="closeMenu"
    ></div>

    <!-- Mobile Slide-in Menu -->
    <div
      v-if="(isMobileView || isTabletView) && isMenuOpen"
      class="fixed inset-y-0 right-0 bg-white z-50 w-4/5 max-w-xs flex flex-col overflow-hidden"
    >
      <div class="flex justify-end p-7 px-10">
        <button
          @click="closeMenu"
          class="text-4xl hover:text-[#087bb4]"
          aria-label="Close Navigation Menu"
        >
          &times;
        </button>
      </div>

      <nav class="flex-1">
        <ul class="flex flex-col px-6 font-poppins font-semibold">
          <li>
            <router-link
              to="/home"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about-us"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Our Team
            </router-link>
          </li>
          <!-- NOTE: REMOVED OUR PROJECTS FROM NAVBAR (content combined w/ Impact page) -->
          <!--
          <li>
            <router-link
              to="/our-projects"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Our Projects
            </router-link>
          </li>
          -->
          <li>
            <router-link
              to="/impact"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Impact
            </router-link>
          </li>
          <li>
            <router-link
              to="/press"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Press & Recognition
            </router-link>
          </li>
          <li>
            <router-link
              to="/game-toolkit"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Game Toolkit
            </router-link>
          </li>
          <li>
            <router-link
              to="/accessibility-studio"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Accessibility Studio
            </router-link>
          </li>
          <li>
            <router-link
              to="/game-zone-landing-page"
              class="navbar-link-mobile"
              @click="closeMenu"
            >
              Game Zone
            </router-link>
          </li>
          <li v-if="userSession">
            <button class="base-logout-btn w-full mt-4" @click="logout">
              Logout

              <img
                v-if="userSession.user && userSession.user.imageUrl"
                :src="userSession.user.imageUrl"
                aria-hidden="true"
                alt="Google Profile"
                class="w-6 h-6 rounded-full ml-2"
              />
              <img
                v-else
                src="../../assets/character/default-profile.png"
                aria-hidden="true"
                alt="Default Profile"
                class="w-6 h-6 rounded-full ml-2"
              />
            </button>
          </li>
          <li v-else>
            <router-link
              to="/login"
              @click="closeMenu"
              class="base-login-btn w-full mt-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              &nbsp;Log in
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="border-t py-6 px-6">
        <div id="mobile-nav-socials" class="flex justify-around">
          <a
            href="https://www.instagram.com/audemyapp"
            aria-label="Instagram"
            target="_blank"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/audemy/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/Crustaly/audemywebsite"
            aria-label="GitHub"
            target="_blank"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
            target="_blank"
            aria-label="YouTube"
          >
            <svg class="w-6 h-6" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
  <!-- Alert -->
  <div v-if="showAlert" :class="logoutAlertClasses" role="alert">
    <span class="block sm:inline">
      <strong class="font-bold">Log out</strong>
      successful!
    </span>
    <button @click="closeAlert">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

// Extracted Tailwind classes for <router-link> grid layout (desktop)
const navLinksGridClasses = [
  'flex',
  'justify-between',
  'items-center',
  'font-poppins',
  'font-semibold',
  'text-[#151e22]',
  'lg:text-[14px]',
  'xl:text-[16px]',
];

// Extracted Tailwind classes for successful logout alert
const logoutAlertClasses = [
  'flex',
  'justify-between',
  'w-1/2',
  'md:w-[40%]',
  'lg:w-1/3',
  'bg-green-100',
  'border',
  'border-green-400',
  'text-green-700',
  'px-4',
  'py-3',
  'z-50',
  'rounded',
  'fixed',
  'bottom-5',
  'right-5',
  'transition-opacity',
  'duration-300',
  'ease-in-out',
  'transform',
];

const router = useRouter();
const userSession = ref(null);
const showAlert = ref(false);
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

const logout = () => {
  Cookies.remove('audemyUserSession');
  userSession.value = null;
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 5000);
  router.push('/game-zone');
};

const closeAlert = () => {
  showAlert.value = false;
};

// Add resize listener to check screen size
onMounted(() => {
  // Initial check
  checkScreenSize();

  nextTick(() => {
    checkScreenSize();
  });

  window.addEventListener('resize', checkScreenSize);

  const session = Cookies.get('audemyUserSession');
  if (session) {
    try {
      const parsed = JSON.parse(session);
      console.log('Parsed session:', parsed);
      userSession.value = parsed;
    } catch (error) {
      console.error('Error parsing user session:', error);
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
  document.body.style.overflow = '';
});
</script>

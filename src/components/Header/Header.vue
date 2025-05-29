<template>
  <!-- Header = 51px logo + 32px top offset + 32px bottom padding = 115px total height. -->
  <!-- Logo size fixed at 155x51px (width x height) for consistent UI across viewports. -->
  <header id="header-grid" class="relative h-[115px]">
    <!-- Logo Section -->
    <div id="logo-item" class="text-lg font-bold absolute left-2 top-8 z-10">
      <RouterLink to="/home">
        <img
          id="header-logo"
          :src="logoPath"
          alt="logo"
          class="hover:cursor-pointer h-[51px] w-[155px]"
          v-if="logoPath"
        />
      </RouterLink>
      <p v-if="!logoPath">audemy</p>
    </div>

    <!-- Hamburger Button for Mobile -->
    <div
      id="nav-btn-item"
      v-if="isMobileView"
      class="absolute right-4 top-12 z-30"
    >
      <button @click="toggleMenu" class="text-2xl">&#9776;</button>
    </div>

    <!-- Desktop Navigation Links -->
    <nav id="nav-links-grid" v-if="!isMobileView" class="justify-end py-2">
      <ul
        id="router-links-grid"
        class="font-poppins font-semibold"
        :class="[
          textColor ?? 'text-[#151e22]',
          isTabletView ? 'space-x-2x text-sm' : 'space-x-4',
        ]"
      >
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
        <li v-if="userSession" id="logout-btn-item">
          <button
            id="logout-btn-desktop"
            class="flex justify-center items-center bg-[#FE892A] text-black font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black hover:bg-[#D6711F]"
            @click="logout"
          >
            <!-- Add profile photo -->
            <span id="logout-text-desktop">Logout</span>
            <img
              id="google-profile-desktop"
              v-if="userSession.user && userSession.user.imageUrl"
              :src="userSession.user.imageUrl"
              aria-hidden="true"
              class="w-6 h-6 rounded-full ml-2"
            />
            <img
              id="default-profile-desktop"
              v-else
              src="../../assets/character/default-profile.png"
              aria-hidden="true"
              class="w-6 h-6 rounded-full ml-2"
            />
          </button>
        </li>
        <li v-else id="login-btn-item">
          <RouterLink
            id="login-btn-desktop"
            to="/login"
            class="flex justify-center items-center login-button text-white font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black bg-[#087BB4] hover:bg-[#0C587D]"
          >
            Log in
          </RouterLink>
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
      <div class="flex justify-end p-7 px-10">
        <button @click="closeMenu" class="text-4xl hover:text-[#087bb4]">
          &times;
        </button>
      </div>

      <nav class="flex-1">
        <ul class="flex flex-col px-6 font-poppins font-semibold">
          <li>
            <RouterLink
              to="/home"
              class="block py-4 hover:text-[#087bb4]"
              @click="closeMenu"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about-us"
              class="block py-4 hover:text-[#087bb4]"
              @click="closeMenu"
              >About us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/our-projects"
              class="block py-4 hover:text-[#087bb4]"
              @click="closeMenu"
              >Our projects</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/impact"
              class="block py-4 hover:text-[#087bb4]"
              @click="closeMenu"
              >Impact</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/game-zone"
              class="block py-4 hover:text-[#087bb4]"
              @click="closeMenu"
              >Game zone</RouterLink
            >
          </li>
          <li v-if="userSession">
            <button
              class="flex justify-center items-center w-full mt-4 bg-[#FE892A] text-black font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black hover:bg-[#D6711F]"
              @click="logout"
            >
              Logout
              <!-- Add profile photo -->
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
            <RouterLink
              to="/login"
              @click="closeMenu"
              class="flex justify-center items-center login-button w-full text-white font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black bg-[#087BB4] hover:bg-[#0C587D] mt-8"
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              &nbsp;Log in
            </RouterLink>
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
            href="https://github.com/Crustaly/audemy"
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
            href="https://x.com/AudemyApp"
            aria-label="X (fka Twitter)"
            target="_blank"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
            target="_blank"
            class="w-6 h-6"
            aria-label="Youtube"
          >
            <box-icon
              type="logo"
              name="youtube"
              class="fill-[#000000] text-white p-0"
            ></box-icon>
          </a>
        </div>
      </div>
    </div>
  </header>
  <!-- Alert -->
  <div
    v-if="showAlert"
    class="flex justify-between w-1/4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 z-50 rounded fixed bottom-5 right-5 transition-opacity duration-300 ease-in-out transform"
    role="alert"
  >
    <span class="block sm:inline"
      ><strong class="font-bold">Log out</strong> successful!</span
    >
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
import { defineProps, ref, onMounted, onUnmounted, nextTick } from 'vue';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

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
  }, 3000);
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

<style>
/* * * * * Default: Mobile view (max-width: 639px) * * * * */
#mobile-nav-socials svg:hover,
#mobile-nav-socials box-icon:hover {
  fill: #087bb4;
}

#nav-btn-item button:hover {
  color: #087bb4; /* Use text color on hover since mobile (hamburger) nav uses text, not SVG */
}

#header-grid {
  display: grid;
  grid-template-areas: 'logo . . . . rightmost';
}

#logo-item {
  grid-column: 1 / span 5;
}

#nav-btn-item {
  grid-column: 6 / span 1;
}

/* Align nav links with logo */
#router-links-grid > li {
  align-self: center;
}

/* * * * * Medium and Large Devices (≥768px) * * * * */
@media only screen and (min-width: 768px) {
  #header-grid {
    display: grid;
    grid-template-areas: 'logo . . . . . . . . . . rightmost'; /* 12-column grid */
    gap: 21px;
  }

  #logo-item {
    grid-column: 1 / span 9;
  }

  #nav-links-grid {
    grid-column: 10 / span 3;
    display: grid;
    grid-template-areas: '. . . . . .';
  }

  #router-links-grid {
    grid-column: 1 / span 6;
    display: grid;
    /* Let 'account' = placeholder for Log In / Out button */
    grid-template-areas: 'home about projects impact games account';
    gap: 10px;
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

  #logout-btn-item,
  #login-btn-item {
    grid-column: 6 / span 1;
  }
}

/* * * * * Resize Log In/Out buttons for medium screens (768px–1024px) * * * * */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  #login-btn-desktop {
    padding: 15px;
  }

  #logout-btn-desktop {
    padding: 8px; /* Adjust (reduce) padding to accomodate width of profile icon */
    display: grid;
    grid-template-areas:
      'text text text'
      '. profile .';
  }

  #logout-text-desktop {
    grid-area: text;
  }

  #google-profile-desktop,
  #default-profile-desktop {
    grid-area: profile;
    margin: 0;
  }
}
</style>

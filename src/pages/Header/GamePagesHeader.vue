<!-- GamePagesHeader.vue -->
<template>
  <header class="flex items-center justify-between px-8 py-4 bg-transparent">
    <!-- Left side - Menu and Logo -->
    <div class="flex items-center gap-6">
      <router-link to="/" class="flex items-center">
        <img
          src="/assets/images/header/header-logo-2.png"
          alt="Audemy Logo"
          class="h-10"
        />
      </router-link>
    </div>
    <!-- Right side - Navigation and Login -->
    <div class="flex items-center gap-8">
      <nav class="flex items-center gap-8">
        <router-link
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          class="text-[#2B2B2B] no-underline text-base font-semibold font-['Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open_Sans','Helvetica_Neue',sans-serif] transition-colors duration-300 hover:text-[#087BB4] router-link-active:text-[#087BB4] router-link-active:font-semibold"
        >
          {{ item.name }}
        </router-link>
      </nav>
      <!--router-link
        to="/login"
        class="flex items-center gap-2 py-2 px-4 bg-[#087BB4] text-white font-bold rounded-lg shadow-md hover:bg-[#0d5f8b] transition-colors duration-300"
      >
        Login
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </router-link-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'GamePagesHeader',
  data() {
    return {
      navigationItems: [
        //{ name: 'Home', path: '/' },
        //{ name: 'About us', path: '/about-us' },
        { name: 'Game Zone', path: '/game-zone' }
      ]
    }
  }
}
</script>

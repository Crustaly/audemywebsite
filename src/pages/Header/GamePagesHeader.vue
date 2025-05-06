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
        <div v-if="userSession">
            <button
              class="flex justify-center items-center bg-[#FE892A] text-black font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black hover:bg-[#D6711F]"
              @click="logout"
            >Log out&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
        </div>
        <div v-else>
          <router-link
            to="/login"
            class="flex justify-center items-center login-button text-white font-bold py-3 px-6 rounded-lg border-[1.5px] shadow-[3px_4px_0px_#0C0D0D] border-black bg-[#087BB4] hover:bg-[#0C587D]"
          >
            Log in
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </header>
    <!-- Alert -->
    <div v-if="showAlert" class="flex justify-between w-1/4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 z-50 rounded fixed bottom-5 right-5 transition-opacity duration-300 ease-in-out transform" role="alert">
        <span class="block sm:inline"><strong class="font-bold">Log out</strong> successful!</span>
        <button @click="closeAlert">   
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
    </div>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from "vue-router";
  import Cookies from "js-cookie";

  
  const userSession = ref(null);
  const showAlert = ref(false);
  const router = useRouter();


  const logout = () => {
    Cookies.remove("audemyUserSession");
    userSession.value = null;
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
        router.push("/game-zone");
    }, 2000);
  };

  onMounted(() => {
    const session = Cookies.get("audemyUserSession");
    if (session) {
        const parsed = JSON.parse(session);
        console.log("Parsed session:", parsed);
        userSession.value = parsed;
    }
    
});
  </script>
  

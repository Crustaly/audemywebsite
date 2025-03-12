<!-- GamePagesHeader.vue -->
<template>
    <header class="header">
      <!-- Left side - Menu and Logo -->
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <img
            src="/assets/images/header/header-logo-2.png"
            alt="Audemy Logo"
            class="logo"
          />
        </router-link>
      </div>
  
      <!-- Right side - Navigation and Login -->
      <div class="header-right">
        <nav class="navigation">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
          >
            {{ item.name }}
          </router-link>
        </nav>
        <!--router-link
          to="/login"
          class="login-button text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#0d5f8b]"
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
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: transparent;
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .menu-button {
    padding: 0.5rem;
    background-color: #087BB4;
    border-radius: 0.5rem;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .menu-button:hover {
    background-color: #0d5f8b;
  }
  
  .logo-link {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 2.5rem;
  }
  
  .navigation {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .nav-link {
    color: #2B2B2B;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: #087BB4;
  }
  
  .login-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #087BB4;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
  }
  
  .login-button:hover {
    background-color: #0d5f8b;
  }
  
  .router-link-active {
    color: #087BB4;
    font-weight: 600;
  }
  </style>
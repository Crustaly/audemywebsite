@type {import('tailwindcss').Config} @import{router-link , router-view} from
'vue-router';

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div
      class="sidebar w-64 h-screen bg-white p-6 flex flex-col shadow-lg border-r-2 border-audemy-blue"
    >
      <!-- Logo/Title -->
      <div class="flex items-center mb-8">
        <img
          src="/assets/images/dashboard/logo.png"
          alt="Logo"
          class="w-100 h-9 mr-2"
        />
      </div>

      <!-- Navigation Links -->
      <nav class="flex flex-col space-y-4 flex-grow mt-8">
        <router-link
          to="/dashboard"
          class="nav-link-top rounded-3xl bg-audemy-blue flex flex-row items-center shadow-lg"
        >
          <img
            src="/assets/images/dashboard/dashboard-icon.png"
            alt="Dashboard Icon"
            class="m-4 w-3"
          />
          <span class="text-white">Dashboard</span>
        </router-link>
        <router-link
          to="/studentList"
          class="nav-link-top rounded-3xl text-audemy-blue flex flex-row items-center"
        >
          <img
            src="/assets/images/dashboard/student-icon.png"
            alt="Student Icon"
            class="m-4 w-5"
          />
          <span class="text-audemy-blue">Student</span>
        </router-link>
        <router-link
          to="/teacher"
          class="nav-link-top rounded-3xl flex flex-row items-center"
        >
          <img
            src="/assets/images/dashboard/student-icon.png"
            alt="Teacher Icon"
            class="m-4 w-5"
          />
          <span class="text-audemy-blue">Teacher</span>
        </router-link>
        <router-link
          to="/games"
          class="nav-link-top rounded-3xl flex flex-row items-center"
        >
          <img
            src="/assets/images/dashboard/games-icon.png"
            alt="Games Icon"
            class="m-4 w-5"
          />
          <span class="text-audemy-blue">Games</span>
        </router-link>
      </nav>

      <!-- Log out Button -->
      <button
        class="flex items-center p-3 rounded-2xl bg-audemy-blue text-white transition-colors"
      >
        <img
          src="/assets/images/dashboard/poweroff-icon.png"
          alt="Logout Icon"
          class="w-5 h-5 mr-2"
        />
        Logout
      </button>
    </div>

    <!-- Main Content -->
    <div class="main-content shadow-lg flex-grow bg-white">
      <router-view></router-view>
    </div>
  </div>
  <div class="w-full border-b-2 border-audemy-blue p-2">
    <div class="flex flex-row justify-self-end p-4 gap-[10px]">
      <div
        class="relative w-[500px] rounded-[20px] py-[20px] px-[30px] border-[2px]"
      >
        <input
          type="text"
          placeholder="Search"
          class="placeholder:text-audemy-blue pl-4 focus:outline-none"
        />
        <img
          src="/assets/images/dashboard/search-icon.png"
          alt="Search Icon"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] pointer-events-none"
        />
      </div>
      <button
        class="flex items-center justify-center shadow-lg rounded-[20px] bg-white w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/notification-icon.png"
          alt=""
          class="w-[15.96px] h-[20px]"
        />
      </button>
      <button
        class="flex items-center justify-center shadow-lg rounded-[20px] bg-white w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/student-icon.png"
          alt=""
          class="w-[30px] h-[30px]"
        />
      </button>
      <button
        class="flex items-center justify-center bg-audemy-blue rounded-[20px] w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/settings-icon.png"
          alt=""
          class="w-[30px] h-[30px]"
        />
      </button>
    </div>
  </div>
</template>

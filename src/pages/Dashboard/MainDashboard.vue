<template>
  <div>
    <!-- Sidebar -->
    <aside
      class="fixed top-0 left-0 h-screen w-64 bg-white p-6 flex flex-col shadow-lg border-r-2 border-primary-color"
    >
      <!-- Logo -->
      <div class="flex items-center mb-8">
        <img
          src="/assets/images/dashboard/logo.png"
          alt="Logo"
          class="w-30 h-9"
        />
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col space-y-4 flex-grow">
        <router-link
          to="/dashboard"
          class="nav-link-top rounded-[20px] bg-primary-color flex items-center shadow-lg p-3"
        >
          <img
            src="/assets/images/dashboard/dashboard-icon.png"
            alt=""
            class="w-5 mr-2 ms-3"
          />
          <span class="text-white">Dashboard</span>
        </router-link>
        <router-link
          to="/studentList"
          class="nav-link-top rounded-3xl text-primary-color flex items-center p-3"
        >
          <img
            src="/assets/images/dashboard/student-icon.png"
            alt=""
            class="w-5 mr-2 ms-3"
          />
          <span>Student</span>
        </router-link>
        <router-link
          to="/teacher"
          class="nav-link-top rounded-3xl flex items-center p-3"
        >
          <img
            src="/assets/images/dashboard/student-icon.png"
            alt=""
            class="w-5 mr-2 ms-3"
          />
          <span class="text-primary-color">Teacher</span>
        </router-link>
        <router-link
          to="/games"
          class="nav-link-top rounded-3xl flex items-center p-3"
        >
          <img
            src="/assets/images/dashboard/games-icon.png"
            alt=""
            class="w-5 mr-2 ms-3"
          />
          <span class="text-primary-color">Games</span>
        </router-link>
      </nav>

      <!-- Logout -->
      <button
        class="mt-auto flex items-center p-3 rounded-2xl bg-primary-color text-white"
      >
        <img
          src="/assets/images/dashboard/poweroff-icon.png"
          alt=""
          class="w-5 h-5 mr-2"
        />
        Logout
      </button>
    </aside>

    <!-- Main Content -->
    <main class="ml-64 flex flex-col">
      <!-- Navbar -->
      <nav
        class="sticky top-0 z-20 bg-white border-b-2 border-primary-color h-[100px] px-6 shadow-md flex items-center"
      >
        <!-- Right-aligned content wrapper -->
        <div class="ml-auto flex items-center gap-6">
          <!-- Search Bar -->
          <div class="relative w-[450px]">
            <input
              type="text"
              placeholder="Search"
              class="w-full placeholder-primary-color pl-10 pr-4 py-2 border rounded-xl focus:outline-none"
            />
            <img
              src="/assets/images/dashboard/search-icon.png"
              alt=""
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
          </div>

          <!-- Icon Buttons -->
          <div class="flex items-center gap-6">
            <button
              class="p-3 rounded-[20px] bg-white shadow-lg flex items-center justify-center w-[50px] h-[50px]"
            >
              <img
                src="/assets/images/dashboard/notification-icon.png"
                alt=""
                class="w-5 h-6"
              />
            </button>
            <button
              class="p-3 rounded-[20px] bg-white shadow-lg flex items-center justify-center"
            >
              <img
                src="/assets/images/dashboard/student-icon.png"
                alt=""
                class="w-7 h-7"
              />
            </button>
            <button
              class="p-3 rounded-[20px] bg-primary-color flex items-center justify-center"
            >
              <img
                src="/assets/images/dashboard/settings-icon.png"
                alt=""
                class="w-7 h-7"
              />
            </button>
          </div>
        </div>
      </nav>

      <!-- Router View / Page Content -->
      <section class="flex-1 overflow-auto p-6">
        <router-view />
      </section>
    </main>
  </div>
</template>

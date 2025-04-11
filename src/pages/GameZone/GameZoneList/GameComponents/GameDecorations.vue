<template>
    <div
      class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <!-- Sun - Only for desktop -->
      <div
        v-if="!isTablet && !isMobile"
        class="absolute top-20 right-60 w-32 h-32"
      >
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <circle cx="50" cy="50" r="50" fill="#FFD137" />
        </svg>
      </div>
      <!-- Clouds - Different for tablet -->
      <template v-if="isTablet">
        <!-- Left cloud for tablet -->
        <div class="absolute left-0 z-0" style="bottom: 150px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-left.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
          <!-- Paper plane above left cloud -->
          <div
            class="absolute"
            style="width: 82px; height: 82px; top: -350px; left: 50.05px"
          >
            <img
              src="/assets/gameImages/paperPlane.png"
              alt="Paper plane"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
        <!-- Right cloud for tablet -->
        <div class="absolute bottom-0 right-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 300px; height: auto"
          />
        </div>
      </template>
      <!-- Clouds for desktop -->
      <template v-else-if="isDesktop">
        <div class="absolute bottom-0 left-0 z-0" style="bottom: 50px">
          <img
            src="/assets/gameImages/cloud-bg.png"
            alt="Decorative cloud"
            style="width: 400px; height: auto"
          />
        </div>
      </template>
      <!-- Mobile-specific clouds -->
      <template v-if="isMobile">
        <!-- Only right cloud for mobile -->
        <div class="absolute right-0 z-0" style="bottom: 20px">
          <img
            src="/assets/gameImages/cloud-bg-Tab-right.png"
            alt="Decorative cloud"
            style="width: 250px"
          />
        </div>
      </template>
    </div>
  </template>
  
  <script setup>
  defineProps(['isMobile', 'isTablet', 'isDesktop']);
  </script>
  
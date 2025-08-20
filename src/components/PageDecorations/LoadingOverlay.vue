<template>
  <!-- LoadingOverlay.vue: Renders responsive, decorative UI while page is loading; visual cue for users -->
  <div
    class="fixed inset-0 w-full h-full bg-white bg-opacity-80 flex flex-col gap-y-5 justify-center items-center z-[9999]"
  >
    <img
      src="/assets/images/header/header-logo-2.png"
      aria-hidden="true"
      class="w-[155px]"
    />
    <div class="flex flex-row gap-x-5 justify-center">
      <div
        class="w-8 h-8 border-4 border-primary-color border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      >
        <!-- Circular loading spinner -->
      </div>
      <p
        class="font-semibold font-poppins text-[18px] md:text-[24px] text-center"
        role="alert"
      >
        Loading...
      </p>
    </div>
  </div>
</template>

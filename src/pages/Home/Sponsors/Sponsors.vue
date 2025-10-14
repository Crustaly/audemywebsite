<script setup>
import SponsorsCarousel from './SponsorsCarousel/SponsorsCarousel.vue';
</script>

<template>
  <div class="w-full my-32 mobile:my-24 flex flex-col gap-y-10 items-center">
    <h1 class="page-header-accent">SPONSORS THAT SUPPORT US, AMONG OTHERS:</h1>
    <div class="sponsors-carousel w-full">
      <div
        class="w-full scroll-auto grid mobile:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 items-center justify-center text-center my-5"
      >
        <img
          src="/assets/images/sponsors/intel.svg"
          alt="intel logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/google.png"
          alt="google logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/Amazon-Logo.png"
          alt="amazon logo"
          class="w-1/3 md:w-[50%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/ae.png"
          alt="ae foundation logo"
          class="w-1/3 md:w-[45%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/hersheys.svg"
          alt="hersheys logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/desmos.png"
          alt="desmos logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/aops.svg"
          alt="aops logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/contribution.webp"
          alt="contribution logo"
          class="w-1/2 md:w-[70%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/tacobell.png"
          alt="tacobell logo"
          class="w-1/3 md:w-[70%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/wolframalpha.svg"
          alt="wolframalpha logo"
          class="w-1/2 md:w-[80%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/k4c-logo.svg"
          alt="k4c logo"
          class="w-1/3 md:w-[45%] mx-auto"
        />
        <img
          src="/assets/images/sponsors/ncwit.png"
          alt="ncwit logo"
          class="w-1/3 md:w-[45%] h-auto mx-auto"
        />
      </div>
    </div>
    <div class="sponsors-carousel-small w-full">
      <SponsorsCarousel />
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 451px) {
  .sponsors-carousel {
    display: block;
  }
  .sponsors-carousel-small {
    display: none;
  }
}

@media screen and (max-width: 451px) {
  .sponsors-carousel-small {
    display: block;
  }
  .sponsors-carousel {
    display: none;
  }
}
</style>

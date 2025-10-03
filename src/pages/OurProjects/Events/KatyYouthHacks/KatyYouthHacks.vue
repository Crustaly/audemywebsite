<script></script>

<template>
  <!-- RWD Layout:
    - Mobile & small screens: Column; Carl image (top) & text (bottom)
    - Medium+: Row; Carl image (left) & text (right)
  -->
  <div
    class="relative w-full flex flex-col md:flex-row font-poppins p-3 md:p-10 gap-y-5 md:gap-y-0"
  >
    <!-- DECORATIVE BG PATTERN -->
    <img
      src="/assets/images/our-projects/lightred-background.png"
      class="w-full absolute -top-5 h-[300px] md:h-[750px] md:-top-[15%] lg:-top-[30%] left-0 -z-10"
      aria-hidden="true"
    />
    <!-- CARL IMAGE -->
    <div
      class="w-full md:w-1/2 mx-auto flex flex-col md:flex-row items-center justify-center"
    >
      <img
        src="/assets/images/our-projects/carl-trophy.png"
        aria-hidden="true"
        class="w-[200px] md:w-[250px] lg:w-[300px] duration-300"
      />
    </div>
    <!-- TEXT CONTENT -->
    <div class="w-full md:w-1/2 mx-auto">
      <div class="flex justify-center md:justify-start">
        <h2 class="page-header-accent">Educational Events</h2>
      </div>
      <div class="flex justify-center md:justify-start">
        <h3 class="page-header">
          <em class="text-secondary-color"> Katy Youth </em> Hacks
        </h3>
      </div>
      <div class="flex my-10">
        <div class="page-text text-center md:text-left">
          <p>
            An accessibility-focused hackathon empowering innovation for people
            with disabilities.
          </p>
          <p class="my-5">
            Learn
            <span class="font-semibold">
              project development, business pitching, and accessible design
            </span>
            — and compete for
            <span class="font-semibold"> $70,000+ in prizes </span> from leading
            corporate sponsors.
          </p>
        </div>
      </div>
      <div class="page-button-flex justify-center md:justify-start">
        <a
          href="https://katyhacks.org/"
          target="_blank"
          class="page-button orange-button text-center md:px-3 md:w-[280px] px-9 mobile:h-auto py-3"
        >
          Check upcoming events
        </a>
      </div>
    </div>
  </div>
</template>

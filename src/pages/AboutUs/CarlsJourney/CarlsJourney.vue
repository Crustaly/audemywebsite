<script setup></script>

<template>
  <div
    class="relative overflow-hidden font-poppins flex justify-center mobile:w-[90%] w-[80%] mx-auto bg-cross-lines rounded-[16px] p-10 shadow-md"
  >
    <!-- RWD Layout:
      - Mobile to Large: Carl (top) & Text (bottom) 
      - X-Large+: Carl (left) & Text (right)
    -->
    <!-- Hide decorative SVG wave -->
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="absolute -z-1 left-0 top-0 scale-y-[-1] h-1/2"
    >
      <path
        fill="#e7f0f5"
        fill-opacity="1"
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,165.3C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <div
      class="z-0 flex flex-col text-center items-center w-full xl:flex-row xl:justify-center xl:gap-x-10"
    >
      <!-- Carl Image -->
      <img
        src="/assets/images/about-us/CarlTheCaterpillar.png"
        aria-hidden="true"
        class="mobile:w-[150px] w-[200px] md:w-1/3 lg:w-1/4"
      />
      <!-- Main Text Container -->
      <div class="z-0 w-full xl:w-3/4">
        <!-- Subtitle -->
        <div>
          <h3 class="page-header-accent m-3">CARL'S JOURNEY</h3>
          <!-- Main Header -->
          <div class="mb-12">
            <h2 class="page-header m-8">
              Meet
              <span class="text-primary-color font-semibold">
                Carl the Caterpillar
              </span>
            </h2>
            <!-- Bio Container -->
            <div class="relative flex flex-col gap-y-10 p-5">
              <!-- Decorative transparent bg for text legibility -->
              <div
                class="-z-10 absolute left-0 top-0 bg-white opacity-70 rounded-[16px] w-full h-full"
                aria-hidden="true"
              ></div>
              <p class="page-text">
                Say hello to our smallest, yet
                <span class="font-semibold">most important teammate</span>!
              </p>
              <p class="page-text">
                <span class="font-semibold text-primary-color">Carl</span> is on
                a mission to become a beautiful butterfly—but before he can
                spread his wings, he needs to master
                <span class="font-semibold"
                  >math, science, spelling, and more!</span
                >
              </p>
              <p class="page-text">
                He can’t do it alone... Carl needs
                <span class="font-semibold text-primary-color">you</span>
                to help him succeed!
              </p>
              <p
                class="page-text pt-5 border-t-2 border-primary-color w-[80%] mx-auto"
              >
                <span class="font-semibold"> Join </span>Carl’s adventure and
                help him
                <span class="font-semibold"> grow!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

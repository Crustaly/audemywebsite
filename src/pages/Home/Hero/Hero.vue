<template>
  <div
    class="flex md:items-start items-center md:flex-row flex-col-reverse gap-x-5 py-8 my-5"
  >
    <div
      class="lg:w-6/12 w-full flex flex-col items-center text-center md:text-left lg:text-center mx-10"
    >
      <div class="px-5">
        <h1 class="page-header">
          Powering the
          <span style="color: #077bb3" class="font-semibold"> Future</span>
          of
          <span style="color: #077bb3" class="font-semibold"
            >Accessible Gaming</span
          >
        </h1>
      </div>
      <div>
        <p
          class="my-5 font-poppins text-body text-center text-xl mobile:text-[16px] max-w-md leading-8"
        >
          Our gaming solutions are transforming access to gaming, reaching
          <strong>100,000+ blind and visually impaired gamers worldwide</strong
          >, including <strong>1 in 5 blind children in the U.S.</strong>!
        </p>
      </div>
      <div class="page-button-flex">
        <a
          href="/game-zone-landing-page"
          class="page-button w-[280px] mx-auto text-center p-4 bg-[#FE892A] hover:bg-[#D6711F] text-[#0D0C0C] duration-300"
        >
          Play our games!
        </a>
      </div>
    </div>
    <div class="lg:w-6/12 w-full md:py-36 lg:py-16 relative" aria-hidden="true">
      <!-- Accessibility: Hide decorative SVG and Carl image -->
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        class="-z-10 absolute top-0 md:h-[900px] lg:h-[1200px] hidden md:block md:-translate-y-[180px] rotate-[55deg] lg:-translate-y-[280px] md:-translate-x-[200px]"
      >
        <path
          fill="#e7f0f5"
          d="M46.9,-59.1C60.4,-54.8,70.7,-40.5,73,-25.6C75.4,-10.6,69.8,5.1,62.2,17.6C54.6,30.1,44.9,39.4,34.2,48.3C23.5,57.3,11.8,66,-3.1,70.3C-18,74.6,-36,74.5,-49.5,66.4C-63,58.3,-72,42.3,-74.1,26.4C-76.1,10.4,-71.2,-5.6,-65.2,-20.3C-59.2,-35,-52.1,-48.5,-41.1,-53.6C-30,-58.8,-15,-55.5,0.9,-56.7C16.7,-57.9,33.4,-63.5,46.9,-59.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <img
        src="/assets/images/hero/hero-image2.png"
        alt=""
        class="z-10 w-[70%] sm:w-[45%] md:w-[85%] lg:w-full mx-auto md:mx-0"
      />
    </div>
  </div>
</template>

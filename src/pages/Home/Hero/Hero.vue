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
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="rotate-[-90deg] absolute right-0 -z-10 h-[600px] translate-x-[1100px] -translate-y-[90px] md:-translate-y-[50px]"
      >
        <path
          fill="#e7f0f5"
          fill-opacity="1"
          d="M0,256L34.3,250.7C68.6,245,137,235,206,208C274.3,181,343,139,411,106.7C480,75,549,53,617,64C685.7,75,754,117,823,128C891.4,139,960,117,1029,144C1097.1,171,1166,245,1234,261.3C1302.9,277,1371,235,1406,213.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <img
        src="/assets/images/hero/hero-image2.png"
        alt=""
        class="z-10 w-[70%] sm:w-[45%] md:w-[85%] lg:w-full mx-auto md:mx-0"
      />
    </div>
  </div>
</template>

<script setup>
import Map from './Map.vue';
import Affiliates from './Affiliates.vue';
</script>

<template>
  <div
    class="relative flex flex-col items-start justify-center mobile:justify-center w-full h-[10%] px-[15rem] mt-[7rem] mb-10 tablet:mb-[265px] mobile:mb-[129px]"
  >
    <img
      src="/assets/images/impact/light-green-bg-2.png"
      class="absolute w-full h-[125%] -top-[12rem] right-0 -z-10"
      alt="Background image"
    />

    <!-- HEADER -->
    <div class="max-w-[519px]">
      <h2
        class="text-left ml-[2rem] font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mobile:ml-0"
      >
      Collaborating <em style="color:#fe892a;"> Schools </em>
      </h2>
    </div>

    <!-- MAP AND LIST OF AFFILIATED SCHOOLS AND TEACHERS -->
    <div
      class="flex items-start justify-center mobile:justify-center mobile:items-center w-full h-[10%] mt-[4rem] mb-[6rem] tablet:mb-[265px] mobile:mb-[129px] mobile:flex-col mobile:gap-5"
    >
      <!-- MAP Content -->
      <div class="shadow-[3px_4px_5px_#2F3E45] rounded-[16px] mr-[3rem]">
        <Map />
      </div>

      <div class="">
        <Affiliates />
      </div>
    </div>

    <!-- CALL TO ACTION -->
    <div
      class="flex content-center items-center justify-center w-full h-[10%] mb-36 tablet:mb-[265px] mobile:mb-[129px] mobile:flex-col mobile:items-center mobile:gap-5"
    >
      <div
        class="w-1/2 mobile:text-center mobile:items-center mobile:flex mobile:w-fit"
      >
        <p
          class="w-[504px] text-body text-xl font-poppins leading-8 mobile:ml-0 mobile:w-fit-content mobile:text-center"
        >
          As we expand our services, we'd love to have you  <strong> partner with us on
          this exciting journey </strong>!
        </p>
      </div>

      <div
        class="text-end w-1/2 mobile:w-full mobile:flex mobile:justify-center"
      >
        <a
          href="mailto:connect@audemy.org"
          target="_blank"
          class="w-[244px] mobile:w-auto font-poppins font-semibold px-[4.20rem] py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-white shadow-[3px_4px_0px_#0C0D0D]"
        >
          Get affiliated
        </a>
      </div>
    </div>
  </div>
</template>

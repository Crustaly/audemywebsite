<template>
  <div class="flex items-center mobile:flex-col-reverse gap-x-6 py-8">
    <div
      class="w-6/12 mobile:w-full flex flex-col gap-y-4 mobile:items-center mobile:text-center"
    >
      <div class="font-poppins">
       <h1 class="text-4xl tablet:text-[24px] mobile:text-[24px] leading-normal text-title font-poppins">
  Audio Games <span class="text-sky-500 font-semibold">Powering the Future</span> of <span class="text-sky-500 font-semibold">Accessible Learning</span>
</h1>
      </div>

      <div>
        <p
          class="font-poppins text-body text-xl mobile:text-[16px] max-w-md leading-8"
        >
         Our AI-powered audio games are transforming access to education—reaching 200,000+ learners worldwide, including 1 in 5 blind children in the U.S.!
        </p>
      </div>

      <a
        href="/game-zone"
        class="font-poppins mobile:w-full px-16 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#FE892A] hover:bg-[#D6711F] text-base text-center text-[#0D0C0C] shadow-[3px_4px_0px_#0C0D0D] font-semibold self-start duration-300"
      >
        Play our games!
      </a>
    </div>
    <div class="w-6/12 mobile:w-full mobile:mb-14">
      <!-- Image Section -->
      <!-- Hero Image -->
      <img
        src="/assets/images/hero/hero-image2.png"
        alt="Tablet with games"
        class="z-10 w-full"
      />
      <!-- Hero Illustration Image -->
      <img
        src="/assets/images/hero/hero-illustration.png"
        alt="Hero Illustration"
        class="absolute top-0 right-0 -z-10 mobile:hidden"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

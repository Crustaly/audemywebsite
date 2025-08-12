<script setup>
import Students from '/assets/images/impact/carl-pencil.svg';
import Problems from '/assets/images/impact/problems 1.svg';
import Globe from '/assets/images/impact/globe 1.svg';
</script>

<template>
  <div
    class="font-poppins py-10 my-16 flex items-center justify-center mobile:flex-col-reverse mobile:gap-y-10"
  >
    <div class="w-[80%] flex flex-col justify-center items-center text-center">
      <h1
        class="text-center text-[32px] tablet:text-[28px] mobile:text-[24px] mobile:text-center font-[400] py-5"
      >
        For every 1 million games released, only about ten are fully accessible
        for blind players.
        <p class="mt-10 font-semibold text-primary-color">
          We're changing that
        </p>
      </h1>
      <p
        class="my-10 text-body text-xl leading-8 text-wrap mobile:text-[16px] text-center"
      >
        At Audemy, we’re <strong>closing the gaming gap</strong> with
        <strong>AI-powered audio games</strong> designed to be fully accessible
        for blind and visually impaired gamers.
      </p>
      <div class="page-button-flex">
        <a
          href="/impact"
          class="page-button blue-button w-[350px] mobile:w-[280px] mobile:h-[75px] py-3 px-16 text-center"
        >
          Explore our impact further
        </a>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="w-full">
      <div
        class="flex justify-between py-5 px-5 gap-x-10 md:gap-x-12 lg:gap-x-24 mobile:gap-y-10 mobile:flex-col"
      >
        <div
          class="rotate-[-5deg] px-5 bg-card-background shadow-md w-4/12 mobile:w-full flex flex-col items-center text-center items-center rounded-xl border-2 border-[#C5DBE2]"
        >
          <img
            :src="Students"
            alt=""
            class="md:-translate-y-10 mobile:w-[50%] w-[120px] md:w-[160px] lg:w-[190px]"
          />
          <h1
            class="font-serif font-bold text-5xl lg:text-7xl mobile:text-4xl text-[#d96f1f]"
          >
            1 <span class="tracking-wide text-3xl"> IN </span> 5
          </h1>
          <p class="my-5 w-full text-base text-center mobile:text-[16px]">
            students who are blind<br />
            learning through play
          </p>
        </div>
        <div
          class="mobile:translate-y-2 -translate-y-10 px-5 bg-card-background shadow-md w-4/12 mobile:w-full flex flex-col items-center text-center items-center rounded-xl border-2 border-[#C5DBE2]"
        >
          <img
            :src="Problems"
            alt=""
            class="md:-translate-y-10 mobile:w-[50%] w-[120px] md:w-[160px] lg:w-[190px]"
          />
          <h1
            class="font-serif font-bold text-5xl lg:text-7xl mobile:text-4xl text-primary-color"
          >
            200k
          </h1>
          <p class="my-5 w-full text-base text-center mobile:text-[16px]">
            blind and visually impaired users
          </p>
        </div>
        <div
          class="rotate-[5deg] px-5 bg-card-background shadow-md w-4/12 mobile:w-full flex flex-col items-center text-center items-center rounded-xl border-2 border-[#C5DBE2]"
        >
          <img
            :src="Globe"
            alt=""
            class="md:-translate-y-10 mobile:w-[50%] w-[120px] md:w-[160px] lg:w-[190px]"
          />
          <h1
            class="font-serif font-bold text-5xl lg:text-7xl mobile:text-4xl text-[#d96f1f]"
          >
            136
          </h1>
          <p class="my-5 w-full text-base text-center mobile:text-[16px]">
            countries and counting...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

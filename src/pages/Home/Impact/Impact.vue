<script setup>
import Students from '/assets/images/impact/carl-pencil.svg';
import Problems from '/assets/images/impact/carl-problems.svg';
import Globe from '/assets/images/impact/carl-globe.svg';

// List of stats card data
const cardsData = [
  {
    iconSrc: Students,
    stat: '1 <span class="tracking-wide text-3xl"> IN </span> 5',
    caption: 'students who are blind<br />learning through play',
    cardClasses: 'rotate-[-5deg]',
  },
  {
    iconSrc: Problems,
    stat: '200k',
    caption: 'blind and visually impaired users',
    cardClasses: 'mobile:translate-y-2 -translate-y-10',
  },
  {
    iconSrc: Globe,
    stat: '136',
    caption: 'countries and counting...',
    cardClasses: 'rotate-[5deg]',
  },
];
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
          class="page-button blue-button mobile:h-auto md:w-[300px] py-3 px-4"
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
          class="px-5 bg-card-background shadow-md w-4/12 mobile:w-full flex flex-col items-center text-center items-center rounded-xl border-2 border-[#C5DBE2]"
          :class="card.cardClasses"
          v-for="(card, n) in cardsData"
          :key="n"
        >
          <img
            :src="card.iconSrc"
            alt=""
            class="md:-translate-y-10 mobile:w-[50%] w-[120px] md:w-[160px] lg:w-[190px]"
            :class="card.iconClasses"
          />
          <h1
            class="font-serif font-bold text-5xl lg:text-7xl mobile:text-4xl"
            v-html="card.stat"
            :class="n % 2 == 0 ? 'text-[#d96f1f]' : 'text-primary-color'"
          ></h1>
          <p
            class="my-5 w-full text-base text-center mobile:text-[16px]"
            v-html="card.caption"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

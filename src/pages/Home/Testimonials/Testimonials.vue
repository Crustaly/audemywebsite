<script setup></script>

<template>
  <div
    class="flex flex-col items-center gap-y-12 self-center pt-80 mobile:pt-64 pb-[6rem] mobile:mt-5 mobile:pb-16 px-20 mobile:px-0 relative z-10"
  >
    <img
      src="/assets/images/testimonials/testimonials-bg.png"
      class="absolute top-[4rem] -z-10 h-[60rem] fill"
      alt="Background image"
    />

    <div class="font-poppins flex flex-col gap-y-3 mobile:px-5">
      <h1 class="text-4.5xl text-center text-title mobile:text-[24px]">
        What people are saying
      </h1>
      <p class="text-body text-xl mobile:text-[16px] mobile:text-center">
        Our learners are our top priority, and we strive to make their
        experience unique and enriching.
      </p>
    </div>

    <div
      class="flex items-center justify-center h-auto w-full mobile:overflow-x-auto mobile:overflow-y-hidden"
    >
      <div class="w-[85%] tablet:w-[95%] mobile:w-[95%]">
        <div
          class="flex justify-around items-center w-full min-h-[400px] mobile:min-h-[450px] mobile:gap-8"
        >
          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[443px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/yellowStar2.svg"
                alt="Yellow star"
                class="absolute top-[-2.5rem] left-[0rem] z-10 pulse"
              />

              <div
                class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins"
              >
                <p class="">
                  “Audemy has been an invaluable tool within my classroom. My
                  students who played the games were very into it, and the games
                  cover tons of educational topics like math and language!”
                </p>
                <h2 class="text-small">
                  &mdash; Teacher from the Texas School for the Blind and
                  Visually Impaired
                </h2>
              </div>
            </div>
          </div>

          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[443px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/chatBalloon.svg"
                alt="Chat balloon"
                class="absolute top-[2rem] right-[-2rem] mobile:right-[-1.4rem] z-10 pulse"
              />

              <div
                class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins"
              >
                <p class="">
                  “Audemy’s games provide accessible and engaging educational
                  content for our blind students. We encourage parents and other
                  teachers to check it out as well.”
                </p>
                <h3 class="text-small">
                  &mdash; Staff from Kansas School for the Blind
                </h3>
              </div>
            </div>
          </div>

          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[443px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/orangeStar.svg"
                alt="Yellow star"
                class="absolute bottom-[-2.5rem] right-[1rem] z-10 pulse"
              />

              <div
                class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins"
              >
                <p class="">
                  “Audemy’s audio games are really cool! My favorite game was
                  car counting because I love cars and math.”
                </p>
                <h4 class="text-small">
                  &mdash; Adam, a Blind Student from Houston
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pulse {
  animation: pulse 1.1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1);
  }
}

.fill {
  width: -webkit-fill-available;
}
</style>

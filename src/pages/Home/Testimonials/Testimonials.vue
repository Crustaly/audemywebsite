<script setup>
import Comment from "/assets/images/testimonials/comment.png";
import Star from "/assets/images/testimonials/star.svg";
</script>

<!-- Background and purely decorative images need empty ("") alt text-->

<template>
  <div
    class="flex flex-col items-center gap-y-12 self-center mt-20 pt-80 mobile:pt-64 pb-[18rem] mobile:mt-5 mobile:pb-40 px-20 mobile:px-0 relative z-10"
  >
    <img
      src="/assets/images/testimonials/testimonials-bg.png"
      class="absolute top-[4rem] -z-10 h-[60rem] fill"
      alt=""
    />

    <div class="font-poppins flex flex-col gap-y-3 mobile:px-5">
      <h2 class="text-4.5xl text-center text-title mobile:text-[24px]">
        What people are saying
      </h2>
      <p class="text-body text-xl mobile:text-[16px] mobile:text-center">
        Our learners are our top priority, and we strive to make their
        experience unique and enriching.
      </p>
    </div>

    <div class="flex items-center justify-center h-auto w-full mobile:overflow-x-auto mobile:overflow-y-hidden">
      <div class="w-[85%] tablet:w-[95%] mobile:w-[95%]">
        <div
          class="flex justify-around items-center w-full min-h-[400px] mobile:min-h-[450px] mobile:gap-8"
        >
          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[344px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/yellowStar2.svg"
                alt=""
                class="absolute top-[-2.5rem] left-[0rem] z-10 pulse"
              />

              <div class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins">
                <p class="">
                  “The blind students who played the games were very into it!”
                </p>
                <p class="text-small">
                  &mdash; Teacher from the Texas School for the Blind and
                  Visually Impaired
                </p>
              </div>
            </div>
          </div>

          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[344px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/chatBalloon.svg"
                alt=""
                class="absolute top-[2rem] right-[-2rem] mobile:right-[-1.4rem] z-10 pulse"
              />

              <div class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins">
                <p class="">
                  “Audemy’s games provide accessible and engaging educational
                  content for our blind students.”
                </p>
                <p class="text-small">
                  &mdash; Staff from Kansas School for the Blind
                </p>
              </div>
            </div>
          </div>

          <div class="w-4/12 mobile:w-[285px]">
            <div
              class="relative bg-[#fff] shadow-[3px_4px_0px_#0C0D0D] border-2 border-[#2A3338] py-20 mobile:py-16 px-8 rounded-lg min-h-[344px] w-11/12 mobile:w-[285px] mobile:h-[280px]"
            >
              <img
                src="/assets/images/testimonials/orangeStar.svg"
                alt=""
                class="absolute bottom-[-2.5rem] right-[1rem] z-10 pulse"
              />

              <div class="max-w-52 w-full flex flex-col gap-y-4 mobile:justify-between mobile:h-full font-poppins">
                <p class="">
                  “Audemy’s audio games are unique...my favorite game was car
                  counting because I love cars and math.”
                </p>
                <p class="text-small">&mdash; Blind Student from Houston</p>
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

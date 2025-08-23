<script setup>
// Components
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';

// UI Decorations
import PageDecorations from '../../components/PageDecorations/PageDecorations.vue';
import YellowStar from '/assets/images/testimonials/star.svg';
import OrangeStar from '/assets/images/SignUpImg/orange-star.png';
import Book from '/assets/images/SignUpImg/books.png';
import Mic from '/assets/images/techShowcase/microphone.png';
import BlueArrow from '/assets/images/our-projects/Vector Stroke.png';
import Sparkles from '/assets/images/studio/sparkles.png';
import ShootingStars from '/assets/images/studio/shooting-stars.png';

// Extracted shared styling for BlueArrow icon
const arrowClasses = [
  'absolute',
  'transform',
  'scale-x-[-1]',
  'w-[60px]',
  'rotate-[25deg]',
  'md:w-[70px]',
  'lg:rotate-[15deg]',
  'lg:w-[75px]',
  'duration-300',
];

// Hero: RWD for BlueArrow icon
const heroArrowClasses = [
  'left-[2%]' /* Mobile-first RWD */,
  'bottom-[20%]',
  'sm:left-[10%]',
  'md:top-[40%]',
  'md:left-[45%]',
  'lg:top-[55%]',
  'lg:left-[5%]',
];

// Final CTA: RWD for BlueArrow icon
const finalArrowClasses = [
  'left-[2%]' /* Mobile-first RWD */,
  'top-[45%]',
  'sm:top-[40%]',
  'sm:left-[10%]',
  'md:top-[50%]',
  'md:left-[15%]',
  'lg:top-[55%]',
  'lg:left-[25%]',
];
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <!-- Hide decorative SVG wave -->
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="absolute -z-10 left-0 top-0 scale-y-[-1]"
    >
      <path
        fill="#e7f0f5"
        fill-opacity="1"
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,165.3C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />

    <!-- Hero Section -->
    <div
      class="relative flex items-center md:flex-row flex-col-reverse gap-x-5 py-8 my-5"
    >
      <!-- Decorative Right Arrow -->
      <img
        :src="BlueArrow"
        :class="[arrowClasses, heroArrowClasses]"
        aria-hidden="true"
      />
      <div
        class="lg:w-6/12 w-full flex flex-col gap-y-4 items-center text-center md:text-left lg:text-center mx-10"
      >
        <div class="px-5">
          <h1 class="game-resource-header">
            World's First
            <span class="font-semibold text-primary-color">Audio Console</span>
            — <em class="text-secondary-color">Buzzle</em>
          </h1>
        </div>

        <div class="my-10 px-5">
          <p class="page-text">
            Gaming should be made for
            <span class="font-semibold">everyone</span>
          </p>
        </div>

        <!-- Learn More Button -->
        <div class="game-resource-btn-flex">
          <a
            href="#learn-more"
            class="game-resource-base-btn orange-button mx-auto h-[70px] tablet:h-[60px] mobile:px-5 py-3 md:py-5"
          >
            Learn More
          </a>
        </div>
      </div>

      <div
        class="rounded-[16px] bg-cross-lines shadow-md lg:w-6/12 w-full my-10 md:my-0 mobile:py-32 py-20 md:py-48 lg:py-15 relative"
        aria-hidden="true"
      >
        <!-- Background decoration -->
        <PageDecorations
          :topLeftImgPath="YellowStar"
          :bottomRightImgPath="OrangeStar"
          :topRightImgPath="Book"
          :bottomLeftImgPath="Mic"
          increaseIconSize="true"
        />
        <!-- Console Image -->
        <img
          src="/assets/images/audio-console/buzzlehand.png"
          aria-hidden="true"
          class="object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 z-10 w-[65%] sm:w-[45%] md:w-[85%] lg:w-[65%] mx-auto rotate-[-5deg] md:rotate-[5deg]"
        />
      </div>
    </div>

    <!-- What is Buzzle Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-20 my-10"
      id="learn-more"
    >
      <div class="w-full">
        <h2 class="game-resource-header">
          What is <em class="text-[#fe892a]"> Buzzle?</em>
        </h2>
      </div>

      <div class="flex justify-center">
        <div class="max-w-[900px] w-full">
          <div class="my-10 px-5 text-center">
            <p class="page-text mb-8">
              <span class="font-semibold text-primary-color">Buzzle</span> is
              the
              <span class="font-semibold"
                >world's first audio-based gaming console</span
              >
              built for blind and visually impaired students.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 my-16">
            <!-- Feature Cards -->
            <div class="game-resource-card-small-flex-col">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/techShowcase/headphone.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Over 30+ original audio games
                </h3>
                <p class="game-resource-card-caption">Available at launch</p>
              </div>
            </div>

            <div class="game-resource-card-small-flex-col">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/audio-console/blueprint.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Simple, physical design
                </h3>
                <p class="game-resource-card-caption">
                  Made for classroom and home use
                </p>
              </div>
            </div>

            <div class="game-resource-card-small-flex-col md:col-span-2">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/studio/accessibility.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Built with accessibility at the core
                </h3>
                <p class="game-resource-card-caption">
                  Designed with and for blind players
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grant + Pilot Information Section -->
    <div
      class="relative flex flex-col items-center justify-start mobile:justify-center w-full h-auto my-10 p-12"
    >
      <div class="w-full">
        <h2 class="game-resource-header">Grant & Pilot Information</h2>
        <PageDecorations
          :topRightImgPath="Sparkles"
          :bottomLeftImgPath="ShootingStars"
        />
      </div>

      <div class="flex justify-center">
        <div class="max-w-[800px] w-full">
          <div class="my-10 px-5">
            <div class="text-center mb-12">
              <p class="page-text mb-8">
                Backed by grants from
                <span class="font-semibold text-primary-color">Amazon</span> and
                the
                <span class="font-semibold text-primary-color"
                  >American Eagle Foundation</span
                >
              </p>

              <!-- Logos Section -->
              <div
                class="flex flex-col gap-y-10 items-center md:flex-row md:justify-center md:justify-evenly my-10"
              >
                <img
                  src="/assets/images/audio-console/amazon_logo.png"
                  aria-hidden="true"
                  class="w-1/3 md:w-1/4 object-contain"
                />
                <img
                  src="/assets/images/audio-console/american-eagle-foundation-logo.png"
                  aria-hidden="true"
                  class="w-1/3 md:w-1/4 object-contain"
                />
              </div>
            </div>

            <div
              class="game-resource-text-card-base game-resource-text-card-flex mx-auto w-[300px] sm:w-full relative mb-8 duration-300"
            >
              <div
                class="game-resource-card-banner h-1/4 md:h-1/3"
                aria-hidden="true"
              ></div>
              <div>
                <div
                  class="game-resource-icon-card relative"
                  aria-hidden="true"
                >
                  <img
                    src="/assets/images/audio-console/paper-plane.png"
                    alt=""
                    class="w-[50px] absolute scale-x-[-1]"
                  />
                </div>
                <h3 class="game-resource-card-subtitle">Pilot Program</h3>
                <p class="game-resource-card-caption">
                  Our first pilot program will launch at the
                  <span class="font-semibold"
                    >Texas School for the Blind and Visually Impaired</span
                  >, the largest school for visually impaired students in the
                  United States.
                </p>
              </div>
            </div>

            <div class="text-center my-10">
              <p class="page-text">
                We are done with prototyping and ready to
                <span class="font-semibold text-primary-color"
                  >begin pilots</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why It Matters Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full">
        <h2 class="game-resource-header">
          Why It <i class="text-[#fe892a]"> Matters </i>
        </h2>
      </div>

      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex flex-col gap-10 px-5 my-10">
            <div class="game-resource-card-small-flex-row">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/audio-console/key.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Consoles aren't accessible for blind students
                </h3>
                <p class="game-resource-card-caption">Until now with Buzzle</p>
              </div>
            </div>

            <div class="game-resource-card-small-flex-row">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/audio-console/puzzle.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Buzzle opens the door for inclusive gaming
                </h3>
                <p class="game-resource-card-caption">
                  In classrooms and at home
                </p>
              </div>
            </div>

            <div class="game-resource-card-small-flex-row">
              <div
                class="game-resource-icon-card-small relative"
                aria-hidden="true"
              >
                <img
                  src="/assets/images/game-toolkit/friends.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  This is more than a console: It's a movement
                </h3>
                <p class="game-resource-card-caption">
                  Gaming made for everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Call to Action Section -->
    <div class="mobile:w-[90%] mx-auto bg-white p-5 my-10 relative">
      <!-- Decorative Left Arrow -->
      <img
        :src="BlueArrow"
        :class="[arrowClasses, finalArrowClasses]"
        aria-hidden="true"
      />
      <div class="p-16 relative">
        <PageDecorations
          :topLeftImgPath="YellowStar"
          :bottomRightImgPath="YellowStar"
          :topRightImgPath="OrangeStar"
          :bottomLeftImgPath="OrangeStar"
          increaseIconSize="true"
        />
        <h1 class="game-resource-header">
          <p>
            Ready to learn more about
            <em class="text-secondary-color">Buzzle?</em>
          </p>
          <p class="my-5">
            Let's <span class="font-semibold text-primary-color">connect</span>
          </p>
        </h1>

        <!-- Learn More Button -->
        <div class="game-resource-btn-flex">
          <a
            href="mailto:connect@audemy.org"
            target="_blank"
            class="game-resource-base-btn blue-button h-[70px] tablet:h-[60px] py-3 md:py-5"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>

    <!-- Accessibility Commitment Banner -->
    <div
      class="font-poppins overflow-hidden relative flex game-resource-text-card-base my-8 w-full md:w-[70%] mx-auto"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="absolute top-0 left-0 rounded-tl-lg rounded-tr-lg h-[250px]"
      >
        <path
          fill="#e7f0f5"
          fill-opacity="1"
          d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,213.3C840,245,960,267,1080,266.7C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div class="z-10 flex gap-5 mobile:flex-col-reverse items-center">
        <div class="w-4/6 mobile:w-full">
          <h3 class="game-resource-card-subtitle text-black">
            Gaming for Everyone
          </h3>
          <p class="game-resource-card-caption py-5">
            <span class="font-semibold text-primary-color">Buzzle</span>
            represents our commitment to making gaming truly
            <span class="font-semibold">inclusive</span> — designed by and for
            the blind and visually impaired community.
          </p>
        </div>
        <div class="w-2/6 mobile:w-full">
          <img
            src="/src/assets/character/audemychargame.png"
            alt=""
            class="mx-auto mobile:w-[70%] rotate-[-10deg] md:rotate-[10deg]"
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

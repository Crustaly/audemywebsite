<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import PageDecorations from '../../components/PageDecorations/PageDecorations.vue';
</script>

<template>
  <ScrollUpButton />

  <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />

    <!-- Hero Section -->
    <div
      class="flex items-center md:flex-row flex-col-reverse gap-x-5 py-8 my-5"
    >
      <div
        class="lg:w-6/12 w-full flex flex-col gap-y-4 items-center text-center md:text-left lg:text-center mx-10"
      >
        <div class="px-5">
          <h1 class="studio-header">
            Making Games Playable for Everyone — From
            <span class="font-semibold text-primary-color">Day One</span>
          </h1>
        </div>

        <div class="my-10 px-5">
          <p class="text-body text-xl mobile:text-[16px] leading-8">
            Through
            <span class="font-semibold text-primary-color"
              >Audemy Accessibility Studio</span
            >, we connect indie studios and small developers with
            <span class="font-semibold">30+</span> blind game testers and
            assistive tech specialists for
            <span class="font-semibold">real-world accessibility testing.</span>
            Our studio runs as a non-profit, and all our services are completely
            <span class="font-semibold">free!</span>
          </p>
        </div>
        <!-- Start Test Button -->
        <div class="studio-btn-flex">
          <a
            href="mailto:connect@audemy.org"
            class="studio-base-btn mx-auto h-[70px] tablet:h-[60px] bg-[#FE892A] text-[#0D0C0C] mobile:px-5 py-3 md:py-5"
          >
            Start Your Accessibility Test
          </a>
        </div>
      </div>
      <div
        class="lg:w-6/12 w-full my-10 md:my-0 md:py-36 lg:py-10 relative"
        aria-hidden="true"
      >
        <!-- Accessibility: Hide decorative SVG, icons, and Carl image -->
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="z-0 absolute w-full h-[400px] md:h-[550px] top-0"
        >
          <path
            fill="#e7f0f5"
            d="M50.5,-66.1C64.6,-59.2,74.8,-43.4,79.4,-26.5C83.9,-9.5,83,8.6,75.4,22.2C67.9,35.9,53.7,45.2,40,50C26.4,54.8,13.2,55.1,-1,56.4C-15.1,57.7,-30.2,60.1,-45.6,55.9C-61,51.6,-76.5,40.8,-79.6,26.9C-82.6,13.1,-73.1,-3.8,-67.1,-21.8C-61.2,-39.8,-59,-58.9,-48.4,-66.9C-37.8,-74.9,-18.9,-71.8,-0.4,-71.3C18.2,-70.8,36.3,-72.9,50.5,-66.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <PageDecorations />
        <img
          src="/src/assets/character/audemychargame.png"
          alt=""
          class="z-10 w-[70%] sm:w-[45%] md:w-[85%] lg:w-[65%] mx-auto rotate-[6rad] md:rotate-[0.20rad]"
        />
      </div>
    </div>

    <!-- Problem & Opportunity Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-20 my-10"
    >
      <div class="w-full">
        <div
          class="flex justify-between my-16 mx-10 gap-16 tablet:gap-14 mobile:gap-y-12 mobile:flex-col"
        >
          <!-- Problem Card -->
          <div class="studio-text-card-base studio-text-card-flex relative">
            <div class="studio-card-banner h-1/4 md:h-1/3" aria-hidden="true">
              <!-- Decorative card banner (empty) -->
            </div>
            <div>
              <!-- Accessibility: Hide decorative icons -->
              <div class="studio-icon-card relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/problem.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="studio-card-subtitle">The Problem</h3>
              <p class="studio-card-caption">
                Millions of players with disabilities are excluded from gaming
                due to inaccessible design choices.
              </p>
            </div>
          </div>

          <!-- Opportunity Card -->
          <div class="studio-text-card-base studio-text-card-flex relative">
            <div class="studio-card-banner h-1/4 md:h-1/3" aria-hidden="true">
              <!-- Decorative card banner -->
            </div>
            <!-- Accessibility: Hide decorative icons -->
            <div class="studio-icon-card relative" aria-hidden="true">
              <img
                src="/assets/images/studio/opportunity.png"
                alt=""
                class="w-[50px] absolute"
              />
            </div>
            <h3 class="studio-card-subtitle">The Opportunity</h3>
            <p class="studio-card-caption">
              Accessibility is not only the right thing to do — it opens your
              game to new audiences, drives inclusivity, and builds brand
              loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- How the Studio Works Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">How the Studio Works</h2>
      </div>
      <div class="flex justify-center">
        <div class="w-full">
          <div
            class="flex justify-between py-5 px-5 md:gap-x-10 lg:gap-x-24 mobile:gap-y-12 mobile:flex-col"
          >
            <!-- Step 1 -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative">
                <img
                  src="/assets/images/studio/1-digit.png"
                  class="absolute w-[50px]"
                  alt="1"
                />
              </div>
              <h3 class="studio-card-subtitle">Submit Your Build</h3>
              <p class="text-center studio-card-caption">
                Upload your demo or beta version securely.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative">
                <img
                  src="/assets/images/studio/2-digit.png"
                  class="absolute w-[50px]"
                  alt="2"
                />
              </div>
              <h3 class="studio-card-subtitle">Test With Experts & Players</h3>
              <p class="text-center studio-card-caption">
                Our network of <span class="font-semibold">30+</span> blind
                gamers and assistive tech specialists test your game.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card relative">
                <img
                  src="/assets/images/studio/3-digit.png"
                  class="absolute w-[50px]"
                  alt="3"
                />
              </div>
              <h3 class="studio-card-subtitle">
                Get Your Accessibility Report
              </h3>
              <p class="text-center studio-card-caption">
                Actionable feedback, prioritized fixes, and resources to improve
                accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Who We Work With Section -->
    <div
      class="relative flex flex-col items-center justify-start mobile:justify-center w-full h-auto my-10 p-10"
    >
      <div class="w-full">
        <h2 class="studio-header">Who We Work With</h2>
        <PageDecorations
          topRightImgPath="/assets/images/studio/sparkles.png"
          bottomLeftImgPath="/assets/images/studio/shooting-stars.png"
        />
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div
            class="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-10 px-5 my-10"
          >
            <div class="studio-card-small-flex-col">
              <!-- Accessibility: Hide decorative icons -->
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/seed.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="studio-card-caption-small">Indie studios</h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/command-line.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="studio-card-caption-small">Solo developers</h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/accessibility.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="studio-card-caption-small">
                Accessibility-minded publishers
              </h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/education.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="studio-card-caption-small">
                Educational game developers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What You Get Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-5 my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">What You Get</h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex flex-col gap-10 px-5 my-10">
            <!-- Accessibility: Hide decorative icons in each flex child below -->
            <div class="studio-card-small-flex-row">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/checklist-v2.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Detailed accessibility testing report
                </h3>
                <p class="studio-card-caption">
                  With screenshots and descriptions
                </p>
              </div>
            </div>
            <div class="studio-card-small-flex-row">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/fix.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Priority list of accessibility fixes
                </h3>
              </div>
            </div>
            <div class="studio-card-small-flex-row">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/research.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Recommendations for blind and low-vision accessibility
                </h3>
              </div>
            </div>
            <div class="studio-card-small-flex-row">
              <div class="studio-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/studio/repeat.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Optional: Re-test after changes
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Call to Action Section -->
    <div class="mobile:w-[90%] mx-auto bg-white p-5 my-10">
      <div class="p-16 relative">
        <PageDecorations />
        <h1 class="studio-header">
          <p>
            Make your game
            <span class="font-semibold text-primary-color">accessible</span>
            today.
          </p>
          <p>Let's talk.</p>
        </h1>
        <!-- Book Test Button -->
        <div class="studio-btn-flex">
          <a
            href="mailto:connect@audemy.org"
            target="_blank"
            class="studio-base-btn h-[70px] tablet:h-[60px] bg-primary-color text-white py-3 md:py-5"
          >
            Book Your Free Test
          </a>
        </div>
      </div>
    </div>

    <!-- Accessibility Commitment Banner -->
    <div
      class="relative flex studio-text-card-base my-8 w-full md:w-[70%] mx-auto"
    >
      <div class="studio-card-banner h-[40%]" aria-hidden="true">
        <!-- Decorative card banner -->
      </div>
      <div class="z-10 flex gap-5 mobile:flex-col-reverse items-center">
        <div class="w-4/6 mobile:w-full">
          <h3 class="studio-card-subtitle mobile:text-black text-white">
            Accessibility Commitment
          </h3>
          <p class="studio-card-caption py-5">
            We commit to following WCAG 2.1 AA guidelines and beyond — testing
            with real players to ensure meaningful accessibility.
          </p>
        </div>
        <div class="w-2/6 mobile:w-full">
          <img
            src="/assets/images/impact/students%201.svg"
            alt=""
            class="mx-auto"
          />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

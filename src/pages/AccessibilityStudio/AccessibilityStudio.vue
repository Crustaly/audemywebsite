<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
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
            Making Games Playable for Everyone — From Day One.
          </h1>
        </div>

        <div class="my-10 px-5">
          <p class="text-body text-xl mobile:text-[16px] leading-8">
            Through Audemy Accessibility Studio, we connect indie studios and
            small developers with 30+ blind game testers and assistive tech
            specialists for real-world accessibility testing. Audemy
            Accessibility Studio runs as a non-profit, and all our services are
            completely free!
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
      <div class="lg:w-6/12 w-full my-10 md:my-0">
        <!-- Accessibility: Hide decorative image -->
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
          <div class="studio-text-card-base studio-text-card-flex">
            <!-- Accessibility: Hide decorative icons -->
            <div class="studio-icon-card bg-[#FF3B3B]" aria-hidden="true">
              <span class="studio-steps-text">!</span>
            </div>
            <h3 class="studio-card-subtitle">The Problem</h3>
            <p class="studio-card-caption">
              Millions of players with disabilities are excluded from gaming due
              to inaccessible design choices.
            </p>
          </div>

          <!-- Opportunity Card -->
          <div class="studio-text-card-base studio-text-card-flex">
            <!-- Accessibility: Hide decorative icons -->
            <div class="studio-icon-card bg-[#06C270]" aria-hidden="true">
              <span class="studio-steps-text">✓</span>
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
              <div class="studio-icon-card bg-[#087BB4]">
                <span class="studio-steps-text">1</span>
              </div>
              <h3 class="studio-card-subtitle">Submit Your Build</h3>
              <p class="text-center studio-card-caption">
                Upload your demo or beta version securely.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card bg-[#FE892A]">
                <span class="studio-steps-text">2</span>
              </div>
              <h3 class="studio-card-subtitle">Test With Experts & Players</h3>
              <p class="text-center studio-card-caption">
                Our network of 30+ blind gamers and assistive tech specialists
                test your game.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="studio-steps-card-flex">
              <div class="studio-icon-card bg-[#06C270]">
                <span class="studio-steps-text">3</span>
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
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto my-10"
    >
      <div class="w-full">
        <h2 class="studio-header">Who We Work With</h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div
            class="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-10 px-5 my-10"
          >
            <div class="studio-card-small-flex-col">
              <!-- Accessibility: Hide decorative icons -->
              <div
                class="studio-icon-card-small bg-[#087BB4]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">I</span>
              </div>
              <h3 class="studio-card-caption-small">Indie studios</h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div
                class="studio-icon-card-small bg-[#FE892A]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">S</span>
              </div>
              <h3 class="studio-card-caption-small">Solo developers</h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div
                class="studio-icon-card-small bg-[#06C270]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">P</span>
              </div>
              <h3 class="studio-card-caption-small">
                Accessibility-minded publishers
              </h3>
            </div>
            <div class="studio-card-small-flex-col">
              <div
                class="studio-icon-card-small bg-[#FFCC00]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">E</span>
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
              <div
                class="studio-icon-card-small bg-[#087BB4]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">📋</span>
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
              <div
                class="studio-icon-card-small bg-[#FE892A]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">⚡</span>
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Priority list of accessibility fixes
                </h3>
              </div>
            </div>
            <div class="studio-card-small-flex-row">
              <div
                class="studio-icon-card-small bg-[#06C270]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">👁️</span>
              </div>
              <div class="flex-1">
                <h3 class="studio-card-caption-small">
                  Recommendations for blind and low-vision accessibility
                </h3>
              </div>
            </div>
            <div class="studio-card-small-flex-row">
              <div
                class="studio-icon-card-small bg-[#FFCC00]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">🔄</span>
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
      <div class="p-5">
        <h1 class="studio-header">
          <p>Make your game accessible today.</p>
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
    <div class="studio-text-card-base my-8 w-full md:w-[70%] mx-auto">
      <h3 class="studio-card-subtitle">Accessibility Commitment</h3>
      <p class="studio-card-caption py-5">
        We commit to following WCAG 2.1 AA guidelines and beyond — testing with
        real players to ensure meaningful accessibility.
      </p>
    </div>
  </div>

  <Footer />
</template>

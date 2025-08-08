<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';

// Shared, responsive button styles
const buttonClasses = [
  'page-button',
  'font-[600]',
  'text-center',
  'duration-300',
  'text-[16px]',
  'px-16',
  'mobile:py-5',
  'sm:py-3',
  'md:py-5',
  'md:px-10',
  'mobile:h-[90px]',
  'md:h-[70px]',
];
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
          <h1
            class="text-4xl tablet:text-[24px] mobile:text-[24px] leading-normal text-title"
          >
            Making Games Playable for Everyone — From Day One.
          </h1>
        </div>

        <div class="my-10 px-5">
          <p class="text-body text-xl mobile:text-[16px] max-w-md leading-8">
            Through Audemy Accessibility Studio, we connect indie studios and
            small developers with 30+ blind game testers and assistive tech
            specialists for real-world accessibility testing. Audemy
            Accessibility Studio runs as a non-profit, and all our services are
            completely free!
          </p>
        </div>
        <!-- Start Test Button -->
        <a
          href="mailto:connect@audemy.org"
          :class="buttonClasses"
          class="mx-auto mobile:w-[80%] h-[90px] bg-[#FE892A] text-[#0D0C0C]"
        >
          Start Your Accessibility Test
        </a>
      </div>
      <div class="lg:w-6/12 w-full my-10 md:my-0">
        <!-- Accessibility: Hide decorative image -->
        <img
          src="/src/assets/character/audemychargame.png"
          alt=""
          class="z-10 w-[70%] sm:w-[45%] md:w-[85%] lg:w-[65%] mx-auto"
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
          <div class="w-6/12 mobile:w-full flex flex-col">
            <!-- Accessibility: Hide decorative icons -->
            <div
              class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#FF3B3B]"
              aria-hidden="true"
            >
              <span class="text-white text-2xl font-bold">!</span>
            </div>
            <h3
              class="text-left text-body-text-color text-[20px] tablet:text-[16px] font-[600] mb-4"
            >
              The Problem
            </h3>
            <p
              class="text-left text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
            >
              Millions of players with disabilities are excluded from gaming due
              to inaccessible design choices.
            </p>
          </div>

          <!-- Opportunity Card -->
          <div class="w-6/12 mobile:w-full flex flex-col">
            <!-- Accessibility: Hide decorative icons -->
            <div
              class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#06C270]"
              aria-hidden="true"
            >
              <span class="text-white text-2xl font-bold">✓</span>
            </div>
            <h3
              class="text-left text-body-text-color text-[20px] tablet:text-[16px] font-[600] mb-4"
            >
              The Opportunity
            </h3>
            <p
              class="text-left text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
            >
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
        <h2
          class="text-center text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-5"
        >
          How the Studio Works
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="w-full">
          <div
            class="flex justify-between py-5 px-5 md:gap-x-10 lg:gap-x-24 mobile:gap-y-12 mobile:flex-col"
          >
            <!-- Step 1 -->
            <div
              class="w-4/12 mobile:w-full flex flex-col items-center text-center"
            >
              <div
                class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#087BB4]"
              >
                <span class="text-white text-2xl font-bold">1</span>
              </div>
              <h3
                class="text-center text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-4"
              >
                Submit Your Build
              </h3>
              <p
                class="text-center text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
              >
                Upload your demo or beta version securely.
              </p>
            </div>

            <!-- Step 2 -->
            <div
              class="w-4/12 mobile:w-full flex flex-col items-center text-center"
            >
              <div
                class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#FE892A]"
              >
                <span class="text-white text-2xl font-bold">2</span>
              </div>
              <h3
                class="text-center text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-4"
              >
                Test With Experts & Players
              </h3>
              <p
                class="text-center text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
              >
                Our network of 30+ blind gamers and assistive tech specialists
                test your game.
              </p>
            </div>

            <!-- Step 3 -->
            <div
              class="w-4/12 mobile:w-full flex flex-col items-center text-center"
            >
              <div
                class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#06C270]"
              >
                <span class="text-white text-2xl font-bold">3</span>
              </div>
              <h3
                class="text-center text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-4"
              >
                Get Your Accessibility Report
              </h3>
              <p
                class="text-center text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
              >
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
        <h2
          class="text-center text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] py-5"
        >
          Who We Work With
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div
            class="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-10 px-5 my-10"
          >
            <div class="flex items-center gap-4">
              <!-- Accessibility: Hide decorative icons ('I', 'S', 'P', 'E' text blocks) -->
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#087BB4]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">I</span>
              </div>
              <h3
                class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600]"
              >
                Indie studios
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FE892A]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">S</span>
              </div>
              <h3
                class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600]"
              >
                Solo developers
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#06C270]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">P</span>
              </div>
              <h3
                class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600]"
              >
                Accessibility-minded publishers
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FFCC00]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">E</span>
              </div>
              <h3
                class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600]"
              >
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
        <h2
          class="text-center text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] py-5"
        >
          What You Get
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex flex-col gap-10 px-5 my-10">
            <!-- Accessibility: Hide decorative icons in each flex child below -->
            <div class="flex items-start gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#087BB4]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">📋</span>
              </div>
              <div class="flex-1">
                <h3
                  class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-2"
                >
                  Detailed accessibility testing report
                </h3>
                <p
                  class="text-left text-body-text-color text-[16px] tablet:text-[14px] font-[400]"
                >
                  With screenshots and descriptions
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FE892A]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">⚡</span>
              </div>
              <div class="flex-1">
                <h3
                  class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-2"
                >
                  Priority list of accessibility fixes
                </h3>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#06C270]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">👁️</span>
              </div>
              <div class="flex-1">
                <h3
                  class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-2"
                >
                  Recommendations for blind and low-vision accessibility
                </h3>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FFCC00]"
                aria-hidden="true"
              >
                <span class="text-white font-bold">🔄</span>
              </div>
              <div class="flex-1">
                <h3
                  class="text-left text-body-text-color text-[18px] tablet:text-[16px] font-[600] mb-2"
                >
                  Optional: re-test after changes
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Call to Action Section -->
    <div
      class="mobile:min-w-full tablet:min-w-[504px] mx-auto bg-white p-5 my-10"
    >
      <div class="max-w-[504px] mobile:max-w-[358px] mx-auto p-5">
        <h1
          class="text-[40px] tablet:text-[32px] leading-[60px] tablet:leading-[60px] text-center text-[#151E22]"
        >
          <p>Make your game accessible today.</p>
          <p>Let's talk.</p>
        </h1>
        <!-- Book Test Button -->
        <div
          class="flex mobile:flex-col justify-center mobile:gap-[20px] mobile:mx-[16px] items-center mt-8"
        >
          <a
            href="mailto:connect@audemy.org"
            target="_blank"
            :class="buttonClasses"
            class="h-[70px] tablet:h-[60px] bg-primary-color text-white"
          >
            Book Your Free Test
          </a>
        </div>
      </div>
    </div>

    <!-- Accessibility Commitment Banner -->
    <div class="bg-[#E5F0F5] border-2 border-[#087BB4] rounded-lg p-6 mb-16">
      <div class="text-center">
        <h3
          class="text-[18px] tablet:text-[16px] font-[600] text-[#087BB4] mb-5"
        >
          Accessibility Commitment
        </h3>
        <p class="text-[16px] tablet:text-[14px] font-[400] text-body">
          We commit to following WCAG 2.1 AA guidelines and beyond — testing
          with real players to ensure meaningful accessibility.
        </p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';

import { useDeviceType } from '../../Utilities/checkDeviceType';
const { isMobile, isTablet } = useDeviceType();
</script>

<template>
  <ScrollUpButton />

  <div
    :class="[
      'relative',
      !isTablet && !isMobile ? 'px-14' : '',
      isTablet ? 'px-6' : '',
      isMobile ? 'px-8' : '',
    ]"
    ref="content"
  >
    <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    
    <!-- Hero Section -->
    <div class="flex items-center mobile:flex-col-reverse gap-x-6 py-8 mt-20">
      <div
        class="w-6/12 mobile:w-full flex flex-col gap-y-4 mobile:items-center mobile:text-center"
      >
        <div class="font-poppins">
          <h1
            class="text-4xl tablet:text-[24px] mobile:text-[24px] leading-normal text-title font-poppins"
          >
            Making Games Playable for Everyone — From Day One.
          </h1>
        </div>

        <div>
          <p
            class="font-poppins text-body text-xl mobile:text-[16px] max-w-md leading-8"
          >
            Through Audemy Accessibility Studio, we connect indie studios and small developers with 30+ blind game testers and assistive tech specialists for real-world accessibility testing. Audemy Accessibility Studio runs as a non-profit, and all our services are completely free!
          </p>
        </div>

        <a
          href="mailto:contact@audemy.org"
          class="font-poppins mobile:w-full px-16 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#FE892A] hover:bg-[#D6711F] text-base text-center text-[#0D0C0C] shadow-[3px_4px_0px_#0C0D0D] font-semibold self-start duration-300"
        >
          Start Your Accessibility Test
        </a>
      </div>
      <div class="w-6/12 mobile:w-full mobile:mb-14">
        <img
          src="/src/assets/character/audemychargame.png"
          alt="Accessibility Studio illustration"
          class="z-10 w-full"
        />
      </div>
    </div>

    <!-- Problem & Opportunity Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="max-w-[744px] w-full">
        <div class="flex justify-between mt-[110px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4 mobile:flex-col">
          <!-- Problem Card -->
          <div class="w-6/12 mobile:w-full flex flex-col">
            <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#FF3B3B]">
              <span class="text-white text-2xl font-bold">!</span>
            </div>
            <h3 class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[600] mb-4">
              The Problem
            </h3>
            <p class="text-left text-body-text-color font-poppins text-[16px] tablet:text-[14px] font-[400]">
              Millions of players with disabilities are excluded from gaming due to inaccessible design choices.
            </p>
          </div>

          <!-- Opportunity Card -->
          <div class="w-6/12 mobile:w-full flex flex-col">
            <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#06C270]">
              <span class="text-white text-2xl font-bold">✓</span>
            </div>
            <h3 class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[600] mb-4">
              The Opportunity
            </h3>
            <p class="text-left text-body-text-color font-poppins text-[16px] tablet:text-[14px] font-[400]">
              Accessibility is not only the right thing to do — it opens your game to new audiences, drives inclusivity, and builds brand loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- How the Studio Works Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          How the Studio Works
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-16 tablet:gap-14 mobile:gap-4 mobile:flex-col">
            <!-- Step 1 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#087BB4]">
                <span class="text-white text-2xl font-bold">1</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                Submit Your Build
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Upload your demo or beta version securely.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#FE892A]">
                <span class="text-white text-2xl font-bold">2</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                Test With Experts & Players
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Our network of 30+ blind gamers and assistive tech specialists test your game.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="w-4/12 mobile:w-full flex flex-col items-center text-center">
              <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px] bg-[#06C270]">
                <span class="text-white text-2xl font-bold">3</span>
              </div>
              <h3 class="text-center text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-4">
                Get Your Accessibility Report
              </h3>
              <p class="text-center text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                Actionable feedback, prioritized fixes, and resources to improve accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Who We Work With Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          Who We Work With
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="grid grid-cols-2 tablet:grid-cols-1 mobile:grid-cols-1 gap-8 mt-[40px] tablet:mt-[72px] mb-[63px]">
            <div class="flex items-center gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#087BB4]">
                <span class="text-white font-bold">I</span>
              </div>
              <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600]">
                Indie studios
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FE892A]">
                <span class="text-white font-bold">S</span>
              </div>
              <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600]">
                Solo developers
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#06C270]">
                <span class="text-white font-bold">P</span>
              </div>
              <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600]">
                Accessibility-minded publishers
              </h3>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FFCC00]">
                <span class="text-white font-bold">E</span>
              </div>
              <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600]">
                Educational game developers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What You Get Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]">
      <div class="w-full">
        <h2 class="text-center font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center font-[400] mb-16">
          What You Get
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex flex-col gap-6 mt-[40px] tablet:mt-[72px] mb-[63px]">
            <div class="flex items-start gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#087BB4]">
                <span class="text-white font-bold">📋</span>
              </div>
              <div class="flex-1">
                <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-2">
                  Detailed accessibility testing report
                </h3>
                <p class="text-left text-body-text-color font-poppins text-[14px] tablet:text-[12px] font-[400]">
                  With screenshots and descriptions
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FE892A]">
                <span class="text-white font-bold">⚡</span>
              </div>
              <div class="flex-1">
                <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-2">
                  Priority list of accessibility fixes
                </h3>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#06C270]">
                <span class="text-white font-bold">👁️</span>
              </div>
              <div class="flex-1">
                <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-2">
                  Recommendations for blind and low-vision accessibility
                </h3>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center bg-[#FFCC00]">
                <span class="text-white font-bold">🔄</span>
              </div>
              <div class="flex-1">
                <h3 class="text-left text-body-text-color font-poppins text-[18px] tablet:text-[16px] font-[600] mb-2">
                  Optional: re-test after changes
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Call to Action Section -->
    <div class="mobile:min-w-full tablet:min-w-[504px] mx-auto bg-white mobile:mb-12">
      <div class="max-w-[504px] mobile:max-w-[358px] mx-auto pb-[78px]">
        <h1
          class="font-poppins text-[40px] tablet:text-[32px] leading-[60px] tablet:leading-[60px] text-center text-[#151E22]"
        >
          Make your game accessible today. Let's talk.
        </h1>
        <div
          class="flex mobile:flex-col justify-center mobile:gap-[20px] mobile:mx-[16px] items-center mt-8"
        >
          <a
            href="mailto:contact@audemy.org"
            target="_blank"
            class="font-poppins font-[600] w-[236.07px] mobile:w-full h-[56px] leading-[56px] tablet:h-[60px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] text-[16px] text-center text-white shadow-[4px_4px_0px_#0C0D0D]"
          >
            Book Your Free Test
          </a>
        </div>
      </div>
    </div>

    <!-- Accessibility Commitment Banner -->
    <div class="bg-[#E5F0F5] border-2 border-[#087BB4] rounded-lg p-6 mb-16">
      <div class="text-center">
        <h3 class="font-poppins text-[18px] tablet:text-[16px] font-[600] text-[#087BB4] mb-2">
          Accessibility Commitment
        </h3>
        <p class="font-poppins text-[14px] tablet:text-[12px] text-body">
          We commit to following WCAG 2.1 AA guidelines and beyond — testing with real players to ensure meaningful accessibility.
        </p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
@media screen and (max-width: 450px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
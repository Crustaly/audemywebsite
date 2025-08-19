<script setup>
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton.vue';
import PageDecorations from '../../components/PageDecorations/PageDecorations.vue';
</script>

<template>
  <div>
    <ScrollUpButton />
    <div class="relative px-8 sm:px-8 md:px-6 lg:px-14 font-poppins">
        <Header :logoPath="'/assets/images/header/header-logo-2.png'" />
    </div>
    <!-- Hero Section -->
    <div class="flex items-center md:flex-row flex-col-reverse gap-x-5 py-8 my-5">
      <div class="lg:w-6/12 w-full flex flex-col gap-y-4 items-center text-center md:text-left lg:text-center mx-10">
        <div class="px-5">
          <h1 class="game-resource-header">
            World's First
            <span class="font-semibold text-primary-color">Audio Console</span>
          </h1>
        </div>

        <div class="my-10 px-5">
          <p class="text-body text-xl mobile:text-[16px] leading-8 font-semibold">
            Gaming should be made for everyone.
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
      
      <div class="lg:w-6/12 w-full my-10 md:my-0 md:py-36 lg:py-10 relative" aria-hidden="true">
        <!-- Background decoration -->
        <PageDecorations />
        <!-- Console Image -->
        <img
          src="/assets/images/audio-console/firstbuzzle1.png"
          alt="Buzzle Audio Console"
          class="z-10 w-[70%] sm:w-[45%] md:w-[85%] lg:w-[65%] mx-auto"
        />
      </div>
    </div>

    <!-- What is Buzzle Section -->
    <div
      class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-20 my-10"
      id="learn-more"
    >
      <div class="w-full">
        <h2 class="game-resource-header">What is <i class="text-[#fe892a]"> Buzzle?</i> </h2>
      </div>
      
      <div class="flex justify-center">
        <div class="max-w-[900px] w-full">
          <div class="my-10 px-5 text-center">
            <p class="text-body text-xl mobile:text-[18px] leading-8 mb-8">
              <span class="font-semibold text-primary-color">Buzzle</span> is the  <strong>world's first audio-based gaming console </strong> built for 
              <span class="font-bold">blind and visually impaired students.</span>
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 my-16">
            <!-- Feature Cards -->
            <div class="game-resource-card-small-flex-col">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/console.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="game-resource-card-caption-small">Over 30+ original audio games available at launch</h3>
            </div>
            
            <div class="game-resource-card-small-flex-col">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/design-icon.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="game-resource-card-caption-small">Simple, physical design made for classroom and home use</h3>
            </div>
            
            <div class="game-resource-card-small-flex-col md:col-span-2">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/accessibility-icon.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <h3 class="game-resource-card-caption-small">Built with accessibility at the core, designed with and for blind players</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grant + Pilot Information Section -->
    <div class="relative flex flex-col items-center justify-start mobile:justify-center w-full h-auto my-10 p-12">
      <div class="w-full">
        <h2 class="game-resource-header">Grant + Pilot Information</h2>
        <PageDecorations
          topRightImgPath="/assets/images/console/sparkles.png"
          bottomLeftImgPath="/assets/images/console/shooting-stars.png"
        />
      </div>
      
      <div class="flex justify-center">
        <div class="max-w-[800px] w-full">
          <div class="my-10 px-5">
            <div class="text-center mb-12">
              <p class="text-body text-xl mobile:text-[18px] leading-8 mb-8">
                Backed by grants from <span class="font-semibold text-primary-color">Amazon</span> and the 
                <span class="font-semibold text-primary-color">American Eagle Foundation.</span>
              </p>
              
              <!-- Logos Section -->
              <div class="flex justify-center items-center gap-12 my-12 flex-wrap">
                <img
                  src="/assets/images/audio-console/amazon_logo.png"
                  alt="Amazon"
                  class="h-12 object-contain"
                />
                <img
                  src="/assets/images/audio-console/american-eagle-foundation-logo.png"
                  alt="American Eagle Foundation"
                  class="h-12 object-contain"
                />
              </div>
            </div>
            
            <div class="game-resource-text-card-base game-resource-text-card-flex relative mb-8">
              <div class="game-resource-card-banner h-1/4 md:h-1/3" aria-hidden="true"></div>
              <div>
                <div class="game-resource-icon-card relative" aria-hidden="true">
                  <img
                    src="/assets/images/audio-console/pilot-icon.png"
                    alt=""
                    class="w-[50px] absolute"
                  />
                </div>
                <h3 class="game-resource-card-subtitle">Pilot Program</h3>
                <p class="game-resource-card-caption">
                  Our first pilot program will launch at the <span class="font-semibold">Texas School for the Blind and Visually Impaired</span>, 
                  the largest school for visually impaired students in the United States.
                </p>
              </div>
            </div>
            
            <div class="text-center">
              <p class="text-body text-lg mobile:text-[16px] leading-7 font-semibold text-primary-color">
                We are done with prototyping and ready to begin pilots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Why It Matters Section -->
    <div class="flex flex-col items-center justify-start mobile:justify-center w-full h-auto py-10 md:py-10 my-10">
      <div class="w-full">
        <h2 class="game-resource-header"> Why It <i class="text-[#fe892a]"> Matters </i></h2>
      </div>
      
      <div class="flex justify-center">
        <div class="max-w-[744px] w-full">
          <div class="flex flex-col gap-10 px-5 my-10">
            <div class="game-resource-card-small-flex-row">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/console-icon.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Consoles aren't accessible for blind students — until now
                </h3>
              </div>
            </div>
            
            <div class="game-resource-card-small-flex-row">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/inclusive-icon.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  Buzzle opens the door for inclusive gaming in classrooms and at home
                </h3>
              </div>
            </div>
            
            <div class="game-resource-card-small-flex-row">
              <div class="game-resource-icon-card-small relative" aria-hidden="true">
                <img
                  src="/assets/images/audio-console/movement-icon.png"
                  alt=""
                  class="w-[50px] absolute"
                />
              </div>
              <div class="flex-1">
                <h3 class="game-resource-card-caption-small">
                  This is more than a console. It's a movement: gaming made for everyone
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
        <h1 class="game-resource-header">
          <p>
            Ready to learn more about
            <span class="font-semibold text-primary-color">Buzzle?</span>
          </p>
          <p>Let's connect.</p>
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
    <div class="relative flex game-resource-text-card-base my-8 w-full md:w-[70%] mx-auto">
      <div class="game-resource-card-banner h-[40%]" aria-hidden="true"></div>
      <div class="z-10 flex gap-5 mobile:flex-col-reverse items-center">
        <div class="w-4/6 mobile:w-full">
          <h3 class="game-resource-card-subtitle mobile:text-black text-white">
            Gaming for Everyone
          </h3>
          <p class="game-resource-card-caption py-5">
            Buzzle represents our commitment to making gaming truly inclusive — 
            designed by and for the blind and visually impaired community.
          </p>
        </div>
        <div class="w-2/6 mobile:w-full">
          <img
            src="/assets/images/impact/carl-pencil.svg"
            alt=""
            class="mx-auto mobile:w-[70%]"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isTablet = ref(false);
const isMobile = ref(false);

// Check device type on mount and on window resize
const checkDeviceType = () => {
  const width = window.innerWidth;
  if (width >= 640 && width < 768) {
    // Small devices (large phones)
    isTablet.value = false;
    isMobile.value = true;
  } else if (width >= 768 && width < 1024) {
    // Medium devices (tablets)
    isTablet.value = true;
    isMobile.value = false;
  } else if (width >= 1024) {
    // Large devices (laptops/desktops)
    isTablet.value = false;
    isMobile.value = false;
  } else {
    // Extra small devices (phones)
    isTablet.value = false;
    isMobile.value = true;
  }
};

onMounted(() => {
  checkDeviceType();
  window.addEventListener("resize", checkDeviceType);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkDeviceType);
});
</script>

<template>
    <div
        class="relative mb-[221px] tablet:mb-[273px] mobile:mb-[119px]"
        :class="[
            isTablet ? 'h-auto py-16' : 'h-[715.41px]',
            'mobile:h-auto mobile:w-full'
        ]"
    >
        <div
            class="absolute -z-50"
            :class="[
                isTablet ? 'tablet-apple-bg' : 'desktop-apple-bg', 
                'mobile:self-left mobile:top-[30%] mobile:left-[-2rem] mobile:w-[60%] mobile:h-[40%] mobile:order-2'
            ]"
        >
            <img
                class="w-full h-full"
                src="/assets/images/events/apple-illustration.png"
                alt="Background Image"
            />
        </div>

        <div
            :class="[
                'flex items-end mobile:items-center mobile:gap-14',
                isTablet ? 'tablet-container' : 'justify-between h-full pb-[125px]',
                'mobile:pb-0 mobile:flex-col'
            ]"
        >
            <!-- Hackathon Section -->
            <div :class="[isTablet ? 'tablet-column' : 'w-4/12', 'mobile:w-full mobile:order-1']">
                <div
                    :class="[
                        'relative z-10 text-center flex flex-col justify-between',
                        isTablet ? 'tablet-content mr-2' : 'mx-auto w-[350px] h-[318px]',
                        'tablet:h-[285px] mobile:w-full mobile:h-auto mobile:mb-8'
                    ]"
                >
                    <h1
                        class="font-poppins text-[40px] tablet:text-[32px] mobile:text-[24px] leading-[60px] tablet:leading-[48px] mobile:leading-[36px] text-[#151E22]"
                    >
                        Join the next<br />
                        Katy Youth Hacks
                    </h1>
                    <p
                        class="font-poppins text-[20px] tablet:text-[16px] leading-[30px] tablet:leading-[24px] text-[#2F3E45] mt-2"
                    >
                        Our accessibility-focused hackathon that inspires
                        innovation for people with disabilities.
                    </p>
                    <div class="flex justify-center mt-4">
                        <a
                            href="https://katyhacks.org/"
                            target="_blank"
                            class="font-poppins font-[600] w-[280px] tablet:w-full mobile:w-[90%] h-[56px] mobile:h-[56px] leading-[56px] tablet:h-[60px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#FE892A] hover:bg-[#D6711F] text-[16px] text-center text-[#0D0C0C] shadow-[4px_4px_0px_#0C0D0D]"
                        >
                            Check upcoming events
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Character Section -->
            <div class="w-full mobile:order-2 my-6">
                <div class="character-wrapper relative flex justify-center items-center">
                    <div class="mobile-apple-bg"></div>
                    <img 
                        class="character-image relative z-10"
                        src="/assets/images/events/events-image.svg" 
                        alt="Apple Loo Mascot" 
                    />
                </div>
            </div>
            
            <!-- YouTube Section -->
            <div :class="[isTablet ? 'tablet-column' : 'w-4/12', 'mobile:w-full mobile:order-3']">
                <div
                    :class="[
                        'relative z-10 text-center flex flex-col justify-between',
                        isTablet ? 'tablet-content ml-2' : 'mx-auto w-[350px] h-[318px]',
                        'tablet:h-[285px] mobile:w-full mobile:h-auto mobile:mt-8'
                    ]"
                >
                    <h1
                        class="font-poppins text-[40px] tablet:text-[32px] mobile:text-[24px] leading-[60px] tablet:leading-[48px] mobile:leading-[36px] text-[#151E22]"
                    >
                        Discover Apple Loo<br class="hidden mobile:block" />
                        on You Tube
                    </h1>
                    <p
                        class="font-poppins text-[20px] tablet:text-[16px] leading-[30px] tablet:leading-[24px] text-[#2F3E45] mt-2"
                    >
                        An educational channel entirely dedicated to teach young
                        students.
                    </p>
                    <div class="flex justify-center mt-4">
                        <a
                            href="https://www.youtube.com/@applelooeducationalvideosf1743/featured"
                            target="_blank"
                            class="font-poppins font-[600] w-[240px] mobile:w-[90%] h-[56px] tablet:h-[60px] mobile:h-[56px] leading-[56px] tablet:leading-[60px] border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] text-[16px] text-center text-white shadow-[4px_4px_0px_#0C0D0D]"
                        >
                            Watch our videos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.desktop-apple-bg {
  left: -5rem;
  top: -5rem;
  height: 50rem;
  width: 50rem;
}

.tablet-container {
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
}

.tablet-column {
  width: 33.333%;
  padding: 0 5px;
}

.tablet-content {
  width: 100%;
  max-width: 286px;
  height: auto;
  min-height: 285px;
}

.character-wrapper {
  width: 100%;
  height: auto;
  overflow: visible;
  position: relative;
}

.mobile-apple-bg {
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 0;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  background-image: url('/assets/images/events/apple-illustration.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.character-image {
  width: 315.66px;
  height: 286px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  border: none;
}

.tablet-apple-bg {
  width: 663px;
  height: 509.67px;
  left: -161px;
  top: 0; 
  border: none; 
}

.tablet-apple-bg img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .tablet-content {
    padding: 0;
  }
  
  .character-image {
    width: 220px;
    height: auto;
  }
  
  .mobile-apple-bg {
    display: none;
  }
}

@media (max-width: 767px) {
  .character-image {
    width: 205px;
    height: 264px;
  }
  
  .mobile-apple-bg {
    display: block; 
    width: 360px;
    height: 319px;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
  
  .absolute.-z-50 {
    display: none;
  }
}
</style>
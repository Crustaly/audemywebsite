<script setup>
import Students from "/assets/images/impact/students 1.svg";
import Problems from "/assets/images/impact/problems 1.svg";
import Globe from "/assets/images/impact/globe 1.svg";
</script>

<template>
    <div class="flex items-center justify-center mobile:flex-col-reverse">
        <div class="w-6/12 mobile:w-full flex flex-col justify-start gap-y-8 mobile:gap-y-3">
            <h1 class="font-poppins text-4xl max-w-[50%] leading-normal text-title mobile:text-[22px] mobile:max-w-full">
                Our impact in less than a year
            </h1>

            <p class="font-poppins text-body text-xl leading-8 text-wrap max-w-[65%] tablet:max-w-[85%] mobile:text-[16px] mobile:text-center mobile:max-w-full">
                Bridging the educational gap for visually impaired learners with
                interactive audio learning.
            </p>
            <a
                href="/impact"
                class="font-poppins mobile:w-full px-12 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] font-semibold self-start duration-300"
            >
                Explore our impact further
            </a>
        </div>
        <div class="w-6/12 mobile:w-full flex items-center mobile:justify-center mobile:gap-2 gap-x-7 ml-auto mobile:mb-20">
            <div
                class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
            >
                <img :src="Students" alt="" class="-translate-y-10" />
                <div class="flex flex-col items-center text-body">
                    <h1 class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]">1000+</h1>
                    <p class="font-poppins text-base text-center mobile:text-[12px]">
                        students <br />
                        impacted
                    </p>
                </div>
            </div>

            <div
                class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] translate-y-1/4 pb-3 px-3"
            >
                <img :src="Problems" alt="" class="-translate-y-10" />
                <div class="flex flex-col items-center text-body">
                    <h1 class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]">20000+</h1>
                    <p class="font-poppins text-base text-center mobile:text-[12px]">
                        problems <br />
                        solved
                    </p>
                </div>
            </div>

            <div
                class="bg-card-background mobile:w-4/12 flex flex-col items-center rounded-xl border-2 border-[#C5DBE2] pb-3 px-3"
            >
                <img :src="Globe" alt="" class="-translate-y-10" />
                <div class="flex flex-col items-center text-body">
                    <h1 class="font-poppins font-medium text-2xl text-wrap mobile:text-[24px]">7+</h1>
                    <p class="font-poppins text-base text-center mobile:text-[12px]">
                        collaborating <br />
                        schools
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

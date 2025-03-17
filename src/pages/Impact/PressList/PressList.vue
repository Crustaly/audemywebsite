<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import PressListCard from "./PressListCard.vue";

const items = [
    {
        image: "intel-globalImpactAI.png",
        text: "Intel Celebrates AI Innovations by Students with Global Impact Festival",
        author: "-- By Intel",
        alt: "Intel ai global impact festival. Three women working on a piece of technology."
    },
    {
        image: "houstonhappens.png",
        text: "Stay motivated during the school year with Houston Happens!",
        author: "-- By CW39 Houston",
        alt: "Huston Happens logo"
    },
    {
        image: "students2.png",
        text: "Katy ISD student creates audio-based education games for visually impaired children",
        author: "-- By Aubrey Vogel",
        alt: "Students posing in front of a blackboard. Many hold up peace signs"
    },
];

let smallScreen = ref(window.innerWidth <= 450);

const updateScreenWidth = () => {
    smallScreen.value = window.innerWidth <= 450;
};

onMounted(() => {
    window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
    <div class="relative flex justify-center w-full pl-40 pr-20 mt-20 mb-32">
        <!-- MAIN SECTION -->
        <div
            class="flex flex-col items-start justify-start mobile:justify-center h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]"
        >
            <div class="">
                <p
                    class="font-poppins text-small-text-color text-[12px] text-[#899296] font-[600] mobile:w-auto mobile:mx-20 text-left tracking-[3.6px]"
                >
                    PRESS LIST
                </p>
            </div>

            <div class="my-8">
                <h2
                    class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] mobile:text-center mobile: items-center mobile: justify-center mobile:-mx-14 font-[400]"
                >
                    Trusted by Leading Publications
            </h2>
            </div>

            <div class="flex justify-center">
                <div
                    class="w-full mobile:justify-center mobile:items-center mobile:text-center"
                >
                    <div
                        id="div_about_us"
                        class="flex justify-center mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:flex-col mobile:gap-6"
                    >
                        <PressListCard
                            v-for="(item, index) in items"
                            :key="index"
                            :image="item.image"
                            :text="item.text"
                            :author="item.author"
                            :alt="item.alt"
                            :smallScreen="smallScreen"
                        />
                    </div>
                </div>
            </div>
        </div>

        <img
            src="/assets/images/impact/orangeStar.png"
            class="absolute left-[18rem] bottom-[0rem]"
            alt=""
        />
        <img
            src="/assets/images/impact/blueStar.png"
            class="absolute right-[16rem] bottom-[35rem]"
            alt=""
        />
    </div>
</template>

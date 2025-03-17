<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import HaveYouHeardCard from "./HaveYouHeardCard/HaveYouHeardCard.vue";

const items = [
    {
        icon: "school.svg",
        text: "Sessions at schools for the blind to introduce our games to students.",
        alt: "school icon"
    },
    {
        icon: "classroom.svg",
        text: "Workshops for BVI individuals on accessing coding resources.",
        alt: "classroom icon"
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
    <div
        class="flex w-full px-20 relative mobile:flex-col mobile:px-6 mobile:mt-0 mobile:pt-0"
    >
        <!-- LEFT PORTION -->
        <div
            class="flex flex-col items-start justify-start mobile:justify-center w-1/2 mobile:w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[129px]"
        >
            <div class="mobile:w-full mobile:flex mobile:justify-center">
                <p
                    class="font-poppins text-small-text-color text-[#6e777c] text-[12px] font-[600] tracking-[3.6px] text-left mobile:text-center"
                >
                    EDUCATIONAL EVENTS
                </p>
            </div>

            <div class="max-w-[519px]">
                <h2
                    class="text-left font-poppins text-4.5xl tablet:text-[32px] mobile:text-[24px] font-[400] mobile:text-center"
                >
                    Have you heard about the events we organize?
                </h2>
            </div>

            <div class="flex justify-center mobile:justify-start">
                <div
                    class="max-w-[744px] w-full mobile:items-center mobile:text-center"
                >
                    <div
                        id="div_about_us"
                        class="flex flex-col justify-between mt-[40px] tablet:mt-[72px] mb-[63px] gap-4 tablet:gap-14 mobile:items-center mobile:text-center"
                    >
                        <HaveYouHeardCard
                            v-for="(item, index) in items"
                            :key="index"
                            :icon="item.icon"
                            :text="item.text"
                            :alt="item.alt"
                            :smallScreen="smallScreen"
                        />
                    </div>
                </div>
            </div>

            <!-- Div for Instagram Button -->
            <div
                class="relative flex flex-col py-[8rem] items-center justify-start mobile:justify-center w-full h-auto mb-36 tablet:mb-[265px] mobile:mb-[12px] mobile:mt-0 mobile:pt-0 mobile:pb-0"
            >
                <a
                    href="https://www.instagram.com/audemyapp/"
                    target="_blank"
                    class="font-poppins font-semibold px-9 py-4 border-[1.5px] border-[#0C0D0D] rounded-[8px] bg-primary-color hover:bg-[#0C587D] duration-300 text-base text-center text-[#fff] shadow-[3px_4px_0px_#0C0D0D] mobile:items-center mobile:text-center"
                >
                    Follow us on Instagram
                </a>
            </div>
        </div>

        <!-- RIGHT PORTION -->
        <div class="w-1/2 mobile:hidden mobile:w-full mobile:mt-10">
            <!-- Background -->
            <img
                src="/assets/images/our-projects/Mask group.png"
                class="absolute w-[40%] -top-48 right-0 -z-10 mobile:relative mobile:w-full mobile:top-0"
                alt=""
            />
            <!-- Image of students w/ Crystal -->
            <img
                src="/assets/images/our-projects/events1.svg"
                alt="Student with Audemy pulled up on a tablet"
                class="relative -top-20 right-28 z-10 object-contain w-full h-max mobile:right-0"
            />
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 450px) {
    #div_about_us {
        flex-wrap: wrap;
    }

    #div_about_us > * {
        flex: 0 0 100%; /* Cards stack full width */
    }

    .mobile\:text-center {
        text-align: center;
    }

    .mobile\:justify-start {
        justify-content: start;
    }

    .mobile\:mt-10 {
        margin-top: 2.5rem;
    }

    .mobile\:w-full {
        width: 100%;
    }

    .mobile\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}
</style>

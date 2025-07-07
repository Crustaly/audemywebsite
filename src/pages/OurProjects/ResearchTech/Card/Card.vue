<script setup>
const props = defineProps({
    smallScreen: Boolean,
    icon: String,
    title: String,
    text: String,
});

const path = "/assets/images/our-projects/researchtech/";
</script>

<template>
    <div
        v-if="!smallScreen"
        class="w-4/12 flex flex-col items-center text-center h-auto px-2"
    >
        <div class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px]">
            <img :src="path + icon" alt="icon" />
        </div>
        <div class="w-full">
            <h4
                class="text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[400]"
                v-html="text"
            ></h4>
        </div>
    </div>

    <div v-else class="w-full">
        <div class="flex justify-between items-center w-full gap-[15px]">
            <div>
                <div
                    class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center"
                >
                    <img
                        :src="path + icon"
                        alt="icon"
                        class="w-[90%] h-[90%]"
                    />
                </div>
            </div>
            <div class="w-full flex flex-col justify-end">
                <h2 class="text-[20px] font-bold">{{ title }}</h2>
                <h4
                    class="text-left text-body-text-color font-poppins max-w-[95%] text-[16px] font-[400]"
                    v-html="text"
                ></h4>
            </div>
        </div>
    </div>
</template>

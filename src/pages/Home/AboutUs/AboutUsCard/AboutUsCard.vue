<script setup>
const props = defineProps({
    smallScreen: Boolean,
    icon: String,
    text: String,
    alt: String,
});

const path = "/assets/images/about-us/";
</script>

<template>
    <div v-if="!smallScreen" class="w-4/12 flex flex-col h-auto">
        <div class="w-full">
            <div
                class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center mb-[15px]"
            >
                <img :src="path + icon" :alt="alt" />
            </div>
        </div>
        <div class="w-full">
            <p
                class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[400]"
                v-html="text"
            ></p>
        </div>
    </div>
    <div v-if="smallScreen" class="w-full">
        <div class="flex justify-between items-center w-full gap-[15px]">
            <div class="w-1/12">
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
            <div class="w-10/12 flex justify-end">
                <p
                    class="text-left text-body-text-color font-poppins max-w-[95%] text-[16px] font-[400]"
                    v-html="text"
                ></p>
            </div>
        </div>
    </div>
</template>

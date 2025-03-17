<script setup>
const props = defineProps({
    smallScreen: Boolean,
    image: String,
    text: String,
    author: String,
    alt: String
});
const path = "/assets/images/impact/";
</script>

<template>
    <div
        v-if="!smallScreen"
        class="w-full mx-1 flex flex-row justify-center h-auto"
    >
        <div class="">
            <div
                class="flex flex-col justify-evenly h-[250px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] mobile:w-full mobile:h-auto mobile:px-4 mobile:justify-center mobile:items-center"
            >
                <!-- IMAGE -->
                <div class="mx-6 mobile:w-full">
                    <img
                        :src="path + image"
                        class="h-[178px] w-[320px] rounded-2xl mobile:w-full mobile:h-auto"
                        :alt="alt"
                    />
                </div>

                <!-- TEXT -->
                <div class="mx-6 mt-8 w-[360px] mobile:w-full mobile:mt-4">
                    <p
                        class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[600] mobile:text-[16px] mobile:text-center"
                        v-html="text"
                    ></p>
                </div>

                <!-- AUTHOR -->
                <div class="mx-6 mobile:w-full mobile:text-center">
                    <p
                        class="text-right text-body-text-color font-poppins text-[14px] text-[#2A3338] tablet:text-[10px] font-[500] mobile:text-[12px] mobile:text-center"
                        v-html="author"
                    ></p>
                </div>
            </div>
        </div>
    </div>
</template>

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
    <div v-if="!smallScreen" class="w-3/4 flex flex-row items-center h-auto">
        <div>
            <div
                class="w-[76px] h-[76px] tablet:w-[72px] tablet:h-[72px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center"
            >
                <img :src="path + icon" :alt="alt" />
            </div>
        </div>

        <div class="ml-8">
            <h4
                class="text-left text-body-text-color font-poppins text-[20px] tablet:text-[16px] font-[400] mobile:p-2"
                v-html="text"
            ></h4>
        </div>
    </div>

    <div v-if="smallScreen" class="w-full p-4 flex flex-col gap-4">
        <div class="flex items-start gap-4">
            <div
                class="w-[40px] h-[40px] rounded-[8px] border-[1.5px] border-[#0C0D0D] shadow-[4px_4px_0px_#0C0D0D] flex justify-center items-center"
            >
                <img :src="path + icon" :alt="alt" class="w-[90%] h-[90%]" />
            </div>
            <div class="flex-1">
                <h4
                    class="text-left text-body-text-color font-poppins text-[16px] font-[400]"
                    v-html="text"
                ></h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 640px) {
    h4 {
        font-size: 14px;
    }

    img {
        width: 80%;
        height: 80%;
    }

    .ml-8 {
        margin-left: 4px;
    }

    .p-4 {
        padding: 1rem;
    }
}
</style>

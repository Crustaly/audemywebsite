<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: String,
    title: String,
    description: String,
    url: String,
    textColor: String,
    bgColor: String,
    bgDecoration: Boolean,
    bgImage: String,
});
</script>

<template>
    <button
        @click="$emit('selectGame', url)"
        class="w-full h-[320px] mobile:h-[160px] rounded-[16px] border-[5px] border-[#323232] shadow-2xl  p-5 relative flex justify-center items-center"
        :style="{ backgroundColor: bgColor, color: textColor ?? '#323232' }"
        style="z-index:0"
    >
        <img
            :src="icon"
            alt=""
            class="w-[100px] h-[100px] mobile:w-[40px] mobile:h-[40px] absolute top-4 right-5 mobile:top-5 mobile:right-1 z-20"
        />
        <img
            v-if="bgDecoration"
            :src="bgImage"
            alt=""
            class="h-3/4 absolute top-0 right-0 rounded-xl"
        />
        <div class="w-full absolute bottom-0 left-0 p-4 z-50">
            <div class="w-full" :class="{ 'mb-0': description }">
                <div
                    id="title"
                    class="font-poppins text-[50px] tablet:text-[40px] mobile:text-[20px] text-wrap font-semibold"
                >
                    {{ title }}
                </div>
            </div>
            <div
                v-if="description"
                id="description"
                class="font-poppins text-[24px] mobile:text-[12px] tablet:text-[20px]"
                :style="!bgDecoration ? 'text-[#6E777C]' : ''"
            >
                {{ description }}
            </div>
        </div>
    </button>
</template>
<style>
@media (max-width: 1020px) and (min-width: 768px) {
    #title {
        font-size: 40px;
    }

    #description {
        display: none;
    }
}
</style>

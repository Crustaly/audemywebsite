<script setup>
import { defineProps } from "vue";
const props = defineProps({
    staffTitle: String,
    staff: Array,
});
</script>

<template>
    <div
        class="flex justify-between items-center mobile:flex-col tablet:flex-row"
    >
        <div class="w-3/12 tablet:w-3/12 mb-4 tablet:mb-0 items-center">
            <h3
                class="font-poppins text-2xl tablet:text-[32px] mobile:text-[24px] text-start font-[400]"
            >
                {{ staffTitle }}
            </h3>
        </div>
        <div class="w-9/12 flex justify-start flex-wrap mobile:flex-col">
            <div
                class="w-4/12 mb-8"
                v-for="volunteer in staff"
                :key="volunteer.name"
            >
                <div
                    class="w-[240px] h-[262px] flex flex-col justify-between items-center"
                >
                    <img
                        :src="volunteer.image"
                        :alt="volunteer.name"
                        class="w-[160px] h-[160px]"
                    />
                    <div class="gap-5">
                        <p
                            class="text-center font-poppins text-[20px] m-0 w-full"
                        >
                            <b>{{ volunteer.name }}</b>
                        </p>
                        <p class="text-center font-poppins text-[18px] w-full">
                            {{ volunteer.role }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

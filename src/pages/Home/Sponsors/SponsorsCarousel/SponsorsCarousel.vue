<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const currentIndex = ref(0);
const items = [
    {
        img: "/assets/images/sponsors/google.png",
        alt: 'google icon'
    },
    {
        img: "/assets/images/sponsors/desmos.png",
        alt: 'desmos icon'
    },
    {
        img: "/assets/images/sponsors/aops.svg",
        alt: 'aops icon'
    },    
    {
        img: "/assets/images/sponsors/wolframalpha.svg",
        alt: "worlfram alpha icon"
    }
    
];

let interval;

const startAutoScroll = () => {
    interval = setInterval(() => {
        next();
    }, 2500);
};

const next = () => {
    if (currentIndex.value < items.length - 1) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
};

onMounted(() => {
    startAutoScroll();
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="carousel-container overflow-hidden relative w-full mobile:h-32">
        <div
            class="carousel flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div
                v-for="(item, index) in items"
                :key="index"
                class="carousel-item flex-none w-full h-auto mobile:h-32"
            >
                <img
                    :src="item.img"
                    :alt="item.alt"
                    class="w-full h-auto object-cover"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    width: 100%;
    max-width: 800px;
    margin: auto;
}

.carousel {
    display: flex;
    width: 100%;
    height: 400px;
}

.carousel-item {
    flex: 0 0 100%;
}
</style>

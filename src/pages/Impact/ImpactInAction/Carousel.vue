<script setup>

import { onMounted } from "vue";

// This is the slider function, we use it to navigate to the next or previous one.
function goToSlide(slide, container) {
    container.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}
// We use onMounted because in setup state the DOM is not loaded and we cannot choose elements when the dom is not loaded.
onMounted(() => {
    // These are the elements
    const carousel = document.querySelectorAll(".carousel__slide");
    goToSlide(0, carousel);
    const prevButton = document.getElementById("left-chevron");
    const nextButton = document.getElementById("right-chevron");
    // This is to indicate which slider we are currently on.
    let currentSlide = 0;

    // The maximum length of the slider
    const maxLength = carousel.length;

    // This listener is for the previous button.
    prevButton.addEventListener("click", (e) => {
        if (currentSlide === 0) {
            // If we are on the first slide, user is only allowed to the next slider
            return;
        } else {
            // we use "--" to reduce our index by 1
            currentSlide--;
            goToSlide(currentSlide, carousel);
        }
    });

    nextButton.addEventListener("click", (e) => {
        if (currentSlide === maxLength - 1) {
            // When the slider hits its maximum index. We redefine the current slider variable as 0 and call the slider function.
            currentSlide = 0;
            goToSlide(currentSlide, carousel);
            return;
        } else {
            // we use "++" to add 1 to our index
            currentSlide++;
            goToSlide(currentSlide, carousel);
        }
    });
});

</script>

<template>
    <div class="relative overflow-hidden carousel w-full h-full mobile:hidden">
        <img
            src="/assets/images/impact/carousel/leftChevron.svg"
            id="left-chevron"
            class="absolute top-1/2 left-1 -translate-1/2 z-10 cursor-pointer"
            alt="Previous Image"
        />

        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel1.jpg"
                class="-z-10 w-full h-full object-cover"
                alt="Student holding a tablet loaded with an Audemy game"
            />
        </div>

        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel2.png"
                class="-z-10 w-full h-full object-cover"
                alt="Student at a computer screen with the words Fruit Frenzy on it"
            />
        </div>

        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel3.png"
                class="-z-10 w-full h-full object-cover"
                alt="Student with their face near a smartboard that has the words Spell Safari"
            />
        </div>


        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel4.png"
                class="-z-10 w-full h-full object-cover"
                alt="Student with their face near a smartboard with an Audemy game loaded. The word Frenzy can be seen."
            />
        </div>

        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel5.png"
                class="-z-10 w-full h-full object-cover"
                alt="Student with glasses in front of a smartboard with the Fruit Frenzy game loaded"
            />
        </div>

        <div
            class="carousel__slide absolute top-0 left-0 w-full h-full duration-500"
        >
            <img
                src="/assets/images/impact/carousel/carousel6.jpeg"
                class="-z-10 w-full h-full object-cover"
                alt="Students posing in front of chalkboards with a smartboard in the middle. Many are posing with peace signs"
            />
        </div>
        <img
            src="/assets/images/impact/carousel/rightChevron.svg"
            id="right-chevron"
            class="absolute top-1/2 right-1 -translate-1/2 z-10 cursor-pointer"
            alt="Next Image"
        />
    </div>
</template>


<style scoped></style>

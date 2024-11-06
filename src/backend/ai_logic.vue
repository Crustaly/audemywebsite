<template>
    <div class="flex flex-col justify-center items-center h-screen bg-teal-100">
        <div class="flex mt-2 mb-2 w-1/2">
            <button onclick="history.back()">
                <img
                    src="/assets/gameImages/buttons/arrow-back.svg"
                    class="bg-white border-2 rounded-lg border-black h-12 p-2 shadow-md hover:bg-gray-300"
                />
            </button>
        </div>
        <div class="flex flex-col items-center">
            <div class="m-10 py-4 text-center">
                <h1 class="barriecito-regular text-6xl font-bold">
                    Animal Addition
                </h1>
                <div class="flex flex-col p-4 justify-center" id="content">
                    <div class="pt-2 pb-1">You said: {{ transcript }}</div>
                    <div class="pt-1 pb-2">Result: {{ result }}</div>
                    <div id="score" class="pt-1 pb-2" ref="scoreRef">
                        Score: {{ points }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./ai_logic.js"></script>
<style scoped>
/* Background color */
.bg-teal-100 {
    background-color: #faedd6;
    /* Light beige background similar to the image */
}

/* Font settings for title */
.barriecito-regular {
    font-family: "Barriecito", sans-serif;
    color: #2f2f2f;
    /* Dark text color similar to the example */
    text-align: center;
}
</style>

<script setup>
import Header from "../../components/Header/Header.vue";
import GameZoneList from "../GameZone/GameZoneList/GameZoneList.vue";
import { ref } from "vue";

const currentPage = ref(1);

const changeCurrentPage = (page) => {
    currentPage.value = page;
};
</script>

<template>
    <div
        class="relative bg-gamezone h-[600px] overflow-x-hidden flex flex-col juscify-center"
    >
        <div class="px-20">
            <Header
                :textColor="'text-white'"
                :logoPath="'/assets/images/header/header-logo.png'"
            />
        </div>
        <div class="h-[45%] w-full flex flex-col justify-center items-center">
            <div class="mobile:w-[80%]">
                <h2 class="font-poppins text-white text-[40px] mb-14">
                    Play and learn with us!
                </h2>
                <div
                    class="flex items-center justify-center border-2 border-white rounded-[8px] h-[50px] w-full"
                >
                    <input
                        type="text"
                        placeholder="Search games"
                        class="bg-transparent outline-0 w-[90%] text-white text-[16px] font-poppins p-0"
                    />
                    <button>
                        <img
                            src="/assets/gameImages/buttons/search.svg"
                            alt="Search icon"
                            class="h-[16px] w-auto"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center items-center w-full absolute bottom-0 gap-[1px]">
            <button
                @click="changeCurrentPage(1)"
                :class="
                    currentPage == 1
                        ? 'bg-white border-0 mobile:w-[230px]'
                        : 'bg-gray-500 text-white border border-black mobile:w-[100px]'
                "
                class="font-poppins p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] w-1/4 flex justify-center items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    class="mr-3"
                    viewBox="0 0 18 16"
                    fill="none"
                >
                    <path
                        d="M3.49918 0C3.09606 0 2.73043 0.24375 2.57731 0.615625L0.492932 5.61562L0.0773068 6.61562C-0.135193 7.125 0.105432 7.70937 0.614807 7.92188C1.12418 8.13437 1.70856 7.89375 1.92106 7.38438L2.08356 7H4.91793L5.07731 7.38438C5.28981 7.89375 5.87418 8.13437 6.38356 7.92188C6.89293 7.70937 7.13356 7.125 6.92106 6.61562L6.50543 5.61562L4.42106 0.615625C4.26793 0.24375 3.90231 0 3.49918 0ZM4.08356 5H2.91793L3.49918 3.6L4.08356 5ZM7.99918 1V4V7C7.99918 7.55312 8.44606 8 8.99918 8H11.4992C12.8804 8 13.9992 6.88125 13.9992 5.5C13.9992 4.77812 13.6929 4.13125 13.2054 3.675C13.3929 3.325 13.4992 2.925 13.4992 2.5C13.4992 1.11875 12.3804 0 10.9992 0H8.99918C8.44606 0 7.99918 0.446875 7.99918 1ZM10.9992 3H9.99918V2H10.9992C11.2742 2 11.4992 2.225 11.4992 2.5C11.4992 2.775 11.2742 3 10.9992 3ZM9.99918 5H10.9992H11.4992C11.7742 5 11.9992 5.225 11.9992 5.5C11.9992 5.775 11.7742 6 11.4992 6H9.99918V5ZM17.7054 9.70625C18.0961 9.31563 18.0961 8.68125 17.7054 8.29062C17.3148 7.9 16.6804 7.9 16.2898 8.29062L10.9992 13.5844L8.70543 11.2906C8.31481 10.9 7.68043 10.9 7.28981 11.2906C6.89918 11.6812 6.89918 12.3156 7.28981 12.7063L10.2898 15.7063C10.6804 16.0969 11.3148 16.0969 11.7054 15.7063L17.7054 9.70625Z"
                        :fill="currentPage == 1 ? 'black' : 'white'"
                    />
                </svg>
                <div :class="currentPage == 1 ?'mobile:visible':'mobile:hidden'">Language Lab</div>
            </button>
            <button
                @click="changeCurrentPage(2)"
                :class="
                    currentPage == 2
                        ? 'bg-white border-0 mobile:w-[230px]'
                        : 'bg-gray-500 text-white border border-black mobile:w-[100px]'
                "
                class="font-poppins p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] w-1/4 flex justify-center items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="16"
                    class="mr-3"
                    viewBox="0 0 12 16"
                    fill="none"
                >
                    <path
                        d="M7 1C7 0.446875 6.55312 0 6 0C5.44688 0 5 0.446875 5 1V4.5H1.5C0.946875 4.5 0.5 4.94688 0.5 5.5C0.5 6.05312 0.946875 6.5 1.5 6.5H5V10C5 10.5531 5.44688 11 6 11C6.55312 11 7 10.5531 7 10V6.5H10.5C11.0531 6.5 11.5 6.05312 11.5 5.5C11.5 4.94688 11.0531 4.5 10.5 4.5H7V1ZM0 15C0 15.5531 0.446875 16 1 16H11C11.5531 16 12 15.5531 12 15C12 14.4469 11.5531 14 11 14H1C0.446875 14 0 14.4469 0 15Z"
                        :fill="currentPage == 2 ? 'black' : 'white'"
                    />
                </svg>
                <div :class="currentPage == 2 ?'mobile:visible':'mobile:hidden'">Math Magic</div>
            </button>
            <button
                @click="changeCurrentPage(3)"
                :class="
                    currentPage == 3
                        ? 'bg-white border-0 mobile:w-[230px]'
                        : 'bg-gray-500 text-white border border-black mobile:w-[100px]'
                "
                class="font-poppins p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] w-1/4 flex justify-center items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    class="mr-3"
                    viewBox="0 0 16 14"
                    fill="none"
                >
                    <path
                        d="M4.75469 0.196365C5.06406 0.47449 5.08906 0.946365 4.81094 1.25574L2.56094 3.75574C2.42344 3.90887 2.22969 3.99949 2.02344 4.00261C1.81719 4.00574 1.62031 3.92762 1.47344 3.78387L0.220312 2.53387C-0.0703125 2.24012 -0.0703125 1.76512 0.220312 1.47137C0.510938 1.17762 0.989063 1.17762 1.27969 1.47137L1.97031 2.16199L3.69219 0.24949C3.97031 -0.0598848 4.44219 -0.0848849 4.75156 0.19324L4.75469 0.196365ZM4.75469 5.19636C5.06406 5.47449 5.08906 5.94637 4.81094 6.25574L2.56094 8.75574C2.42344 8.90886 2.22969 8.99949 2.02344 9.00261C1.81719 9.00574 1.62031 8.92762 1.47344 8.78386L0.220312 7.53386C-0.0734375 7.24012 -0.0734375 6.76512 0.220312 6.47449C0.514062 6.18387 0.989063 6.18074 1.27969 6.47449L1.97031 7.16512L3.69219 5.25261C3.97031 4.94324 4.44219 4.91824 4.75156 5.19636H4.75469ZM7.00156 2.00262C7.00156 1.44949 7.44844 1.00262 8.00156 1.00262H15.0016C15.5547 1.00262 16.0016 1.44949 16.0016 2.00262C16.0016 2.55574 15.5547 3.00262 15.0016 3.00262H8.00156C7.44844 3.00262 7.00156 2.55574 7.00156 2.00262ZM7.00156 7.00261C7.00156 6.44949 7.44844 6.00261 8.00156 6.00261H15.0016C15.5547 6.00261 16.0016 6.44949 16.0016 7.00261C16.0016 7.55574 15.5547 8.00261 15.0016 8.00261H8.00156C7.44844 8.00261 7.00156 7.55574 7.00156 7.00261ZM5.00156 12.0026C5.00156 11.4495 5.44844 11.0026 6.00156 11.0026H15.0016C15.5547 11.0026 16.0016 11.4495 16.0016 12.0026C16.0016 12.5557 15.5547 13.0026 15.0016 13.0026H6.00156C5.44844 13.0026 5.00156 12.5557 5.00156 12.0026ZM1.50156 10.5026C1.89939 10.5026 2.28092 10.6607 2.56222 10.942C2.84353 11.2233 3.00156 11.6048 3.00156 12.0026C3.00156 12.4004 2.84353 12.782 2.56222 13.0633C2.28092 13.3446 1.89939 13.5026 1.50156 13.5026C1.10374 13.5026 0.722207 13.3446 0.440902 13.0633C0.159598 12.782 0.00156249 12.4004 0.00156249 12.0026C0.00156249 11.6048 0.159598 11.2233 0.440902 10.942C0.722207 10.6607 1.10374 10.5026 1.50156 10.5026Z"
                        :fill="currentPage == 3 ? 'black' : 'white'"
                    />
                </svg>
                <div :class="currentPage == 3 ?'mobile:visible':'mobile:hidden'">My Progress</div>
            </button>
        </div>
    </div>

    <div class="bg-white border-0"></div>
    <div v-if="currentPage != 3">
        <GameZoneList :type="currentPage" />
    </div>
    <div v-if="currentPage === 3"></div>
</template>

<style>
.bg-gamezone {
    background-image: url("/assets/images/game-zone/background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

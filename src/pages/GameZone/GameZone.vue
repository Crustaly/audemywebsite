<script setup>
import Header from "../../components/Header/Header.vue";
import GameZoneList from "../GameZone/GameZoneList/GameZoneList.vue";
import GameProgress from "../GameZone/GameProgress/GameProgress.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentPage = ref(1);
const userSession = ref(null);

// Check if user is logged in on mount
onMounted(() => {
    const session = localStorage.getItem("audemyUserSession");
    if (session) {
        userSession.value = JSON.parse(session);
    }
});

const changeCurrentPage = (page) => {
    currentPage.value = page;
};

// Logout function
const logout = () => {
    localStorage.removeItem("audemyUserSession");
    userSession.value = null;
    console.log("Logged out");
    router.push("/"); // Redirect to login page
};

// Redirect to login page for manual login
const login = () => {
    router.push("/login");
};
</script>
<template>
    <div
        class="relative bg-white h-full overflow-x-hidden flex flex-col justify-center"
    >
        <!-- Header and Logout/Login button -->
        <div class="px-20 flex justify-between items-center">
            <Header
                :textColor="'text-black'"
                :logoPath="'/assets/images/header/header-logo.png'"
            />
            <button
                @click="userSession ? logout() : login()"
                class="py-2 px-4 bg-blue-500 text-white rounded shadow"
            >
                {{ userSession ? "Logout" : "Login" }}
            </button>
        </div>

        <!-- Main Game Zone Section -->
        <div class="w-full pt-10 flex align-center justify-center">
            <div class="w-10/12">
                <h2
                    class="font-poppins text-black text-[40px] mobile:text-[25px] M-0"
                >
                    Play and learn with us!
                </h2>
                <div class="w-full flex gap-10 mb-10">
                    <button
                        @click="changeCurrentPage(1)"
                        :class="
                            currentPage == 1
                                ? 'text-[#087BB4] font-semibold'
                                : 'text-[#6E777C]'
                        "
                        class="font-poppins mobile:text-[14px]"
                    >
                        Language Lab
                    </button>
                    <button
                        @click="changeCurrentPage(2)"
                        :class="
                            currentPage == 2
                                ? 'text-[#087BB4] font-semibold'
                                : 'text-[#6E777C]'
                        "
                        class="font-poppins mobile:text-[14px]"
                    >
                        Math Magic
                    </button>
                    <button
                        @click="changeCurrentPage(3)"
                        :class="
                            currentPage == 3
                                ? 'text-[#087BB4] font-semibold'
                                : 'text-[#6E777C]'
                        "
                        class="font-poppins mobile:text-[14px]"
                    >
                        My Progress
                    </button>
                </div>
                <div>
                    <div v-if="currentPage != 3">
                        <GameZoneList :type="currentPage" />
                    </div>
                    <div v-if="currentPage === 3">
                        <GameProgress />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

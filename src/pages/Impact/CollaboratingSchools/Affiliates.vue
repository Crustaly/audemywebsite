<script setup>
import { ref } from "vue";
import SchoolsList from "./SchoolsList/SchoolsList.vue";
import TeachersList from "./TeachersList/TeachersList.vue";

const currentPage = ref(1);

const changeCurrentPage = (page) => {
    currentPage.value = page;
};

const schools = [
    {
        name: "California School for the Blind",
        link: "https://www.csb-cde.ca.gov/",
    },
    {
        name: "Texas School for the Blind and Visually Impaired",
        link: "https://www.tsbvi.edu/",
    },
    {
        name: "Kansas School for the Blind",
        link: "https://kssb.net/",
    },
    {
        name: "Illinois School for the Visually Impaired",
        link: "https://www.dhs.state.il.us/page.aspx?item=84503",
    },
    {
        name: "Arizona State School for the Deaf and the Blind",
        link: "https://asdb.az.gov/",
    },
    {
        name: "Vermont Association For The Blind And Visually Impaired",
        link: "https://www.vabvi.org/",
    },
    {
        name: "HeZe Special Education Center (菏泽市特殊教育中心)",
        link: "http://www.hzstjzx.cn/",
    },
];

const teachers = [
    {
        name: "Laura Prelsnik",
        link: "#",
    },
    {
        name: "John Castillo",
        link: "#",
    },
    {
        name: "Vanessa Herndon",
        link: "#",
    },
    {
        name: "Kimberly Rhea",
        link: "#",
    },
];
</script>

<template>
    <div
        class="flex flex-row justify-center items-center w-full mobile:w-[80vw] mobile:-ml-10"
    >
        <button
            @click="changeCurrentPage(1)"
            :class="
                currentPage == 1
                    ? 'bg-white border-t-2 border-l-2 border-r-2 border-black'
                    : 'bg-gray-500 text-white border-black'
            "
            class="w-1/2 font-poppins font-[600] p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] flex justify-center items-center"
        >
            Affiliated Schools
        </button>
        <button
            @click="changeCurrentPage(2)"
            :class="
                currentPage == 2
                    ? 'bg-white border-t-2 border-l-2 border-r-2 border-black'
                    : 'bg-gray-500 text-white border border-black'
            "
            class="w-1/2 font-poppins font-[600] p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] flex justify-center items-center"
        >
            Affiliated Teachers
        </button>
    </div>

    <div
        class="relative w-[33vw] pl-[1rem] py-[2rem] rounded-b-[8px] bg-white border-b-2 border-l-2 border-r-2 border-black shadow-[1px_3px_4px_#2F3E45] mobile:w-[80vw] mobile:h-[80vw] mobile:-ml-10"
    >
        <div v-if="currentPage != 2">
            <SchoolsList
                v-for="(school, index) in schools"
                :key="index"
                :name="school.name"
                :link="school.link"
            />
        </div>
        <div v-if="currentPage === 2">
            <TeachersList
                v-for="(teacher, index) in teachers"
                :key="index"
                :name="teacher.name"
                :link="teacher.link"
            />
        </div>
        <img
            src="/assets/images/impact/glasses.svg"
            class="absolute -right-[1rem] -bottom-[1.3rem]"
            alt="Glasses Image"
        />
    </div>
</template>

<style></style>

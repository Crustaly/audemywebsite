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
        name: "Alabama Institute for the Deaf and Blind",
        link: "https://www.aidb.org",
    },
    {
        name: "Arizona State School for the Deaf and the Blind",
        link: "https://asdb.az.gov/",
    },
    {
        name: "California School for the Blind",
        link: "https://www.csb-cde.ca.gov/",
    },
    {
        name: "Florida School for the Deaf and the Blind",
        link: "https://www.fsdbk12.org'",
    },
    {
        name: "Georgia Academy for the Blind",
        link: "https://www.gabmacon.org",
    },
    {
        name: "Hadley (IL)",
        link: "https://hadleyhelps.org",
    },
    {
        name: "Idaho Educational Services for the Deaf and the Blind",
        link: "https://www.iesdb.org",
    },
    {
        name: "Illinois School for the Visually Impaired",
        link: "https://www.dhs.state.il.us/page.aspx?item=84503",
    },
    {
        name: "Indiana School for the Blind and Visually Impaired",
        link: "https://www.in.gov/isbvi/",
    },
    {
        name: "Iowa Educational Services for the Blind and Visually Impaired",
        link: "https://www.iesbvi.org",
    },
    {
        name: "Kansas State School for the Blind",
        link: "https://kansasblind.gov",
    },
    {
        name: "Kentucky School for the Blind",
        link: "https://www.ksb.k12.ky.us",
    },
    {
        name: "Louisiana School for the Visually Impaired",
        link: "https://www.ssdofla.org/o/lsvi",
    },
    {
        name: "Maryland School for the Blind",
        link: "https://www.marylandschoolfortheblind.org",
    },
    {
        name: "Missouri School for the Blind",
        link: "https://msb.dese.mo.gov",
    },
    {
        name: "Perkins School for the Blind (MA)",
        link: "https://www.perkins.org",
    },
    {
        name: "Vermont Association for the Blind and Visually Impaired",
        link: "https://www.vabvi.org",
    },
    {
        name: "Visually Impaired Preschool Services (KY + IN)",
        link: "https://vips.org/vips-louisville/",
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
        class="relative max-h-[270px] h-[270px] w-[33vw] pl-[1rem] py-[2rem] rounded-b-[8px] bg-white border-b-2 border-l-2 border-r-2 border-black shadow-[1px_3px_4px_#2F3E45] mobile:w-[80vw] mobile:h-[80vw] mobile:-ml-10"
    >
        <div v-if="currentPage != 2" class="overflow-y-auto h-[200px]">
            <SchoolsList
                v-for="(school, index) in schools"
                :key="index"
                :name="school.name"
                :link="school.link"
            />
        </div>
        <div v-if="currentPage === 2" class="overflow-y-auto h-[200px]">
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

<script setup>
import { ref } from 'vue';
import SchoolsList from './SchoolsList/SchoolsList.vue';
import TeachersList from './TeachersList/TeachersList.vue';

const currentPage = ref(1);

const changeCurrentPage = (page) => {
  currentPage.value = page;
};

const schools = [
  {
    name: 'Alabama Institute for the Deaf and Blind',
    link: 'https://www.aidb.org',
  },
  {
    name: 'Arizona State School for the Deaf and the Blind',
    link: 'https://asdb.az.gov/',
  },
  {
    name: 'California School for the Blind',
    link: 'https://www.csb-cde.ca.gov/',
  },
  {
    name: 'Florida School for the Deaf and the Blind',
    link: "https://www.fsdbk12.org'",
  },
  {
    name: 'Georgia Academy for the Blind',
    link: 'https://www.gabmacon.org',
  },
  {
    name: 'Hadley (IL)',
    link: 'https://hadleyhelps.org',
  },
  {
    name: 'Idaho Educational Services for the Deaf and the Blind',
    link: 'https://www.iesdb.org',
  },
  {
    name: 'Illinois School for the Visually Impaired',
    link: 'https://www.dhs.state.il.us/page.aspx?item=84503',
  },
  {
    name: 'Indiana School for the Blind and Visually Impaired',
    link: 'https://www.in.gov/isbvi/',
  },
  {
    name: 'Iowa Educational Services for the Blind and Visually Impaired',
    link: 'https://www.iesbvi.org',
  },
  {
    name: 'Kansas State School for the Blind',
    link: 'https://kansasblind.gov',
  },
  {
    name: 'Kentucky School for the Blind',
    link: 'https://www.ksb.k12.ky.us',
  },
  {
    name: 'Louisiana School for the Visually Impaired',
    link: 'https://www.ssdofla.org/o/lsvi',
  },
  {
    name: 'Maryland School for the Blind',
    link: 'https://www.marylandschoolfortheblind.org',
  },
  {
    name: 'Missouri School for the Blind',
    link: 'https://msb.dese.mo.gov',
  },
  {
    name: 'Perkins School for the Blind (MA)',
    link: 'https://www.perkins.org',
  },
  {
    name: 'Vermont Association for the Blind and Visually Impaired',
    link: 'https://www.vabvi.org',
  },
  {
    name: 'Visually Impaired Preschool Services (KY + IN)',
    link: 'https://vips.org/vips-louisville/',
  },
];

const teachers = [
  {
    name: 'Texas School for the Blind and Visually Impaired (TSBVI)',
    link: 'https://www.tsbvi.edu/',
    educators: [
      {
        name: 'John Castillo',
        email: 'castilloj@tsbvi.edu',
      },
    ],
  },
  {
    name: 'California School for the Blind',
    link: 'https://www.csb-cde.ca.gov/',
    educators: [
      {
        name: 'Allison Mello',
        email: 'amello@csb-cde.ca.gov',
      },
    ],
  },
  {
    name: "St. Lucy's School for the Blind",
    link: 'https://saintlucyschool.org/',
    educators: [
      {
        name: 'Bryan Kugler',
        email: 'bkugler@saintlucyschool.org',
      },
    ],
  },
  {
    name: 'Idaho Educational Services for the Deaf and the Blind (IESDB)',
    link: 'https://www.iesdb.org/',
    educators: [
      {
        name: 'Jeanne-Marie Kopecky',
        email: 'jeanne-marie.kopecky@iesdb.org',
      },
    ],
  },
  {
    name: 'Massachusetts Commission for the Blind',
    link: 'https://www.mass.gov/orgs/massachusetts-commission-for-the-blind',
    educators: [
      {
        name: 'John Oliveira',
        email: 'john.oliveira@mass.gov',
      },
    ],
  },
  {
    name: 'The Chicago Lighthouse',
    link: 'https://chicagolighthouse.org/',
    educators: [
      {
        name: 'Peter Tucic',
        email: 'peter.tucic@chicagolighthouse.org',
      },
    ],
  },
  {
    name: 'Kansas State School for the Deaf and Blind (KSSDB)',
    link: 'https://www.kssdb.org/',
    educators: [
      {
        name: 'Kimberly Rhea',
        email: 'rhea@kssdb.org',
      },
    ],
  },
  {
    name: 'Iowa Department for the Blind',
    link: 'https://blind.iowa.gov/',
    educators: [
      {
        name: 'Denise Bean',
        email: 'denise.bean@blind.state.ia.us',
      },
    ],
  },
];
</script>

<template>
  <div
    class="flex flex-row justify-left items-center w-full mobile:w-[80vw] mobile:-ml-10"
  >
    <button
      @click="changeCurrentPage(2)"
      :class="
        currentPage == 2
          ? 'bg-white border-t-2 border-l-2 border-r-2 border-black'
          : 'bg-gray-500 text-white border border-black'
      "
      class="w-1/2 font-poppins font-[600] p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] flex justify-center items-center"
    >
      Partnered Staff
    </button>

    <button
      @click="changeCurrentPage(1)"
      :class="
        currentPage == 1
          ? 'bg-white border-t-2 border-l-2 border-r-2 border-black'
          : 'bg-gray-500 text-white border-black'
      "
      class="w-1/2 font-poppins font-[600] p-3 rounded-tl-[8px] rounded-tr-[8px] h-[50px] flex justify-center items-center"
    >
      Affiliated Organizations
    </button>
  </div>

  <div
    class="relative max-h-[270px] h-[270px] w-[33vw] pl-[1rem] py-[2rem] rounded-b-[8px] bg-white border-b-2 border-l-2 border-r-2 border-black shadow-[1px_3px_4px_#2F3E45] mobile:w-[80vw] mobile:h-[80vw] mobile:-ml-10"
  >
    <div v-if="currentPage === 1" class="overflow-y-auto h-[200px]">
      <SchoolsList
        v-for="(school, index) in schools"
        :key="index"
        :name="school.name"
        :link="school.link"
      />
    </div>
    <div v-if="currentPage === 2" class="overflow-y-auto h-[200px]">
      <p
        class="ml-8 sm:ml-0 text-[18px] sm:text-[12px] xs:text-[10px] text-gray-700 text-left sm:text-center font-thin font-poppins pb-4"
      >
        Thank you to our participating teachers and organization leaders for
        helping us spread Audemy out to their school, organization, and beyond.
      </p>
      <TeachersList
        v-for="(teacher, index) in teachers"
        :key="index"
        :school="teacher"
      />
    </div>
    <img
      src="/assets/images/impact/glasses.svg"
      class="absolute -right-[1rem] -bottom-[1.3rem]"
      aria-hidden="true"
    />
  </div>
</template>

<template class="font-poppins">
  <div class="w-full border-b-2 border-audemy-blue p-2">
    <div class="flex flex-row justify-self-end p-4 gap-[10px]">
      <div
        class="relative w-[500px] rounded-[20px] py-[20px] px-[30px] border-[2px]"
      >
        <input
          type="text"
          placeholder="Search"
          class="placeholder:text-audemy-blue pl-4 focus:outline-none"
        />
        <img
          src="/assets/images/dashboard/search-icon.png"
          alt="Search Icon"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] pointer-events-none"
        />
      </div>
      <button
        class="flex items-center justify-center shadow-lg rounded-[20px] bg-white w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/notification-icon.png"
          alt=""
          class="w-[15.96px] h-[20px]"
        />
      </button>
      <button
        class="flex items-center justify-center shadow-lg rounded-[20px] bg-white w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/student-icon.png"
          alt=""
          class="w-[30px] h-[30px]"
        />
      </button>
      <button
        class="flex items-center justify-center bg-audemy-blue rounded-[20px] w-[60px] h-[60px]"
      >
        <img
          src="/assets/images/dashboard/settings-icon.png"
          alt=""
          class="w-[30px] h-[30px]"
        />
      </button>
    </div>
  </div>
  <div class="px-[30px] pt-[10px] flex flex-col">
    <h1 class="text-black font-[600] text-[48px] font-poppins">
      Dashboard Summary
    </h1>
  </div>
  <div class="flex flex-row justify-center items-center gap-[54px]">
    <div
      class="w-[524px] h-[200px] bg-audemy-blue rounded-[30px] shadow-lg p-[20px] text-card-background flex flex-col justify-between border-[2px]"
    >
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-[40px] font-[600]">{{ totalUsers }}</h1>
        <P
          class="bg-card-background text-primary-color px-[20px] py-[10px] rounded-xl text-[16px]"
          >+ 14.01%</P
        >
      </div>
      <div>
        <h2 class="text-[20px] font-[600]">Total Number of Students</h2>
        <router-link to="/details">
          <p class="hover:underline cursor-pointer font-[400]">See Details</p>
        </router-link>
      </div>
    </div>
    <div
      class="w-[524px] h-[200px] bg-[#E5F0F5] rounded-[30px] shadow-lg m-5"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'DashboardSummary',
};
</script>

<script setup>
import { ref, onMounted } from 'vue';

const totalUsers = ref('Loading...');
const error = ref('');

const fetchUserCount = async () => {
  try {
    const response = await fetch('/api/db/get_user_count', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      totalUsers.value = data.totalUsers;
    } else {
      error.value = data.error || 'Failed to fetch user count';
    }
  } catch (err) {
    error.value = 'Network error: ' + err.message;
    console.log(err);
  }
};

onMounted(() => {
  fetchUserCount();
});
</script>

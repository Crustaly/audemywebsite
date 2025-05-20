<template class="font-poppins">
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

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const user = ref('');
const token = ref('');

onMounted(() => {
  // Get the token from the URL query parameters
  const query = new URLSearchParams(window.location.search);
  user.value = query.get('user');
  token.value = query.get('token');
});

const toResetPswd = () => {
  // Route to reset-password page when continue button is clicked
  router.push('/reset-password?user=' + user.value + '&token=' + token.value);
};
</script>

<template>
  <div
    class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
  >
    <div
      class="w-5/12 md:w-full sm:w-full relative flex items-center jusitfy-center"
    >
      <div class="w-full flex flex-col justify-center items-center gap-14 z-10">
        <img
          src="/assets/images/LoginImg/icons.svg"
          alt="logo icon"
          class="w-[50%] h-[50%]"
        />
        <img
          src="/assets/images/LoginImg/logo-icon.svg"
          alt="logo icon"
          class="w-[45%] h-[45%]"
        />
      </div>
      <img
        src="/assets/images/LoginImg/wave-icon.svg"
        alt="wave icon"
        class="absolute -bottom-[15%] right-0 w-full -z-1"
      />
    </div>

    <div
      class="w-7/12 md:w-full sm:w-full bg-white flex flex-col items-center justify-center border-2"
    >
      <form
        @submit="toResetPswd"
        method="post"
        class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%] my-4"
      >
        <div class="text-[#151E22] w-7/12 mb-10 mobile:w-full mobile:mb-4">
          <h1 class="text-[36px] mobile:text-[24px]">Hello, {{ user }}</h1>
          <div>
            A request has been made to reset your password. If you made this
            request, please click the button below.
          </div>
        </div>

        <div class="w-7/12 max-w-[450px]">
          <div class="flex justify-center w-full pt-4">
            <button
              type="submit"
              class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

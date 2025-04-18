<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const errors = ref(false);              // flag to display error on frontend
var linkExpired = ref(false);           // flag for link expired error on frontend
const password = ref("");
const confirmPassword = ref("");
const token = ref("");
const router = useRouter();

onMounted(() => {
    // Get the token from the URL query parameters
    const query = new URLSearchParams(window.location.search);
    token.value = query.get("token");
});

const resetConfirm = async (event) => {
    event.preventDefault();     // prevent default form submission which would reload the page

    // pre-condition checks for the password and confirm password fields
    if ((password.value != confirmPassword.value) || (password.value.length < 8)) {
        // Set the flag to true to display the error message on the frontend
        errors.value = true;
    }else{
        errors.value = false;
        // API call to reset password
        try {
            const resetResponse = await fetch(
                `/api/reset-password`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        token: token.value,
                        newPassword: password.value,
                    }),
                }
            );

            // Handle the response from the API based on the status code
            console.log("Reset Password response:", resetResponse.status);
            if (resetResponse.status === 500) {
                linkExpired.value = true;
                console.error("Link Expired");
            }

            // Route to reset-confirm page if password reset was successfull
            if (resetResponse.status === 200 && linkExpired.value === false) {
                router.push("/reset-confirm");
            }
        } catch (error) {
            // Throw error and set the flag to true to display the error message on the frontend
            console.error("Error: ", error);
            errors.value = true;
        }
    }
};
</script>

<template>
    <div
        class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
    >
        <div
            class="w-5/12 md:w-full sm:w-full relative flex items-center jusitfy-center"
        >
            <div
                class="w-full flex flex-col justify-center items-center gap-14 z-10"
            >
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

        <div class="w-7/12 md:w-full sm:w-full bg-white flex flex-col items-center justify-center border-2">
            <form
                @submit="resetConfirm"
                method="post"
                class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%] my-4"
            >
                <div
                    class="text-[#151E22] text-center w-7/12 mb-10 mobile:w-full  mobile:mb-4"
                >
                    <h1 class="text-[36px] mobile:text-[24px]">Create a new Password</h1>
                </div>
                
                <div class="w-7/12 max-w-[450px]">
                    <!-- PASSWORD FIELD -->
                    <div class="mb-[8px] mobile:w-full">
                        <label
                            for="password"
                            class="block text-[#0C0D0D] font-semiBold"
                            >Password</label
                        >
                        <input
                            v-model="password"
                            type="password"
                            class="w-full outline-none border-2 border-black h-[48px] px-4 rounded-[8px]"
                            id="password"
                            name="password"
                            placeholder="Create your best password"
                        />
                    </div>

                    <div class="mb-6" :class="{ 'text-red-700': errors, 'text-[#2F3E45]': !errors }">
                        <div role="alert">
                            <span class="block sm:inline">Your password must be at least 8 characters long</span>
                        </div>
                    </div>

                    <!-- CONFIRM PASSWORD FIELD -->
                    <div class="mb-[8px] mobile:w-full">
                        <label
                            for="confirm_password"
                            class="block text-[#0C0D0D] font-semiBold"
                            >Confirm Password</label
                        >
                        <input
                            v-model="confirmPassword"
                            type="password"
                            class="w-full outline-none border-2 border-black h-[48px] px-4 rounded-[8px]"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div class="mb-6" v-if="errors">
                        <div role="alert" class="text-red-700">
                            <span class="block sm:inline">Passwords do not match</span>
                        </div>
                    </div>
                    <div class="mb-6" v-if="linkExpired">
                        <div role="alert" class="text-red-700">
                            <span class="block sm:inline">Password reset link expired!</span>
                            <a
                                href="./forgot-password"
                                class="underline text-[#087BB4] font-medium"
                                >Generate a new link?</a
                            >
                        </div>
                    </div>
                    <div class="flex justify-center w-full pt-4"> 
                        <button
                            type="submit"
                            class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

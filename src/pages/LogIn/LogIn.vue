<script setup>
import { ref } from "vue";

const errors = ref(false);
const email = ref("");
const password = ref("");
let authKey = ref("");

const login = (event) => {
    event.preventDefault();
    errors.value = false;

    if (!email.value || !password.value) {
        errors.value = true;
        resetErrors();
        return;
    }

    // Send login req data as JSON
    fetch("https://audemy-users-api.fly.dev/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: {
                email: email.value,
                password: password.value,
            },
        }),
    })
        .then((response) => {
            response.json();
            //This is where the auth key is saved for future API calls
            //We should think about saving it in a more central location using Vuex library
            authKey = response.headers.get("authorization");
        })
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const resetErrors = () => {
    setTimeout(() => {
        errors.value = false;
    }, 4000);
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

        <div
            class="w-7/12 md:w-full sm:w-full bg-white flex items-center justify-center"
        >
            <form
                @submit="login"
                method="post"
                class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%]"
            >
                <h1
                    class="text-[36px] text-[#151E22] text-center w-7/12 mobile:w-full mobile:text-[24px] mobile:mb-4"
                >
                    Hi there, welcome back!
                </h1>
                <div class="w-[70%] max-w-[450px]">
                    <div class="mt-8 mb-3" v-if="errors">
                        <div
                            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            <span class="block sm:inline text-center"
                                >Invalid email and password combination. Try
                                again!</span
                            >
                        </div>
                    </div>
                    <!-- Changed for field here to email -->
                    <div class="mb-[16px]">
                        <label
                            class="block text-[#0C0D0D] mb-1 font-semiBold"
                            for="email"
                            >Email Address</label
                        >
                        <!-- Added Autocomplete here -->
                        <input
                            v-model="email"
                            type="email"
                            class="w-full outline-none border-2 border-black py-2 px-2 rounded-[8px]"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            autocomplete="email"
                        />
                    </div>
                    <div class="mb-[16px]">
                        <label
                            for="password"
                            class="block text-[#0C0D0D] mb-1 font-semiBold"
                            >Password</label
                        >
                        <input
                            v-model="password"
                            type="password"
                            class="w-full outline-none border-2 border-black py-2 px-2 rounded-[8px]"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div
                        class="flex justify-end w-full mobile:items-center mobile:text-center mobile:justify-center"
                    >
                        <a href="" class="underline text-[#087BB4] font-medium"
                            >Forgot password?</a
                        >
                    </div>
                    <div
                        class="flex justify-start w-full mobile:items-center mobile:text-center mobile:justify-center mobile:pt-4"
                    >
                        <h5>
                            New to Audemy?
                            <a
                                href="./signup"
                                class="underline text-[#087BB4] font-medium"
                                >Sign Up</a
                            >
                        </h5>
                    </div>
                    <div class="flex justify-center w-full pt-4">
                        <button
                            type="submit"
                            class="w-full py-3 font-bold rounded-[8px]"
                            :class="
                                errors
                                    ? 'bg-[#747575] text-white'
                                    : 'bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black'
                            "
                            :disabled="errors"
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

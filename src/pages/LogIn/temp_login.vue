<script setup>
import { ref, onMounted } from "vue";
import { GoogleLogin } from "vue3-google-login";
import { useRouter } from "vue-router";

const errors = ref(false);
const email = ref("");
const password = ref("");
const authKey = ref("");
const userSession = ref(null);
const router = useRouter();

onMounted(() => {
    const session = localStorage.getItem("audemyUserSession");
    if (session) {
        userSession.value = JSON.parse(session);
    }
});

const login = (event) => {
    event.preventDefault();
    errors.value = false;

    if (!email.value || !password.value) {
        errors.value = true;
        resetErrors();
        return;
    }

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
            authKey.value = response.headers.get("authorization");
            return response.json();
        })
        .then((data) => {
            console.log("Success:", data);
            localStorage.setItem(
                "audemyUserSession",
                JSON.stringify({ token: authKey.value, user: data.user })
            );
            userSession.value = { token: authKey.value, user: data.user };
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

const callback = (response) => {
    console.log("Google OAuth response:", response);
    localStorage.setItem("audemyUserSession", JSON.stringify(response));
    userSession.value = response;
};

const logout = () => {
    localStorage.removeItem("audemyUserSession");
    userSession.value = null;
};
</script>

<template>
    <div>
        <!-- Sign In/Out Button -->
        <div class="absolute top-4 left-4">
            <GoogleLogin
                v-if="!userSession"
                :callback="callback"
                class="py-2 px-4 bg-blue-500 text-white rounded shadow"
            >
                Sign In
            </GoogleLogin>
            <button
                v-else
                @click="logout"
                class="py-2 px-4 bg-red-500 text-white rounded shadow"
            >
                Logout
            </button>
        </div>

        <!-- Existing Login Form -->
        <div
            class="w-full h-screen overflow-hidden bg-[#FFDABA] flex justify-between mobile:flex-row"
        >
            <!-- Existing form and design remains unchanged -->
        </div>
    </div>
</template>
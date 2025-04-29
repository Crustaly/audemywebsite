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
            <button
                v-if="userSession"
                @click="logout"
                class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>

        <!-- Show login form if not logged in -->
        <div
            v-if="!userSession && !showSchoolForm"
            class="w-7/12 md:w-full sm:w-full bg-white flex flex-col items-center justify-center border-2"
        >
            <form
                @submit="login"
                method="post"
                class="w-full flex flex-col justify-center items-center gap-6 my-4"
            >
                <h1
                    class="text-[36px] text-[#151E22] text-center w-7/12 mobile:w-full mobile:text-[24px] mobile:mb-4"
                >
                    Hi there, welcome back!
                </h1>
                <div class="w-[70%] max-w-[450px]">
                    <div class="mt-8 mb-3" v-if="errors">
                        <div
                            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center"
                            role="alert"
                        >
                            {{ errorMessage }}
                        </div>
                    </div>
                    <div class="mb-[16px]">
                        <label
                            class="block text-[#0C0D0D] mb-1 font-semiBold"
                            for="email"
                            >Email Address</label
                        >
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
                    <div class="flex justify-end w-full">
                        <a
                            href="./forgot-password"
                            class="underline text-[#087BB4] font-medium"
                            >Forgot password?</a
                        >
                    </div>
                    <div class="flex justify-start w-full">
                        <h5>
                            New to Audemy?
                            <a
                                href="./signup"
                                class="underline text-[#087BB4] font-medium"
                                >Sign Up</a
                            >
                        </h5>
                    </div>

                    <div class="flex justify-center w-full pt-4 mb-6">
                        <button
                            type="submit"
                            class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </form>

            <div
                class="flex w-1/2 text-gray-500 items-center justify-center gap-2 my-4"
            >
                <div><hr class="w-32 md:w-52 h-0.5 bg-gray-500 rounded-sm" /></div>
                <div>or</div>
                <div><hr class="w-32 md:w-52 h-0.5 bg-gray-500 rounded-sm" /></div>
            </div>

            <!-- Google OAuth Login -->
            <div class="flex w-full gap-4 items-center justify-center mt-4 mb-8">
                <GoogleLogin
                    :callback="callback"
                    class="flex items-center justify-center gap-4"
                />
            </div>
        </div>

        <!-- Show school input if needed -->
        <div
            v-if="showSchoolForm"
            class="w-7/12 bg-white flex items-center justify-center flex-col gap-4"
        >
            <h3
                class="text-[36px] text-[#151E22] text-center w-7/12 mobile:w-full mobile:text-[24px] mobile:mb-4"
            >
                Enter Your School
            </h3>
            <input
                v-model="school"
                type="text"
                class="border-2 border-black py-2 px-2 rounded-[8px] w-1/2"
                placeholder="School Name"
            />
            <button
                @click="updateSchool"
                class="w-[488px] h-[56px] text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semiBold shadow-[4px_4px_0px_black] mobile:w-full"
            >
                Submit
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { GoogleLogin } from "vue3-google-login";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const errors = ref(false);
const errorMessage = ref("Invalid email and password combination. Try again!");
const email = ref("");
const password = ref("");
var authKey = ref("");
const userSession = ref(null);
const userProfile = ref(null);
const school = ref(""); // Store school input
const showSchoolForm = ref(false); // Control form visibility
const router = useRouter();
var OAuthResponse = ref(null);

onMounted(() => {
    const session = Cookies.get("audemyUserSession");
    if (session) {
        const parsed = JSON.parse(session);
        // console.log("Parsed session:", parsed);

        let token = parsed.token || parsed; // Check if parsed is an object with a token or just the token itself.

        if (typeof token === "string") {
            try {
                const decoded = jwtDecode(token); // Decode the token only if it's a string
                const currentTime = Math.floor(Date.now() / 1000);

                const toEST = (unix) =>
                    new Date(unix * 1000).toLocaleString("en-US", {
                        timeZone: "America/New_York",
                        hour12: false,
                    });

                console.log("Current Time (EST):", toEST(currentTime));
                console.log("Expiry Time (EST):", toEST(decoded.exp));

                if (decoded.exp < currentTime) {
                    Cookies.remove("audemyUserSession");
                    userSession.value = null;
                    router.push("/login");
                } else {
                    userSession.value = parsed;
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                Cookies.remove("audemyUserSession");
                userSession.value = null;
                router.push("/login");
            }
        } else {
            console.error("Invalid token format:", token);
            Cookies.remove("audemyUserSession");
            userSession.value = null;
            router.push("/login");
        }
    }
});

const showErrorAlert = (message) => {
    errors.value = true;
    errorMessage.value = message;
    setTimeout(() => {
        errors.value = false;
    }, 5000);
};

const handleApiError = (status, message) => {
    switch(status) {
        case 400:
            showErrorAlert("Bad request: " + (message || "Please check your input"));
            break;
        case 401:
            showErrorAlert("Unauthorized: " + (message || "Invalid credentials"));
            break;
        case 403:
            showErrorAlert("Forbidden: You don't have permission to access this resource");
            break;
        case 404:
            showErrorAlert("Resource not found");
            break;
        case 405:
            showErrorAlert("Method not allowed");
            break;
        case 429:
            showErrorAlert("Too many requests: Please try again later");
            break;
        case 500:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 502:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 503:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 504:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        default:
            // Handle other errors
            showErrorAlert('Unexpected error occurred.');
        }
};

const resetErrors = () => {
    setTimeout(() => {
        errors.value = false;
    }, 5000);
};


const login = async (event) => {
    event.preventDefault();
    errors.value = false;
    if (!email.value || !password.value) {
        errors.value = true;
        resetErrors();
        return;
    }

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: { email: email.value, password: password.value },
            }),
        });

        // // Log response before parsing
        // const textResponse = await response.text();
        // console.log("Raw Response:", textResponse);
        // Check if response is JSON before trying to parse it
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const errorText = await response.text();
            console.error("Non-JSON response:", errorText);

            if (!response.ok) {
                console.log("response not okay")
                handleApiError(response.status, errorText || "No details provided");
                console.log("alert message displayed")
                return;
            }

            console.log("Success with non-JSON response");
            window.location.href = "/login";
            return;
        }

        const data = await response.json();
        // console.log("Response Data:", data);

        if (!response.ok) {
            handleApiError(response.status, data.message || "Failed to login");
            return;
        }

        authKey.value = response.headers.get("authorization");

        Cookies.set(
            "audemyUserSession",
            JSON.stringify({ token: authKey.value, user: data.user }),
            { expires: 7 } // Set cookie with token and user data
        );
        userSession.value = { token: authKey.value, user: data.user };
        router.push("/game-zone");
    } catch (error) {
        console.error("Error:", error);
        showErrorAlert("Connection error: Please check your internet connection");
    }
};

const callback = async (response) => {
    OAuthResponse = response.credential;
    if (response?.credential) {
        try {
            const decoded = jwtDecode(response.credential);
            userProfile.value = {
                name: decoded.name,
                email: decoded.email,
                imageUrl: decoded.picture,
            };
        } catch (error) {
            console.error("Failed to decode JWT:", error);
            showErrorAlert("Failed to process Google login");
            return;
        }
    }

    const dbResponse = await fetch(
        `/api/db/get_user?email=${userProfile.value.email}`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    );

    if (!dbResponse.ok) {
            const errorData = await dbResponse.json().catch(() => ({}));
            handleApiError(dbResponse.status, errorData.message || "Failed to retrieve user data");
            return;
        }

    const dbData = await dbResponse.json();
    console.log("DB Response:", dbData);

    if (!dbData || !dbData.email) {
        console.log("User not found, prompting for school...");
        showSchoolForm.value = true;
    } else {
        Cookies.set(
            "audemyUserSession",
            JSON.stringify({
                token: OAuthResponse,
                user: userProfile.value,
            }),
            {
                expires: 7,
            }
        );
        userSession.value = {
            token: OAuthResponse,
            user: userProfile.value,
        };

        router.push("/game-zone");
    }
};

const updateSchool = async () => {
    if (!school.value) {
        alert("Please enter your school name.");
        return;
    }

    try {
        const response = await fetch(`/api/db/update_user_school`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: userProfile.value.email,
                name: userProfile.value.name,
                school: school.value,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            handleApiError(response.status, errorData.message || "Failed to update school information");
            return;
        }

        const data = await response.json();
        console.log("Updated user:", data);

        if (data.success) {
            Cookies.set(
                "audemyUserSession",
                JSON.stringify({
                    token: OAuthResponse,
                    user: userProfile.value,
                }),
                {
                    expires: 7,
                }
            );
            userSession.value = {
                token: OAuthResponse,
                user: userProfile.value,
            };
            showSchoolForm.value = false;
            router.push("/game-zone");
        } else {
            showErrorAlert(data.message || "Failed to update school information");
        }
    } catch (error) {
        console.error("Error updating school:", error);
        showErrorAlert("Connection error: Please check your internet connection");
    }
};

const logout = () => {
    Cookies.remove("audemyUserSession");
    userSession.value = null;
    userProfile.value = null;
    router.push("/login");
};
</script>
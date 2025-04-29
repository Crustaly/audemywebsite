<template>
    <div
        class="w-full min-h-screen overflow-auto flex justify-between gap-[98px] font-poppins mobile:flex-col mobile:gap-[20px]"
    >
        <!-- SIDE IMAGE -->
        <div
            class="w-5/12 p-0 bg-[#E5F0F5] relative mobile:w-full mobile:h-[40%]"
        >
            <p
                class="font-bold text-[16px] text-[#151E22] mt-[45px] ml-20 mobile:ml-5"
            >
                audemy
            </p>

            <img
                :src="OrangeStar"
                class="w-[66px] absolute left-[359px] top-[110px] z-10 mobile:left-[80%] mobile:top-[20%]"
                alt=""
            />
            <img
                :src="Star"
                class="w-[69px] absolute left-[89px] top-[310px] z-10 mobile:left-[20%] mobile:top-[50%]"
                alt=""
            />
            <img
                :src="Book"
                class="w-[66px] absolute left-[580px] top-[430px] z-10 mobile:hidden"
                alt=""
            />
            <img
                :src="Group878"
                class="absolute bottom-[-350px] w-[full] mobile:bottom-[-200px] mobile:hidden"
                alt=""
            />
            <img
                :src="Group1010"
                class="absolute bottom-[60px] w-[60%] left-[50%] translate-x-[-50%] mobile:w-[80%] mobile:hidden"
                alt=""
            />
        </div>

        <div
            class="w-7/12 pt-[62px] pb-[162px] mobile:w-full mobile:pt-[20px] mobile:pb-[20px] mobile:px-20 flex flex-col place-items-center"
        >
            <h1
                class="text-[40px] text-[#151E22] max-w-[504px] mobile:text-[28px] mobile:max-w-full mobile:px-4"
            >
                Sign up to get started!
            </h1>

            <!-- Google OAuth Login -->
            <div class="flex w-full gap-4 items-center justify-center mt-4">
                <GoogleLogin
                    :callback="callback"
                    class="flex items-center justify-center gap-4"
                />
            </div>

            <div
                class="flex text-gray-500 w-full justify-center items-center gap-2 mt-4"
            >
                <div><hr class="w-52 h-0.5 my-4 bg-gray-500 rounded-sm" /></div>
                <div>or</div>
                <div><hr class="w-52 h-0.5 my-4 bg-gray-500 rounded-sm" /></div>
            </div>

            <!-- FORM FIELD -->
            <form
                ref="signupForm"
                class="mt-4 max-w-[488px] mobile:mt-[30px] mobile:px-4 mobile:w-full"
            >
                <!-- FIRST & LAST NAME -->
                <div
                    class="flex items-center justify-between mb-[16px] mobile:flex-col mobile:gap-4"
                >
                    <div class="w-[221px] mr-[36px] mobile:w-full mobile:mr-0">
                        <label
                            class="block text-[#0C0D0D] font-semiBold"
                            for="first_name"
                            >First Name</label
                        >
                        <input
                            type="text"
                            class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full"
                            id="first_name"
                            name="first_name"
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div class="w-[221px] mobile:w-full">
                        <label
                            class="block text-[#0C0D0D] font-semiBold"
                            for="last_name"
                            >Last Name</label
                        >
                        <input
                            type="text"
                            class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full"
                            id="last_name"
                            name="last_name"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                <!-- SCHOOL FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        for="school_name"
                        class="block text-[#0C0D0D] font-semiBold"
                        >School</label
                    >
                    <input
                        type="text"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="school_name"
                        name="school_name"
                        placeholder="Enter your school's name"
                    />
                </div>

                <!-- EMAIL FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        class="block text-[#0C0D0D] font-semiBold"
                        for="email"
                        >Email</label
                    >
                    <input
                        type="email"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                    />
                </div>

                <!-- PASSWORD FIELD -->
                <div class="mb-[16px] mobile:w-full">
                    <label
                        for="password"
                        class="block text-[#0C0D0D] font-semiBold"
                        >Password</label
                    >
                    <input
                        v-model="password"
                        type="password"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="password"
                        name="password"
                        placeholder="Create your best password"
                        @input="validatePasswords"
                    />
                </div>

                <!-- CONFIRM PASSWORD FIELD -->
                <div class="mb-[16px] mobile:w-full relative">
                    <label
                        for="confirm_password"
                        class="block text-[#0C0D0D] font-semiBold"
                        >Confirm Password</label
                    >
                    <input
                        v-model="confirmPassword"
                        type="password"
                        class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px]"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm your password"
                        @input="validatePasswords"
                        @blur="handleConfirmBlur"
                    />
                </div>

                <!-- Password match feedback container (Using computed properties) -->
                <div
                    v-show="confirmTouched"
                    class="mb-6 p-3 rounded-lg border-2 shadow-md min-h-[56px] text-base font-medium"
                    :class="feedbackClass"
                >
                    <p class="flex items-center font-medium">
                        {{ feedbackMessage }}
                    </p>
                </div>

                <p
                    class="font-semiBold text-[16px] text-[#0C0D0D] mobile:text-[14px] mobile:px-4"
                >
                    Already have an Audemy account?
                    <a href="login" class="text-[#087BB4] hover:text-[#0C587D]"
                        >Log in</a
                    >
                </p>

                <!-- GET STARTED BTN -->
                <div class="mt-[24px] mb-[30px] mobile:w-full mobile:px-4">
                    <button
                        type="button"
                        @click="submitForm"
                        class="w-[488px] h-[56px] text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semiBold shadow-[4px_4px_0px_black] mobile:w-full"
                        value="Get Started"
                    >
                        Get Started
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";

const signupForm = ref(null);
const passwordsMatch = ref(false);
const showFeedback = ref(true);
const password = ref("");
const confirmPassword = ref("");
const confirmTouched = ref(false);
const formSubmitted = ref(false);
const debugMessage = ref("Please confirm your password");

import Group1010 from "/assets/images/SignUpImg/Group 1010.png";
import Group878 from "/assets/images/SignUpImg/Group 878.png";
import OrangeStar from "/assets/images/SignUpImg/Group 895.png";
import Book from "/assets/images/SignUpImg/Group 1106.png";
import Star from "/assets/images/testimonials/star.svg";

import Cookies from "js-cookie";

const showErrorAlert = (message) => {
    alert(message); // Using standard alert for simplicity
};

const submitForm = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Set formSubmitted to true
    formSubmitted.value = true;

    // Force validation check before submission
    validatePasswords();

    // Check if passwords match
    if (!passwordsMatch.value) {
        debugMessage.value = "Form submission stopped: passwords don't match";
        return;
    }

    try {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    first_name: signupForm.value.first_name.value,
                    last_name: signupForm.value.last_name.value,
                    // birthday: signupForm.value.birthday.value,
                    school_name: signupForm.value.school_name.value,
                    email: signupForm.value.email.value,
                    password: signupForm.value.password.value,
                    confirm_password: signupForm.value.confirm_password.value,
                },
            }),
        });

        if (!response.ok) {
            // For non-JSON responses, try to get text content
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                const errorText = await response.text();
                console.error("Non-JSON error response:", errorText);
            }
            
            // Now handle based on status code
            switch (response.status) {
                case 400:
                    showErrorAlert("Bad request: Please check your input");
                    break;
                case 401:
                    showErrorAlert("Unauthorized: Invalid credentials");
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
                    // Try to get error message from response if it's JSON
                    let errorMessage = 'Something went wrong';
                    if (contentType && contentType.includes("application/json")) {
                        try {
                            const data = await response.json();
                            errorMessage = data.error || errorMessage;
                        } catch (e) {
                            console.error("Error parsing JSON:", e);
                        }
                    }
                    alert(`Signup error: ${errorMessage}`);
            }
            
            // Instead of throwing an error, just return to stop execution
            return;
        }

        // Continue with normal execution if response is OK
        const data = await response.json();

        console.log("Success:", data);
        //! Go To login
        console.log("Signup Successful", data);

        const loginResponse = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email: signupForm.value.email.value,
                    password: signupForm.value.password.value,
                },
            }),
        });

        if (!loginResponse.ok) {
            const loginContentType = loginResponse.headers.get("content-type");
            let loginData;
            
            if (loginContentType && loginContentType.includes("application/json")) {
                try {
                    loginData = await loginResponse.json();
                } catch (e) {
                    console.error("Error parsing login JSON:", e);
                }
            }
            
            switch (loginResponse.status) {
                case 400:
                    alert('Invalid login request. Please check your information.');
                    break;
                case 401:
                    alert('Invalid email or password. Please try again.');
                    break;
                case 404:
                    alert('Account not found. Please check your email.');
                    break;
                case 429:
                    alert('Too many login attempts. Please try again later.');
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
                    alert(`Login error: ${(loginData && loginData.error) || 'Something went wrong'}`);
            }
            
            // Return without throwing error to prevent dual alerts
            return;
        }

        const loginData = await loginResponse.json();
        console.log("Login Successful", loginData);

        if (loginData.token) {
            Cookies.set("audemyUserSession", JSON.stringify(loginData.token), {
                expires: 7, // Set the cookie to expire in 7 days
                secure: true,
            });
            window.location.href = "/game-zone";
        } else {
            showErrorAlert("Token not found");
            return;
        }
        signupForm.value?.reset?.();

    } catch (error) {
        console.error("Error:", error.message);
        // Only show error alert if it hasn't been shown by the code above
        showErrorAlert(`Error: ${error.message}`);
    }
};

const validatePasswords = () => {
    // Always show feedback
    showFeedback.value = true;

    if (password.value && confirmPassword.value) {
        // Both fields have values, set match status
        passwordsMatch.value = password.value === confirmPassword.value;
        debugMessage.value = passwordsMatch.value
            ? "Passwords are a match."
            : "Passwords do not match.";
    } else if (confirmTouched.value && confirmPassword.value === "") {
        // If user has interacted with confirm field but it's now empty
        passwordsMatch.value = false;
        debugMessage.value = "Please confirm your password";
    } else if (formSubmitted.value) {
        // If form was submitted but confirm password is empty
        passwordsMatch.value = false;
        debugMessage.value = "Please confirm your password";
    } else if (confirmPassword.value) {
        // Confirm password has a value but doesn't match
        passwordsMatch.value = false;
        debugMessage.value = "Passwords do not match.";
    } else {
        // Confirm password is empty and never touched
        passwordsMatch.value = null;
        debugMessage.value = "Please confirm your password";
    }

    // console.log("passwordsMatch after:", passwordsMatch.value);
};

const handleConfirmBlur = () => {
    confirmTouched.value = true;
    validatePasswords();
};

onMounted(() => {
    // Force feedback to show for debugging
    showFeedback.value = true;
    validatePasswords();
});

// Watch both password fields for changes
watch(password, () => {
    validatePasswords();
});

watch(confirmPassword, () => {
    validatePasswords();
});

// Reset formSubmitted when either password changes
watch([password, confirmPassword], () => {
    // Reset formSubmitted whenever either password changes after form submission
    if (formSubmitted.value) {
        formSubmitted.value = false;
    }

    // If user is typing in confirm field, mark it as touched
    if (confirmPassword.value) {
        confirmTouched.value = true;
    }
});

const feedbackMessage = computed(() => {
    if (passwordsMatch.value === true) {
        return "Yeye! Passwords are a match!";
    } else if (passwordsMatch.value === false) {
        return "Oops! Passwords do not match. Please Try again.";
    } else {
        return "Please confirm your password";
    }
});

const feedbackClass = computed(() => {
    if (passwordsMatch.value === true) {
        return "bg-green-100 border-green-500 text-green-800";
    } else if (passwordsMatch.value === false) {
        return "bg-red-100 border-red-500 text-red-800";
    } else {
        return "bg-gray-100 border-gray-400 text-gray-800";
    }
});
</script>
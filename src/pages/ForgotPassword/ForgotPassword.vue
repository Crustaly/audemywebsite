<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const errors = ref(false);      // flag to display error on frontend
const email = ref("");          // email input field value
const router = useRouter();

const showErrorAlert = (message) => {
    alert(message); // Using standard alert for simplicity
};

const sendResetEmail = async (event) => {
    // prevent default form submission which would reload the page
    event.preventDefault();     
    console.log("Sending reset email to:", email.value);
    
    // API call to send reset email
    try {
        const emailResponse = await fetch(
            `/api/send-email`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email.value
                }),
            }
        );
        // Handle the response from the API based on the status code
        console.log("Response:", emailResponse.status)
        // Get the response data
        const responseData = await emailResponse.json().catch(() => ({}));
        
        if (!emailResponse.ok) {
            switch (emailResponse.status) {
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
                    // Handle other errors
                    alert('Unexpected error occurred.');
            }
            // Return to prevent further execution
            return;
        } else {
            // Route to reset-link-sent page if email sent successfully
            console.log("Email sent successfully.");
            router.push("/reset-link-sent");
        }
    } catch (error) {
        // Handle network errors
        console.error("Error: ", error);
        errors.value = true;
        alert('Network error. Please check your connection and try again.');
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

        <div
            class="w-7/12 md:w-full sm:w-full bg-white flex flex-col items-center justify-center border-2"
        >
            <form
                @submit="sendResetEmail"
                method="post"
                class="max-h-[350px] w-full flex flex-col justify-center items-center gap-[5%] my-4"
            >
                <div
                    class="text-[#151E22] text-center w-7/12 mb-10 mobile:w-full  mobile:mb-4"
                >
                    <h1 class="text-[36px] mobile:text-[24px]">Let's reset your Password</h1>
                    <div>Enter the email associated with your account and we’ll send you a link to reset your password.</div>
                </div>
                
                <div class="w-7/12 max-w-[450px]">
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
                    <div class="mb-3" v-if="errors">
                        <div class="text-red-700" role="alert">
                            <span class="block sm:inline">No account found with that email address.</span>
                        </div>
                    </div>
                    <div class="flex justify-start w-full">
                        <h5>
                            Return to
                            <a
                                href="./login"
                                class="underline text-[#087BB4] font-medium"
                                >Log in</a
                            >
                        </h5>
                    </div>

                    <div class="flex justify-center w-full pt-4">
                        <button
                            type="submit"
                            class="w-full py-3 font-bold rounded-[8px] bg-[#FE892A] hover:bg-[#ff8d33] border-2 border-black shadow-[4px_4px_0px_black] text-black"
                        >
                            Send link to email
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const signupForm = ref(null);

import Group1010 from "/assets/images/SignUpImg/Group 1010.png";
import Group878 from "/assets/images/SignUpImg/Group 878.png";
import OrangeStar from "/assets/images/SignUpImg/Group 895.png";
import Book from "/assets/images/SignUpImg/Group 1106.png";
import Star from "/assets/images/testimonials/star.svg";
import fevicon3 from "/src/assets/character/favicon3.png";

const submitForm = (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  // Get form data from the ref
  const formData = new FormData(signupForm.value);

  // Validate if passwords match
  if (
    signupForm.value.confirm_password.value !== signupForm.value.password.value
  ) {
    console.error("Passwords do not match");
    alert("Passwords do not match. Please try again.");
    return; // Stop if passwords don't match
  }

  // Send form data as JSON
  fetch("https://audemy-users-api.fly.dev/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        first_name: signupForm.value.first_name.value,
        last_name: signupForm.value.last_name.value,
        birthday: signupForm.value.birthday.value,
        school_name: signupForm.value.school_name.value,
        email: signupForm.value.email.value,
        password: signupForm.value.password.value,
        confirm_password: signupForm.value.confirm_password.value,
      },
    }), // Convert the object to JSON
  })
    .then((response) => {
      if (!response.ok) {
        if (response.status === 400) {
          alert("Bad request: Please check your information and try again.");
          throw new Error("Bad request");
        } else if (response.status === 401) {
          alert("Unauthorized: You need to be authenticated.");
          throw new Error("Unauthorized");
        } else if (response.status === 405) {
          alert("Method not allowed: This operation is not supported.");
          throw new Error("Method not allowed");
        } else if (response.status === 429) {
          alert("Too many requests: Please try again later.");
          throw new Error("Too many requests");
        } else {
          alert("An error occurred. Please try again later.");
          throw new Error("Server error");
        }
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      // You can handle the response here (e.g., show a success message)
    })
    .catch((error) => {
      console.error("Error:", error);
      // Errors are already handled above
    });
};
</script>
<template>
  <div
    class="w-full min-h-screen overflow-auto flex justify-between font-poppins mobile:flex-col"
  >
    <!-- SIDE IMAGE -->

    <div
      class="w-5/12 p-0 bg-[#E5F0F5] mobile:w-full items-center relative overflow-hidden"
    >
      <div
        class="large-hidden flex items-center text-[18px] text-[#077BB3] p-4 mobile:justify-center"
      >
        <img
          class="w-10 h-10 object-contain"
          :src="fevicon3"
          alt="Audemy Logo"
        />
        <p class="font-bold mt-2">audemy</p>
      </div>

      <img
        :src="OrangeStar"
        class="w-[85px] absolute left-[70%] top-[20p%] z-10 mobile:hidden md:hidden md-w-[50px]"
        alt=""
      />
      <img
        :src="Star"
        class="w-[85px] absolute left-[10%] top-[40%] z-10 mobile:hidden"
        alt=""
      />
      <img
        :src="Book"
        class="w-[60px] h-[auto] absolute left-[80%] top-[50%] z-10 mobile:hidden tablet:w-[50px]"
        alt=""
      />
      <img
        :src="Group878"
        class="absolute bottom-[-20%] w-[100%] mobile:bottom-[-200px] mobile:hidden h-[650px]"
        alt=""
      />
      <img
        :src="Group1010"
        class="absolute bottom-[10%] w-[50%] h-[auto] left-[50%] translate-x-[-50%] mobile:w-[60%] mobile:hidden tablet:w-[65%] tablet:h-[15%] tablet:bottom-[14%] tablet:left-[50%] tablet:translate-x-[-50%]"
        alt=""
      />
    </div>

    <!-- RIGHT SIDE FORM -->
    <div
      class="w-7/12 mobile:w-full mobile:pt-[20px] mobile:pb-[20px] mobile:px-20 flex flex-col items-center justify-center tablet:px-4"
    >
      <h1
        class="text-[40px] text-[#151E22] mobile:text-[22px] mobile:max-w-full mobile:px-4 tablet:text-[25px] tablet:text-bold"
      >
        Sign up to get started!
      </h1>

      <!-- FORM FIELD -->
      <form
        ref="signupForm"
        class="mt-[62px] max-w-[480px] mobile:mt-[30px] mobile:px-4 mobile:w-full text-[15px] tablet:p-4 tablet:w-[350px] tablet:mt-[25px]"
      >
        <!-- FIRST & LAST NAME -->
        <div
          class="flex items-center justify-between mb-[16px] mobile:flex-col mobile:gap-4 gap-[3px]"
        >
          <div class="w-[50%] mr-[36px] mobile:w-full mobile:mr-0">
            <label class="block text-[#0C0D0D] font-semiBold" for="first_name"
              >First Name</label
            >
            <input
              type="text"
              class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full mobile:h-[40px]"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
            />
          </div>

          <div class="w-[50%] mobile:w-full">
            <label class="block text-[#0C0D0D] font-semiBold" for="last_name"
              >Last Name</label
            >
            <input
              type="text"
              class="outline-none border border-black h-[48px] px-4 rounded-[8px] w-full mobile:h-[40px]"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <!-- SCHOOL FIELD -->
        <div class="mb-[16px] mobile:w-full w-[100%]">
          <label for="school_name" class="block text-[#0C0D0D] font-semiBold"
            >School</label
          >
          <input
            type="text"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px] mobile:h-[40px]"
            id="school_name"
            name="school_name"
            placeholder="Enter your school's name"
          />
        </div>

        <!-- EMAIL FIELD -->
        <div class="mb-[16px] mobile:w-full w-[100%]">
          <label class="block text-[#0C0D0D] font-semiBold" for="email"
            >Email</label
          >
          <input
            type="email"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px] mobile:h-[40px]"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>

        <!-- PASSWORD FIELD -->
        <div class="mb-[16px] mobile:w-full w-[100%]">
          <label for="password" class="block text-[#0C0D0D] font-semiBold"
            >Password</label
          >
          <input
            type="password"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px] mobile:h-[40px]"
            id="password"
            name="password"
            placeholder="Create your best password"
          />
        </div>

        <!-- CONFIRM PASSWORD FIELD -->
        <div class="mb-[16px] mobile:w-full w-[100%]">
          <label
            for="confirm_password"
            class="block text-[#0C0D0D] font-semiBold"
            >Confirm Password</label
          >
          <input
            type="password"
            class="w-full outline-none border border-black h-[48px] px-4 rounded-[8px] mobile:h-[40px]"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
          />
        </div>

        <p
          class="font-semiBold text-[16px] text-[#0C0D0D] mobile:text-[14px] mobile:px-2 text-center"
        >
          Already have an Audemy account?
          <a href="login" class="text-[#087BB4] hover:text-[#0C587D]">Log in</a>
        </p>

        <!-- GET STARTED BTN -->
        <div
          class="mt-[24px] tablet:mt-[10px] mb-[30px] mobile:w-full mobile:px-4 w-[100%]"
        >
          <button
            type="button"
            @click="submitForm"
            class="w-[488px] tablet:w-[320px] h-[56px] text-white rounded-[8px] bg-[#087BB4] hover:bg-[#0C587D] hover:cursor-pointer border-2 border-black font-semiBold shadow-[4px_4px_0px_black] mobile:w-full"
            value="Get Started"
          >
            Get Started
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

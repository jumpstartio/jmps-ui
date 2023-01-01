<template>
  <div class="signin-wrapper">
    <div class="signin-wrapper-container">
      <p class="title-32 title-semibold title">Login</p>
      <p>
        New to Jumpstart ?<span class="links" @click="goToSignUp">
          Create an account</span
        >
      </p>
      <div class="button-wrapper">
        <jmps-button
          :prefixIcon="'icon-google'"
          :type="'subtle'"
          :height="58"
          @click="loginWithGoogle"
          >Log in with Google</jmps-button
        >
        <jmps-button
          :prefixIcon="'icon-linkedin-color'"
          :type="'subtle'"
          :height="58"
          >Log in with Linkedin</jmps-button
        >
      </div>
      <div class="method-separator">
        <div class="method-separator-line" />
        <p class="method-separator-text text-secondary">
          Or sign in with email
        </p>
        <div class="method-separator-line" />
      </div>
      <div class="login-input-container">
        <jmps-input
          :label="'Email'"
          :type="'email'"
          :placeholder="'Enter your email address'"
          v-model="email"
          :error="email.length > 0 && !isValidEmail"
          :errorMessage="'Enter a valid email address'"
          :width="'506px'"
        >
        </jmps-input>
        <jmps-input
          :label="'Password'"
          :type="'password'"
          :placeholder="'Enter your password'"
          v-model="password"
          :width="'506px'"
          :error="isPasswordIncorrect || isUserNotExist"
          :errorMessage="
            isPasswordIncorrect ? 'Password Incorrect' : 'User Does Not Exist'
          "
          @keypress.enter="loginWithEmail"
        />
      </div>
      <span
        class="caption-regular forgot-password links"
        @click="goToForgotPassword"
      >
        Forgot Password
      </span>
      <jmps-button class="login-button" @click="loginWithEmail"
        >Log in</jmps-button
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";
import { validateEmail } from "@/utils/helper";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";
import { useAuthStore } from "../../stores/auth";
import storage from "@/utils/storage";
const router = useRouter();
const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const isValidEmail = ref(false);
const isPasswordIncorrect = ref(false);
const isUserNotExist = ref(false);
const goToSignUp = () => {
  router.push("/authenticate/signup");
};
const loginWithGoogle = () => {
  authStore.loginWithGoogle({}, { success: handleLoginSuccess });
};
const goToForgotPassword = () => {
  router.push("/authenticate/forgot-password");
};

const loginWithEmail = () => {
    let requestBody = {
      email: email.value,
      password: password.value,
    };
    authStore.loginUser({}, { requestBody, success: handleLoginSuccess });
  },
  handleLoginSuccess = (response) => {
    console.log(response);
    if (response.code === 200 && response.message === "SUCCESS") {
      storage.save("access_token", response.data.token);
      router.push("/dashboard");
    } else if (response.apiResponseStatus === "INCORRECT_PASSWORD") {
      isPasswordIncorrect.value = true;
    } else if (response.apiResponseStatus === "USER_NOT_FOUND") {
      isUserNotExist.value = true;
    }
  };

watch(
  () => email.value,
  () => {
    if (email.value) {
      if (validateEmail(email.value)) {
        isValidEmail.value = true;
      } else {
        isValidEmail.value = false;
      }
    } else {
      isValidEmail.value = false;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/utils.scss";

.signin-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  margin-left: 72px;
  &-container {
    width: 100%;
    .title {
      margin: 0;
    }
    .button-wrapper {
      display: flex;
      padding-left: 6px;
      margin-top: 40px;
      gap: 24px;
    }
    .method-separator {
      display: flex;
      align-items: center;
      margin-top: 40px;
      &-line {
        height: 0.5px;
        width: 142px;
        background-color: $border-color;
      }
      &-text {
        padding: 0 16px;
      }
    }
    .login-input-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-left: 4px;
    }
    .forgot-password {
      display: flex;
      justify-content: end;
      margin-top: 16px;
    }
    .links {
      text-decoration: none;
      color: $primary-main;
      cursor: pointer;
    }
    .login-button {
      margin-top: 32px;
      margin-bottom: 64px;
    }
  }
}
</style>

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
        <jmps-button :prefixIcon="'icon-google'" :type="'subtle'" :height="58"
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
  <loader />
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { watch } from "vue";
import { validateEmail } from "@/utils/helper";
import storage from "@/utils/storage";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";

export default {
  name: "SigninScreen",
  components: {
    JmpsButton,
    JmpsInput,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const isValidEmail = ref(false);
    const isPasswordIncorrect = ref(false);
    const isUserNotExist = ref(false);
    const goToSignUp = () => {
      router.push("/authenticate/signup");
    };
    const goToForgotPassword = () => {
      router.push("/authenticate/forgot-password");
    };
    const loginWithEmail = () => {
      store.dispatch("loginUser", {
        requestBody: {
          email: email.value,
          password: password.value,
        },
        success: (response) => {
          console.log(response);
          if (response.apiResponseStatus === "SUCCESS") {
            storage.save("access_token", response.responseObject.token);
            router.push("/home");
          } else if (response.apiResponseStatus === "INCORRECT_PASSWORD") {
            isPasswordIncorrect.value = true;
          } else if (response.apiResponseStatus === "USER_NOT_FOUND") {
            isUserNotExist.value = true;
          }
        },
      });
    };
    watch(
      () => email.value,
      () => {
        if (email.value) {
          console.log(isValidEmail.value);
          if (validateEmail(email.value)) {
            console.log(isValidEmail.value);
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
    return {
      email,
      password,
      goToForgotPassword,
      goToSignUp,
      isValidEmail,
      loginWithEmail,
      isPasswordIncorrect,
      isUserNotExist,
    };
  },
};
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

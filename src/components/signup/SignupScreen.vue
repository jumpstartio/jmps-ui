<template>
  <div class="signup-wrapper">
    <div class="signup-wrapper-container">
      <p class="title-32 title-semibold title">Create your account</p>
      <p>
        Already have an account?<span class="links" @click="goToSignIn">
          Login</span
        >
      </p>
      <div class="button-wrapper">
        <JmpsButton :prefixIcon="'icon-google'" :type="'subtle'" :height="58"
          >Log in with Google</JmpsButton
        >
        <JmpsButton
          :prefixIcon="'icon-linkedin-color'"
          :type="'subtle'"
          :height="58"
          >Log in with Linkedin</JmpsButton
        >
      </div>
      <div class="method-separator">
        <div class="method-separator-line" />
        <p class="method-separator-text text-secondary">
          Or sign up with email
        </p>
        <div class="method-separator-line" />
      </div>
      <div class="login-input-container">
        <JmpsInput
          :label="'Name'"
          :type="'text'"
          :placeholder="'Enter your name'"
          v-model="name"
          :error="name.length > 0 && !isValidName"
          :errorMessage="'Please enter space separated full name'"
          :width="'506px'"
        ></JmpsInput>
        <JmpsInput
          :label="'Email'"
          :type="'email'"
          v-model="email"
          :placeholder="'Enter your email address'"
          :error="email.length > 0 && !isValidEmail"
          :errorMessage="'Enter a valid email address'"
          :width="'506px'"
        ></JmpsInput>
        <JmpsInput
          :label="'Password'"
          :type="'password'"
          :placeholder="'Set password'"
          v-model="password"
          :width="'506px'"
        />
      </div>
      <div class="validator">
        <password-validator :password="password" />
      </div>
      <div class="t-n-c">
        <input type="checkbox" id="tnc" name="tnc" />
        <p class="caption-regular">
          I have read and agree to the<span class="links">
            Terms of Service</span
          >
          and <span class="links">Privacy policy</span>.
        </p>
      </div>
      <JmpsButton class="login-button" @click="register"
        >Create Account</JmpsButton
      >
    </div>
  </div>
</template>

<script>
// import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";
import {
  validateEmail,
  validateName,
  getFirstName,
  getLastName,
} from "@/utils/helper";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";
import PasswordValidator from "@/components/signup/PasswordValidator.vue";

export default {
  name: "signupScreen",
  components: {
    JmpsButton,
    JmpsInput,
    PasswordValidator,
  },
  setup() {
    // const store = useStore();
    const router = useRouter();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const isValidEmail = ref(false);
    const isValidName = ref(false);

    const goToSignIn = () => {
      router.push("/authenticate/login");
    };
    const register = () => {
      // store.dispatch("registerUser", {
      //   requestBody: {
      //     firstName: getFirstName(name.value),
      //     lastName: getLastName(name.value),
      //     password: password.value,
      //     userEmail: email.value,
      //   },
      //   success: (response) => {
      //     console.log(response);
      //   },
      // });
    };
    watch(
      () => [email.value, name.value],
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
        if (name.value) {
          if (validateName(name.value)) {
            isValidName.value = true;
          } else {
            isValidName.value = false;
          }
        } else {
          isValidName.value = false;
        }
      },
      { immediate: true }
    );
    return {
      name,
      email,
      password,
      goToSignIn,
      isValidName,
      isValidEmail,
      register,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.signup-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  margin-left: 72px;
  &-container {
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
    .validator {
      margin-top: 18px;
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
    .t-n-c {
      display: flex;
      align-items: center;
      margin-top: 28px;
      gap: 10px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

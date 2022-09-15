<template>
  <div class="enter-email-wrapper">
    <div class="action-area">
      <p class="title-32 title-semibold title">Password reset</p>
      <p>Enter your email and we will send you a reset link</p>
      <div class="login-input-container">
        <JmpsInput
          :label="'Email'"
          :type="'email'"
          :placeholder="'Enter your email address'"
          v-model="email"
          :error="email.length && !isValidEmail"
          :errorMessage="'Enter a valid email address'"
          :width="'506px'"
        ></JmpsInput>
      </div>
      <JmpsButton class="login-button" @button-clicked="sendEmail"
        >Reset Password</JmpsButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";
import { validateEmail } from "@/utils/helper";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";

export default {
  name: "EnterEmail",
  components: {
    JmpsButton,
    JmpsInput,
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const isValidEmail = ref(false);
    const sendEmail = () => {
      router.push("/authenticate/forgot-password?status=sent");
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
    return {
      email,
      sendEmail,
      isValidEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.enter-email-wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100% - 744px);
  .action-area {
    overflow-y: scroll;
    margin-left: 72px;
    margin-top: 257px;
    .title {
      margin: 0;
    }
    .login-input-container {
      margin-top: 32px;
      padding-left: 4px;
    }
    .login-button {
      margin-top: 32px;
      margin-bottom: 64px;
    }
    .links {
      text-decoration: none;
      color: $primary-main;
    }
  }
}
</style>

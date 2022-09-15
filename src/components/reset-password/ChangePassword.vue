<template>
  <div class="password-reset-wrapper">
    <div class="action-area">
      <p class="title-32 title-semibold title">Password reset</p>
      <p>Enter a new password for your account.</p>
      <div class="login-input-container">
        <JmpsInput
          :label="'Password'"
          :type="'password'"
          :placeholder="'Set password'"
          v-model="password"
          :width="'506px'"
        />
        <JmpsInput
          :label="'Confirm Password'"
          :type="'password'"
          :placeholder="'Set password'"
          v-model="confirmPassword"
          :width="'506px'"
        />
      </div>
      <div>
        <p v-if="showInfo" class="font-14 font-medium text-error">
          Password does not match.
        </p>
      </div>
      <JmpsButton class="login-button" @button-clicked="sendEmail"
        >Reset Password</JmpsButton
      >
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";
import { ref } from "vue";
import { watch } from "vue";

export default {
  name: "EnterEmail",
  components: {
    JmpsButton,
    JmpsInput,
  },
  setup() {
    const router = useRouter();
    const password = ref("");
    const confirmPassword = ref("");
    const showInfo = ref(false);
    const sendEmail = () => {
      router.push("/forget-password/sent");
    };
    watch(
      () => [password.value, confirmPassword.value],
      () => {
        if (password.value.length && confirmPassword.value.length) {
          if (password.value !== confirmPassword.value) {
            showInfo.value = true;
          } else {
            showInfo.value = false;
          }
        }
      }
    );
    return {
      password,
      confirmPassword,
      showInfo,
      sendEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.password-reset-wrapper {
  display: flex;
  flex-direction: column;
  width: calc(100% - 744px);
  .action-area {
    overflow-y: scroll;
    margin-left: 72px;
    margin-top: 257px;
    min-width: 666px;
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

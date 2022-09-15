<template>
  <div class="authentication-container">
    <signin-screen v-if="renderLoginPage" />
    <signup-screen v-if="renderSignupPage" />
    <vertical-banner class="vertical-banner" />
    <enter-email v-if="renderForgotPasswordPage" />
    <change-password v-if="renderUpdatePasswordPage" />
  </div>
</template>

<script>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import VerticalBanner from "../components/signup/VerticalBanner.vue";
import SignupScreen from "../components/signup/SignupScreen.vue";
import SigninScreen from "../components/signin/SigninScreen.vue";
import EnterEmail from "../components/reset-password/EnterEmail.vue";
import ChangePassword from "../components/reset-password/ChangePassword.vue";

export default {
  name: "AuthenticatePage",
  components: {
    ChangePassword,
    EnterEmail,
    SigninScreen,
    SignupScreen,
    VerticalBanner,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const renderForgotPasswordPage = ref(false);
    const renderLoginPage = ref(true);
    const renderSignupPage = ref(false);
    const renderUpdatePasswordPage = ref(false);
    const renderEmailSentPage = ref(false);
    const renderEmailVerifiedPage = ref(false);

    const goToHome = () => {
      router.push("/");
    };

    watch(
      () => [route.params, route.query],
      () => {
        if (route.params.parameter === "login") {
          renderSignupPage.value = false;
          renderEmailSentPage.value = false;
          renderUpdatePasswordPage.value = false;
          renderForgotPasswordPage.value = false;
          renderEmailVerifiedPage.value = false;
          renderLoginPage.value = true;
        } else if (route.params.parameter === "signup") {
          renderLoginPage.value = false;
          renderEmailSentPage.value = false;
          renderUpdatePasswordPage.value = false;
          renderForgotPasswordPage.value = false;
          renderEmailVerifiedPage.value = false;
          renderSignupPage.value = true;
        } else if (route.params.parameter === "forgot-password") {
          if (route.query.token) {
            renderEmailSentPage.value = false;
            renderForgotPasswordPage.value = false;
            renderLoginPage.value = false;
            renderSignupPage.value = false;
            renderEmailVerifiedPage.value = false;
            renderUpdatePasswordPage.value = true;
          } else {
            if (route.query.status === "sent") {
              renderForgotPasswordPage.value = false;
              renderUpdatePasswordPage.value = false;
              renderLoginPage.value = false;
              renderSignupPage.value = false;
              renderEmailVerifiedPage.value = false;
              renderEmailSentPage.value = true;
            } else if (route.query.status === "verified") {
              renderEmailSentPage.value = false;
              renderForgotPasswordPage.value = false;
              renderUpdatePasswordPage.value = false;
              renderLoginPage.value = false;
              renderSignupPage.value = false;
              renderEmailVerifiedPage.value = true;
            } else {
              renderEmailSentPage.value = false;
              renderUpdatePasswordPage.value = false;
              renderLoginPage.value = false;
              renderEmailVerifiedPage.value = false;
              renderSignupPage.value = false;
              renderForgotPasswordPage.value = true;
            }
          }
        }
      },
      { immediate: true, deep: true }
    );

    return {
      goToHome,
      renderEmailSentPage,
      renderForgotPasswordPage,
      renderLoginPage,
      renderSignupPage,
      renderUpdatePasswordPage,
      renderEmailVerifiedPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.authentication-container {
  display: flex;
}
@media only screen and (max-width: 1023px) {
  .authentication-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vertical-banner {
    display: none;
  }
}
</style>

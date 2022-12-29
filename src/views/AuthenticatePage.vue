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

    const renderPage = (page, query) => {
      renderSignupPage.value = false;
      renderEmailSentPage.value = false;
      renderUpdatePasswordPage.value = false;
      renderForgotPasswordPage.value = false;
      renderEmailVerifiedPage.value = false;
      renderLoginPage.value = false;

      switch (page) {
        case "login":
          renderLoginPage.value = true;
          break;
        case "signup":
          renderSignupPage.value = true;
          break;
        case "forgotPassword":
          if (query.token) {
            renderUpdatePasswordPage.value = true;
          } else {
            if (query.status === "sent") {
              renderEmailSentPage.value = true;
            } else if (query.status === "verified") {
              renderEmailVerifiedPage.value = true;
            } else {
              renderForgotPasswordPage.value = true;
            }
          }
          break;
        default:
          // do nothing
          break;
      }
    };

    watch(
      () => [route.params, route.query],
      () => {
        renderPage(route.params.param, route.query);
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
  flex-direction: row;
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

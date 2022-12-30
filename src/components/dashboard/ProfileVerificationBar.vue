<template>
  <div class="verification-bar-container">
    <img
      :src="'src/assets/icons/icon-verified.svg'"
      class="verification-icon"
      alt="Verify Profile"
    />
    <div class="verification-message">
      <p class="title-16 title-semibold">Verify your profile</p>
      <p class="text-secondary caption-regular">
        Confirm your identity verifying your email address. This helps you to
        build trust among your audience.
      </p>
    </div>
    <jmps-button :type="'primary-dark'">Verify your profile </jmps-button>
  </div>
</template>

<script>
import JmpsButton from "../ui/JmpsButton.vue";
export default {
  components: { JmpsButton },
  name: "ProfileVerificationBar",
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.verification-bar-container {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  border: 1px solid $primary-light;
  border-radius: 8px;
  justify-content: space-between;
  padding: 16px 32px;
  box-sizing: border-box;
  .verification-icon {
    width: 48px;
    padding-left: 16px;
  }
  .verification-message {
    max-width: 500px;
  }
}
</style>

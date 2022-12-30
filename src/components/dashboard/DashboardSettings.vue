<template>
  <div class="settings-wrapper">
    <div class="settings-wrapper-header">
      <p class="title-32 title-semibold text-secondary">Settings</p>
    </div>
    <profile-verification-bar />
    <div class="reset-password-section">
      <div class="reset-password-section-header">
        <p class="section-title">Reset Password</p>
        <div class="separator"></div>
      </div>
      <div class="password-inputs">
        <jmps-input
          :label="'Current Password *'"
          :type="'password'"
          :labelSize="15"
          :labelWeight="'regular'"
          :placeholder="''"
          v-model="currentPassword"
        />
        <div class="enter-password">
          <jmps-input
            :label="'New Password *'"
            :type="'password'"
            :labelSize="15"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="newPassword"
          />
          <jmps-input
            :label="'Confirm Password *'"
            :type="'password'"
            :labelSize="15"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="confirmPassword"
          />
        </div>
        <jmps-button :type="'primary-dark'" :width="169" class="save-changes"
          >Save Changes</jmps-button
        >
      </div>
    </div>
    <div class="account-section">
      <div class="account-section-header">
        <p class="section-title">Account</p>
        <div class="separator"></div>
      </div>
      <div class="account-actions">
        <div class="account-actions-item">
          <p>Receive email notification an hour before the class</p>
          <jmps-toggle />
        </div>
        <div class="account-actions-item">
          <p>Receive email notification an hour before the class</p>
          <jmps-toggle />
        </div>
        <div class="account-actions-item">
          <p>Receive email notification an hour before the class</p>
          <jmps-toggle />
        </div>
        <div class="account-actions-item">
          <div class="item-text">
            <p class="title-medium">Deactivate Account</p>
            <p class="font-15">Delete your account and clear all your data.</p>
          </div>
          <jmps-button :type="'secondary'" class="save-changes"
            >Deactivate Account</jmps-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JmpsInput from "@/components/ui/JmpsInput.vue";
import JmpsButton from "@/components/ui/JmpsInput.vue";
import JmpsToggle from "@/components/ui/JmpsToggle.vue";
import ProfileVerificationBar from "./ProfileVerificationBar.vue";
import { ref } from "vue";
export default {
  components: {
    ProfileVerificationBar,
    JmpsInput,
    JmpsButton,
    JmpsToggle,
  },
  name: "DashboardSettings",
  setup() {
    const currentPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    return {
      currentPassword,
      newPassword,
      confirmPassword,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .reset-password-section {
    margin-top: 40px;
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      .section-title {
        min-width: fit-content;
      }
    }
    .password-inputs {
      max-width: 100%;
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .enter-password {
        display: flex;
        gap: 68px;
      }
      .save-changes {
        margin-left: auto;
      }
    }
  }
  .account-section {
    margin-top: 40px;
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      .section-title {
        min-width: fit-content;
      }
    }
    .account-actions {
      max-width: 100%;
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-text {
          display: flex;
        }
      }
    }
  }
}
</style>

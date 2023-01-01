<template>
  <div class="profile-wrapper">
    <div class="profile-wrapper-header">
      <p class="title-32 title-semibold">Profile</p>
    </div>
    <div class="basic-information-section">
      <div class="basic-information-section-header">
        <p class="section-title">Basic Information</p>
        <div class="separator"></div>
      </div>
      <div class="basic-inputs">
        <div class="basic-input-picture">
          <img
            :src="'https://avatars.githubusercontent.com/u/26616369?v=4'"
            alt=""
            class="profile-photo"
          />
          <jmps-button :type="'primary-dark'" :suffixIcon="'icon-photo-upload'"
            >Upload Photo</jmps-button
          >
        </div>
        <div class="basic-input-columns">
          <jmps-input
            :label="'First Name'"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="newPassword"
          />
          <jmps-input
            :label="'Last Name'"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="confirmPassword"
          />
          <jmps-input
            :label="'Email'"
            :disabled="true"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="currentPassword"
          />
        </div>
        <jmps-button :type="'primary-dark'" :width="169" class="save-changes"
          >Save Changes</jmps-button
        >
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-header">
        <p class="section-title">About Me</p>
        <div class="separator"></div>
      </div>
      <div class="about-actions">
        <div class="about-inputs">
          <jmps-input
            :label="'Jumpstart Profile Url'"
            :width="460"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="newPassword"
          />
          <jmps-input
            :label="'Profile Headline (Required)'"
            :width="460"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="newPassword"
          />
          <jmps-input
            :label="'Bio'"
            :width="460"
            :labelSize="14"
            :labelWeight="'regular'"
            :type="'textarea'"
            :placeholder="''"
            v-model="newPassword"
          />
          <jmps-input
            :label="'Personal Website'"
            :width="460"
            :labelSize="14"
            :labelWeight="'regular'"
            :placeholder="''"
            v-model="newPassword"
          />
        </div>
        <div class="expertise">
          <!-- <jmps-select :label-top="'Expertise'" /> -->
        </div>
      </div>
    </div>
    <div class="social-section">
      <div class="social-section-header">
        <p class="section-title">Social Accounts</p>
        <div class="separator"></div>
      </div>
      <p class="text-secondary font-14">Link your social media profiles</p>
      <div class="add-social">
        <div v-for="name in socialIcons" :key="name">
          <JmpsInput
            :placeholder="`${name} username`"
            :height="'48px'"
            :slotname="'default'"
            :inputBoxPadding="'112px'"
            v-model="userName"
            :errorMessage="errorMessage"
            :enterClickedEnable="true"
            :validate="true"
            @enter-pressed="goToRegister"
            @focus="inputClicked"
          >
            <template #default>
              <span class="m-l-40">{{ name }}</span>
            </template>
          </JmpsInput>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import { socialIcons } from "@/constants/dashboard";
export default {
  components: {
    JmpsInput,
    JmpsButton,
  },
  name: "DashboardProfile",
  setup() {
    const currentPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const prefixStyle = {
      prefixTop: "12px",
      prefixLeft: "10px",
      prefixWidth: "24px",
      prefixHeight: "24px",
    };
    return {
      currentPassword,
      newPassword,
      confirmPassword,
      socialIcons,
      prefixStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.profile-wrapper {
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .basic-information-section {
    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      .section-title {
        min-width: fit-content;
      }
    }
    .basic-inputs {
      max-width: 100%;
      margin-top: 32px;
      display: flex;
      gap: 80px;
      justify-content: space-between;
      .profile-photo {
        width: 185px;
        height: 185px;
        border-radius: 50%;
      }
      .basic-input-columns {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 310px;
      }
      .save-changes {
      }
    }
  }
  .about-section {
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
    .about-actions {
      display: flex;
      width: 100%;
      gap: 110px;
      .about-inputs {
        min-width: 460px;
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-text {
            display: flex;
          }
        }
      }
      .expertise {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .social-section {
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
    .m-l-40 {
      margin-left: 20px;
    }
    .add-social {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>

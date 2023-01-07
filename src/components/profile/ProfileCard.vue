<template>
  <div class="profile-card-container">
    <img
      :src="'https://avatars.githubusercontent.com/u/26616369?v=4'"
      alt="profile-photo"
      class="profile-photo disable-drag"
    />
    <div class="profile-name">
      <p class="title-24 font-semibold">Akhilesh K</p>
      <img
        :src="verifiedIcon"
        alt="Verified profile"
        ref="verified-icon"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
      />
      <tooltip
        v-show="showTooltip"
        :target="() => $refs['verified-icon']"
        :showTooltip="showTooltip"
        tooltip-id="profile-card-container"
        :show-head="false"
      >
        This account has been verified by JumpStart.
      </tooltip>
    </div>
    <p class="designation font-16">Software Engineer at Jumpstart 🇮🇳</p>
    <p class="link font-14 font-medium">akhileshkumar.xyz</p>
    <div class="profile-social">
      <img
        :src="'@/assets/icons/icon-social-linkedin.svg'"
        alt=""
        class="profile-social-icon"
      />
      <img
        :src="'@/assets/icons/icon-social-twitter.svg'"
        alt=""
        class="profile-social-icon"
      />
      <img
        :src="'@/assets/icons/icon-social-instagram.svg'"
        alt=""
        class="profile-social-icon"
      />
      <img
        :src="'@/assets/icons/icon-social-youtube.svg'"
        alt=""
        class="profile-social-icon"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Tooltip from "@/components/ui/Tooltip.vue";
import verifiedIcon from "@/assets/icons/icon-verified.svg";
export default {
  name: "ProfileCard",
  components: {
    Tooltip,
  },
  setup() {
    const showTooltip = ref(false);
    return {
      showTooltip,
      verifiedIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.profile-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 64px;
  width: 356px;
  border-radius: 8px;
  border: 1px solid $primary-light;
  background-color: $white;
  box-shadow: 0px 10px 60px 0px #00000014;
  z-index: 1;
  .profile-photo {
    margin-top: 56px;
    border-radius: 50%;
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
  .profile-name {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .designation {
    margin-top: 6px;
    cursor: default;
  }
  .link {
    text-decoration: underline;
    cursor: pointer;
  }
  .profile-social {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    cursor: pointer;
    &-icon {
      width: 32px;
    }
  }
}
</style>

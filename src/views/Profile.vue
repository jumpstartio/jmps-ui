<template>
  <div class="interviewer-profile-wrapper">
    <profile-banner :bannerImg="''" />
  </div>
  <div class="profile-info-section">
    <profile-info />
  </div>
  <!-- <session-booking-modal/> -->
</template>

<script setup>
import ProfileInfo from "@/components/profile/ProfileInfo.vue";
import ProfileBanner from "@/components/profile/ProfileBanner.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.interviewer-profile-wrapper {
  display: flex;
  flex-direction: column;
}
</style>

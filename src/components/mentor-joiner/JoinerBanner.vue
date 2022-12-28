<template>
  <div class="banner-container">
    <div class="banner-container-header">
      <p class="title-40 title-semibold">
        Join 1000+ creators, experts and mentors creating
        <span class="text-main">impact</span> with their time
      </p>
    </div>
    <TestimonialBanner />
    <JmpsButton
      class="banner-container-cta"
      :type="'primary'"
      :size="'medium'"
      :height="60"
      :width="buttonWidth"
    >
      Claim your JumpStart link
    </JmpsButton>
  </div>
</template>

<script setup>
import TestimonialBanner from "@/components/mentor-joiner/TestimonialBanner.vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";
</script>

<style lang="scss" scoped>
.banner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-header {
    display: flex;
    text-align: center;
    min-width: 0;
    padding: 30px 150px;
    max-width: 800px;
  }
  &-cta {
    margin-top: 32px;
  }
}
</style>

gcloud beta container clusters get-credentials gke-qa2-sg --region asia-southeast1 --project gke-qa2-36938 --internal-ip

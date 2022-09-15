<script setup>
import ProcessItemCard from "@/components/home/ProcessItemCard.vue";
const processItems = [
  {
    icon: "illustration-resume-review",
    text: "Resume Review and Preparation Plan creation",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
  {
    icon: "illustration-mock-interview",
    text: "1:1 Mock interview session (60-75 minutes)",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
  {
    icon: "illustration-schedule",
    text: "Schedule a mock interview session ",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
  {
    icon: "illustration-feedback",
    text: "Detailed Feedback with Action items on gaps",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
  {
    icon: "illustration-mentors",
    text: "Mentors from FAANG and equivalent Companies",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
  {
    icon: "illustration-agreement",
    text: "Referral opportunity at the mentors company",
    details:
      "A mentor from one of the companies you are interested in will be assigned specifically for you.",
  },
];
</script>

<template>
  <div class="feature-banner-wrapper">
    <p class="title-semibold title-40 feature-banner-wrapper-title">
      Get <span class="text-main">structured</span> interviews preparation plan
      for your next big step
    </p>
    <div class="common-divider" />
    <div class="feature-banner-wrapper-process">
      <div v-for="item in processItems" :key="item">
        <ProcessItemCard
          :icon="item.icon"
          :title="item.text"
          :details="item.details"
        />
      </div>
    </div>
    <div class="divider" />
    <!-- <div class="common-divider" /> -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/utils.scss";
.feature-banner-wrapper {
  height: max-content;
  display: flex;
  padding: 16px 4px 8px 32px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  &-title {
    text-align: center;
    max-width: 760px;
    margin-bottom: 5px;
  }
  &-process {
    margin: 30px 0 0 0;
    width: 1080px;
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}
@media only screen and (max-width: 600px) {
  .feature-banner-wrapper {
    width: 350px;
    padding: 16px 4px 8px 32px;
    height: max-content;
    &-title {
      text-align: center;
      max-width: 400px;
      font-size: 24px;
      line-height: 32px;
    }
    &-process {
      margin: 30px 0 0 0;
      width: 400px;
      display: grid;
      grid-column-gap: 0px;
      grid-row-gap: 20px;
      grid-template-columns: 100%;
    }
  }
}
@media only screen and (min-width: 1600px) {
  .feature-banner-wrapper {
    height: 100%;
    &-title {
      text-align: center;
      max-width: 760px;
    }
  }
}
</style>

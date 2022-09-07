<template>
  <div class="feedback-section-wrapper">
    <div class="feedback-section">
      <div class="feedback-section-info">
        <div class="title title-40 title-semibold">
          Hear it from the people who made it. 💪
        </div>
        <div class="description font-16 font-regular text-secondary">
          Our community is a mix of students, professionals, and industry
          experts, who drive us and inspire us. Here’s them sharing their love.
        </div>
      </div>
      <div class="feedback-section-video">
        <video-feedback />
        <video-feedback />
        <video-feedback />
      </div>
      <div class="feedback-section-text">
        <text-feedback />
        <text-feedback />
        <text-feedback />
        <text-feedback />
      </div>
    </div>
    <JmpsButton>Read our success stories →</JmpsButton>
  </div>
</template>

<script>
import VideoFeedback from "@/components/home/VideoFeedback.vue";
import TextFeedback from "./TextFeedback.vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";
export default {
  name: "FeedbackSection",
  components: {
    VideoFeedback,
    TextFeedback,
    JmpsButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.feedback-section-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: $banner-gradiant;
  padding-bottom: 136px;
  .feedback-section {
    display: flex;
    height: 1502px;
    margin-top: 81px;
    &-info {
      max-width: 312px;
      position: sticky;
      top: 100px;
      height: 200px;
      .description {
        margin-top: 30px;
      }
    }
    &-video {
      display: flex;
      flex-direction: column;
      width: 350px;
      margin-left: 52px;
      gap: 20px;
    }
    &-text {
      display: flex;
      flex-direction: column;
      width: 611px;
      margin-top: 101px;
      margin-left: 12px;
      gap: 20px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .feedback-section-wrapper {
    align-items: center;
    .feedback-section {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
      height: 340px;
      &-info {
        max-width: 312px;
        position: relative;
        .title {
          font-size: 24px;
          line-height: 32px;
        }
        .description {
          font-size: 16px;
          line-height: 22px;
          max-width: 325px;
          margin-top: 8px;
        }
      }
      :hover {
        color: white;
      }
      &-video {
        width: 100%;
      }
      .feedback-section-video:not(:first-child) {
        display: none;
      }
      &-text:not(:first-child) {
        display: none;
      }
    }
  }
}
</style>

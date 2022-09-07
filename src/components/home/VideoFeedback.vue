<template>
  <div class="video-feedback-container">
    <div class="video-feedback-container-header">
      <img
        class="video-feedback-container-header-avatar"
        :src="userPhoto"
        alt=""
      />
      <p class="video-feedback-container-header-name title-16 title-semibold">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoFeedback",
  props: {
    userPhoto: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/26616369?v=4",
    },
    name: {
      type: String,
      default: "Akhilesh Kumar",
    },
    review: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor consectetur habitasse proin in ipsum turpis. Ut mi morbi cursus fermentum malesuada nunc. Eget tortor massa felis proin eros. Ac viverra ultrices tincidunt urna est, lobortis cursus eget integer. Urna, odio sagittis quis mauris. Sit sed ac.",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.video-feedback-container {
  width: 350px;
  height: 445px;
  border-radius: 8px;
  background-color: $primary-light;
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    align-items: center;
    margin: 24px 24px;
    gap: 22px;
    &-avatar {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  }
}
</style>

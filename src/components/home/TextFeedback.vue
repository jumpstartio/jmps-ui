<template>
  <div class="text-feedback-container">
    <div class="text-feedback-container-header">
      <div class="text-feedback-container-header-reviewer">
        <img
          class="text-feedback-container-header-avatar"
          :src="userPhoto"
          alt=""
        />
        <p class="text-feedback-container-header-name title-16 title-semibold">
          {{ name }}
        </p>
      </div>
      <div class="text-feedback-container-header-linkedin">
        <img src="@/assets/icons/icon-linkedin-color.svg" alt="" />
      </div>
    </div>
    <div class="text-feedback-container-body font-14 text-secondary">
      <p class="text-feedback-container-body title-16">
        {{ title }}
      </p>
      {{ review }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TextFeedback",
  props: {
    userPhoto: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/26616369?v=4",
    },
    name: {
      type: String,
      default: "Akhilesh Kumar",
    },
    title: {
      type: String,
      default: "I finally cracked my dream interview @ Amazon!",
    },
    review: {
      type: String,
      default:
        "It really helped to boost my confidence up which was missing earlier. The Interviewer and the mentors I met were awesome, no doubt about it. I learned a lot of things from them that will definitely help me in the future. Anyone can opt for this package without any doubts.",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/fonts.scss";
@import "@/styles/library/icons.scss";

.text-feedback-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 502px;
  height: 305px;
  border-radius: 8px;
  background-color: $primary-light;
  display: flex;
  align-items: center;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 439px;
    margin-top: 24px;
    display: flex;
    &-reviewer {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    &-avatar {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  }
  &-body {
    padding: 24px 24px 0 24px;
    text-align: left;
  }
}
</style>

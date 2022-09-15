<template>
  <div class="card-wrapper" tabindex="0">
    <div class="card-wrapper-number title-24 title-semibold">{{ index }}</div>
    <div class="card-wrapper-info-container">
      <div class="card-wrapper-info-container-title">
        {{ title }}
      </div>
      <div class="card-wrapper-info-container-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorksCard",
  props: {
    index: {
      type: String,
      default: "01",
    },
    title: {
      type: String,
      default: "Find your interviewer",
    },
    description: {
      type: String,
      default:
        "You can search across 100+ interviewers or companies or job description to find the match.",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.card-wrapper {
  display: flex;
  border: 1px solid $border-color;
  border-radius: 8px;
  min-height: 80px;
  width: 720px;
  &-number {
    margin-top: 12px;
    margin-left: 16px;
  }
  &-info-container {
    display: flex;
    padding: 12px 24px;
    flex-direction: column;
    &-title {
      font-size: 19px;
      font-weight: 700;
    }
    &-description {
      margin-top: 12px;
      font-size: 16px;
      font-weight: 400;
    }
  }
  &:hover {
    background-color: $banner-background-light;
    cursor: default;
  }
}
@media only screen and (max-width: 600px) {
  .card-wrapper {
    width: 340px;
    &-number {
      font-size: 16px;
      color: $grey;
    }
    &-info-container {
      width: 290px;
      &-title {
        font-size: 16px;
        line-height: 22px;
      }
      &-description {
        color: $grey;
        font-size: 14px;
        line-height: 22.4px;
      }
    }
    &:hover {
      background-color: none;
      cursor: default;
    }
  }
}
</style>

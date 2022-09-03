<template>
  <div class="feature-banner-wrapper">
    <p class="title-semibold title-40 feature-banner-wrapper-title">
      Get structured interviews preparation plan for your next big step
    </p>
    <div class="common-divider" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/utils.scss";
.feature-banner-wrapper {
  height: 100%;
  &-title {
    text-align: center;
    max-width: 760px;
    margin-bottom: 5px;
  }
}
@media only screen and (max-width: 600px) {
  .feature-banner-wrapper {
    height: 100%;
    &-title {
      text-align: center;
      max-width: 760px;
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>

<template>
  <div class="info-wrapper" tabindex="0">
    <div class="image-container">
      <img
        src="@/assets/illustrations/illustration-howitworks.svg"
        class="image-container-image"
        alt=""
      />
    </div>
    <div class="steps-container">
      <div class="steps-container-title title-40 title-semibold">
        Remove the guesswork. Connect with engineers from your <span class="text-main">dream company</span>.
      </div>
      <div class="common-divider steps-container-divider" />
      <p class="text-medium steps-container-description">
        No more firing shots in the air. Solve problems in a hand crafted order
        to get most out every problem you solve.
      </p>
      <div class="steps-container-cards-wrapper">
        <div v-for="step in infoSteps" :key="step">
          <how-it-works-card
            :index="step.index"
            :title="step.title"
            :description="step.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { infoSteps } from "@/constants/home";
import HowItWorksCard from "@/components/home/HowItWorksCard.vue";
export default {
  name: "HowItWorks",
  components: {
    HowItWorksCard,
  },
  setup() {
    return {
      infoSteps,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/utils.scss";

.info-wrapper {
  display: flex;
  flex-direction: row-reverse;
  height: max-content;
  padding: 16px 24px 8px 80px;
  margin: 0 auto;
  align-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  gap: 64px;
  .image-container {
    border-radius: 8px;
    background: $banner-background-light;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .steps-container {
    margin: 24px 0;
    &-divider {
      float: left;
      margin-top: 24px;
    }
    &-description {
      margin-top: 44px;
      max-width: 700px;
    }
    &-cards-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      gap: 16px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .info-wrapper {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    margin-left: 0;
    .image-container {
      width: 340px;
      margin-top: 22px;
      margin-left: 0;
      img {
        width: 294px;
        padding: 14px 22px;
      }
    }
    .steps-container {
      width: 100%;
      margin-left: 0;
      margin-top: 0;
      &-title {
        font-size: 24px;
        line-height: 32px;
      }
      &-cards-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 16px;
        width: 100%;
      }
    }
  }
}
</style>

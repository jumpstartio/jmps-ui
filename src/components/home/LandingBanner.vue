<template>
  <div class="banner-wrapper" :style="`min-hight: ${pageHeight}`">
    <div class="banner-wrapper-content">
      <div class="banner-wrapper-content-text-container">
        <div
          class="banner-wrapper-content-text-container-title title-48 title-bold"
        >
          <slot></slot>
        </div>
        <div
          class="banner-wrapper-content-text-container-description font-20 font-medium"
        >
          {{ description }}
        </div>
        <JmpsButton
          class="banner-wrapper-content-text-container-cta"
          :type="'primary'"
          :size="'medium'"
          :height="buttonHeight"
          :width="buttonWidth"
        >
          {{ buttonText }}
        </JmpsButton>
      </div>
      <div
        class="banner-wrapper-content-illustration"
        :style="`width: ${width}${unit};height: ${height}${unit}`"
      >
        <img :src="bannerImage" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import JmpsButton from "../ui/JmpsButton.vue";
export default {
  name: "LandingBanner",
  props: {
    title: {
      type: String,
      default: "Get really good at Sofwtare engineering interviews",
    },
    description: {
      type: String,
      default:
        "Get interview ready through 1-on-1 mentoring sessions with engineers from top product companies",
    },
    bannerImage: {
      type: String,
      default: "src/assets/illustrations/illustration-home.svg",
    },
    height: {
      type: Number,
      default: 454,
    },
    width: {
      type: Number,
      default: 454,
    },
    unit: {
      type: String,
      default: "px",
    },
    pageHeight: {
      type: String,
      default: "552px",
    },
    buttonText: {
      type: String,
      default: "Get Started →",
    },
    buttonWidth: {
      type: Number,
      default: 250,
    },
    buttonHeight: {
      type: Number,
      default: 60,
    }
  },
  components: { JmpsButton },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.banner-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  background: $banner-gradiant;
  &-content {
    max-width: 1340px;
    display: flex;
    &-text-container {
      padding: 129px 0 0 120px;
      display: flex;
      flex-direction: column;
      &-description {
        max-width: 703px;
      }
      &-cta {
        margin-top: 24px;
      }
    }
    &-illustration {
      margin: 80px 0px 0 0px;
      transform: scale(1.1);
    }
  }
}
@media only screen and (max-width: 600px) {
  .banner-wrapper {
    flex-direction: column;
    height: 100%;
    min-height: 400px;
    &-content {
      max-width: 400px;
      &-text-container {
        padding: 80px 16px 0 16px;
        gap: 20px;
        width: 336px;
        &-title {
          font-size: 24px;
          line-height: 32px;
        }
        &-description {
          font-size: 16px;
          line-height: 22px;
          max-width: 325px;
        }
        &-cta {
          margin-top: 10px;
        }
      }
      &-illustration {
        display: none;
      }
    }
  }
}
@media only screen and (min-width: 1600px) {
  .banner-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 552px;
    height: 100%;
    background: $banner-gradiant;
    &-text-container {
      padding: 129px 0 0 180px;
      display: flex;
      flex-direction: column;
      &-description {
        max-width: 100%;
      }
      &-cta {
        margin-top: 24px;
      }
    }
    &-illustration {
      padding: 0 80px;
      margin: 80px 190px 0 0px;
    }
  }
}
</style>

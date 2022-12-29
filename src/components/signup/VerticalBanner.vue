<template>
  <div class="vertical-banner">
    <div class="container">
      <img
        src="@/assets/illustrations/illustration-signin.svg"
        alt=""
        class="container-sideimg"
      />
      <p class="title-24 title-bold container-title">{{ title }}</p>
      <p class="font-16 font-regular text container-description">{{ description }}</p>
      <div class="container-users">
        <img
          src="@/assets/images/image-signup-users-stacked.svg"
          alt=""
          class="container-users-image disable-drag"
        />
        <p class="font-13 container-users-subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalBanner",
  props: {
    title: {
      type: String,
      default: "jumpstart is ultimate platform to practice interviews",
    },
    description: {
      type: String,
      default:
        "Get interview ready through 1-on-1 mentoring and mock interview sessions with engineers from top product companies",
    },
    subtitle: {
      type: String,
      default: "1k+ people are already loving us, now its your turn.",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.vertical-banner {
  background-color: #4637ae;
  height: 100vh;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  width: 804px;
  display: inline-block;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 0;
    align-items: center;
    justify-content: center;
    &-sideimg {
      margin: 0;
      height: 400px;
      width: 300px;
    }
    &-title {
      color: $white;
      margin: 0;
    }
    &-description {
      margin-top: 16px;
      color: $white;
      max-width: 700px;
      text-align: center;
    }
    &-users {
      display: flex;
      margin-top: 40px;
      &-subtitle {
        margin-left: 8px;
        color: $white;
      }
    }
  }
}
</style>

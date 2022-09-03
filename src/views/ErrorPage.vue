<template>
  <div class="error-wrapper">
    <div class="error-wrapper-container">
      <p class="title-32 title-bold">I lost the map bro!</p>
      <img
        src="@/assets/illustrations/illustration-error.svg"
        alt=""
        class="disable-drag"
      />
      <div class="error-wrapper-button">
        <p class="font-16 font-medium"><a href="/">Let's move to home</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.error-wrapper {
  background-color: $primary-dark;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    color: $white;
    text-align: center;
    cursor: default;
  }
  img {
    margin-top: 60px;
  }
  &-button {
    margin-top: 60px;
    padding: 0 24px;
    background-color: $primary-light;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
      color: $primary-dark;
    }
    a {
      text-decoration: none;
    }
  }
}
@media only screen and (max-width: 600px) {
  .error-wrapper {
    img {
      margin-top: 20px;
    }
  }
}
</style>

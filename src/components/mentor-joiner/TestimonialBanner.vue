<template>
  <div class="testimonial-banner-container">
    <img
      src="https://avatars.githubusercontent.com/u/26616369?v=4"
      alt=""
      class="testimonal-user-image"
    />
    <div class="testimonial-banner-container-testimony">
      <p class="title-17">
        Topmate is hands down the best tool I've used this year. It helped me
        become the senior I always wanted as a junior - <span class="title-medium"> Akhilesh Kumar</span>
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.testimonial-banner-container {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  gap: 5px 20px;
  &-testimony {
    border-left: 2px solid $primary-main;
    padding: 0 20px;
    max-height: 80px;
  }
  .testimonal-user-image {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}
</style>

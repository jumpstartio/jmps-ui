<template>
  <div class="review-wrapper">
    <div class="review-wrapper-header">
      <p class="title-32 title-semibold text-secondary">Reviews</p>
    </div>
    <div class="review-wrapper-reviews">
      <!-- <write-review /> -->
    </div>
  </div>
</template>

<script>
// import WriteReview from "./WriteReview.vue";
export default {
  components: {
    // WriteReview,
  },
  name: "DashboardReview",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.review-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-reviews {
    display: flex;
    flex-direction: column;
  }
}
</style>

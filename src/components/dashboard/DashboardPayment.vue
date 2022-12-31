<template>
  <div class="review-wrapper">
    <div class="review-wrapper-header">
      <p class="title-32 title-semibold text">Payment History</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "DashboardPayment",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.review-wrapper {
  display: flex;
  flex-direction: column;
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

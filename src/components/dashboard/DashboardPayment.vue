<template>
  <div class="review-wrapper">
    <div class="review-wrapper-header">
      <p class="title-32 title-semibold text-secondary">Payment History</p>
    </div>
    <div class="review-wrapper-reviews">
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'DashboardPayment',
  setup () {
    return {
    }
  }
}
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

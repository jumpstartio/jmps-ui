<template>
  <div class="review-wrapper">
    <!-- <write-review-bar /> -->
    <div v-for="i in 3" :key="i">
      <interviewer-review-card class="review-wrapper-card" />
    </div>
  </div>
</template>

<script>
// import WriteReviewBar from "@/components/reviews/WriteReviewBar.vue";
import InterviewerReviewCard from "@/components/reviews/InterviewerReviewCard.vue";
export default {
  name: "ProfileReviewsTab",
  components: {
    // WriteReviewBar,
    InterviewerReviewCard,
  },
  props: {},
};
</script>

<style lang="scss" scoped>
.review-wrapper {
  display: flex;
  flex-direction: column;
  &-card {
    margin-top: 24px;
  }
}
</style>

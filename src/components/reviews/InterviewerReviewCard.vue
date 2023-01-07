<template>
  <div class="interviewer-reviewe-card-wrapper">
    <div class="details">
      <div class="reviewer-details">
        <img
          :src="require('@/assets/images/profile-photo.png')"
          alt="Reviewer Profile Photo"
        />
        <p class="font-16 font-medium">{{ review.reviewer }}</p>
        <!-- <star-rating :readOnly="true" :showRating="true" :starSize="12"/> -->
      </div>
      <p class="review-date caption-regular text-secondary">
        {{ review.date }}
      </p>
    </div>
    <p class="review-text font-14">{{ review.review }}</p>
  </div>
</template>

<script>
// import StarRating from "@/components/ui/StarRating.vue";
export default {
  name: "InterviewerReviewCard",
  components: {
    // StarRating,
  },
  props: {
    review: {
      type: Object,
      default: () => ({
        reviewer: "Naga Deepak",
        date: "1st October 2021",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.interviewer-reviewe-card-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid $primary-light;
  border-radius: 8px;
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }
  .reviewer-details {
    display: flex;
    align-items: center;
    gap: 16px;
    img {
      object-fit: cover;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .review-text {
    padding: 0 30px;
  }
}
</style>

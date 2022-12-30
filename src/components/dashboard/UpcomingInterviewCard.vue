<template>
  <div class="upcoming-interview-card">
    <p class="title-16 title-semibold">Upcoming Bookings</p>
    <p class="title-16 title-medium text-secondary interview-name">
      Interview with <span class="text-main">Paarmita Bhargava</span>
    </p>
    <div class="interview-date">
      <img src="'@/assets/icons/icon-calendar.svg'" alt="" />
      <p class="font-14 font-medium text-secondary">
        Thu, Sep 09 9:15 pm - 10:00 pm
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpcomingInterviewCard",
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.upcoming-interview-card {
  display: flex;
  flex-direction: column;
  padding: 28px 0 28px 24px;
  border: 1px solid rgba(118, 116, 119, 0.5);
  border-radius: 8px;
  width: 468px;
  box-sizing: border-box;
  background-color: $secondary-light;
  .interview-name {
    margin: 16px 0 0 0;
  }
  .interview-date {
    display: flex;
    gap: 16px;
    align-items: center;
  }
}
</style>

<template>
  <div class="booking-card-container">
    <div class="booking-card-container-header">
      <p class="title-16 title-medium title">
        Interview with {{ getFirstName(bookingData.interviewerName) }}
      </p>
      <dropdown-menu :right="true" :interactive="true">
        <jmps-button
          :height="28"
          :type="'ellipsis'"
          :size="'small'"
          :icon="'icon-ellipsis-black'"
        />
        <template #dropdown>
          <p class="title-16 title-medium cursor-pointer">Reschedule</p>
          <p class="title-16 title-medium text-error cursor-pointer">Cancel</p>
        </template>
      </dropdown-menu>
    </div>
    <p class="caption-medium topic">{{ bookingData.interviewTopic }}</p>
    <div class="interview-date">
      <img :src="'@/assets/icons/icon-calendar.svg'" alt="" />
      <p class="font-14 font-medium text-secondary">
        {{
          formatToDateTimezone(
            bookingData.schedule,
            getCurrentTimeZone(),
            dateFormat.DoMMM
          )
        }}
      </p>
      <img :src="'@/assets/icons/icon-clock.svg'" alt="" />
      <p class="font-14 font-medium text-secondary">
        {{
          formatToDateTimezone(
            bookingData.schedule,
            getCurrentTimeZone(),
            dateFormat.hmma
          )
        }}
      </p>
    </div>
    <jmps-button type="secondary" @button-clicked="showInterviewDetails"
      >Details</jmps-button
    >
  </div>
</template>

<script>
import {
  getFirstName,
  getCurrentTimeZone,
  formatToDateTimezone,
} from "@/utils/helper";
import { dateFormat } from "@/constants/date-format";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import DropdownMenu from "@/components/ui/DropdownMenu.vue";

export default {
  name: "BookingCard",
  emits: ["show-interview-details"],
  props: {
    bookingData: {
      type: Object,
      default: () => ({
        interviewerName: "Akhilesh Kumar",
        interviewerPhoto:
          "https://avatars.githubusercontent.com/u/26616369?v=4",
        interviewTopic: "Backend Engineering",
        designation: "Software Engineer",
        company: "Quinbay",
        schedule: "2021-10-31T01:30:00.000-05:00",
        duration: 30,
        notes:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet luctus vitae, volutpat rhoncus. Nibh adipiscing urna, et etiam faucibus interdum. Diam duis gravida bibendum amet proin. Dolor nulla id a tristique libero diam vel massa, laoreet. Proin lectus justo, eu augue at. Posuere sit non at gravida ut. Netus et in vulputate aliquam ut. Non sem tristique tristique.",
      }),
    },
  },
  components: {
    JmpsButton,
    DropdownMenu,
  },
  setup(props, { emit }) {
    const showInterviewDetails = () => {
      emit("show-interview-details", props.bookingData);
    };
    return {
      dateFormat,
      formatToDateTimezone,
      getCurrentTimeZone,
      getFirstName,
      showInterviewDetails,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.booking-card-container {
  display: flex;
  flex-direction: column;
  max-width: 399px;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid $primary-light;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 35px 24px 31px 24px;
  &-header {
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin: 0;
  }
  .topic {
    border: 1px solid $grey;
    background-color: $primary-main;
    color: $white;
    border-radius: 16px;
    padding: 2px 8px;
    width: max-content;
  }
  .interview-date {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 40px;
  }
}
</style>

<template>
  <main>
    <jmps-modal
      @closeModal="modalClosed"
      @esc-pressed="modalClosed"
      :showCloseButton="true"
    >
      <template #header>
        <div class="details-header">
          <p class="title-24 title-medium text-secondary details-header-text">
            {{
              `${bookingData.interviewTopic} Interview with ${getFirstName(
                bookingData.interviewerName
              )}`
            }}
          </p>
          <div class="separator" />
        </div>
      </template>
      <template #body>
        <div class="interviewe-details">
          <div class="interviewer-profile">
            <img :src="bookingData.interviewerPhoto" alt="" />
            <div class="interviewer-name">
              <p class="font-16 font-medium">
                {{ bookingData.interviewerName }}
              </p>
              <p class="font-16 text-secondary">
                {{ `${bookingData.designation} at ${bookingData.company}` }}
              </p>
            </div>
          </div>
          <p class="font-16 schedule text-secondary schedule">Schedule</p>
          <div class="interview-schedule">
            <div class="date">
              <img :src="require('@/assets/icons/icon-calendar.svg')" alt="" />
              <p class="font-14 font-medium">
                {{
                  formatToDateTimezone(
                    bookingData.schedule,
                    getCurrentTimeZone(),
                    dateFormat.DoMMM
                  )
                }}
              </p>
            </div>
            <div class="time">
              <img :src="require('@/assets/icons/icon-clock.svg')" alt="" />
              <p class="font-14 font-medium">
                {{
                  formatToDateTimezone(
                    bookingData.schedule,
                    getCurrentTimeZone(),
                    dateFormat.hmma
                  )
                }}
              </p>
            </div>
          </div>
          <p class="font-16 schedule text-secondary schedule">Your Notes</p>
          <p class="notes">
            {{ bookingData.notes }}
          </p>
        </div>
      </template>
      <template #footer>
        <div class="actions">
          <p class="title-16 title-semibold cursor-pointer">Reschedule</p>
          <p class="title-16 title-semibold text-error cursor-pointer">
            Cancel
          </p>
        </div>
      </template>
    </jmps-modal>
  </main>
</template>

<script>
import {
  getFirstName,
  getCurrentTimeZone,
  formatToDateTimezone,
} from "@/utils/helper";
import { dateFormat } from "@/constants/date-format";
import JmpsModal from "@/components/dashboard/JmpsModal.vue";
export default {
  name: "BookingDetailsModal",
  emits: ["close-interview-details"],
  components: { 
    JmpsModal,
  },
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
  setup(props, { emit }) {
    const modalClosed = () => {
      emit("close-interview-details");
    };
    return {
      dateFormat,
      formatToDateTimezone,
      getCurrentTimeZone,
      getFirstName,
      modalClosed,
    };
  },
};
</script>

<style lang="scss" scoped>
.details-header {
  padding: 54px 51px 0 51px;
  &-text {
    margin: 0 0 14px 0;
  }
}
.interviewe-details {
  flex-direction: column;
  display: flex;
  padding: 0 51px;
  .interviewer-profile {
    display: flex;
    align-items: center;
    gap: 28px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
  }
  .schedule {
    margin: 0;
  }
  .interview-schedule {
    display: flex;
    align-items: center;
    gap: 72px;
    .date {
      display: flex;
      gap: 16px;
    }
    .time {
      display: flex;
      gap: 16px;
    }
  }
  .notes {
    max-width: 739px;
  }
}
.actions {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  padding-bottom: 16px;
}
</style>

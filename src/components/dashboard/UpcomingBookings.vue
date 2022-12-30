<template>
  <div class="upcoming-bookings-container">
    <p class="title-32 title-semibold text-secondary title">
      Upcoming Bookings
    </p>
    <div v-if="!upcomingBookings.length">
      <p class="title-16 title-medium text-secondary no-booking-message">
        You have no upcoming bookings. Make a booking to start sharing a
        conversation with an interviewer.
      </p>
      <jmps-button
        type="primary-dark"
        :width="206"
        :height="54"
        @button-clicked="exploreInterviewers"
        >Explore Interviewers
      </jmps-button>
    </div>
    <div v-if="upcomingBookings.length" class="booking-cards">
      <div v-for="booking in bookingData" :key="booking">
        <booking-card
          :bookingData="booking"
          @show-interview-details="showBookingDetailModal(data)"
        />
      </div>
      <booking-details-modal
        v-if="showBookingModal"
        @close-interview-details="closeBookingDetailModal"
        :bookingData="bookingDataModal"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import BookingCard from "@/components/dashboard/BookingCard.vue";
import BookingDetailsModal from "@/components/dashboard/BookingDetailsModal.vue";
export default {
  name: "UpcomingBookings",
  components: {
    JmpsButton,
    BookingCard,
    BookingDetailsModal,
  },
  props: {
    bookingData: {
      type: Array,
      default: null,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    const upcomingBookings = ref(["1"]);
    const showBookingModal = ref(false);
    const bookingDataModal = ref(null);
    const showBookingDetailModal = (data) => {
      bookingDataModal.value = data;
      showBookingModal.value = true;
    };
    const closeBookingDetailModal = () => {
      bookingDataModal.value = null;
      showBookingModal.value = false;
    };
    const exploreInterviewers = () => {
      router.push("/interviewers");
    };
    return {
      closeBookingDetailModal,
      exploreInterviewers,
      upcomingBookings,
      showBookingDetailModal,
      showBookingModal,
      bookingDataModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.upcoming-bookings-container {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  .title {
    margin-bottom: 0;
  }
  .no-booking-message {
    margin-top: 24px;
  }
  .booking-cards {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>

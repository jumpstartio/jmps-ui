<template>
  <div class="dashboard-wrapper">
    <div class="left-nav-container">
      <dashboard-left-nav class="nav-toc" />
      <div class="left-nav-separator" />
    </div>
    <div class="dashboard-item-container">
      <dashboard-profile-completion-guide v-if="renderDashboardComponents" />
      <upcoming-interview-card v-if="renderDashboardComponents" />
      <upcoming-bookings
        v-if="renderUpcomingBookingsComponents"
        :bookingData="bookingData"
      />
      <dashboard-payment v-if="renderPaymentComponents" />
      <dashboard-review v-if="renderReviewComponents" />
      <dashboard-settings v-if="renderSettingsComponents" />
      <dashboard-profile v-if="renderProfileComponents" />
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { bookingData } from "@/constants/dashboard";
import DashboardLeftNav from "@/components/dashboard/DashboardLeftNav.vue";
import DashboardProfileCompletionGuide from "@/components/dashboard/DashboardProfileCompletionGuide.vue";
import UpcomingInterviewCard from "@/components/dashboard/UpcomingInterviewCard.vue";
import UpcomingBookings from "@/components/dashboard/UpcomingBookings.vue";
import DashboardSettings from "@/components/dashboard/DashboardSettings.vue";
import DashboardProfile from "@/components/dashboard/DashboardProfile.vue";
import DashboardReview from "@/components/dashboard/DashboardReview.vue";
import DashboardPayment from "@/components/dashboard/DashboardPayment.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardLeftNav,
    DashboardProfileCompletionGuide,
    UpcomingInterviewCard,
    UpcomingBookings,
    DashboardSettings,
    DashboardProfile,
    DashboardReview,
    DashboardPayment,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const renderDashboardComponents = ref(false);
    const renderUpcomingBookingsComponents = ref(false);
    const renderPaymentComponents = ref(false);
    const renderReviewComponents = ref(false);
    const renderProfileComponents = ref(false);
    const renderSettingsComponents = ref(false);
    onBeforeMount(() => {
      if (route.query.navigate === undefined) {
        router.push({ path: "/dashboard", query: { navigate: "dashboard" } });
      }
    });

    watch(
      () => route.query,
      () => {
        if (route.query.navigate === "dashboard") {
          renderProfileComponents.value = false;
          renderReviewComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderSettingsComponents.value = false;
          renderPaymentComponents.value = false;
          renderDashboardComponents.value = true;
        } else if (route.query.navigate === "bookings") {
          renderProfileComponents.value = false;
          renderReviewComponents.value = false;
          renderDashboardComponents.value = false;
          renderPaymentComponents.value = false;
          renderSettingsComponents.value = false;
          renderUpcomingBookingsComponents.value = true;
        } else if (route.query.navigate === "payments") {
          renderProfileComponents.value = false;
          renderReviewComponents.value = false;
          renderDashboardComponents.value = false;
          renderSettingsComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderPaymentComponents.value = true;
        } else if (route.query.navigate === "reviews") {
          renderProfileComponents.value = false;
          renderDashboardComponents.value = false;
          renderSettingsComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderPaymentComponents.value = false;
          renderReviewComponents.value = true;
        } else if (route.query.navigate === "profile") {
          renderReviewComponents.value = false;
          renderDashboardComponents.value = false;
          renderSettingsComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderPaymentComponents.value = false;
          renderProfileComponents.value = true;
        } else if (route.query.navigate === "settings") {
          renderProfileComponents.value = false;
          renderReviewComponents.value = false;
          renderPaymentComponents.value = false;
          renderDashboardComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderSettingsComponents.value = true;
        } else {
          renderProfileComponents.value = false;
          renderReviewComponents.value = false;
          renderPaymentComponents.value = false;
          renderUpcomingBookingsComponents.value = false;
          renderSettingsComponents.value = false;
          renderDashboardComponents.value = true;
        }
      },
      { immediate: true }
    );
    return {
      bookingData,
      renderDashboardComponents,
      renderUpcomingBookingsComponents,
      renderSettingsComponents,
      renderProfileComponents,
      renderReviewComponents,
      renderPaymentComponents,
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  display: flex;
  padding-bottom: 104px;
  background-color: #fbf9f9;
  .left-nav-container {
    display: flex;
    width: 300px;
    height: 100vh;
    position: fixed;
    top: 0px;
    .nav-toc {
      padding: 90px 0 0 16px;
    }
    .left-nav-separator {
      border-right: 0.5px solid #f0f2f4;
      height: 100%;
      box-sizing: border-box;
    }
  }
  .dashboard-item-container {
    background-color: white;
    margin-top: 90px;
    border-radius: 8px;
    margin-left: 260px;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    padding-bottom: 70px;
    box-sizing: border-box;
    width: 100%;
    padding-right: 135px;
    gap: 38px;
  }
}
</style>

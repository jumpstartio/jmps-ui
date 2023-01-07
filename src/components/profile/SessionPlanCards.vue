<template>
  <div class="plan-container">
    <div class="plan-details">
      <div class="plan-name">
        <p class="title-16 title-semibold">System Design Mock Interview</p>
        <div class="plan-slot">
          <p class="caption-medium">60 min slot</p>
          <p class="caption-medium">Rs. 999</p>
        </div>
      </div>
      <p class="font-14 text-secondary plan-description">
        Practice System Design Interviews for acing the high level and low level
        design problems.
      </p>
    </div>
    <jmps-button>Book</jmps-button>
  </div>
</template>

<script>
import JmpsButton from "@/components/ui/JmpsButton.vue";
export default {
  name: "SessionPlanCards",
  components: {
    JmpsButton,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.plan-container {
  display: flex;
  width: 100%;
  border: 1px solid $border-color;
  border-radius: 8px;
  box-sizing: border-box;
  height: 110px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  .plan-details {
    max-width: 515px;
    p {
      margin: 4px;
    }
    display: flex;
    flex-direction: column;
    .plan-name {
      max-width: 475px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .plan-slot {
        display: flex;
        gap: 16px;
      }
    }
  }
}
</style>

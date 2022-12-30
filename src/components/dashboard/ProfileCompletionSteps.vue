<template>
  <div class="profile-completion-steps-container">
    <div v-for="step in completionSteps" :key="step">
      <completion-step :step="step" class="step" />
      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
import CompletionStep from "@/components/dashboard/CompletionStep.vue";

export default {
  name: "ProfileCompletionSteps",
  components: {
    CompletionStep,
  },
  props: {
    completionSteps: {
      type: Array,
      default: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.profile-completion-steps-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: $secondary-light;
  border: 1px solid rgba(118, 116, 119, 0.5);
  border-radius: 8px;
  .step {
    padding: 24px;
  }
}
</style>

<template>
  <div class="profile-completion-guide">
    <p class="title-32 title-semibold">Hello Akhilesh 👋</p>
    <p class="sub-title title-24 title-semibold">
      Let's complete your profile.
    </p>
    <p class="description text-secondary">
      Get more by setting up a profile you will love.
    </p>
    <progressbar :progress="progress" />
    <profile-completion-steps
      :completionSteps="completionSteps"
      class="steps-card"
    />
  </div>
</template>

<script>
import { completionSteps } from "@/constants/dashboard";
import Progressbar from "@/components/ui/Progressbar.vue";
import ProfileCompletionSteps from "@/components/dashboard/ProfileCompletionSteps.vue";
export default {
  name: "DashboardProfileCompletionGuide",
  components: {
    Progressbar,
    ProfileCompletionSteps,
  },
  setup() {
    const progress =
      (completionSteps.filter((obj) => obj.completed === true).length * 100) /
      completionSteps.length;
    return {
      completionSteps,
      progress,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-completion-guide {
  padding-top: 110px;
  .steps-card {
    margin-top: 38px;
  }
}
</style>

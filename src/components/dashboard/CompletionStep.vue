<template>
  <div class="completion-step-container">
    <img :class="[step.completed ? 'completed-icon' : 'incomplete']" alt="">
    <div class="step">
      <p :class="[step.completed ? 'text-secondary text-strikeoff' : 'text-main' ,'title-16 title-medium title']">{{ step.title }}</p>
      <p class="caption-regular description">{{ step.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompletionStep',
  props: {
    step: {
      type: Object,
      default: () => (
        {
          title: 'Verify Email',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          completed: true
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";

.completion-step-container {
  display: flex;
  gap: 16px;
  align-items: center;
  .completed-icon {
    content: $icon-completion;
  }
  .incomplete {
    background-color: $grey;
    height: 32px;
    width: 32px;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    .title {
      margin: 0;
    }
    .description {
      margin: 0;
    }
  }
}
</style>

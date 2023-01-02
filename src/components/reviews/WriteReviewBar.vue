<template>
  <div class="write-review-wrapper">
    {{ actionStatement }}
    <js-button :type="buttonType">{{ buttonText }}</js-button>
  </div>
</template>

<script>
import JsButton from '@/components/ui/JsButton.vue'
export default {
  name: 'WriteReviewBar',
  components: {
    JsButton
  },
  props: {
    actionStatement: {
      type: String,
      default: 'Tell us about your experience'
    },
    buttonText: {
      type: String,
      default: 'Write a review'
    },
    buttonType: {
      type: String,
      default: 'secondary'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.write-review-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 72px;
  background-color: $secondary-light;
  border-radius: 8px;
}
</style>

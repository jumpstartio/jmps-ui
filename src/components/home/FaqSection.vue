<template>
  <div class="faq-section-wrapper">
    <div class="faq-section-wrapper-container">
      <div class="faq-section-wrapper-container-info">
        <p class="title-40 title-semibold">Frequently asked questions</p>
        <p class="font-20">Can't find the answer you are looking for?</p>
        <p
          class="font-17 cursor-pointer title-semibold text-main"
          @click="scrollToAction"
        >
          Reach out to us
        </p>
      </div>
      <div class="faq-section-wrapper-container-faqs">
        <FaqAccordian :faq="faqs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FaqAccordian from "@/components/ui/FaqAccordian.vue";
const emit = defineEmits(["scroll-to-action"]);
defineProps({
  faqs: {
    type: Array,
    required: true,
    default: null,
  },
})
const scrollToAction = () => {
  emit("scroll-to-action");
};
</script>

<style lang="scss" scoped>
.faq-section-wrapper {
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 90px 0 40px;
  flex-direction: column;
  &-container {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    &-info {
      display: block;
      flex: 0 0 40%;
      max-width: 40%;
    }
    &-faqs {
      display: block;
      flex: 0 0 60%;
      max-width: 60%;
      margin-top: -32px;
    }
  }
}
</style>

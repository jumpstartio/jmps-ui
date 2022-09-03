<script setup>
defineProps({
  type: {
    type: String,
    required: true,
    default: () => "Book a call with us",
  },
  details: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="contact-container">
    <div class="contact-container-icon">
      <img :src="`src/assets/icons/${icon}.svg`" alt="" class="" />
    </div>
    <div class="contact-container-contact">
      <p class="font-14">{{ type }}</p>
      <p class="font-14 font-medium">{{ details }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.contact-container {
  display: flex;
  border: 1px solid $grey-border;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  max-height: 80px;
  min-width: 320px;
  align-items: center;
  &-icon {
    padding: 0 40px 0 16px;
  }
  &-contact {
    margin-left: auto;
    padding-right: 24px;
    text-align: right;
  }
}
</style>

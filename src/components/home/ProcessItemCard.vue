<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="process-item-container">
    <img :src="`src/assets/icons/${icon}.svg`" alt="" class="process-icon" />
    <p class="font-16 font-medium">{{ title }}</p>
    <p class="font-14">{{ details }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.process-item-container {
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  text-align: justify;
}
.process-icon {
  width: 2.5rem;
  height: 2.5rem;
  max-width: none;
  margin-bottom: 0;
  border-radius: 0;
  opacity: 1;
}
</style>

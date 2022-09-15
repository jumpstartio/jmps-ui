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
    <div class="icon-container">
      <img
        :src="`src/assets/illustrations/${icon}.png`"
        alt=""
        class="process-icon"
      />
    </div>
    <p class="title-19 title-medium process-item-container-title">
      {{ title }}
    </p>
    <p class="font-16 process-item-container-description text-secondary">
      {{ details }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/fonts.scss";
.process-item-container {
  box-sizing: border-box;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  text-align: left;
  &-title {
    margin: 6px 0;
    text-align: center;
  }
  &-description {
    margin: 6px 0;
    text-align: center;
  }
}
.icon-container {
  display: flex;
  margin: auto;
}
.process-icon {
  width: 3rem;
  height: 3rem;
  max-width: none;
  margin-bottom: 0;
  border-radius: 0;
  opacity: 1;
}
</style>

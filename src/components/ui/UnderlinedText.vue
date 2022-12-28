<template>
  <div class="underlined-container">
    <p :class="fontStyle">{{ text }}</p>
    <img
      :src="underline"
      alt=""
      class="underlined-container-scratch"
      :style="`width: ${scratchWidth}`"
    />
  </div>
</template>

<script setup>
defineProps({
  underline: {
    type: String,
    default: "src/assets/illustrations/illustration-scratch.svg",
  },
  text: {
    type: String,
    required: true,
  },
  fontStyle: {
    type: String,
    default: "title-19",
  },
  scratchWidth: {
    type: String,
    default: "350px",
  },
});
</script>

<style lang="scss" scoped>
.underlined-container {
  display: flex;
  flex-direction: column;
  &-scratch {
    margin-top: -20px;
  }
}
</style>

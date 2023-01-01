<template>
  <div class="total" :style="bar">
    <div class="completed" :style="completed"></div>
  </div>
</template>

<script>
import { computed } from "vue";
import variables from "@/styles/library/colors.scss";

export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      default: 100,
      required: true,
    },
    height: {
      type: Number,
      default: 4,
      required: false,
    },
    barColor: {
      type: String,
      default: "#F0F2F4",
      required: false,
    },
    pegColor: {
      type: String,
      default: "#604ECD",
      required: false,
    },
    transparent: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props) {
    const bar = computed(() => {
      if (props.transparent) {
        return {
          height: `${props.height}px`,
          width: "inherit",
          backgroundColor: "rgb(240, 242, 244)",
        };
      } else {
        return {
          height: `${props.height}px`,
          width: "inherit",
          backgroundColor: props.barColor,
        };
      }
    });
    const completed = computed(() => {
      return {
        height: `${props.height}px`,
        width: `${props.progress}%`,
        backgroundColor: props.pegColor,
        maxWidth: "100%",
      };
    });

    return {
      bar,
      completed,
    };
  },
};
</script>

<style lang="scss" scoped>
.total {
  border-radius: 30px;
  position: relative;
}
.completed {
  border-radius: 30px;
  position: absolute;
}
</style>

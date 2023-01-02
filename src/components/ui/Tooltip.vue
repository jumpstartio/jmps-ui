<template>
  <div v-show="showTooltip">
    <div class="tooltip caption-regular" :id="tooltipId">
      <img
        v-if="showHead"
        class="tooltip-head"
        :src="require('@/assets/icons/tooltip-left-head.svg')"
        alt="Tooltip"
      />
      <div class="tooltip-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { createPopper } from "@popperjs/core";
export default {
  name: "Tooltip",
  props: {
    target: {
      type: Function,
    },
    showTooltip: {
      type: Boolean,
      default: false,
    },
    showHead: {
      type: Boolean,
      default: true,
    },
    tooltipId: {
      type: String,
      default: "tooltip",
    },
    placement: {
      type: String,
      default: "right-start",
    },
  },
  setup(props) {
    watch(
      () => props.showTooltip,
      () => {
        const tooltip = document.getElementById(props.tooltipId);
        if (tooltip) {
          const target = props.target().$el
            ? props.target().$el
            : props.target();
          createPopper(target, tooltip, {
            placement: props.placement,
          });
        }
      }
    );
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.tooltip {
  position: relative;
  z-index: 10;
  &-head {
    position: absolute;
    width: 6px;
    height: 10px;
    margin-top: 10px;
  }
  &-body {
    position: absolute;
    width: max-content;
    max-width: 150px;
    background-color: $primary-dark;
    border-radius: 8px;
    margin-left: 4px;
    padding: 6px 10px;
    color: $white;
  }
}
</style>

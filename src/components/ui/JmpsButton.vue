<template>
  <button
    :style="[
      borderRadius ? `border-radius: ${borderRadius}${borderUnit};` : null,
      `width: ${width}${unit};height: ${height}${unit};`,
    ]"
    :class="buttonStyle"
    :disabled="disabled"
    @click="buttonClicked"
  >
    <img
      class="button-icon-prefix"
      v-if="prefixIcon"
      :src="iconUrl"
      alt="icon"
    />
    <img
      class="button-icon-back"
      v-if="type === 'back'"
      :src="iconUrl"
      alt="icon"
    />
    <img class="button-icon" v-if="icon" :src="iconUrl" :alt="icon" />
    <slot v-if="buttonText" :style="`font-size: ${textFontSize}px;}`"></slot>
    <img
      class="button-icon-suffix"
      v-if="suffixIcon"
      :src="iconUrl"
      alt="iconUrl"
    />
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "JmpsButton",
  emits: ["button-clicked"],
  props: {
    size: {
      type: String,
      default: "large",
      validator: (value) => {
        return ["large", "medium", "small"].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: "primary",
      validator: (value) => {
        return [
          "primary",
          "primary-dark",
          "secondary",
          "subtle",
          "square",
          "square-dark",
          "circle",
          "circle-dark",
          "ellipsis",
          "ellipsis-dark",
          "back",
        ];
      },
    },
    iconSize: {
      type: Number,
      default: 16,
    },
    icon: {
      type: String,
      default: null,
    },
    prefixIcon: String,
    suffixIcon: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    textFontSize: {
      type: Number,
      default: 11,
    },
    borderRadius: {
      type: Number,
      default: null,
    },
    borderUnit: {
      type: String,
      default: "px",
    },
    unit: {
      type: String,
      default: "px",
    },
    imageExtension: {
      type: String,
      default: "svg",
    },
  },
  setup(props, { emit }) {
    const buttonStyle = computed(() => {
      if (props.disabled) {
        return `button button-${props.type} button-${props.size} button-disabled`;
      }
      return `button button-${props.type} button-${props.size}`;
    });
    const buttonText = computed(
      () =>
        !(
          props.type === "square" ||
          props.type === "square-dark" ||
          props.type === "circle" ||
          props.type === "circle-dark"
        )
    );
    const iconUrl = computed(() => {
      if (props.icon) {
        return `src/assets/icons/${props.icon}.${props.imageExtension}`;
      } else if (props.suffixIcon) {
        return `src/assets/icons/${props.suffixIcon}.${props.imageExtension}`;
      } else if (props.prefixIcon) {
        return `/src/assets/icons/${props.prefixIcon}.${props.imageExtension}`;
      } else if (props.type === "back") {
        return "src/assets/icons/icon-arrow-left.svg";
      }
      return null;
    });
    const buttonClicked = (event) => {
      emit("button-clicked", event);
    };
    return {
      buttonClicked,
      buttonStyle,
      buttonText,
      iconUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/fonts.scss";
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 32px;
  border: 0px;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: "PoppinsMedium";
  font-size: $font-size-14;
  max-width: 400px;

  &-icon {
    &-prefix {
      padding-right: 12px;
    }
    &-suffix {
      padding-left: 12px;
    }
  }

  &-small {
    height: 32px;
  }
  &-medium {
    height: 40px;
  }
  &-large {
    height: 46px;
  }

  &:focus {
    border-radius: 8px;
    box-shadow: 0 0 0 2pt $primary-light;
  }
  &:hover {
    background-color: $primary-dark;
  }

  &-primary {
    color: $white;
    background-color: $primary-main;
  }
  &-primary-dark {
    color: $white;
    background-color: $primary-dark;
    border: 1px solid $primary-dark;

    &:hover {
      background-color: $dark-hover;
      border: 1px solid $dark-hover;
    }
  }

  &-back {
    background-color: $white;
    color: $primary-dark;
    border: none;
    padding: 0;
    &:hover {
      background-color: unset;
    }
    &:active {
      background-color: none;
      border: none;
      box-shadow: none;
    }
    &:focus {
      background-color: none;
      border: none;
      box-shadow: none;
    }
  }

  &-secondary {
    background-color: $white;
    color: $primary-dark;
    border: 1px solid $primary-dark;

    &:hover {
      background-color: $secondary-hover;
      box-shadow: 0 0 0 0.5pt $primary-dark;
    }
  }

  &-subtle {
    background-color: $white;
    border: 1px solid $button-subtle-border;
    color: $primary-dark;

    &:hover {
      background-color: $secondary-hover;
      box-shadow: 0 0 0 0.5pt $grey;
    }
  }
  &-square {
    background-color: $white;
    color: $primary-dark;
    height: 32px;
    width: 32px;
    padding: 0;
    border: 1px solid $primary-dark;
    &-dark {
      background-color: $primary-dark;
      color: $white;
      height: 46px;
      width: 46px;
      padding: 0;
      &:hover {
        background-color: $dark-hover;
        border: 1px solid $dark-hover;
      }
    }
    &:hover {
      background-color: $secondary-hover;
      box-shadow: 0 0 0 0.5pt $primary-dark;
    }
  }
  &-circle {
    background-color: none;
    color: none;
    border: none;
    border-radius: 50%;
    padding: 0;
    height: fit-content;
    width: fit-content;
    &:hover {
      background-color: $secondary-hover;
      box-shadow: 0 0 0 2pt $primary-light;
    }
    &:focus {
      border-radius: 50%;
      box-shadow: 0 0 0 2pt $primary-light;
    }
  }

  &-ellipsis {
    background-color: $secondary-light;
    color: $primary-dark;
    border: 1px solid $primary-light;
    padding: 10px;
    &:hover {
      background-color: unset;
    }
    &:active {
    }
    &:focus {
    }
  }
}
</style>

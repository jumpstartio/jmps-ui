<template>
  <div
    class="input-container"
    :style="`width: ${width}`"
    :class="[width ? null : `input-${size}`]"
  >
    <label
      v-if="label"
      :for="name"
      class="label font-medium"
      :class="[{ 'label-top': descriptionTop }, `font-${labelSize}`]"
    >
      {{ label }}<sup v-if="showMandatory" class="label-show-mandatory">*</sup
      ><span v-if="subLabel" class="sub-label font-17 font-regular">
        {{ subLabel }}
      </span>
      <i
        class="tooltip"
        :class="[isDisabled ? 'disabled' : null]"
        v-if="isTooltip"
      />
    </label>
    <p class="description-top font-15" v-if="descriptionTop">
      {{ descriptionTop }}
    </p>
    <div
      class="input-wrap"
      v-if="inputType !== 'textarea' && inputType !== 'content-rich-input'"
    >
      <label :for="id">
        <div class="icon">
          <img
            class="icon icon-prefix"
            :style="prefixStyles"
            :src="getPrefixIcon"
            v-if="prefixIcon"
            alt="prefix icon"
          />
          <slot
            :name="slotname"
            class="font-15 font-medium slot"
            :style="prefixStyles"
          ></slot>
        </div>
      </label>
      <input
        autocomplete="off"
        class="input-box"
        :id="id"
        :style="`height: ${height}; width: ${width}; border: ${border}; border-radius: ${borderRadius}; outline: ${outline}; padding-left: ${inputBoxPadding}`"
        :class="[
          `font-${textSize}`,
          showOuterShadow ? 'input-box-shadow' : null,
          error ? 'border-error' : null,
          size ? `input-${size}` : 'input-large',
          prefixIcon ? 'placeholder-pos' : null,
        ]"
        :name="name"
        :type="visibility"
        :placeholder="placeholder"
        :readonly="readOnly"
        :disabled="isDisabled"
        :value="modelValue"
        :maxlength="maxLength"
        @keypress="
          () => {
            return null;
          }
        "
        @keydown.enter="
          validate
            ? $emit('enter-pressed')
            : () => {
                return null;
              }
        "
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="
          enterClickedEnable
            ? $emit('enter-clicked', $event.target.value)
            : null
        "
        @blur="blurEnable ? $emit('blur-happend', $event.target.value) : null"
        @keyup.esc="$emit('blur-happend', $event.target.value)"
        @focus="focusEnable ? $emit('focus-happend') : null"
        @click="$emit('click-happend')"
      />
      <i
        :class="[
          classVisibility,
          size == 'small' ? 'small' : null,
          isDisabled ? 'cursor-default' : null,
        ]"
        @click="showPassword"
        v-if="inputType === 'password'"
      />
      <label :for="id">
        <img
          class="icon icon-suffix"
          :src="getSuffixIcon"
          :style="suffixStyles"
          v-if="suffixIcon && showSuffixIcon"
          @click="suffixClickEnable ? $emit('suffix-clicked') : null"
          alt="suffix-icon"
        />
      </label>
      <div
        class="icon"
        :class="isMobile ? 'suffix-style-mobile' : 'suffix-style-desktop'"
      >
        <!-- <slot :name="slotname" class="font-15 font-medium"></slot> -->
      </div>
    </div>
    <textarea
      v-else-if="inputType == 'textarea'"
      :id="name"
      class="input-box text-area"
      :class="[
        `font-${textSize}`,
        errorMessage ? 'border-error' : null,
        size ? `input-${size}` : 'input-large',
      ]"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :value="modelValue"
      :maxlength="maxLength"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup.enter="
        enterClickedEnable ? $emit('enter-clicked', $event.target.value) : null
      "
      @blur="blurEnable ? $emit('blur-happend', $event.target.value) : null"
    >
    </textarea>
    <div
      v-else-if="inputType === 'content-rich-input'"
      v-html="userInput"
      :id="name"
      :class="[
        'input-box text-area rich-content',
        `font-${textSize}`,
        errorMessage ? 'border-error' : null,
        size ? `input-${size}` : 'input-large',
      ]"
      :data-placeholder="placeholder"
      contenteditable="true"
      tabindex="0"
      @focus="$emit('focus-happend')"
      @keyup="$emit('key-up', $event.target.innerHTML)"
    ></div>
    <p class="description-bottom font-15" v-if="descriptionBottom">
      {{ descriptionBottom }}
    </p>
    <p class="input-error text-error" v-if="error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { isMobile } from "../../utils/helper";
export default {
  name: "JmpsInput",
  emits: [
    "enter-clicked",
    "blur-happend",
    "focus-happend",
    "click-happend",
    "on-value-input",
    "update:modelValue",
    "suffix-clicked",
    "key-down",
    "key-up",
    "enter-pressed",
  ],
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
      default: "",
    },
    subLabel: {
      type: String,
      default: "",
    },
    showOuterShadow: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: "input",
      required: false,
      validator: (value) => {
        return value !== "";
      },
    },
    placeholder: {
      type: String,
      default: "Enter text here",
    },
    enterClickedEnable: {
      type: Boolean,
      default: false,
    },
    suffixClickEnable: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    showSuffixIcon: {
      type: Boolean,
      default: true,
    },
    blurEnable: {
      type: Boolean,
      default: false,
    },
    focusEnable: {
      type: Boolean,
      default: false,
    },
    textSize: {
      type: String,
      default: "17",
    },
    labelSize: {
      type: Number,
      default: 17,
    },
    height: {
      type: String,
      default: "48px",
    },
    width: {
      type: String,
      default: "",
    },
    border: {
      type: String,
      default: "",
    },
    borderRadius: {
      type: String,
      default: "8px",
    },
    outline: {
      type: String,
      default: null,
    },
    inputBoxPadding: {
      type: String,
      default: null,
    },
    prefixStyle: {
      type: Object,
      default: () => {
        return {
          prefixTop: "7px",
          prefixLeft: "10px",
          prefixWidth: "32px",
          prefixHeight: "32px",
        };
      },
    },
    suffixStyle: {
      type: Object,
      default: () => {
        return {
          suffixTop: "5px",
          suffixRight: "16px",
          suffixWidth: "32px",
          suffixHeight: "32px",
        };
      },
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return (
          [
            "text",
            "password",
            "textarea",
            "email",
            "content-rich-input",
          ].indexOf(value) !== -1
        );
      },
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    descriptionBottom: {
      type: String,
      default: "",
    },
    descriptionTop: {
      type: String,
      default: "",
    },
    isTooltip: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "large",
      validator: (value) => {
        return ["large", "small", "full"].indexOf(value) !== -1;
      },
    },
    slotname: {
      type: String,
      default: null,
    },
    maxLength: {
      type: Number,
    },
    id: {
      type: String,
      default: () => {
        return "input-" + (Math.random() * 150).toFixed(2);
      },
    },
    showMandatory: {
      type: Boolean,
      default: false,
      required: false,
    },
    validate: {
      type: Boolean,
      default: false,
      required: false,
    },
    userInput: {
      type: String,
      default: "",
      required: false,
    },
    prefixImageExtension: {
      type: String,
      default: "svg",
    },
    suffixImageExtension: {
      type: String,
      default: "svg",
    },
  },
  setup(props, { emit }) {
    const visibility = ref("text");
    const inputType = computed(() => {
      const type = props.type ? props.type : "text";
      if (props.type === "password") {
        visibility.value = props.type === "password" ? "password" : "text";
      }
      return type;
    });
    const classVisibility = computed(() => {
      return visibility.value === "password"
        ? "password-show"
        : "password-hide";
    });
    const getPrefixIcon = computed(() => {
      if (props.prefixIcon) {
        return `/src/assets/icons/${props.prefixIcon}.${props.prefixImageExtension}`;
      } else return null;
    });
    const getSuffixIcon = computed(() => {
      if (props.showSuffixIcon && props.suffixIcon) {
        return `/src/assets/icons/${props.suffixIcon}.${props.suffixImageExtension}`;
      } else return null;
    });
    const prefixStyles = computed(() => {
      return {
        top: props.prefixStyle.prefixTop,
        left: props.prefixStyle.prefixLeft,
        width: props.prefixStyle.prefixWidth,
        height: props.prefixStyle.prefixHeight,
      };
    });
    const suffixStyles = computed(() => {
      return {
        top: props.suffixStyle.suffixTop,
        right: props.suffixStyle.suffixRight,
        width: props.suffixStyle.suffixWidth,
        height: props.suffixStyle.suffixHeight,
      };
    });
    const showPassword = () => {
      if (!props.isDisabled) {
        visibility.value =
          visibility.value === "password" ? "text" : "password";
      }
    };

    watch(
      () => props.userInput,
      (newVal, oldVal) => {
        if (props.type === "content-rich-input") {
          setTimeout(() => {
            if (
              (newVal === "<p><br></p>" || newVal === "") &&
              document.querySelector(`#${props.name}`)
            ) {
              document.querySelector(`#${props.name}`).classList.add("blank");
            } else if (
              document.querySelector(`#${props.name}`) &&
              document
                .querySelector(`#${props.name}`)
                .classList.contains("blank")
            ) {
              document
                .querySelector(`#${props.name}`)
                .classList.remove("blank");
            }
          }, 0);
        }
      },
      { immediate: true }
    );

    return {
      visibility,
      inputType,
      classVisibility,
      showPassword,
      prefixStyles,
      suffixStyles,
      getPrefixIcon,
      getSuffixIcon,
      isMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";
@import "@/styles/library/fonts.scss";
@import "@/styles/library/variables.scss";

[contenteditable="true"] {
  :deep() {
    img {
      width: 50%;
    }
    ul {
      padding-left: 15px;
      li {
        list-style-type: disc;
      }
    }
    ol {
      padding-left: 15px;
      li {
        list-style-type: decimal;
      }
    }
  }
}
.blank::before {
  content: attr(data-placeholder);
  pointer-events: none;
  color: $grey;
}

input[autocomplete="off"]::-webkit-contacts-auto-fill-button,
input[autocomplete="off"]::-webkit-credentials-auto-fill-button {
  visibility: hidden;
  display: none !important;
  pointer-events: none;
  height: 0;
  width: 0;
  margin: 0;
}

.input-container {
  text-align: left;
  position: relative;
}

.label {
  display: block;
  margin-bottom: 6px;

  &-top {
    margin-bottom: 2px;
  }
  &-show-mandatory {
    color: $declined;
  }
  .sub-label {
    margin-left: 8px;
    color: $grey;
  }
}
.tooltip {
  content: $icon-tooltip;
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.tooltip.disabled {
  content: $icon-tooltip-disabled;
}

.input {
  &-box {
    padding-left: 16px;
    box-sizing: border-box;
    border: 1px solid $border-color;
    background-color: $background-input;
    font-family: $font-family;
    caret-color: $brand-color;

    &::placeholder {
      color: $grey;
    }
    &:focus {
      outline: none;
      background-color: $white;
      border: 1px solid $border-input-focus;
      color: $primary-dark;
      box-shadow: 0px 0px 0px 3px $border-input-shadow;
    }
    &:disabled {
      background-color: $disabled;
      color: $grey;
    }
    &.border-error {
      border: 1px solid $declined;
      box-shadow: 0px 0px 0px 3px $declined-input-shadow;
    }
    &.text-area {
      height: 136px;
      overflow-y: scroll;
      resize: none;
      padding: 14px 16px;
      caret-color: $brand-color;
    }
    &.placeholder-pos {
      padding-left: 36px;
    }
    &::selection {
      background-color: $brand-color-selected-text;
    }
    &-shadow {
      &:focus {
        outline: none;
        background-color: $white;
        border: 1px solid $primary-main;
        color: $primary-main-text;
        box-shadow: 0 0 0 3pt $input-box-shadow;
      }
    }
  }

  &-error {
    margin-top: 4px;
    color: $declined;
    font-size: $font-size-14;
    line-height: $line-height-20;
    font-family: "WorkSansReg";
    position: absolute;
  }
}

.description {
  &-top {
    margin-bottom: 16px;
    color: $desc-input;
    font-family: "WorkSansReg";
    width: 90%;

    &::selection {
      color: $highlight-text-desc;
    }
  }
  &-bottom {
    margin-top: 12px;
    color: $desc-input;
    font-family: "WorkSansReg";
    width: 90%;

    &::selection {
      color: $highlight-text-desc;
    }
  }
}
.password {
  &-hide {
    content: $icon-pwd-eye-slash;
    position: absolute;
    right: 16px;
    top: 16px;
    &:hover {
      cursor: pointer;
    }
    &small {
      right: 248px;
    }
  }
  &-show {
    content: $icon-pwd-eye;
    position: absolute;
    right: 16px;
    top: 16px;
    &:hover {
      cursor: pointer;
    }
    &small {
      right: 248px;
    }
  }
}
.input-wrap {
  position: relative;
}
.icon {
  position: absolute;
  cursor: pointer;
  align-items: center;
  display: flex;
  align-items: center;
  height: 100%;
}
.slot {
  position: absolute;
  left: 40px;
  padding-left: 40px;
}
.suffix-style-desktop {
  top: 19px;
  right: 32px;
}
.suffix-style-mobile {
  top: 12px;
  right: 12px;
}
.input {
  &-large {
    width: 100%;
    max-width: 500px;
  }
  &-small {
    width: 100%;
    max-width: 219px;
  }
  &-full {
    width: 100%;
  }
}
::-ms-reveal {
  display: none !important;
}
</style>

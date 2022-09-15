<template>
  <div class="validator-wrapper">
    <div
      class="validator-wrapper-step"
      v-for="step in passwordValidationSteps"
      :key="step"
    >
      <img
        src=""
        alt=""
        :class="[step.condition() ? 'validated-icon' : 'unvalidated-icon']"
      />
      <p
        :class="[
          step.step ? 'caption-medium' : 'text-secondary',
          step.condition() ? 'text-strikeoff' : null,
          'caption-regular text-secondary',
        ]"
      >
        {{ step.step }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import {
  hasSpecialCharacters,
  hasNumericCharacters,
  hasUpperCaseCharacters,
} from "@/utils/signup-helper";

export default {
  name: "PasswordValidator",
  props: {
    password: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const isEightChar = ref(false);
    const hasNumber = ref(false);
    const hasUpperCase = ref(false);
    const hasSpecialChar = ref(false);
    const password = computed(() => props.password);
    const passwordValidationSteps = [
      {
        step: "Should have atleast 8 characters",
        condition: () => isEightChar.value,
      },
      {
        step: "Should have a number",
        condition: () => hasNumber.value,
      },
      {
        step: "One uppercase character",
        condition: () => hasUpperCase.value,
      },
      {
        step: "One special character",
        condition: () => hasSpecialChar.value,
      },
    ];
    watch(
      () => password.value,
      () => {
        if (password.value && password.value.length) {
          isEightChar.value = password.value.length >= 8;
          hasSpecialChar.value = hasSpecialCharacters(password.value);
          hasNumber.value = hasNumericCharacters(password.value);
          hasUpperCase.value = hasUpperCaseCharacters(password.value);
        } else {
          isEightChar.value = false;
          hasSpecialChar.value = false;
          hasNumber.value = false;
          hasUpperCase.value = false;
        }
      }
    );
    return {
      passwordValidationSteps,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/icons.scss";

.validator-wrapper {
  display: flex;
  gap: 0 30px;
  max-width: 504px;
  flex-wrap: wrap;
  &-step {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    &:last-child {
      margin-left: 44px;
    }
  }
  .unvalidated-icon {
    content: $icon-password-not-validated;
  }
  .validated-icon {
    content: $icon-password-validated;
  }
}
</style>

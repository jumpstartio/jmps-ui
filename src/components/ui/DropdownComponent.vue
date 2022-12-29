<template>
  <div class="dropdown-container" v-click-outside="closeDropdown">
    <div class="selected-container" @click="toggleDropdown">
      <div class="font-14 font-regular font-w-400 text-secondary">
        {{ selection }}
      </div>
      <img
        v-show="!showDropdown"
        src="@/assets/icons/icon-dropdown-arrow-down.svg"
        alt="show-dropdown"
        height="16"
        width="16"
      />
      <img
        v-show="showDropdown"
        class="transform-arrow"
        src="@/assets/icons/icon-dropdown-arrow-down.svg"
        alt="hideDropdown"
        height="16"
        width="16"
      />
    </div>
    <div v-if="showDropdown" class="dropdown-body-wrapper">
      <div class="dropdown-body">
        <div
          v-for="(option, index) in options"
          :key="index"
          :class="[
            'font-14 font-regular font-w-400 text-secondary',
            option === selection ? 'active' : null,
          ]"
          @click="updateValue($event, index)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropdownComp",
  emits: ["update-value"],
  props: {
    selected: {
      type: String,
      default: "Dropdown",
    },
    options: {
      type: Array,
      default: () => {
        return ["All time", "Last 7 days", "Last Month"];
      },
    },
    id: {
      type: String,
      default: "dropdown",
    },
  },
  setup(props, { emit }) {
    const selection = ref(props.selected);
    const showDropdown = ref(false);
    const updateValue = (event, index) => {
      selection.value = props.options[index];
      showDropdown.value = false;
      emit("update-value", props.options[index]);
    };
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };
    const closeDropdown = () => {
      showDropdown.value = false;
    };
    return {
      closeDropdown,
      selection,
      showDropdown,
      toggleDropdown,
      updateValue,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/fonts.scss";
.dropdown-container {
  position: relative;
  width: max-content;
  min-width: 88px;
  z-index: 1001;
}
.selected-container {
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  width: max-content;
  min-width: 88px;
  img {
    margin-left: auto;
  }
}
.dropdown-body {
  width: max-content;
  min-width: 88px;
  box-sizing: border-box;
  padding: 4px 4px;
  display: flex;
  gap: 2px;
  flex-direction: column;
  div {
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    &:hover {
      background-color: #f6f6f6;
    }
  }
  &-wrapper {
    padding: 4px 4px 4px 0px;
    position: absolute;
    top: 18px;
    right: 0px;
    background-color: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }
}
.active {
  background-color: #f6f6f6;
}
.transform-arrow {
  transform: rotateX(180deg);
}
</style>

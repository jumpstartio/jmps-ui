<template>
  <div
    class="js-select-container"
    @click="showDropdown = !showDropdown"
    @keydown.esc="showDropdown = false"
    tabindex="0"
    v-click-outside="hideDropdown"
  >
    <jmps-input
      class="js-selected-item title-16 title-regular"
      v-model="selectedItem"
      :width="width"
      id="select"
      :suffixIcon="showDropdown ? 'icon-arrow-up.svg' : 'icon-arrow-down.svg'"
      :textSize="'15'"
      :readOnly="true"
      :suffixStyle="suffixStyle"
      :disabled="true"
      :label="showLabel ? label : null"
      :suffixClickEnable="true"
      @suffix-clicked="showDropdown = !showDropdown"
      :bgColor="'#FFFFFF'"
    />
    <ul v-show="showDropdown" class="js-dropdown" tabindex="0">
      <li
        v-for="item in dropdownItems"
        :key="item"
        tabindex="0"
        :class="item.name === selectedItem ? 'active' : null"
        @click="updateSelection(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

import JmpsInput from "@/components/ui/JmpsInput.vue";
export default {
  name: "JmpsSelect",
  components: {
    JmpsInput,
  },
  props: {
    width: {
      type: String,
      default: "300px",
    },
    options: {
      type: Array,
      // required: true,
      default: null,
    },
    selection: {
      type: String,
      default: "",
      required: true,
    },
    showOuterShadow: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const dropdownItems = ref(props.options);
    const selectedItem = ref(props.selection);
    const showDropdown = ref(false);
    const suffixStyle = ref({
      suffixTop: "8px",
      suffixRight: "16px",
      suffixWidth: "15px",
      suffixHeight: "32px",
    });
    const updateSelection = (item) => {
      selectedItem.value = item.name;
    };
    const hideDropdown = () => {
      showDropdown.value = false;
    };

    return {
      dropdownItems,
      selectedItem,
      showDropdown,
      updateSelection,
      hideDropdown,
      suffixStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";
@import "@/styles/library/fonts.scss";

.js-select-container {
  position: relative;
  max-width: max-content;
  .js-selected-item {
    cursor: pointer;
  }
  // .active-box {
  //   border: 1px solid $primary-main;
  //   color: $primary-main-text;
  //   box-shadow: 0 0 0 3pt $input-box-shadow;
  // }
  .js-dropdown {
    background-color: $white;
    opacity: 1;
    border-radius: 8px;
    position: absolute;
  }
  ul {
    list-style-type: none;
    padding: 27px 16px;
    box-sizing: border-box;
    min-width: 300px;
    width: max-content;
    z-index: 3;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 4px;
    li {
      padding: 15px 21px;
      border-radius: 10px;
      background-color: $white;
      box-sizing: border-box;
      width: 100%;
      &:hover {
        background-color: $primary-light;
        cursor: pointer;
      }
    }
    .active {
      background-color: $primary-light;
    }
  }
}
</style>

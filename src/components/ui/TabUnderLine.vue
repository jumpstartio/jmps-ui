<template>
  <div class="tab-wrapper">
    <div
      v-for="(item, index) in tabOptions"
      :key="index"
      @click="selectedTab(index)"
      :class="[
        'font-16 font-semibold text-secondary tab',
        index === activeSelection ? 'active' : null,
      ]"
    >
      {{ item.name }}
      <span
        :class="[
          item.count
            ? item.count > 9
              ? 'review review-double'
              : 'review review-single'
            : null,
          'caption-regular',
        ]"
        >{{ item.count ? item.count : "" }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "TabUnderLine",
  emits: ["active-selection"],
  props: {
    tabOptions: {
      type: Array,
      default: null,
    },
    active: {
      type: Number,
      default: null,
    },
    count: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    const activeSelection = ref(props.active);

    const selectedTab = (index) => {
      activeSelection.value = index;
      emit("active-selection", index);
    };

    watch(
      () => props.active,
      () => {
        activeSelection.value = props.active;
      }
    );

    return {
      activeSelection,
      selectedTab,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.tab-wrapper {
  display: flex;
}
.tab {
  border-bottom: 2px solid transparent;
  width: max-content;
  margin-right: 34px;
  padding-bottom: 10px;
  cursor: pointer;
}
.active {
  box-sizing: border-box;
  color: $primary-dark;
  border-bottom: 2px solid $primary-dark;
  cursor: default;
}
.review {
  margin-left: 6px;
  line-height: 0px;
  background-color: $primary-dark;
  color: $white;
  border-radius: 50%;
  &-single {
    padding: 2px 8px;
  }
  &-double {
    padding: 5px 8px;
  }
}
</style>

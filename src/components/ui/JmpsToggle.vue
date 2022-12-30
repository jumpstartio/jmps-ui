<template>
  <div class="toggle-container" :label="label" :status="status">
    <span class="toggle-content font-15">
      {{ label }} <span v-if="label"> : </span>
      <span class="title-semi">
        {{ status }}
      </span>
    </span>
    <label class="toggle-switch">
      <input
        type="checkbox"
        :checked="isActive"
        :disabled="isDisabled"
        @click="updateStatus"
        hidden
      />
      <span class="toggle-slider round"> </span>
    </label>
  </div>
</template>
<script>
export default {
  name: "JsToggle",
  props: {
    label: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateStatus(index) {
      this.$emit("changed", index);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.toggle-container {
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
}
.toggle-content {
  color: $primary-main;
}
.toggle-switch {
  position: relative;
  display: inline-block;
  height: 24px;
  width: 40px;
}
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $grey;
  transition: 0.4s;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  top: 2px;
  right: 18px;
  background-color: $white;
  transition: 0.4s;
}

input:checked + .toggle-slider {
  background-color: $primary-main;
}

input:checked + .toggle-slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.toggle-slider.round {
  border-radius: 48px;
}

.toggle-slider.round:before {
  border-radius: 48px;
}
</style>

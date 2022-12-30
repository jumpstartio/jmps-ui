<template>
  <div class="modal-overlay">
    <div
      class="modal-wrapper"
      ref="modal"
      @keydown.esc="$emit('esc-pressed')"
      tabindex="0"
    >
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> </slot>
          <jmps-button
            v-if="showCloseButton"
            class="close-btn"
            :type="'circle'"
            :icon="'icon-close-modal'"
            @click="$emit('close-modal')"
          >
          </jmps-button>
        </div>
        <div class="modal-body">
          <slot name="body"> </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";

export default {
  components: {
    JmpsButton,
  },
  name: "JmpsModal",
  emits: ["esc-pressed", "close-modal"],
  props: {
    showCloseButton: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const modal = ref(null);

    onMounted(() => {
      modal.value.focus();
    });
    return {
      modal,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";

.modal-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $modal-overlay;
  transition: opacity 0.3s ease;
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  position: relative;
  width: max-content;
  margin: auto;
  padding: 16px;
  background-color: $white;
  box-shadow: 0px 2px 2px $modal-box-shadow;
  transition: all 0.3s ease;
  border-radius: 10px;
  box-sizing: border-box;
  .modal-header {
    color: $primary-dark;
    margin-top: 8px;
    box-sizing: border-box;
  }
  .modal-body {
    box-sizing: border-box;
    min-width: 200px;
  }
  .close-btn {
    position: absolute;
    right: 36px;
    top: 28px;
  }
}
</style>

<template>
  <div
    class="dropdown"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver"
    @mouseenter="mouseEnter"
    @click="toggleMenu"
  >
    <slot></slot>
    <transition :name="transition">
      <div
        v-show="value"
        class="dropdown-menu"
        :class="{ 'dropdown-menu-right': right, dropup: top }"
        :style="styles"
        @mouseleave="startTimer"
        @mouseenter="stopTimer"
        @click="autoClose && closeMenu"
        ref="dropdown"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  props: {
    right: Boolean,
    hover: Boolean,
    hover_time: {
      type: Number,
      default: 200,
    },
    hover_timeout: {
      type: Number,
      default: 500,
    },
    styles: {
      type: Object,
      default() {
        return {};
      },
    },
    interactive: {
      // whether should stay open until clicked outside
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: "",
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
    isTaskStatusEmit: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    toggleMenuOnHover: {
      type: Boolean,
      default: false,
    },
    topFlag: {
      type: Boolean,
      default: false,
    },
    isCloseClick: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hovering: false,
      top: false,
      value: false
    };
  },
  unmounted() {
    document.body.removeEventListener("click", this.closeMenu);
  },
  methods: {
    mouseEnter() {
      this.stopTimer();
      if (this.toggleMenuOnHover) {
        this.toggleMenu();
      }
      if (this.hover && this.hover_time > 0 && !this.value) {
        this.hoverOpenTimer = setTimeout(() => {
          this.value = true;
          // disable for a moment
          this.hovering = true;
          setTimeout(() => {
            this.hovering = false;
          }, this.hover_timeout);
        }, this.hover_time);
      }

      if (this.hover && !this.value && this.hover_time === 0) {
        this.hovering = true;
        setTimeout(() => {
          this.hovering = false;
        }, this.hover_timeout);
        this.value = true;
      }
    },
    mouseLeave() {
      if (this.toggleMenuOnHover) {
        this.toggleMenu();
      }
      if (!this.hoverTimer) {
        // left the link and no time active
        this.startTimer();
      }

      if (this.hover_time > 0 && this.hover) {
        clearTimeout(this.hoverOpenTimer);
      }
    },
    mouseOver() {
      this.stopTimer();
    },
    closeMenu($event) {
      if (!$event || !this.$el.contains($event.target)) {
        if (this.value && this.closeOnClickOutside) {
          this.value = false;
          this.$emit("dropdown-menu-closed");
        }
      }
    },
    toggleMenu() {
      if (this.hovering) {
        return;
      }
      if (this.value && this.hover) {
        return;
      }
      if (this.isCloseClick) {
        this.value = !this.value;
      } else {
        this.value = true;
      }
    },
    stopTimer() {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    },
    startTimer() {
      if (!this.interactive) {
        this.hoverTimer = setTimeout(this.closeMenu, this.hover_timeout);
      }
    },
  },
  watch: {
    value(v) {
      if (v) {
        const vm = this;
        this.top = this.topFlag;
        if (!this.topFlag) {
          this.$nextTick(() => {
            const rect = vm.$refs.dropdown.getBoundingClientRect();
            const windowHeight =
              window.innerHeight || document.documentElement.clientHeight;
            this.top = rect.bottom > windowHeight && rect.top >= rect.height;
          });
        }
      }
    },
    interactive: {
      handler(value) {
        if (typeof document === "object") {
          value
            ? document.body.addEventListener("click", this.closeMenu)
            : document.body.removeEventListener("click", this.closeMenu);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";

.dropdown {
  position: relative;
  box-sizing: border-box;
  width: max-content;
}
.dropup {
  top: -91px;
}
.dropdown-menu {
  position: absolute;
  width: max-content;
  padding: 0 16px;
  margin-top: 32px;
  border: 1px solid $border-color;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  z-index: 10;
  background-color: $white;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}

:deep() {
  .dropdown-item {
    display: block;
    text-align: left;
    white-space: nowrap;
    text-decoration: none;
    width: max-content;
    color: $grey;
  }

  ul {
    list-style: none;
  }

  .dropdown-item.active {
    color: $primary-dark;
  }
}

/*translate fade (top to down)*/
.translate-fade-down-enter-active,
.translate-fade-down-leave-active {
  transition: all 1000ms;
  transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
}
.translate-fade-down-enter,
.translate-fade-down-leave-active {
  opacity: 0;
}
.translate-fade-down-enter,
.translate-fade-down-leave-to {
  position: absolute;
}

.translate-fade-down-enter {
  transform: translateY(-10px);
}
.translate-fade-down-leave-active {
  transform: translateY(10px);
}
</style>

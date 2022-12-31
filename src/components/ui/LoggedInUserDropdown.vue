<template>
  <dropdown-menu :right="true">
    <div class="loggedin-user-dropdown-container" @click="handleDropdownClose">
      <img class="user-avatar" :src="userInfo.profilePhoto" />
      <img class="arrow-icon" :src="getDropDownArrow" />
    </div>
    <template #dropdown>
      <profile-action-dropdown />
    </template>
  </dropdown-menu>
</template>

<script>
import { computed, ref } from "vue";
import DropdownMenu from "@/components/ui/DropdownMenu.vue";
import ProfileActionDropdown from "@/components/ui/ProfileActionDropdown.vue";
import { userInfo } from "@/utils/helper";
export default {
  name: "LoggedInUserDropDown",
  components: {
    DropdownMenu,
    ProfileActionDropdown,
  },
  props: {
    arrowIcon: {
      type: String,
      default: "icon-arrow-down",
    },
    user: {
      type: Object,
    },
  },
  setup(props) {
    const isDropdownOpen = ref(false);
    const handleDropdownClose = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    const getDropDownArrow = computed(() => {
      if (props.arrowIcon) {
        if (isDropdownOpen.value) {
          return `src/assets/icons/icon-arrow-up.svg`;
        } else {
          return `src/assets/icons/icon-arrow-down.svg`;
        }
      }
      return null;
    });
    return {
      getDropDownArrow,
      handleDropdownClose,
      userInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.loggedin-user-dropdown-container {
  display: flex;
  cursor: pointer;
  .user-avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .arrow-icon {
    margin-left: 8px;
  }
}
</style>

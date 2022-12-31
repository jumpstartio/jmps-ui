<template>
  <div class="profile-action-item" @click="goToItem">
    <img :src="`src/assets/icons/${icon}.svg`" alt="" />
    <div class="item-text">
      <p class="font-14 text-medium item-title">{{ itemTitle }}</p>
      <p class="caption-regular text-secondary item-detail">{{ itemDetail }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import storage from "@/utils/storage";

export default {
  name: "ProfileActionItem",
  components: {},
  props: {
    icon: {
      type: String,
      default: "icon-dashboard",
    },
    itemTitle: {
      type: String,
      default: "Dashboard",
    },
    itemDetail: {
      type: String,
      default: "View your space",
    },
    navigationLink: {
      type: String,
      default: "dashboard?navigate=dashboard",
    },
  },
  setup(props) {
    const router = useRouter();
    const goToItem = () => {
      if (props.navigationLink === "logout") {
        storage.remove("access_token");
        window.location.href = "/";
      } else {
        router.push(`/${props.navigationLink}`);
      }
    };
    return {
      goToItem,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.profile-action-item {
  display: flex;
  gap: 26px;
  cursor: pointer;
  border-radius: 8px;
  padding: 2px 8px;
  align-items: center;
  img {
    margin-top: -8px;
  }
  .item-text {
    display: flex;
    flex-direction: column;
    .item-title {
      line-height: 0;
    }
    .item-detail {
      margin-top: 1px;
    }
  }
}
:hover {
  background-color: $primary-light;
  padding: 0 -8px;
}
</style>

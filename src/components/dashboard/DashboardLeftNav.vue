<template>
  <div class="left-nav-container">
    <div v-for="menu in dashboardLeftNavMenu" :key="menu">
      <div
        class="menu-item"
        @click="goToDashboardSection(menu.title, 'menu-item' + menu.title)"
        :id="'menu-item' + menu.title"
      >
        <img :src="`src/assets/icons/${menu.icon}.svg`" alt="menu.title" />
        <p class="title-19">{{ menu.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { dashboardLeftNavMenu } from "@/constants/dashboard";
import { onMounted } from "vue";
import { capitalizeFirstLetter } from "@/utils/helper";
export default {
  name: "DashboardLeftNav",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const goToDashboardSection = (queryPath, id) => {
      document.querySelectorAll(".menu-item").forEach((item) => {
        item.classList.remove("menu-item-box");
      });
      document.getElementById(id).classList.add("menu-item-box");
      router.push({
        path: "/dashboard",
        query: { navigate: queryPath.toLowerCase() },
      });
    };
    onMounted(() => {
      setTimeout(() => {
        document
          .getElementById(
            "menu-item" + capitalizeFirstLetter(route.query.navigate)
          )
          .classList.add("menu-item-box");
      }, 1);
    });
    return {
      goToDashboardSection,
      dashboardLeftNavMenu,
      router,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.left-nav-container {
  display: flex;
  height: 100%;
  max-width: 300px;
  flex-direction: column;
  margin-top: 40px;
  .menu-item {
    display: flex;
    cursor: pointer;
    padding: 6px 0 0 24px;
    width: 180px;
    gap: 10px;
    &:hover {
      background-color: $secondary-light;
      border-radius: 8px;
    }
  }
  .menu-item-box {
    background-color: $secondary-light;
    border-radius: 8px;
    color: $primary-main;
    border-left-color: $primary-main;
  }
}
</style>

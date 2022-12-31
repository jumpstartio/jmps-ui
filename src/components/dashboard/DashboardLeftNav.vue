<script setup>
import { useRoute, useRouter } from "vue-router";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import { dashboardLeftNavMenu } from "@/constants/dashboard";
import { onMounted } from "vue";
import { capitalizeFirstLetter } from "@/utils/helper";

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
      .getElementById("menu-item" + capitalizeFirstLetter(route.query.navigate))
      .classList.add("menu-item-box");
  }, 1);
});
</script>

<template>
  <div class="left-nav-container">
    <div class="profile-card-container">
      <div class="profile-card-container-info">
        <img
          :src="'https://avatars.githubusercontent.com/u/26616369?v=4'"
          alt=""
          class="profile-card-container-info-photo"
        />
        <span class="profile-card-container-info-text">
          <span class="font-14 title-medium">Akhilesh Kumar</span>
          <span class="font-11">jumpstart.io/akhil...</span>
        </span>
      </div>
      <div class="separator"></div>
      <JmpsButton :type="'subtle'" :suffixIcon="'icon-share'" :height="36"
        >Share profile</JmpsButton
      >
    </div>
    <div v-for="menu in dashboardLeftNavMenu" :key="menu">
      <div
        class="menu-item"
        @click="goToDashboardSection(menu.title, 'menu-item' + menu.title)"
        :id="'menu-item' + menu.title"
      >
        <img :src="`src/assets/icons/${menu.icon}.svg`" alt="menu.title" />
        <span class="title-17">{{ menu.title }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.left-nav-container {
  display: flex;
  height: 100vh;
  max-width: max-content;
  flex-direction: column;
  margin-top: 20px;
  background-color: #fbf9f9;
  gap: 10px;
  .profile-card-container {
    display: flex;
    max-width: 232px;
    flex-direction: column;
    background-color: #fff !important;
    margin-right: 10px;
    padding: 24px 0 24px 8px;
    box-sizing: border-box;
    border-radius: 8px;
    &-info {
      display: flex;
      align-items: center;
      gap: 8px;
      &-text {
        white-space: break-spaces;
        word-break: break-word;
        box-sizing: border-box;
        -webkit-line-clamp: 2;
        outline: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
      }
      &-photo {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }
  }
  .menu-item {
    display: flex;
    cursor: pointer;
    padding: 16px 8px;
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
    color: $primary-dark;
    border-left-color: $primary-main;
  }
}
</style>

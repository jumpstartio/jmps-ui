<template>
  <div class="profile-info">
    <profile-card class="profile-info-card" />
    <div class="profile-info-wrapper">
      <div class="button-container">
        <dropdown-menu :right="true" :interactive="true">
          <jmps-button
            :type="'square-dark'"
            :icon="'icon-ellipsis-horizontal'"
          />
          <template #dropdown>
            <ul class="font-14 font-medium">
              <li>
                <img :src="'@/assets/icons/icon-flag-user.svg'" alt="" />
                <p>Report Profile</p>
              </li>
            </ul>
          </template>
        </dropdown-menu>
        <jmps-button>Book Session</jmps-button>
      </div>
      <div class="tab-container">
        <div class="tabs">
          <tab-under-line
            :tab-options="tabs"
            :active="activeTab"
            @active-selection="activeSelection"
          />
        </div>
        <div class="separator"></div>
        <profile-about-tab v-if="activeTab === 0" class="about-section" />
        <profile-reviews-tab v-if="activeTab === 1" class="reviews-section" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import ProfileCard from "@/components/profile/ProfileCard.vue";
import ProfileReviewsTab from "@/components/profile/ProfileReviewsTab.vue";
import ProfileAboutTab from "@/components/profile/ProfileAboutTab.vue";
import TabUnderLine from "@/components/ui/TabUnderLine.vue";
import DropdownMenu from "@/components/ui/DropdownMenu.vue";
export default {
  name: "ProfileInfo",
  components: {
    JmpsButton,
    ProfileCard,
    TabUnderLine,
    ProfileReviewsTab,
    ProfileAboutTab,
    DropdownMenu,
  },
  setup() {
    const tabs = [
      {
        name: "About",
        count: 0,
      },
      {
        name: "Reviews",
        count: 4,
      },
    ];
    const activeTab = ref(0);
    const activeSelection = (index) => {
      activeTab.value = index;
      //  TODO
    };
    return {
      tabs,
      activeSelection,
      activeTab,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.profile-info {
  display: flex;
  height: 100%;
  &-card {
    margin-top: -100px;
    margin-left: 85px;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 160px;
    width: calc(100% - 600px);
    .button-container {
      margin-top: 64px;
      margin-left: auto;
      margin-right: 85px;
      display: flex;
      gap: 30px;
      ul {
        margin: 0;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          gap: 8px;
          p {
            cursor: pointer;
          }
        }
      }
    }
    .tab-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .tabs {
        display: flex;
        align-items: center;
        gap: 48px;
      }
      .separator {
        width: calc(100% - 85px);
        margin-top: -14px;
        z-index: -1;
      }
      .reviews-section {
        width: calc(100% - 85px);
        margin-top: 28px;
      }
      .about-section {
        width: calc(100% - 85px);
        margin-top: 28px;
      }
    }
  }
}
</style>

<template>
  <div class="profile-action-dropdown">
    <div class="profile-info">
      <img class="user-avatar" :src="userInfo.profilePhoto" />
      <p>{{ userInfo.firstName + " " + userInfo.lastName }}</p>
    </div>
    <div class="profile-actions">
      <profile-action-item />
      <profile-action-item
        :icon="'icon-calendar'"
        :itemTitle="'Bookings'"
        :itemDetail="'Manage your bookings'"
        :navigationLink="'dashboard?navigate=bookings'"
      />
      <profile-action-item
        :icon="'icon-profile-avatar'"
        :itemTitle="'Profile'"
        :itemDetail="'See your presence on jumpstart'"
        :navigationLink="'interviewers/100001/akhilesh-kumar'"
      />
      <profile-action-item
        :icon="'icon-logout'"
        :itemTitle="'Logout'"
        :itemDetail="'Logout and exit the space'"
        :navigationLink="'logout'"
      />
    </div>
  </div>
</template>

<script>
import { userInfo } from "@/utils/helper";
import ProfileActionItem from "@/components/ui/ProfileActionItem.vue";
export default {
  name: "ProfileActionDropdown",
  components: {
    ProfileActionItem,
  },
  setup() {
    return {
      userInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.profile-action-dropdown {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px 0px 24px;
  .profile-info {
    display: flex;
    margin-top: 20px;
    cursor: pointer;
    gap: 16px;
    align-items: center;
    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
  .profile-actions {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }
}
</style>

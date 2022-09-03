<script setup>
import { RouterLink } from "vue-router";
import JmpsButton from "./JmpsButton.vue";
defineProps({
  msg: {
    type: String,
    required: false,
    default: () => "Hi Welcome",
  },
  userSignedIn: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="header-wrapper">
    <div class="header-wrapper-brand title-24 font-bold">
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="" srcset="" />
      </RouterLink>
    </div>
    <div class="header-wrapper-navitems font-15 font-regular">
      <img
        src="@/assets/icons/icon-hamburger.svg"
        alt="menu"
        class="hamburger"
      />
      <RouterLink to="/interviewers" class="item">
        Find an Interviewer
      </RouterLink>
      <RouterLink to="/courses" class="item"> Courses </RouterLink>
      <RouterLink to="/blogs" class="item"> Blog </RouterLink>
      <JmpsButton
        v-if="!userSignedIn"
        :type="'primary'"
        class="item"
        @button-clicked="login"
      >
        Log in
      </JmpsButton>
      <JmpsButton
        v-if="!userSignedIn"
        :type="'subtle'"
        class="item"
        @button-clicked="signup"
      >
        Send Feedback
      </JmpsButton>
      <logged-in-user-drop-down v-if="userSignedIn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #f0f2f4;
  box-sizing: border-box;
  background-color: $white;
  &-brand {
    margin-top: 8px;
    transform: scale(1.15);
  }
  a {
    text-decoration: none;
    color: $primary-dark;
  }
  .RouterLink-exact-active {
    font-weight: 700;
  }
  &-navitems {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .hamburger {
    display: none;
  }
  .item {
    display: block;
  }
}
@media only screen and (max-width: 961px) {
  .header-wrapper {
    padding: 0 20px 0 16px;
    .hamburger {
      display: block;
    }
    .item {
      display: none;
    }
  }
}
@media only screen and (min-width: 1600px) {
  .header-wrapper {
    padding: 0 178px;
  }
}
</style>

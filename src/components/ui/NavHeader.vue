<script setup>
import { RouterLink } from "vue-router";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import DropdownMenu from "@/components/ui/DropdownMenu.vue";
import NavDropDownCard from "@/components/ui/NavDropDownCard.vue";
import { ref } from "vue";

const feedback = ref("");

defineProps({
  userSignedIn: {
    type: Boolean,
    default: false,
  },
});
const sendFeedback = () => {
  console.log(feedback.value);
  console.log(document.activeElement.parentElement.parentElement);
  document.activeElement.click();
};
</script>

<template>
  <div class="header-wrapper">
    <div class="header-wrapper-navitems">
      <div class="header-wrapper-brand">
        <RouterLink to="/">
          <img src="@/assets/logo.svg" alt="" srcset="" />
        </RouterLink>
      </div>
      <div class="header-wrapper-navitems separate">
        <dropdown-menu :right="false" :interactive="true" :hover="true">
          <div class="loggedin-user-dropdown-container">
            <RouterLink to="/programs" class="item">
              Programs
              <img src="@/assets/icons/icon-caret-down.svg" />
            </RouterLink>
          </div>
          <template #dropdown>
            <NavDropDownCard :showChild="true" />
          </template>
        </dropdown-menu>

        <div>
          <dropdown-menu :right="false" :interactive="true" :hover="true">
            <div class="loggedin-user-dropdown-container">
              <RouterLink to="/resources" class="item">
                Resources
                <img src="@/assets/icons/icon-caret-down.svg" />
              </RouterLink>
            </div>
            <template #dropdown>
              <NavDropDownCard :showChild="false" />
            </template>
          </dropdown-menu>
        </div>
      </div>
    </div>
    <div class="header-wrapper-navitems font-15 font-regular">
      <img
        src="@/assets/icons/icon-hamburger.svg"
        alt="menu"
        class="hamburger"
      />
      <RouterLink to="/about" class="item">
        <span class="title-medium">About</span>
      </RouterLink>
      <RouterLink to="/pricing" class="item">
        <span class="title-medium">Pricing</span>
      </RouterLink>
      <RouterLink to="/authenticate/login" class="item">
        <JmpsButton
          v-if="!userSignedIn"
          :type="'subtle'"
          class="item"
          @button-clicked="login"
        >
          Log in
        </JmpsButton>
      </RouterLink>
      <RouterLink to="/authenticate/signup" class="item">
        <JmpsButton
          v-if="!userSignedIn"
          :type="'primary'"
          class="item"
          @button-clicked="signup"
        >
          Sign up free
        </JmpsButton>
      </RouterLink>
      <dropdown-menu :right="true" :interactive="true" :hover="true">
        <JmpsButton
          v-if="userSignedIn"
          :type="'subtle'"
          class="item"
          @button-clicked="signup"
        >
          Send Feedback
        </JmpsButton>
        <template #dropdown>
          <div class="feedback-section" @keypress.enter="sendFeedback">
            <textarea
              class="feedback-section-input font-14 text-regular"
              placeholder="Write your feedback and press enter to send."
              v-model="feedback"
            />
          </div>
        </template>
      </dropdown-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";
@import "@/styles/library/variables.scss";
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
    display: flex;
    align-items: center;
  }
  .separate {
    margin-left: 80px;
  }
}
.feedback-section {
  &-input {
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 8px;
    height: 150px;
    font-size: 16px;
    font-family: $font-family;
  }
  ::placeholder {
    font-family: $font-family;
    font-size: 14px;
    letter-spacing: 1px;
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
    padding: 0 13%;
  }
}
</style>

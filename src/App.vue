<script setup>
import { ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavHeader from "./components/ui/NavHeader.vue";
const route = useRoute();

const showHeader = ref(true);
watch(
  () => route.name,
  () => {
    if (
      route.name === "SignUp" ||
      route.name === "LogIn" ||
      route.name === "ResetPassword" ||
      route.name === "EmailSent" ||
      route.name === "EmailVerified" ||
      route.name === "Onboarding" ||
      route.name === "Authenticate" ||
      route.name === undefined
    ) {
      showHeader.value = false;
    } else showHeader.value = true;
  },
  { immediate: true }
);
</script>

<template>
  <NavHeader class="header" v-if="showHeader" />

  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView style="width: 100vw; box-sizing: border-box" />
</template>

<style src="./styles/app.scss" lang="scss"></style>

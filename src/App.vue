<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavHeader from "./components/ui/NavHeader.vue";
import { useAuthStore } from "./stores/auth";
const route = useRoute();

const showHeader = ref(true);
const { isUserLoggedIn } = storeToRefs(useAuthStore());
console.log(isUserLoggedIn);

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
  <NavHeader class="header" v-if="showHeader" :userSignedIn="isUserLoggedIn" />
  <RouterView style="width: 100vw; box-sizing: border-box" />
</template>

<style src="./styles/app.scss" lang="scss"></style>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import NavHeader from "./components/ui/NavHeader.vue";
import { useAuthStore } from "./stores/auth";
import storage from "@/utils/storage";

const route = useRoute();

const showHeader = ref(true);
const { isUserLoggedIn } = storeToRefs(useAuthStore());
const authStore = useAuthStore();

onBeforeMount(() => {
  if (storage.fetch("access_token")) {
    // const loader = $loading.show({
    //   // Optional parameters
    //   "is-full-page": "true",
    //   color: "#007AFF",
    //   loader: "dots",
    // });
    authStore.getUserDetails(
      {},
      {
        success: {},
      }
    );
  }
});
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

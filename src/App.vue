<script setup>
import { RouterView } from "vue-router";
import NavHeader from "./components/ui/NavHeader.vue";
</script>

<template>
  <NavHeader class="header" />

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

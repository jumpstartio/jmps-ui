<script setup>
import JmpsFooter from "@/components/ui/JmpsFooter.vue";
import LandingBanner from "@/components/home/LandingBanner.vue";
import MentorsShowcase from "@/components/home/MentorsShowcase.vue";
import ContactBanner from "@/components/home/ContactBanner.vue";
import FeatureBanner from "@/components/home/FeatureBanner.vue";

const showElements = (event) => {
  if (event.target.scrollTop >= 50) {
    document.getElementById("m-s-container").style.opacity = 1;
  }
  if (event.target.scrollTop >= 600) {
    document.getElementById("h-i-w-container").style.opacity = 1;
  }
  if (event.target.scrollTop >= 1100) {
    document.getElementById("f-b-s-container").style.opacity = 1;
  }
};
</script>

<template>
  <div class="home-wrapper" @scroll="showElements($event)">
    <LandingBanner class="home-banner" />
    <FeatureBanner class="feature-banner" />
    <mentors-showcase id="m-s-container" class="mentor-showcase" />
    <ContactBanner class="contact" />
    <JmpsFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/fonts.scss";

.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: auto;
  height: 100vh;
  overflow: scroll;
  .home-banner {
    z-index: 0;
  }
  .search-bar {
    z-index: 2;
    margin-top: -55px;
    min-height: 113px;
    background-color: white;
  }
  .mentor-showcase {
    opacity: 0;
    transition: opacity 3s;
  }
  .how-it-works {
    opacity: 0;
    transition: opacity 2s;
  }
  .feed-back-section {
    opacity: 0;
    transition: opacity 3s;
  }
  .contact {
    margin-top: 60px;
  }
}
:deep() {
  .feedback-section-info-title {
    position: sticky;
    top: 100px;
  }
}
@media only screen and (max-width: 600px) {
  .how-it-works {
    margin-top: 32px;
  }
}
</style>

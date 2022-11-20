<script setup>
import JmpsFooter from "@/components/ui/JmpsFooter.vue";
import LandingBanner from "@/components/home/LandingBanner.vue";
import ContactBanner from "@/components/home/ContactBanner.vue";
import FaqSection from "@/components/home/FaqSection.vue";
import UserNameSigner from "@/components/home/UserNameSigner.vue";
</script>

<template>
  <!-- <div class="home-wrapper" @scroll="showElements($event)"> -->
  <div class="home-wrapper">
    <LandingBanner
      class="home-banner"
      :description="'Get 1:1 sessions bookings with your network. Guide them, mentor them, help them change their lives. It\'s more satisfying than you think. And it takes 2 minutes to get started'"
      :bannerImage="'src/assets/images/interviewer-dummy.svg'"
      :width="624"
      :height="620"
      :buttonText="'Get Started for free →'"
    >
      <p>
        Share your
        <span class="text-main">knowledge</span>
        with your network.
      </p>
    </LandingBanner>
    <UserNameSigner />
    <FaqSection @scroll-to-action="scrollToContactBanner" />
    <ContactBanner class="contact" id="contact" />
    <JmpsFooter class="footer" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/fonts.scss";
@import "@/styles/library/utils.scss";

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
    // opacity: 0;
    // transition: opacity 3s;
  }
  .how-it-works {
    // opacity: 0;
    // transition: opacity 2s;
    margin: 60px 0;
  }
  .feed-back-section {
    opacity: 0;
    transition: opacity 3s;
  }
  .feature-banner {
    padding: 20px 0 60px 0;
  }
}
:deep() {
  .feedback-section-info-title {
    position: sticky;
    top: 100px;
  }
}
@media only screen and (max-width: 600px) {
  .home-wrapper {
    max-width: 100%;
    overflow-x: hidden;
    .how-it-works {
      margin-top: 32px;
    }
  }
}
</style>

<script setup>
import JmpsFooter from "@/components/ui/JmpsFooter.vue";
import LandingBanner from "@/components/home/LandingBanner.vue";
import MentorsShowcase from "@/components/home/MentorsShowcase.vue";
import ContactBanner from "@/components/home/ContactBanner.vue";
import FeatureBanner from "@/components/home/FeatureBanner.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";
import FeedbackSection from "@/components/home/FeedbackSection.vue";
import FaqSection from "@/components/home/FaqSection.vue";
import { fansFaqs } from "@/constants/home";

const scrollToContactBanner = () => {
  document.getElementById("contact").scrollIntoView();
};
</script>

<template>
  <!-- <div class="home-wrapper" @scroll="showElements($event)"> -->
  <div class="home-wrapper">
    <LandingBanner
      class="home-banner"
      :bannerImage="'src/assets/images/success.webp'"
    >
      <p>
        Get
        <span class="text-main">really</span>
        good at Sofwtare engineering interviews
      </p>
    </LandingBanner>
    <FeatureBanner class="feature-banner" />
    <div class="line-divider" />
    <HowItWorks id="h-i-w-container" class="how-it-works" />
    <div class="line-divider" />
    <mentors-showcase id="m-s-container" class="mentor-showcase" />
    <div class="line-divider" />
    <FeedbackSection />
    <FaqSection :faqs="fansFaqs" @scroll-to-action="scrollToContactBanner" />
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
    max-width: 1440px;
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

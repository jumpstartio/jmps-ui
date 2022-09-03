<script setup>
import JmpsButton from "@/components/ui/JmpsButton.vue";
import ContactCard from "@/components/ui/ContactCard.vue";
</script>
<template>
  <div class="contact-banner-wrapper">
    <div class="contact-banner-wrapper-handout">
      <div class="contact-banner-wrapper-handout-container">
        <div class="contact-banner-wrapper-handout-container-brand">
          <p class="title-32 title-semibold">Reach us</p>
        </div>
        <div class="contact-banner-wrapper-handout-container-details">
          <ContactCard
            type="Send us an email"
            details="hello@jumpstrart.in"
            icon="icon-contact-email"
            class="card"
          />
          <ContactCard
            type="Give us a call"
            details="+91-9829754634"
            icon="icon-contact-phone"
          />
        </div>
      </div>
    </div>
    <div class="contact-banner-wrapper-doubt">
      <div class="contact-banner-wrapper-doubt-container">
        <p class="title-32 title-semibold">Still have doubts ?</p>
        <JmpsButton
          v-if="!userSignedIn"
          :type="'primary-dark'"
          :prefix="'icon-arrow-right'"
          class="item"
          @button-clicked="login"
        >
          Book a session with our team →
        </JmpsButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.contact-banner-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  &-handout {
    display: flex;
    min-height: 258px;
    background: $banner-background-light;
    align-items: center;
    width: 100%;
    &-container {
      display: flex;
      align-items: center;
      padding: auto;
      position: relative;
      margin-right: auto;
      margin-left: auto;
      &-brand {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      &-details {
        margin-left: 80px;
        gap: 120px;
        width: 100%;
        display: flex;
        flex-direction: row;
      }
    }
  }
  &-doubt {
    display: flex;
    min-height: 180px;
    background-color: $banner-background-dark;
    align-items: center;
    padding: auto;
    &-container {
      align-items: center;
      display: flex;
      position: relative;
      margin-right: auto;
      margin-left: auto;
      gap: 500px;
    }
  }
  .card {
    width: 320px;
  }
}
</style>

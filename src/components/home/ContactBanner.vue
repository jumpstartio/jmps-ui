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
        <JmpsButton :type="'primary-dark'" class="item">
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
  width: 100%;
  background: $banner-background-light;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  &-handout {
    &-container {
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 180px;
      &-details {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
  &-doubt {
    display: flex;
    &-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 180px;
    }
  }
  .card {
    width: 320px;
  }
}
@media only screen and (max-width: 600px) {
  .contact-banner-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding-bottom: 40px;
    &-handout {
      &-container {
        padding-bottom: 32px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0;
      }
    }
    &-doubt {
      display: flex;
      &-container {
        padding-right: 0;
      }
    }
  }
}
</style>

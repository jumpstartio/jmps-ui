<template>
  <div class="signer-wrapper">
    <div class="signer-wrapper-container">
      <div class="signer-wrapper-container-info">
        <p class="title-40 title-semibold">
          Overwhelmed with requests for guidance and mentorship?
        </p>
        <p class="title-17">
          Ditch the back and forth of irrelevant emails and texts. And the
          awkwardness of asking for payments. Just create your Jumpstart link and share with your network.
        </p>
        <div class="signer-wrapper-container-info-action">
          <JmpsInput
            :placeholder="'yourname'"
            :prefixIcon="'favicon'"
            :imageExtension="'png'"
            :borderRadius="'40px'"
            :border="'2px solid #141414;'"
            :height="'48px'"
            :outline="'3px solid rgba(20, 20, 20, 0.14)'"
            :slotname="'default'"
            :inputBoxPadding="'160px'"
          >
            <template #default>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                jumpstart.io/
              </p>
            </template>
          </JmpsInput>
          <UnderlinedText
            class="underlined-text"
            :text="'It\'s free, and takes less than 2 minutes!'"
          />
        </div>
      </div>
      <div class="signer-wrapper-container-faqs">
        <img
          src="@/assets/illustrations/illustration-mentors.svg"
          class="signer-wrapper-container-faqs-image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import JmpsInput from "@/components/ui/JmpsInput.vue";
import UnderlinedText from "@/components/ui/UnderlinedText.vue";
</script>

<style lang="scss" scoped>
.signer-wrapper {
  display: flex;
  margin: 0 120px;
  box-sizing: border-box;
  padding: 90px 0 40px;
  flex-direction: column;

  &-container {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
    &-info {
      display: block;
      flex: 0 0 55%;
      max-width: 55%;
      &-action {
        margin-top: 80px;
      }
      .underlined-text {
        margin-top: 20px;
      }
    }
    &-faqs {
      display: block;
      flex: 0 0 45%;
      max-width: 45%;
      &-image {
        width: 450px;
      }
    }
  }
}
</style>

<template>
  <div class="footer-wrapper">
    <div class="footer-wrapper-brand">
      <img src="@/assets/images/jumpstart.svg" alt="" srcset="" />
      <div class="footer-wrapper-brand-social-links">
        <a
          v-for="icon in socialLinks"
          :key="icon"
          :href="icon.link"
          target="_balnk"
          ><img
            :src="`src/assets/icons/${icon.img}`"
            class="footer-wrapper-brand-social-links-icons"
            :alt="icon.name"
        /></a>
      </div>
    </div>
    <div class="separator footer-wrapper-separator" />
    <div class="footer-wrapper-action">
      <ul>
        <li>Find Interviewer</li>
        <RouterLink to="/join-jumpstart">
          <li>Become Interviewer</li>
        </RouterLink>
        <li>FAQ</li>
      </ul>
      <ul class="font-14">
        <li>Join Jumpstart</li>
        <li>Become Interviewer</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div class="footer-wrapper-info text-secondary">
      @2021 Jumpstart. All rights reserved.
      <ul class="font-14 text-secondary">
        <li>Privacy Policy</li>
        <li>Terms <span>&</span> Conditions</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "JmpsFooter",
  setup() {
    const socialLinks = [
      {
        name: "Linkedin",
        link: "",
        img: "icon-social-linkedin.svg",
      },
      {
        name: "Youtube",
        link: "",
        img: "icon-social-youtube.svg",
      },
      {
        name: "Twitter",
        link: "",
        img: "icon-social-twitter.svg",
      },
      {
        name: "Instagram",
        link: "",
        img: "icon-social-instagram.svg",
      },
      {
        name: "Discord",
        link: "https://twitter.com/jumpstart",
        img: "icon-social-discord.svg",
      },
    ];
    return {
      socialLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 48px 24px 48px;
  background-color: $white;
  &-brand {
    display: flex;
    align-items: center;
    margin-top: 42px;
    justify-content: space-between;
    &-social-links {
      display: flex;
      gap: 16px;
    }
  }
  &-separator {
    margin-top: 22px;
  }
  &-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      gap: 40px;
      padding: 0;
      a {
        text-decoration: none;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      gap: 40px;
      padding: 0;
    }
  }
}
@media only screen and (max-width: 1124px) {
  .footer-wrapper-action {
    ul {
      flex-direction: column;
      gap: 12px;
    }
  }
}
@media only screen and (max-width: 748px) {
  .footer-wrapper-info {
    flex-direction: column;
  }
}
@media only screen and (max-width: 600px) {
  .footer-wrapper {
    padding-bottom: 60px;
    &-brand {
      flex-direction: column;
      &-social-links {
        margin-top: 16px;
        &-icons {
          width: 24px;
          height: 24px;
        }
      }
    }
    &-action {
      display: none;
    }
    &-info {
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
      ul {
        flex-direction: column;
        gap: 10px;
      }
    }
  }
}
</style>

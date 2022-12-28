<template>
  <div class="home-faq-wrapper">
    <div class="home-faq-wrapper-card">
      <div style="margin-top: 16px" v-for="(faqItem, i) in faq" :key="i">
        <div
          class="home-faq-wrapper-faq-header"
          @click="faqOpen(i)"
          :class="`home-faq-${faqItem.id}`"
        >
          <p
            :class="[
              isFaqOpen[i] ? 'title-medium' : 'font-regular',
              'title-17',
            ]"
          >
            {{ faqItem.question }}
          </p>
          <img
            alt="arrow"
            :class="[isFaqOpen[i] ? 'arrow-open' : 'arrow-close', 'arrow']"
          />
        </div>
        <div class="home-faq-wrapper-faq-header-body" v-if="isFaqOpen[i]">
          <p class="font-15 font-normal">{{ faqItem.answer }}</p>
          <!-- <div v-if="faqItem.links" class="line-separator"></div>
          <p v-if="faqItem.links" class="helpful-links body-15 text-secondary">
            Helpful links
          </p> -->
          <!-- <ul v-for="link in faqItem.links.links" :key="link">
            <a v-if="link.isExternal" :href="link.link" target="_blank">
              <li class="helpful-links-items font-15 font-medium">
                {{ link.name }}
              </li>
              <img v-if="link.isExternal" class="new-tab" alt="New tab" />
            </a>
            <div v-else>
              <li
                class="helpful-links-items font-15 font-medium cursor-pointer"
                @click="goToFaqLink(link.link)"
              >
                {{ link.name }}
              </li>
            </div>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { isMobile } from "../../utils/helper";

export default {
  name: "homeFaq",
  props: {
    faq: {
      type: Array,
      default: null
    },
    searchFaqId: {
      type: Number,
      default: null,
      required: false,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const noOfFaq = ref(props.faq.length);
    const isFaqOpen = ref(new Array(noOfFaq.value).fill(false));

    const faqOpen = (index) => {
      for (let i = 0; i < noOfFaq.value; i++) {
        if (index === i) {
          isFaqOpen.value[index] = !isFaqOpen.value[index];
        } else {
          isFaqOpen.value[i] = false;
        }
      }
    };
    const goToFaqLink = (link) => {
      router.push(link);
    };

    watch(
      () => props.searchFaqId,
      () => {
        if (props.searchFaqId) {
          props.faq.forEach((faqItem, index) => {
            if (faqItem.id === parseInt(props.searchFaqId)) {
              faqOpen(index);
            }
          });
        }
      },
      {
        immediate: true,
      }
    );

    return {
      isMobile,
      faqOpen,
      isFaqOpen,
      noOfFaq,
      goToFaqLink,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/icons.scss";
.home-faq-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-card {
    margin-top: 48px;
  }
  &-faq-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    background-color: $banner-background-light;
    width: 600px;
    border-radius: 8px;
    cursor: pointer;
    padding: 0 24px;
    .arrow {
      margin-right: 26px;
      margin-left: 10px;
      &-open {
        content: $icon-dd-arrow-up-grey;
      }
      &-close {
        content: $icon-dd-arrow-down-grey;
      }
    }
    &-body {
      margin-top: -24px;
      height: max-content;
      background-color: $banner-background-light;
      border-radius: 0 8px 8px;
      padding: 0 24px 10px 24px;
      width: 600px;
      ul {
        a {
          display: flex;
          text-decoration: none;
        }
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
}
.new-tab {
  margin-left: 8px;
  cursor: pointer;
}
.line-separator {
  margin-top: 24px;
  height: 0.5px;
  background-color: $border-color;
}
.helpful-links {
  margin-top: 24px;
  &-items {
    margin-top: 8px;
  }
}
@media only screen and (max-width: 600px) {
  .home-faq-wrapper {
    margin: 0 16px;
    width: 300px;
    &-faq-header {
      width: 300px;
      .arrow {
        margin-right: 0px;
      }
      &-body {
        width: 300px;
        height: 500px;
      }
    }
  }
}
</style>

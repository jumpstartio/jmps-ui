<template>
  <div class="showcase-wrapper">
    <div class="showcase-wrapper-text-container">
      <p class="headline title-40 title-semibold">{{ title }}</p>
      <div class="description font-16 font-regular">{{ description }}</div>
      <div class="actions">
        <JmpsButton
          :width="146"
          :type="'secondary'"
          @button-clicked="showAllInterviewers"
          >Explore all</JmpsButton
        >
        <div class="actions-navigation">
          <JmpsButton
            :width="46"
            :height="46"
            :type="'square'"
            :icon="'icon-arrow-left'"
            @button-clicked="prev"
          >
          </JmpsButton>
          <JmpsButton
            :width="46"
            :height="46"
            :type="'square'"
            :icon="'icon-arrow-right'"
            @button-clicked="next"
          ></JmpsButton>
        </div>
      </div>
    </div>
    <div class="showcase-wrapper-cards-container">
      <div
        v-for="(interviewer, index) in interviewers"
        :key="interviewer"
        :id="`showcase-cards-carousel-${index}`"
        class="showcase-wrapper-card"
      >
        <interviewers-card :interviewer="interviewer" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { interviewers } from "@/constants/home";
import JmpsButton from "@/components/ui/JmpsButton.vue";
import InterviewersCard from "@/components/home/InterviewersCard.vue";
import { useRouter } from "vue-router";
export default {
  name: "MentorsShowcase",
  components: {
    JmpsButton,
    InterviewersCard,
  },
  props: {
    title: {
      type: String,
      default: "Get interviewed by the best in Industry",
    },
    description: {
      type: String,
      default:
        "Get detailed feedback from the interviewers from top product companies. Our Global community has interviewers from 100+ companies.",
    },
  },
  setup(props) {
    const index = ref(0);
    var startX;
    var dist;

    const router = useRouter();

    const handleswipe = (isrightswipe, isswipeleft, index) => {
      if (isrightswipe) {
        prev();
      } else if (isswipeleft) {
        next();
      }
    };
    const prev = () => {
      if (index.value > 0) {
        index.value--;
        slide(index.value);
      }
    };
    const next = () => {
      if (index.value < interviewers.length - 1) {
        index.value++;
        slide(index.value);
      }
    };
    const slideStart = (event) => {
      const touchobj = event.changedTouches[0];
      dist = 0;
      startX = touchobj.pageX;
    };
    const slideEnd = (event) => {
      const touchobj = event.changedTouches[0];
      dist = touchobj.pageX - startX;
      const swiperightBol = dist >= 50;
      const swipeleftBol = dist <= -50;
      handleswipe(swiperightBol, swipeleftBol, index.value);
    };
    const slide = (i) => {
      for (let j = 0; j < interviewers.length; j++) {
        document.getElementById(
          `showcase-cards-carousel-${j}`
        ).style.transform = "translateX(" + -301 * i + "px)";
      }
    };
    const showAllInterviewers = () => {
      router.push("/interviewers");
    };

    return {
      index,
      interviewers,
      next,
      prev,
      slideEnd,
      slideStart,
      showAllInterviewers,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.showcase-wrapper {
  display: flex;
  height: max-content;
  width: 100%;
  &-text-container {
    margin: 162px 0 0 90px;
    max-width: 462px;
    display: flex;
    flex-direction: column;
    .description {
      color: $grey;
      margin-top: 8px;
    }
    .actions {
      margin-top: 28px;
      display: flex;
      gap: 30px;
      &-navigation {
        display: flex;
        gap: 10px;
      }
    }
  }
  &-cards-container {
    display: flex;
    margin-top: 169px;
    margin-left: 35px;
    margin-right: 16px;
    gap: 20px;
    overflow-x: hidden;
  }
  &-card {
    width: 100%;
    transform: translateX(0);
    gap: 16px;
    transition: transform 1s;
  }
}
@media only screen and (max-width: 600px) {
  .showcase-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &-text-container {
      margin: 72px 16px 32px 16px;
      .headline {
        font-size: 24px;
        line-height: 32px;
      }
      .description {
        font-size: 16px;
        line-height: 22px;
        max-width: 325px;
      }
    }
    &-cards-container {
      margin: 0 16px;
    }
  }
}
</style>

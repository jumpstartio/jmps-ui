<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goToResource = (link) => {
  console.log(link);
  router.push(link);
};
defineProps({
  dropDownItems: {
    type: Array,
    required: false,
    default: () => [
      {
        icon: "illustration-mock-interview",
        title: "Mock Interview",
        description:
          "Get interview ready through 1-on-1 mentoring sessions with engineers from top product companies",
        child: [
          {
            title: "Software Developer Mock Interview",
            link: "/fullstack-engineer",
          },
          {
            title: "Full stack Developer",
            link: "/fullstack-engineer",
          },
        ],
      },
      {
        icon: "illustration-resume-review",
        title: "Resume Review",
        description:
          "Get your resume reviewed from top interviewers and make your resume stand out from the crowd.",
      },
      {
        icon: "illustration-agreement",
        title: "1:1 Mentorship",
        description:
          "Interact with domain experts working at top companies. Remove the guesswork today.",
        child: {
          title: "Full stack Developer",
          link: "/fullstack-engineer",
        },
      },
    ],
  },
  showChild: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="dropdown-wrapper">
    <div class="dropdown-wrapper-parent-container">
      <div v-for="item in dropDownItems" :key="item">
        <div class="item-card" @click="goToResource(item.icon)">
          <img
            :src="`src/assets/illustrations/${item.icon}.png`"
            class="item-card-icon"
            alt=""
          />
          <div class="item-card-link">
            <p class="title-19 title-semibold item-card-link-text">
              {{ item.title }}
            </p>
            <p class="font-13 font-regular text-secondary item-card-link-text">
              {{ item.description }}
            </p>
          </div>
          <img
            src="@/assets/icons/icon-right-longarrow.svg"
            class="item-card-arrow"
          />
        </div>
      </div>
    </div>
    <div v-if="showChild" class="vertical-divider" />
    <div v-if="showChild" class="dropdown-wrapper-child-container">
      <div v-for="child in dropDownItems[0].child" :key="child">
        <div
          class="dropdown-wrapper-child-container-item"
          @click="goToResource(item.icon)"
        >
          <div class="item-card-link">
            <p class="font-15 font-regular item-card-link-text">
              {{ child.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
@import "@/styles/library/utils.scss";
@import "@/styles/library/fonts.scss";
@import "@/styles/library/icons.scss";

.dropdown-wrapper {
  height: 100%;
  box-sizing: border-box;
  padding: 16px 8px;
  display: flex;
  width: 100%;
  &-parent-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    :hover {
      background-color: $banner-background-light;
      border: 0px solid $banner-background-light;
      border-radius: $border-radius;
    }
  }
  &-child-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &-item {
      cursor: pointer;
      background-color: $banner-background-light;
      border: 1px solid $banner-background-light;
      border-radius: 16px;
      display: block;
      padding: 4px 10px;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      text-decoration: none;
    }
  }
}
.item-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  cursor: pointer;
  &-icon {
    width: 2.5rem;
    height: 2.5rem;
    max-width: none;
    margin-bottom: 0;
    border-radius: 0;
    opacity: 1;
  }
  &-link {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 320px;
    padding-left: 16px;
    &-text {
      margin: 4px;
    }
  }
  &-arrow {
    width: 2.5rem;
    height: 2.5rem;
    max-width: none;
    transform: scale(0.8);
    margin-bottom: 0;
    border-radius: 0;
    opacity: 1;
  }
}
.vertical-divider {
  margin-left: 16px;
  border-left: 1.5px solid $primary-dark;
  padding: 0 10px;
  height: 400px;
}
</style>

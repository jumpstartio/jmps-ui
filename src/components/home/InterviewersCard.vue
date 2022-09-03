<template>
  <div
    class="interviewer-card-wrapper"
    :style="`background-image: url(${interviewer.photo})`"
  >
    <div class="overlay">
      <a :href="interviewer.linkedin" target="_blank"
        ><img
          src="@/assets/icons/icon-linkedin-white.svg"
          class="linkedin"
          :alt="interviewer.name"
      /></a>
      <div class="interviewer-details">
        <p
          class="title-14 title-medium text-white cursor-pointer"
          @click="visitProfile(interviewer)"
        >
          {{ interviewer.name }}
        </p>
        <p class="caption-regular title-regular text-white">
          {{ interviewer.designation }} at {{ interviewer.organization }}
        </p>
        <p class="caption-regular text-white">
          Interviewing for {{ interviewer.expertise }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { slugify } from "@/utils/helper";
export default {
  name: "InterviewersCard",
  props: {
    interviewer: {
      type: Object,
      default: () => ({
        id: 10001,
        name: "Naga Deepak Bhushan",
        designation: "Software Engineer",
        organization: "IBM",
        linkedin: "https://www.linkedin.com/in/naga-deepak-bhushan-7030161b2/",
        photo:
          "https://media-exp1.licdn.com/dms/image/C5603AQGKmDS0izDmYA/profile-displayphoto-shrink_800_800/0/1633014384796?e=1639008000&v=beta&t=B5XV11pF2L0QFOUxrNhD75s9t8C6PY8YlbGtK-kqCdU",
        expertise: "Backend Engineering",
      }),
    },
  },
  setup() {
    const router = useRouter();
    const visitProfile = (interviewer) => {
      router.push(
        `/interviewers/${interviewer.id}/${slugify(interviewer.name)}`
      );
    };
    return {
      visitProfile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";

.interviewer-card-wrapper {
  border-radius: 16px;
  height: 392px;
  width: 281px;
  background-color: $white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .overlay {
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: $interviewer-card-overlay;
    border-radius: 16px;
    position: relative;
    display: flex;
    .linkedin {
      position: absolute;
      right: 24px;
      top: 24px;
      cursor: pointer;
    }
    .interviewer-details {
      display: table-cell;
      display: inline-block;
      align-self: flex-end;
      margin-left: 16px;
      margin-bottom: 16px;
      p {
        margin: 0;
        margin-bottom: 6px;
      }
    }
  }
}
</style>

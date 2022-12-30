<template>
  <div class="write-review-container">
    <div
      @keydown.esc="showDropdown = false"
      tabindex="0"
      v-click-outside="hideDropdown"
      :class="[!showDropdown ? 'cursor-pointer' : '', 'review-header']"
    >
      <div class="left-items" v-if="!showDropdown">
        <img :src="receiver.photo" alt="" class="receiver-photo" />
        <div class="reciever-details">
          <p class="text">{{ receiver.name }}</p>
          <p class="text text-secondary">
            {{ receiver.title + ", " + receiver.company }}
          </p>
        </div>
      </div>
      <div class="left-items-down" v-else>
        4th December 2021
        <img
          src="@/assets/icons/icon-edit.svg"
          height="18"
          width="18"
          :alt="showDropdown ? 'arrow-up' : 'arrow-down'"
          :class="isEditing ? 'edit-review-active' : 'edit-review'"
          @click="isEditing = !isEditing"
        />
        <img
          src="@/assets/icons/icon-delete.svg"
          height="18"
          width="18"
          class="edit-review"
          :alt="showDropdown ? 'arrow-up' : 'arrow-down'"
        />
      </div>
      <div class="right-items">
        <!-- <star-rating
          :readOnly="!isEditing"
          :showRating="false"
          :borderWidth="0.2"
        /> -->
        <img
          :style="[
            showDropdown ? 'transform: rotate(180deg)' : null,
            'cursor: pointer;',
          ]"
          src="@/assets/icons/icon-arrow-down.svg"
          height="18"
          width="18"
          :alt="showDropdown ? 'arrow-up' : 'arrow-down'"
          @click="showDropdown = !showDropdown"
        />
      </div>
    </div>
    <div class="body" v-if="showDropdown">
      <jmps-input
        :type="'textarea'"
        :showOuterShadow="isEditing"
        :width="100"
        :readOnly="!isEditing"
        v-model="reviewText"
        :disabled="true"
      />
    </div>
    <div class="footer" v-if="showDropdown">
      <p class="text-secondary">Sent to:</p>
      <div class="sent-to">
        <img :src="receiver.photo" alt="" class="receiver-photo" />
        <div class="reciever-details">
          <p class="text">{{ receiver.name }}</p>
          <p class="text text-secondary">
            {{ receiver.title + ", " + receiver.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import StarRating from "@/components/ui/StarRating.vue";
import JmpsInput from "@/components/ui/JmpsInput.vue";
export default {
  name: "WriteReview",
  components: {
    // StarRating,
    JmpsInput,
  },
  props: {
    receiver: {
      type: Object,
      default: () => ({
        photo: "https://avatars.githubusercontent.com/u/26616369?v=4",
        name: "Akhilesh Kumar",
        title: "Software Engineer",
        company: "Quinbay",
        rating: 4.7,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit risus, facilisis in imperdiet dictumst. Convallis eu, diam magna risus consectetur felis. Justo arcu ornare imperdiet malesuada semper elementum sed venenatis. Orci tristique euismod maecenas id a, dui. Eget praesent felis sagittis vitae. Eu nisl, ipsum, rhoncus lectus enim nec, ac habitant. Egestas in convallis convallis mattis consequat bibendum ullamcorper. Commodo consectetur arcu augue quisque nisl, interdum nunc facilisis viverra. Urna sed feugiat.",
      }),
      required: false,
    },
  },
  setup(props) {
    const showDropdown = ref(false);
    const reviewText = ref(props.receiver.review);
    const isEditing = ref(false);
    return {
      showDropdown,
      reviewText,
      isEditing,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/library/colors.scss";
.write-review-container {
  display: flex;
  box-sizing: border-box;
  border: 1px solid $primary-light;
  border-radius: 8px;
  flex-direction: column;
  .review-header {
    display: flex;
    padding: 16px;
    align-items: center;
    width: 100%;
    min-height: 60px;
    .left-items {
      display: flex;
      gap: 16px;
      .receiver-photo {
        height: 48px;
        width: 48px;
        border-radius: 50%;
      }
      .reciever-details {
        display: flex;
        flex-direction: column;
        .text {
          margin: 0;
        }
      }
    }
    .left-items-down {
      display: flex;
      align-items: center;
      gap: 8px;
      .edit-review {
        padding: 5px;
        cursor: pointer;
      }
      :hover {
        border-radius: 50%;
        background-color: $primary-light;
      }
      .edit-review-active {
        padding: 5px;
        cursor: pointer;
        border-radius: 50%;
        background-color: $primary-light;
      }
    }
    .right-items {
      display: flex;
      gap: 16px;
      margin-left: auto;
      margin-right: 32px;
    }
  }
  .body {
    padding: 16px;
    box-sizing: border-box;
    :deep() {
      .input-large {
        max-width: unset;
      }
    }
  }
  .footer {
    padding: 16px;
    box-sizing: border-box;
    .sent-to {
      display: flex;
      gap: 16px;
      .receiver-photo {
        height: 48px;
        width: 48px;
        border-radius: 50%;
      }
      .reciever-details {
        display: flex;
        flex-direction: column;
        .text {
          margin: 0;
        }
      }
    }
  }
}
</style>

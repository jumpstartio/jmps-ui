<template>
  <div class="banner-container">
    <img
      :src="bannerImg ? bannerImg : null"
      alt=""
      class="profile-banner"
      :style="`background-image: url('${bannerImg}')`"
    />
  </div>
</template>

<script>
export default {
  name: "ProfileBanner",
  props: {
    bannerImg: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-container {
  width: 100vw;
  height: 291px;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c968b5,
    #bb68c6,
    #a46bd9,
    #8271ea,
    #6384f6,
    #3f94fd,
    #00a3ff,
    #00bcff,
    #00d3ff,
    #00e8fb,
    #5ffbf1
  );
  img {
    object-fit: cover;
    height: 291px;
    width: 100%;
    zoom: 0-1;
  }
}
</style>

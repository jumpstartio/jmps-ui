<template>
  <div class="rating">
    <ul class="list">
      <li @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
      <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i> 
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    grade: String,
    maxStars: Number,
    hasCounter: {
      typ
    }
  },
  setup () {
    const rate = (star) => {
      if (star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
    }
    return {
      stars: this.grade,
      rate
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

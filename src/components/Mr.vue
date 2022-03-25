<template>
  <div>
    <div ref="filterSwiper" :options="swiperOption">
      <div v-for="i in 3" :key="i">
        <img :src="require('@/assets/Gallery/MR/' + i + '.jpeg')" />
      </div>
      <!-- <swiper-slide v-for="i in 7" :key="i">
        <img :src="require('@/assets/Gallery/journey/img' + i + '.webp')" />
      </swiper-slide> -->
      <!-- <swiper-slide
        ><img src="~@/assets/Gallery/Book/img1.jpeg" alt="pg1"
      /></swiper-slide> -->
    </div>
  </div>
</template>

<script></script>
<style lang="scss" scoped>
img {
  width: 70%;
}
div {
  text-align: center;
}
.swiper-container {
  padding: 0 0px;

  .swiper-wrapper {
    .swiper-slide {
      width: auto;

      appearance: none;

      i video {
        height: 93vh;
      }
    }
  }
}
</style>

<template>
  <div>
    <div ref="filterSwiper" :options="swiperOption">
      <div v-for="i in 9" :key="i">
        <img :src="require('@/assets/Gallery/Other/' + i + '.jpeg')" />
      </div>
      <div>
        <img :src="require('@/assets/Gallery/Other/' + 1 + '.webp')" />
      </div>
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

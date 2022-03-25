<template>
  <div>
    <swiper ref="filterSwiper" :options="swiperOption">
      <swiper-slide v-for="i in 8" :key="i">
        <img :src="require('@/assets/Gallery/Witch/' + i + '.jpeg')" />
      </swiper-slide>
      <!-- <swiper-slide>
        <img :src="require('@/assets/Gallery/Other/' + 1 + '.webp')" />
      </swiper-slide> -->
      <!-- <swiper-slide
        ><img src="~@/assets/Gallery/Book/img1.jpeg" alt="pg1"
      /></swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "FilterSwiper",

  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        mousewheel: {
          invert: false,
        },
        spaceBetween: 5,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: true,
        centerInsufficientSlides: true,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
<style lang="scss" scoped>
.swiper-container {
  padding: 0 0px;

  .swiper-wrapper {
    .swiper-slide {
      width: auto;

      padding: 0px 0px;

      appearance: none;

      img {
        height: 93vh;
      }
      video {
        height: 93vh;
      }
    }
  }
}
</style>

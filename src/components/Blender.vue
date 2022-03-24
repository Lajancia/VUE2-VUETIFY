<template>
  <div>
    <swiper ref="filterSwiper" :options="swiperOption">
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img1.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img2.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img3.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img4.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img5.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img6.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img7.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img8.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img9.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img10.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img11.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img12.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img13.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img14.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img15.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img16.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img17.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img18.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img19.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img20.jpeg" alt="pg1"
      /></swiper-slide>
      <swiper-slide
        ><img src="~@/assets/Gallery/3D/img21.jpeg" alt="pg1"
      /></swiper-slide>
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
        spaceBetween: 0,
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

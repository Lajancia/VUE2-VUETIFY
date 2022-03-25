<template>
  <div>
    <div ref="filterSwiper">
      <div v-for="i in 21" :key="i">
        <img :src="require('@/assets/Gallery/3D/img' + i + '.jpeg')" />
      </div>
      <!-- <swiper-slide
        ><img src="~@/assets/Gallery/Book/img1.jpeg" alt="pg1"
      /></swiper-slide> -->
    </div>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

// export default {
//   name: "FilterSwiper",

//   data() {
//     return {
//       swiperOption: {
//         loop: true,
//         slidesPerView: "auto",
//         direction: "vertical",
//         mousewheel: {
//           invert: false,
//         },
//         spaceBetween: 0,
//         slidesOffsetBefore: 0,
//         slidesOffsetAfter: 0,
//         freeMode: true,
//         centerInsufficientSlides: true,
//       },
//     };
//   },
//   components: {
//     swiper,
//     swiperSlide,
//   },
// };
</script>
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

<template>
  <v-container>
    <carousel class="hidden-sm-and-down" id="container">
      <slide>
        <img id="image" src="~@/assets/pictures/img7.jpeg" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/img2.jpeg" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/img3.jpeg" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/img4.jpeg" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/img5.jpeg" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/img8.png" />
      </slide>
    </carousel>
    <v-carousel class="hidden-sm-and-up" :show-arrows="false" hide-delimiters>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img7.jpeg" />
      </v-carousel-item>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img2.jpeg" />
      </v-carousel-item>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img3.jpeg" />
      </v-carousel-item>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img4.jpeg" />
      </v-carousel-item>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img5.jpeg" />
      </v-carousel-item>
      <v-carousel-item>
        <img id="image" src="~@/assets/pictures/img8.png" />
      </v-carousel-item>
    </v-carousel>
    <a href="https://grafolio.naver.com/kie6974"
      ><v-btn fab dark large color="secondary" fixed right bottom>
        <v-icon color="white">mdi-picture-in-picture-bottom-right</v-icon>
      </v-btn></a
    >
  </v-container>
</template>
<script>
// import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";
export default {
  components: {
    // Carousel,
    // Slide,
  },
  carouselAnimation: {
    showButtons: false,
  },
};
</script>
<style scoped>
.carousel-control-next {
  display: hidden;
}
.heroCarousel .slick-next,
.heroCarousel .slick-prev,
.heroCarousel .slick-dots {
  display: none !important;
}
.carousel .carousel-control {
  visibility: hidden;
}
.carousel-control {
  opacity: 0;
}
a[class$="carousel-control"] {
  display: none;
}

.container {
  height: 100vh;
}
#image {
  height: 90vh;
}
</style>

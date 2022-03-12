<template>
  <v-container>
    <carousel id="container">
      <slide>
        <img id="image" src="~@/assets/pictures/lantern.png" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/lantern.png" />
      </slide>
      <slide>
        <img id="image" src="~@/assets/pictures/lantern.png" />
      </slide>
    </carousel>
  </v-container>
</template>
<script>
import { Carousel, Slide } from "vue-snap";
import "vue-snap/dist/vue-snap.css";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
<style scoped>
#container {
  height: 100%;
}
img {
  height: 92vh;
}
</style>

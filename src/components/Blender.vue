<template>
  <div>
    <div ref="filterSwiper">
      <div v-for="i in 21" :key="i">
        <img :src="require('@/assets/Gallery/3D/img' + i + '.jpeg')" />
      </div>
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

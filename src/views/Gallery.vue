<template>
  <div>
    <v-container>
      <!-- first row -->
      <v-row no-gutters>
        <!-- issue 1 -->
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/blender">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/3D/img20.jpeg"
            >
            </v-img>
          </router-link>
        </v-col>
        <!-- issue 2 -->
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/book">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/Book/img19.jpeg"
            >
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/game">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/Destiny2/img7.jpeg"
            >
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/journey">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/journey/img5.webp"
            >
            </v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.footer {
  font-size: 0.85rem;
}
</style>
<script>
export default {
  setup() {},
};
</script>

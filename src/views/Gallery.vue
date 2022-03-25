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
              accent--text
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/3D/img20.jpeg"
              >3D Blender + Illust
            </v-img>
          </router-link>
        </v-col>
        <!-- issue 2 -->
        <v-col id="card" class="pa-2 accent--text" cols="12" sm="4">
          <router-link to="/book">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/Book/img19.jpeg"
              >Book
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
              Game
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
              Journey
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/Mr">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/MR/1.jpeg"
            >
              Mr. Rabbit
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/other">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/Other/2.jpeg"
            >
              Others
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/school">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/School/5.jpeg"
            >
              School
            </v-img>
          </router-link>
        </v-col>
        <v-col id="card" class="pa-2" cols="12" sm="4">
          <router-link to="/witch">
            <v-img
              id="image"
              contain
              :aspect-ratio="9 / 13"
              src="~@/assets/Gallery/Witch/4.jpeg"
            >
              Witch
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
#image {
  text-align: center;
  color: #444;
  font-size: 1.2rem;
}
#image:hover {
  color: #2978b5;
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

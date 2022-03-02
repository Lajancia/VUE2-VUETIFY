<template>
  <v-app id="inspire">
    <v-navigation-drawer class="secondary" v-model="drawer" app>
      <!--  -->
      <v-list-item class="primary">
        <v-list-item-content>
          <v-list-item-title class="white--text" id="menu-font"
            >Soomin Hwang</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="primary">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Lajancia</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Lajancia</strong> - kie6974@naver.com
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

* {
  /* background-color: black; */
  font-family: "Anton", sans-serif;
  /* overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none; */
}
::-webkit-scrollbar {
  display: none;
}
#inspire {
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg")
    no-repeat center center;
  background-size: cover;
  background-color: red;
}
</style>
<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "GitBlog", icon: "mdi-view-dashboard" },
      { title: "Gallery", icon: "mdi-forum" },
      { title: "Resume", icon: "mdi-forum" },
      { title: "Projects", icon: "mdi-forum" },
    ],
  }),
};
</script>

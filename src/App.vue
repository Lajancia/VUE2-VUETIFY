<template>
  <v-app id="inspire">
    <v-navigation-drawer class="accent" v-model="drawer" app>
      <!-- 사이드바 -->
      <v-list-item class="primary">
        <v-list-item-content>
          <v-list-item-title class="text--text" id="menu-font">
            <v-row
              ><v-col>Guest</v-col>
              <v-col
                ><v-icon class="text-right text--text ml-15"
                  >mdi-login</v-icon
                ></v-col
              ></v-row
            >
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <!-- sidebar menu -->
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="primary">
              <a href="/">Home</a>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-post-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <a href="https://lajancia.github.io/">Gitblog</a>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-picture-in-picture-bottom-right</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/gallery>Gallery</router-link>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-file-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/resume>Resume</router-link>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/projects>Projects</router-link>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-forum</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/resume>Achievement</router-link>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="primary elevation-0">
      <v-app-bar-nav-icon
        class="black--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="mr-10">
       <a class= "text--text" href="/">Lajancia</a></v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
   
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
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
#inspire {

}
</style>
<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", url: "/" },
      {
        title: "GitBlog",
        icon: "mdi-post-outline",
        url: "https://lajancia.github.io/",
      },
      {
        title: "Gallery",
        icon: "mdi-picture-in-picture-bottom-right",
        url: "/about",
      },
      { title: "Resume", icon: "mdi-file-account", url: "/resume" },
      { title: "Projects", icon: "mdi-forum", url: "/projects" },
    ],
  }),
};
</script>

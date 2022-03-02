<template>
  <v-app id="screen">
    <v-main height="400" class="overflow-hidden" style="position: relative">
      <router-view />

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item id="side-bar">
          <v-list-item-content>
            <v-list-item-title id="menu-font">Soomin Hwang</v-list-item-title>
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
    </v-main>

    <v-app-bar app color="black" dark>
      <div class="d-flex align-center"></div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Lajancia</span>
      </v-btn>
    </v-app-bar>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          <strong>Lajancia</strong> - kie6974@naver.com
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<style scoped>
#side-bar {
  background-color: #e53935;
}
#menu-font {
  color: white;
}
</style>
<script>
export default {
  name: "App",

  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "GitBlog", icon: "mdi-view-dashboard" },
        { title: "Gallery", icon: "mdi-forum" },
        { title: "Resume", icon: "mdi-forum" },
        { title: "Projects", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

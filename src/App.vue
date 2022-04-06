<template>
  <v-app id="inspire">
    <v-navigation-drawer class="accent" v-model="drawer" app>
      <!-- 사이드바 -->
      <v-list-item class="primary">
        <v-list-item-content>
          <v-list-item-title class="text--text" id="menu-font">
            <v-row
              ><v-col v-if="$store.state.user">{{$store.state.user.nick}}</v-col>
              <v-col v-else>Guest</v-col>
              <v-col
                >
                <!-- <v-tooltip bottom> -->
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-icon
        class="text-right text--text ml-15"
          
          v-bind="attrs"
          v-on="on"
        >
         mdi-login
        </v-icon>
      </template>
      <span>This login was diactivated in this website due to the Hosting problem.</span>
    </v-tooltip> -->
   
     <a href="api/auth/logout" v-if="$store.state.user">
       <v-icon 
        class="text-right text--text ml-15"
          
          v-bind="attrs"
          v-on="on"
        >
         mdi-logout
        </v-icon>
        
    </a>
     <router-link to=/indexpage v-else >
       <v-icon 
        class="text-right text--text ml-15"
          
          v-bind="attrs"
          v-on="on"
        >
         mdi-login
        </v-icon>
        
    </router-link>
                
                <v-icon 
                  ></v-icon
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
            <v-icon color="primary">mdi-alpha-p-box</v-icon>
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
            <v-icon color="primary">mdi-alpha-a-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/activity>Activity</router-link>
            </v-list-item-title>
            <!-- <mdicon name="playstation" /> -->
          </v-list-item-content>
        </v-list-item>
         <v-list-item link>
          <v-list-item-icon>
            <v-icon color="primary">mdi-file-document</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="text">
              <router-link to=/documents>Documents</router-link>
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
      </v-toolbar-title>
      <v-spacer />
       <a href="https://www.instagram.com/lajancia/" class="mx-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#2978b5"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            /></svg
        ></a>
        
        <a href="https://github.com/Lajancia" class="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#2978b5"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
            />
          </svg>
        </a>

        <a href="https://grafolio.naver.com/kie6974" class="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#2978b5"
          >
            <path
              d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
            />
          </svg>
        </a>
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

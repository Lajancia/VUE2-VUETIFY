<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" align="center">
        <v-card max-width="374" elevation="2">
          <div class="py-5 mx-5" align="left">
            <div v-if="user">
              <h1 class="text-6xl py-2 accent--text">User Information</h1>
              <p class="text-4xl" color="accent">ID : {{ user.email }}</p>
              <p class="text--accent text-4xl">Name : {{ user.nick }}</p>
              <v-row no-gutters>
                <v-col cols="12" align="center">
                  <v-card>
                    <form
                      id="twit-form"
                      action="api/post"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <v-card>
                        <div class="input-group">
                          <textarea
                            id="twit"
                            name="content"
                            maxlength="140"
                          ></textarea>
                        </div>
                      </v-card>
                      <!-- <v-card>
                        <div class="img-preview">
                          <img
                            id="img-preview"
                            src=""
                            style="display: none"
                            width="250"
                            alt="미리보기"
                          />
                          <input id="img-url" type="hidden" name="url" />
                        </div>
                      </v-card> -->

                      <div>
                        <!-- <label id="img-label" for="img">사진 업로드</label>
                        <input id="img" type="file" accept="image/*" /> -->
                        <button id="twit-btn" type="submit" class="btn">
                          짹짹
                        </button>
                      </div>
                    </form>
                  </v-card>
                  <v-card>
                    <!-- <v-for twit in twits>
                      <div class="twit-content">{{ twit.content }}</div>
                    </v-for> -->
                  </v-card>
                </v-col>
              </v-row>
              <v-btn fab dark large color="text" fixed right bottom>
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
            </div>
            <div v-else class="my-10 mx-10 pt-10">
              <!-- <form @submit.prevent="onSubmit"> -->
              <form method="post" action="api/auth/login">
                <p class="accent--text">ID</p>
                <input type="text" name="email" v-model="email" />
                <p class="accent--text pt-5">Password</p>
                <input type="password" name="password" v-model="password" />
                <p></p>
                <button type="submit" class="accent--text">Login</button>
                <a href="/join" class="ml-3 text--text">Join</a>
              </form>
            </div>
          </div>
        </v-card>
        <v-card>
          <div v-for="i in this.contents" v-bind:key="i">
            {{ i }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  created() {
    this.$http
      .get("/api/auth/login")
      .then((res) => {
        const user = res.data.user;
        const post = res;
        console.log(user);
        console.log("post");
        console.log(post);

        if (user) {
          this.$store.commit("setUser", user);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    this.$http
      .get("/api/page")
      .then((res) => {
        // const user = res.data.user;
        const post = res;
        // console.log(user);
        console.log("post");
        console.log(post.data.twits);
        const contents = post.data.twits;
        console.log(contents);
        // if (user) {
        //   this.$store.commit("setUser", user);
        // }
      })
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

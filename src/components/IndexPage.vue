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
              <p class="text--accent text-4xl">ID number : {{ user.id }}</p>
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
                          <textarea
                            name="cost"
                            id="twit"
                            maxlength="100"
                          ></textarea>
                        </div>
                        <button id="twit-btn" type="submit" class="btn">
                          짹짹
                        </button>
                      </v-card>
                    </form>
                  </v-card>
                  <v-card v-for="i in this.data" v-bind:key="i">
                    <div v-if="i.UserId == user.id">
                      <div>
                        {{ i.content }}
                        {{ i.cost }}
                      </div>

                      <button
                        @click="deletefunc(i.id)"
                        id="twit-btn"
                        type="submit"
                        class="btn"
                      >
                        delete
                      </button>
                    </div>
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
        const twit = res;
        // console.log(user);
        console.log("post");
        console.log(twit.data.twits);
        const contents = twit.data.twits;
        // const contents = post.data;
        console.log(contents);
        console.log(contents[0].id);
        this.data = contents;
        console.log(this.data[0].id);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    deletefunc(id) {
      this.$http.post(`/api/post/delete/${id}`).then((res) => {
        console.log(res);
      });
      window.location.reload();
    },
  },
  data() {
    return { data: [] };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

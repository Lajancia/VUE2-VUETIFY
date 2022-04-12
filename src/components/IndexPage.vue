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
export default {
  created() {
    this.$http
      .get("/api/auth/login")
      .then((res) => {
        const user = res.data.user;
        console.log(user);
        console.log(res);
        console.log();

        if (user) {
          this.$store.commit("setUser", user);
        }
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

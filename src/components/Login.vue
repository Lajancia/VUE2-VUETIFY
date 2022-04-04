<template>
  <div>
    <div class="my-10 mx-10 pt-10">
      <form @submit.prevent="onSubmit">
        <p class="text-white">아이디</p>
        <input type="text" name="id" v-model="id" />
        <p class="text-white">비밀번호</p>
        <input type="password" name="password" v-model="password" />
        <p></p>
        <button type="submit" class="text-white hover:text-yellow-500">
          로그인
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
      const id = this.id;
      const password = this.password;
      console.log(id, password);
      this.$http
        .post(
          "api/login",
          { id, password },
          { "Content-Type": "application-json" }
        )
        .then((res) => {
          if (res.data.user) {
            this.$store.commit("setUser", res.data.user);
            this.$router.push({
              name: "IndexPage",
            });
          } else if (res.data.message) {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

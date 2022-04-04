<template>
  <div class="py-20">
    <div>
      <form id="join-form" action="api/auth/join" method="post">
        <div class="text-white pt-5">
          <label for="join-email">이메일</label>
          <input class="ml-5" id="join-email" type="email" name="email" />
        </div>
        <div class="text-white pt-5">
          <label for="join-nick">닉네임</label>
          <input class="ml-5" id="join-nick" type="text" name="nick" />
        </div>
        <div class="text-white pt-5">
          <label for="join-password">비밀번호</label>
          <input
            class="ml-2"
            id="join-password"
            type="password"
            name="password"
          />
        </div>
        <button
          id="join-btn"
          type="submit"
          class="mt-5 text-white hover:text-yellow-500"
        >
          회원가입
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       id: "",
//       password: "",
//     };
//   },
//   methods: {
//     onSubmit() {
//       console.log("submit");
//       const id = this.id;
//       const password = this.password;
//       console.log(id, password);
//       this.$http
//         .post(
//           "api/auth/login",
//           { id, password },
//           { "Content-Type": "application-json" }
//         )
//         .then((res) => {
//           if (res.user) {
//             this.$store.commit("setUser", res.user);
//             this.$router.push({
//               name: "IndexPage",
//             });
//           } else if (res.data.message) {
//             alert(res.data.message);
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     },
//   },
// };
</script>

<template>
  <v-container class="py-20" align="center">
    <v-card elevation="2" max-width="374">
      <form
        id="join-form"
        action="api/auth/join"
        method="post"
        class="mx-5 my-2"
      >
        <div class="text-white pt-5 accent--text">
          <label for="join-email">Email</label>
          <input class="ml-5" id="join-email" type="email" name="email" />
        </div>
        <div class="text-white pt-5 accent--text">
          <label for="join-nick">User name</label>
          <input class="ml-5" id="join-nick" type="text" name="nick" />
        </div>
        <div class="text-white pt-5 accent--text">
          <label for="join-password">Password</label>
          <input
            class="ml-2"
            id="join-password"
            type="password"
            name="password"
          />
        </div>
        <button id="join-btn" type="submit" class="mt-5 text--text">
          JOIN
        </button>
      </form>
    </v-card>
  </v-container>
</template>

<script></script>

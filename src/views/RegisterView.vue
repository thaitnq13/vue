<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input class="form-control" type="text" name="email" required />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" required />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" class="mt-4 btn-submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {},
    moveToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

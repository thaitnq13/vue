<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      error_message: "",
    };
  },
  methods: {
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;
      if (this.email && this.password) {
        localStorage.setItem("isLogin", true);
        localStorage.setItem("user", this.email);
        this.$router.push("/");
      } else {
        this.error_message = "Login Failed";
      }
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input class="form-control" type="text" name="email" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account? <span @click="goToRegister">Register</span>
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="mt-4 btn-submit">Login</button>
      </div>
    </form>
    <div class="error-message">{{ error_message }}</div>
  </div>
</template>

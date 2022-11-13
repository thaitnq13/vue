<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input class="form-control" type="text" name="email" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input class="form-control" type="password" name="password" />
      </div>
      <div class="input">
        <label for="password">Confirm password</label>
        <input class="form-control" type="password" name="pw_confirm" />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" class="mt-4 btn-submit">Register</button>
    </form>
    <div class="error-message">{{ error_message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      pw_confirm: "",
      error_message: ""
    };
  },
  methods: {
    register(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;
      this.pw_confirm = submitEvent.target.elements.pw_confirm.value;

      if (this.password !== this.pw_confirm) {
        this.error_message = "password invalid"
      } else {
        this.$router.push("/");
        localStorage.setItem("isLogin", true);
        localStorage.setItem("email", this.email);
      }
    },
    moveToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

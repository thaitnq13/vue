<template>
  <div>
    <div class="text-center">Hello</div>
    <div id="username_display" class="display-6">{{ this.email }}</div>
    <button class="mt-4 btn" @click="signOut">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: localStorage.getItem("user"),
    };
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div>
    <input class="input-text" type="text" v-model="search">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="(item, i) in filteredItems" :key="i">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </table>
    <button class="mt-4 btn" @click="signOut">Logout</button>
  </div>
</template>

<script>
import { TABLE_EXAMPLE } from "@/utils/constants";
export default {
  data() {

    const items = TABLE_EXAMPLE;
    return {
      data: items,
      search: ''
    };
  },
  methods: {

    signOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  computed: {
    filteredItems() {
      return this.data.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  }
};
</script>

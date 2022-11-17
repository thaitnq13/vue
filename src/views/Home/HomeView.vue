<template>
  <div>
    <table>
      <tr>
        <th @click="sort('id')">ID</th>
        <th @click="sort('name')">Name</th>
        <th @click="sort('email')">Email</th>
      </tr>
      <tr v-for="item in data">
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
      currentSort: 'name',
      currentSortDir: 'asc'
    };
  },
  methods: {
    sort: function (s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
    computed: {
      sortedCats: function () {
        return this.cats.sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        });
      }
    },
    signOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

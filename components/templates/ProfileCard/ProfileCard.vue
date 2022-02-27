<template>
  <OrganismsPcard class="d-flex"/>
</template>

<script lang="ts">
import api from "../../api";
export default {
  name: "ProfileCard",
  data() {
    return {
      Posts: [],
    };
  },
  mounted() {
    api.get("https://api.github.com/users/yusefrich").then((response) => {
      this.Posts = response.data;
      console.log(response.data);
    });
    api.get("https://api.github.com/users/yusefrich/orgs").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style scoped>
.Main {
  display: flex;
}
</style>

<template>
  <div class="Overview2">
    <div class="mt-5" v-for="repo in repos" :key="repo.id">
      <div class="d-flex align-items-center">
        <h1 class="repoName">{{ repo.name }}</h1>
        <h2 class="Visib ml-2">{{ repo.visibility }}</h2>
      </div>
      <p class="colorGray">{{ repo.description }}</p>
      <div class="d-flex align-items-center">
        <p class="mr-5">{{ repo.language }}</p>
        <p class="colorGray">{{ repo.updated_at }}</p>
      </div>
      <div class="side" />
    </div>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "Repositories",
  data() {
    return {
      repos: null,
    };
  },
  mounted() {
    api.get("https://api.github.com/users/yusefrich/repos").then((response) => {
      this.repos = response.data;
      console.log("Repositories", response.data);
    });
  },
};
</script>

<style scoped>
.Overview2 {
  margin-top: 100px;
  width: 70%;
  border-radius: 5px;
}
.side {
  border-bottom: 1px solid #2a323d;
}
.repoName {
  color: #4b87c6;
  font-size: 1.3rem;
}
.Visib {
  border: 1px solid #2a323d;
  border-radius: 15px;
  padding: 0.5%;
  font-size: 0.8rem;
  color: gray;
}
</style>

<template>
  <div class="Main">
    <div class="container CardProfile">
      <div class="d-flex justify-content-center">
        <img
          class="Profile"
          alt="Profile"
          title="ProfilePic"
          src="https://avatars.githubusercontent.com/u/7936152?v=4"
        />
      </div>
      <h1 class="Name">{{ Posts.name }}</h1>
      <h4 class="Login">{{ Posts.login }}</h4>
      <p class="Bio">{{ Posts.bio }}</p>
      <button class="buttonFollow mt-2 mb-2">Edit profile</button>
      <div class="d-flex">
        <p class="ml-2">{{ Posts.followers }} <a class="colorGray">Followers</a></p>
        <p class="ml-2">{{ Posts.following }} <a class="colorGray">Followings</a></p>
      </div>
      <p>{{ Posts.company }}</p>
      <p>{{ Posts.location }}</p>
    </div>
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
  </div>
</template>

<script lang="ts">
import api from "./api";
export default {
  name: "ProfileCard",
  data() {
    return {
      Posts: [],
      repos: null,
    };
  },
  mounted() {
    api.get("https://api.github.com/users/yusefrich").then((response) => {
      this.Posts = response.data;
      console.log("All-objects", response.data);
    });
    api.get("https://api.github.com/users/yusefrich/repos").then((response) => {
      this.repos = response.data;
      console.log("Repositories", response.data);
    });
  },
};
</script>

<style scoped>
.Main {
  display: flex;
}
.Overview2 {
  margin-top: 100px;
  width: 70%;
  border-radius: 5px;
}
.CardProfile {
  width: 25vw;
}
.Profile {
  margin-top: 20px;
  width: 90%;
  height: 90%;
  border-radius: 100%;
  border: 2px solid gray;
  z-index: 2;
}
.Name {
  color: white;
  font-size: 26px;
  line-height: 1.25;
}
.Login {
  color: rgb(73, 70, 70);
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
}
.buttonFollow {
  width: 100%;
  height: 35px;
  color: white;
  border: 1px solid rgb(109, 102, 102);
  border-radius: 5px;
  background-color: #2a323d;
}
.buttonFollow:hover {
  border: 1px solid rgb(169, 159, 159);
  background-color: #37414e;
}
.colorGray {
  color: gray;
  cursor: pointer;
  text-decoration: none;
}
.colorGray:hover {
  color: #47a6ff;
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

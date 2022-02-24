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
        <p class="ml-2">
          {{ Posts.followers }} <a class="colorGray">Followers</a>
        </p>
        <p class="ml-2">
          {{ Posts.following }} <a class="colorGray">Followings</a>
        </p>
      </div>
      <p>{{ Posts.company }}</p>
      <p>{{ Posts.location }}</p>
    </div>
    <div class="Overview2">
      <tr v-for="repo in repos" :key="repo.id">
        <td>{{ repo.id }}</td>
        <td>{{ repo.name }}</td>
        <td>{{ repo.html_url }}</td>
        <td>{{ repo.language }}</td>
        <td>{{ repo.owner.Login }}</td>
      </tr>
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
  height: 70%;
  border: 1px solid #2a323d;
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
</style>
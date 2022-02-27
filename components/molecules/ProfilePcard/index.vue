<template>
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
</template>

<script>
import api from '../../api';

export default {
  name: "ProfilePcard",
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

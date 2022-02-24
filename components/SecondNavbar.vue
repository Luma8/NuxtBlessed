<template>
  <nav class="SecondNavbar">
    <div class="d-flex justify-content-center">
      <a class="Navs1 ml-2 mr-2"> Overview </a>
      <a class="Navs2 ml-2 mr-2"> Repositories </a><p class="repoCont">{{ Posts.public_repos }}</p>
    </div>
  </nav>
</template>

<script>


import api from "../components/api";
export default {
  name: "SecondNabar",
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
  },
};
</script>

<style scoped>
.SecondNavbar {
  width: 100%;
  padding: 0.5%;
  background-color: #0d1117;
  position: fixed;
  border-bottom: 1px solid #2a323d;
}
.Navs1 {
  text-decoration: none;
  cursor: pointer;
  color: rgb(217, 241, 252);
}
.Navs2 {
  text-decoration: none;
  cursor: pointer;
  color: rgb(217, 241, 252);
  border-bottom: 3px solid rgb(201, 87, 30);

}
.Navs2:hover {
  border-bottom: 3px solid rgb(75, 74, 74);
}

</style>
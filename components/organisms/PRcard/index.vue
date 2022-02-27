<template>
  <div>
    <MoleculesProfilePRcard />
    <MoleculesRepositories />
  </div>
</template>

<script>
export default {
  name: "PRcard",
};
</script>

<style>
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

<template>
  <!-- <Tutorial/> -->
  <nav class="Nav">
    <img class="ml-3 mr-3 CursorPointer" src="../assets/LogoGithub.png" alt="LogoGithub" width="30px" />
    <input class="Search" placeholder="Search or jump to..." />
    <div class="Menu">
      <a class="Menulink">Pull request</a>
      <a class="Menulink">Issues</a>
      <a class="Menulink">Marketplace</a>
      <a class="Menulink">Explore</a>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.Nav {
  background-color: #161b22;
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
}
.Search {
  width: 260px;
  height: 30px;
  border: 1px solid rgb(79, 78, 78);
  background-color: #0d1117;
  border-radius: 5px;
  font-size: 0.8rem;
  outline: none;
  color: white;
}
::-webkit-input-placeholder {
  color: rgb(207, 208, 218);
}
.Menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.Menulink{
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  color: white;
  text-decoration: none;
}
.Menulink:hover{
  color: #484f58;
}
.CursorPointer{
    cursor: pointer;
}
</style>
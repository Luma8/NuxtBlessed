<template>
  <nav class="SecondNavbar">
    <div class="d-flex justify-content-center">
      <a class="Navs1 ml-2 mr-2">
        Overview
      </a>
      <a class="Navs2 ml-2 mr-2">
        Repositories
      </a>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
.SecondNavbar {
  width: 100%;
  padding: 2%;
  background-color: #0d1117;
  position: fixed;
  border-bottom: 1px solid #2a323d;
}
.Navs1{
  text-decoration: none;
  cursor: pointer;
  color: white;
  border-bottom: 3px solid rgb(201, 87, 30);
}
.Navs2{
  text-decoration: none;
  cursor: pointer;
  color: white;
}
.Navs2:hover{
  border-bottom: 3px solid rgb(75, 74, 74);
}
</style>
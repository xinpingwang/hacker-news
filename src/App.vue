<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href>Hacker News</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Top
            </a>
            <a class="nav-item nav-link" href="#">New</a>
          </div>
        </div>
      </nav>
    </header>
    <div class="container-fluid" style="padding-top: 26px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNews from "./views/TopNews.vue";
require("bootstrap/dist/css/bootstrap.min.css");
export default {
  name: "app",
  components: {
    TopNews
  }
};
</script>

<style>
</style>

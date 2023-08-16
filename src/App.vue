<template>
  <div id="app">
    <h1>My Vue Router App</h1>

    <router-link to="/" style="padding-right: 20px">Home</router-link>

    <router-link to="/register">Register</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: black;
}
</style>

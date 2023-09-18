<template>
  <div id="app">
    <h1>My Vue Router App</h1>

    <router-link to="/" style="padding-right: 50px">Home</router-link>
    <router-link to="/funds" style="padding-right: 50px">Funds</router-link>
    <router-link to="/creations" style="padding-right: 50px"
      >Creations</router-link
    >
    <router-link to="/register" style="padding-right: 50px"
      >Register</router-link
    >

    <router-link
      v-if="!Logged"
      to="/login"
      style="padding-right: 50px"
      class="button"
      >Login
    </router-link>
    <button
      v-else
      type="button"
      style="padding-right: 50px"
      class="logoutButton"
      @click="logout"
    >
      Logout
    </button>
    <!-- -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      Logged: localStorage.isLoggedIn,
    };
  },
  methods: {
    logout() {
      localStorage.isLoggedIn = false;
      localStorage.token = null;
      axios.Instance.defaults.headers.common["Authorization"] = null;
      console.log("logout");
    },
  },
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

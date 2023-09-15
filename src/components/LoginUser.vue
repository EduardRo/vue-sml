<template>
  <div class="registration-form">
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          v-model="user.email"
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          v-model="user.password"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <!-- Add more fields as needed -->
      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      // Make an HTTP POST request to your Laravel API's registration endpoint
      // You can use Axios or another HTTP library for this
      axios
        .post("http://127.0.0.1:8000/api/login", this.user)
        .then((response) => {
          // Handle a successful registration response
          console.log(response.data);
          const token = response.data.token;
          // Store the token in localStorage
          localStorage.setItem("token", token);

          // You can also set a flag to indicate that the user is logged in if needed
          localStorage.setItem("isLoggedIn", "true");
        })
        .catch((error) => {
          // Handle registration errors
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.registration-form {
  max-width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}
</style>

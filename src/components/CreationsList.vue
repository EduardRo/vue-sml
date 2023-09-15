<template>
  <div class="hello">
    <h2>Creation component</h2>

    <div>
      <!-- Use a v-for loop to iterate over the items array -->
      <div v-for="(item, index) in items" :key="index">
        <!-- Access the properties of each item -->
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <!-- You can access imageUrl1 as well if needed -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FundsList",

  data() {
    return {
      items: [],
      token: "6|NRyyWDvfzGjysF2KWXrbGZjo2e4fKx7lNWRs35gL",
    };
  },

  mounted() {
    //const tokenr = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/api/creations", {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .then((response) => {
        this.items = response.data;
        console.log(response);
        console.log(this.items.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  },
};
</script>

// axios.get("http://127.0.0.1:8000/api/some_endpoint", { headers: {
"Authorization": `Bearer ${token}` } });

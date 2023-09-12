<template>
  <div class="hello">
    <h2>Home component</h2>

    <div>
      <!-- Use a v-for loop to iterate over the items array -->
      <div v-for="(item, index) in items.data" :key="index">
        <!-- Access the properties of each item -->
        <p>Name: {{ item.name }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Code: {{ item.code }}</p>
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
    };
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/funds")
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  },
};
</script>

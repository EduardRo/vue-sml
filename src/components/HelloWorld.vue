<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <tr v-for="item in items" :key="item.id" style="display: block">
      <li>
        {{ item.name }}
        {{ item.city }}
        {{ item.email }}
      </li>
    </tr>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return { items: [] };
  },
  props: {
    msg: String,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

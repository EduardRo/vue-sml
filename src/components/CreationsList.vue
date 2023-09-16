<template>
  <div class="hello">
    <h2>Creation component</h2>

    <div>
      <!-- Use a v-for loop to iterate over the items array -->
      <div v-for="(item, index) in items" :key="index" style="display: block">
        <div direction="ltr" class="css-vlibs4">
          <div class="css-1m31j9e">
            <div data-area="left" class="css-hwo5f4">
              <div
                data-bn-type="text"
                style="direction: ltr"
                class="css-xo7uk0"
              >
                <!-- Access the properties of each item -->
                {{ item.title }} -
                {{ item.description }}
                <!-- You can access imageUrl1 as well if needed -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useTokenStore } from "@/state";

export default {
  name: "FundsList",

  data() {
    return {
      items: [],
      //token: "6|NRyyWDvfzGjysF2KWXrbGZjo2e4fKx7lNWRs35gL",
      token: useTokenStore.token,
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

.css-vyw7c5 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #848e9c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.css-vurnku {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
}
.css-6v6i1m {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 304px;
  margin-left: -2px;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  left: 0;
  padding-left: 16px;
  top: 40px;
  height: 64px;
  background-color: #181a20;
  border-bottom: 1px solid;
  border-color: #474d57;
  color: #181a20;
  box-shadow: 10px 0 4px -4px;
}
.css-6v6i1m {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 304px;
  margin-left: -2px;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  left: 0;
  padding-left: 16px;
  top: 40px;
  height: 64px;
  background-color: #181a20;
  border-bottom: 1px solid;
  border-color: #474d57;
  color: #181a20;
  box-shadow: 10px 0 4px -4px;
}
.css-10nf7hq {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.css-k5eban {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-radius: 99999px;
  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
}
.css-vlibs4 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 64px;
}
.css-1pysja1 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.css-1m31j9e {
  background: #181a20;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  padding-right: 16px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #474d57;
  border-radius: 4px 4px 0px 0px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #eaecef;
  padding-left: 16px;
}
.css-6v6i1m {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 304px;
  margin-left: -2px;
  position: inherit;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
  left: 0;
  padding-left: 16px;
  top: 40px;
  height: 63px;
  background-color: #181a20;
  border-bottom: 1px solid;
  border-color: #474d57;
  color: #181a20;
  box-shadow: 10px 0 4px -4px;
}
.css-nm70p6 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80px;
}
.css-1rdas1d {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #eaecef;
  margin-bottom: 2px;
}
.css-y492if {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 16px;
  line-height: 24px;
  margin-left: 16px;
  font-weight: 500;
}
.css-uaf1yb {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 14px;
  margin-left: 12px;
  line-height: 20px;
  font-weight: 400;
  vertical-align: middle;
}
</style>

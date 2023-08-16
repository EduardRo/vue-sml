<template>
  <div class="hello">
    <h1>{{ msg }} This is home</h1>
    <h2>Home component</h2>
    <div v-for="item in items" :key="item.id" style="display: block">
      <div direction="ltr" class="css-vlibs4">
        <div class="css-1m31j9e">
          <div data-area="left" class="css-hwo5f4">
            <div data-bn-type="text" style="direction: ltr" class="css-xo7uk0">
              {{ item.name }}
            </div>
          </div>
          <div data-area="left" class="css-hwo5f4">
            <div data-bn-type="text" style="direction: ltr" class="css-xo7uk0">
              {{ item.city }}
            </div>
          </div>
          <div data-area="left" class="css-hwo5f4">
            <div data-bn-type="text" style="direction: ltr" class="css-xo7uk0">
              {{ item.email }}
            </div>
          </div>

          <div data-area="right" class="css-nm70p6">
            <a href="/en/price/bitcoin" target="_blank" class="css-z9uamy"
              ><img src="../assets/detail.svg" alt="Detail" class="css-9taffg"
            /></a>
            <div class="css-10nf7hq">
              <a
                data-bn-type="link"
                href="/en/trade/BTC_USDT?_from=markets"
                target="_blank"
                class="css-4yzawc"
                ><img
                  src="../assets/candlestick-g.svg"
                  alt="Trade"
                  class="css-9taffg"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div direction="ltr" class="css-vlibs4">
    <div class="css-1m31j9e">
      <div style="width: 304px" class="css-vurnku">
        <div
          class="coin-info__column css-6v6i1m"
          style="display: flex; justify-content: space-between"
        >
          <div class="css-10nf7hq">
            <div class="css-k5eban">
              <img
                width="32"
                height="32"
                src="../assets/bitcoin.png"
                loading="lazy"
                alt="BTC"
              />
            </div>
            <div class="css-y492if">
              <div data-bn-type="text" class="css-1rdas1d">BTC</div>
            </div>
            <div class="css-uaf1yb">
              <div data-bn-type="text" class="css-vyw7c5">Bitcoin</div>
            </div>
          </div>
        </div>
      </div>
      <div data-area="left" class="css-hwo5f4">
        <div data-bn-type="text" style="direction: ltr" class="css-xo7uk0">
          $29,861.01
        </div>
      </div>
      <div data-area="right" class="css-v4jdno">
        <div data-bn-type="text" style="direction: ltr" class="css-1wqmyrv">
          +2.51%
        </div>
      </div>
      <div
        data-bn-type="text"
        data-area="right"
        title="$10.47B"
        style="direction: ltr"
        class="css-1fqhavt"
      >
        $10.47B
      </div>
      <div data-area="right" class="css-1dmy36b">
        <div
          data-bn-type="text"
          title="$580.81B"
          style="direction: ltr"
          class="css-hflrok"
        >
          $580.81B
        </div>
      </div>
      <div data-area="right" class="css-nm70p6">
        <a href="/en/price/bitcoin" target="_blank" class="css-z9uamy"
          ><img src="../assets/detail.svg" alt="Detail" class="css-9taffg"
        /></a>
        <div class="css-10nf7hq">
          <a
            data-bn-type="link"
            href="/en/trade/BTC_USDT?_from=markets"
            target="_blank"
            class="css-4yzawc"
            ><img
              src="../assets/candlestick-g.svg"
              alt="Trade"
              class="css-9taffg"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      items: [],
      imageUrl1:
        "https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png",
    };
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

import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: 0,
  }),
});

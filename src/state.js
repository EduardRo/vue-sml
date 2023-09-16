import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: localStorage.token, // Retrieve the token from localStorage,
  }),
});
console.log("Token from store:", useTokenStore.token);

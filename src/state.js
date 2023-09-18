import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokenStore", {
  state: () => ({
    token: localStorage.token || null, // Retrieve the token from localStorage,
  }),
});

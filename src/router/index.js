import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import RegisterView from "../components/RegisterView.vue";
import FundsList from "../components/FundsList.vue";
import LoginUserVue from "@/components/LoginUser.vue";
import CreationsList from "@/components/CreationsList.vue";
const routes = [
  {
    path: "/",
    component: HelloWorld,
    props: { msg: "this is the message transmit by the router!" },
  },
  { path: "/register", component: RegisterView },
  { path: "/login", component: LoginUserVue },
  { path: "/funds", component: FundsList },
  { path: "/creations", component: CreationsList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

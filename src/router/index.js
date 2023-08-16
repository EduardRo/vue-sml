import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import RegisterView from "../components/RegisterView.vue";
const routes = [
  {
    path: "/",
    component: HelloWorld,
    props: { msg: "this is the message transmit by the router!" },
  },
  { path: "/register", component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

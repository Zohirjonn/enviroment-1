import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Korzina from "../views/KorzinaView.vue";
import Login from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/korzina",
      name: "korzina",
      component: Korzina,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;

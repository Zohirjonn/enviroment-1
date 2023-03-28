import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Korzina from "../views/KorzinaView.vue";
import Login from "../views/LoginView.vue";
import Payment from "../views/PaymentView.vue";

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
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
  ],
});

export default router;

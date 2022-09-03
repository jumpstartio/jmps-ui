import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Interviewers from "../views/Interviewers.vue";
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: { name: "home" } },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/interviewers",
      name: "interviewers",
      component: Interviewers,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import { capitalizeFirstLetter } from "../utils/helper";
import HomeView from "../views/HomeView.vue";
import Interviewers from "../views/Interviewers.vue";
import JoinJumpstart from "../views/JoinJumpstart.vue";
import ErrorPage from "../views/ErrorPage.vue";
import AuthenticatePage from "../views/AuthenticatePage.vue";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/authenticate/:param",
      name: "Authenticate",
      component: AuthenticatePage,
      meta: {
        title: "Home Page - Example App",
      },
    },
    {
      path: "/interviewers",
      name: "interviewers",
      component: Interviewers,
    },
    {
      path: "/join-jumpstart",
      name: "interviewers",
      component: JoinJumpstart,
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
  ],
});

router.beforeEach((to, _from, next) => {
  document.title = capitalizeFirstLetter(`${to.name} | Jumpstart`);
  next();
  if (to.name == undefined) {
    document.title = `Jumpstart`;
  }
  if (to.path == "/home") {
    document.title = `Join 1000s of creators, experts and mentors using Jumpstart to do more with their time.`;
    next();
  }
});

export default router;

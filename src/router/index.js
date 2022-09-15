import { createRouter, createWebHistory } from "vue-router";
import { capitalizeFirstLetter } from "../utils/helper";
import HomeView from "../views/HomeView.vue";
import Interviewers from "../views/Interviewers.vue";
import ErrorPage from "../views/ErrorPage.vue";
import AuthenticatePage from "../views/AuthenticatePage.vue";

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
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = capitalizeFirstLetter(`${to.name} | Jumpstart`);
  next();
  if (to.name == undefined) {
    document.title = `Jumpstart`;
  }
  if (to.path == "/home") {
    document.title = `Jumpstart | The ultimate interview preparation pla`;
    next();
  }
});

export default router;

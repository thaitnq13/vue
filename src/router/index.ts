import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home/HomeView.vue"),
      meta: { auth: true },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register/RegisterView.vue"),
      meta: { auth: false },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/LoginViews.vue"),
      meta: { auth: false },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("isLogin");
  if (to.name === "login" && token) {
    next({ name: from.name || "" });
    return;
  }

  if (to.name !== "login" && !token) {
    next({ name: "login" });
    return;
  } else next();
});

export default router;

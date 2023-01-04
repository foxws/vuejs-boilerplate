import { createRouter, createWebHistory } from "vue-router";
import { useApi } from "@/composables/api";
import AppLayout from "@/layouts/AppLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const { api } = useApi();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        layout: AppLayout,
        middleware: "auth",
      },
    },
    {
      path: "/post/:id/:slug?",
      name: "post",
      component: () => import("../views/PostView.vue"),
      props: true,
      meta: {
        layout: AppLayout,
        middleware: "auth",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: AppLayout,
        middleware: "auth",
      },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
      meta: {
        layout: AppLayout,
        middleware: "auth",
      },
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue"),
      meta: {
        layout: AppLayout,
        middleware: "auth",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: AuthLayout,
        middleware: "guest",
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/LogoutView.vue"),
      meta: {
        layout: AuthLayout,
        middleware: "auth",
      },
    },
  ],
});

router.beforeEach(async (to) => {
  const { error, data } = await api("user").get().json();

  const middleware = to.meta?.middleware;
  const authenticated = !error.value && data.value;

  if (!authenticated && middleware === "auth" && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;

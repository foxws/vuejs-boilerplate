import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { useApi } from "@/composables/api";

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
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: AppLayout,
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

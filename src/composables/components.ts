import { defineAsyncComponent } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

export function useComponents() {
  /* App */
  const AppNavigation = defineAsyncComponent({
    loader: () => import("@/components/AppNavigation.vue"),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
  });

  /* Post */
  const PostHero = defineAsyncComponent({
    loader: () => import("@/components/PostHero.vue"),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
  });

  const PostItem = defineAsyncComponent({
    loader: () => import("@/components/PostItem.vue"),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
  });

  const PostOverview = defineAsyncComponent({
    loader: () => import("@/components/PostOverview.vue"),
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
  });

  return {
    AppNavigation,
    PostHero,
    PostItem,
    PostOverview,
  };
}

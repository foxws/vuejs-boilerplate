<template>
  <app-navigation />

  <div class="relative">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AppNavigation = defineAsyncComponent({
  loader: () => import("@/components/AppNavigation.vue"),
});
</script>

<template>
  <app-navigation />

  <router-view />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AppNavigation = defineAsyncComponent({
  loader: () => import("@/components/AppNavigation.vue"),
});
</script>

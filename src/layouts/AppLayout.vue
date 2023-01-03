<template>
  <router-view />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const AppNavigation = defineAsyncComponent(
  () => import("@/components/AppNavigation.vue")
);
</script>

<template>
  <post-hero />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const PostHero = defineAsyncComponent(
  () => import("@/components/PostHero.vue")
);
</script>

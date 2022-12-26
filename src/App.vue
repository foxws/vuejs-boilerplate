<template>
  <component :is="layout"></component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const { currentRoute } = useRouter();

const layout = computed(() => currentRoute.value.meta?.layout);
</script>

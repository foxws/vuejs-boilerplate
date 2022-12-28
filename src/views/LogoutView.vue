<template>
  <div>
    <!-- no content here -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useApi } from "@/composables";

const { api } = useApi();

onMounted(() => logout());

const logout = async () => {
  await api("logout").post().json();

  // Hard refresh
  window.location.href = "/";
};
</script>

<template>
  <div class="container mx-auto py-10 px-5">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9">
      <post-item v-for="item in state.data" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useInfiniteScroll, useTitle } from "@vueuse/core";
import { useComponents, usePosts } from "@/composables";

const { PostItem } = useComponents();
const { initialize, get, state } = usePosts();

useInfiniteScroll(window, () => get(), {
  distance: 10,
});

onMounted(() => {
  // Update document
  useTitle("Home | MiniTube");

  // Fetch items
  initialize({ filter: { list: "feed" } });
});
</script>

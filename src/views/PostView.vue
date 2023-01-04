<template>
  <div :key="state.data?.id">
    <template v-if="state.error">
      <div class="container mx-auto p-3">
        <div class="alert bg-transparent text-white">
          <h1 class="text-base">
            <span class="material-symbols-outlined">error</span>
            <span>Post not available</span>
          </h1>
        </div>
      </div>
    </template>

    <template v-else-if="state.data?.id">
      {{ state.data }}
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useComponents, usePost } from "@/composables";

const props = defineProps<{
  id: string;
  slug?: string;
}>();

// const { PostDetails, PostSimilar, VideoPlayer } = useComponents();
const { initialize, destroy, state } = usePost();

onBeforeMount(() => initialize(props.id));
onBeforeRouteUpdate((to) => initialize(to.params.id));
onBeforeRouteLeave(() => destroy());
</script>

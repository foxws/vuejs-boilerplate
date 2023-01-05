<template>
  <div class="navbar bg-white/10 text-white">
    <form @submit.prevent="submit" class="w-full">
      <div class="px-4 flex flex-1">
        <button for="search-input" class="mr-3" type="submit">
          <span class="mdi mdi-magnify text-2xl"></span>
        </button>

        <input
          v-model.trim="query"
          id="search-input"
          type="text"
          placeholder="Search"
          class="bg-transparent w-full text-white placeholder-gray-100 focus:placeholder-gray-100 focus:outline-none"
        />
      </div>

      <div class="px-4 flex">
        <label for="filter-drawer" class="p-0 cursor-pointer">
          <span class="mdi mdi-filter-variant text-2xl"></span>
        </label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePosts } from "@/composables";

const { state, initialize, set } = usePosts();

const query = computed({
  get: () => state.filter?.query,
  set: (query) => set({ filter: { query } }),
});

const submit = async () => initialize(undefined, true);
</script>

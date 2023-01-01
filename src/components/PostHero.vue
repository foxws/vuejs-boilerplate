<template>
  <div class="navbar bg-white/10 text-white shadow">
    <form @submit.prevent="submit" class="w-full">
      <div class="px-4 flex flex-1">
        <button for="search-input" type="submit">
          <span class="mdi mdi-magnify text-2xl mr-3"></span>
        </button>

        <input
          id="search-input"
          type="text"
          placeholder="Search"
          class="bg-transparent w-full text-white placeholder-gray-100 focus:placeholder-gray-100 focus:outline-none"
        />
      </div>

      <div class="px-4 flex">
        <button class="btn btn-ghost p-0">
          <span class="mdi mdi-filter-variant text-2xl"></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PostsFilters } from "@/interfaces";

const form = ref<PostsFilters>({
  query: undefined,
  sort: undefined,
});

const items = [
  { label: "Most Recent", value: "created_at:desc" },
  { label: "Most Viewed", value: "views:desc" },
  { label: "Longest", value: "size:desc" },
  { label: "Shortest", value: "size:asc" },
];

const submit = async () => {};
</script>

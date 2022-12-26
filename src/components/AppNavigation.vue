<template>
  <header class="sticky top-0 z-40 w-full">
    <div class="relative h-14 bg-black flex items-center justify-between">
      <router-link to="/" class="px-4">
        <img alt="MiniTube" class="h-4 w-auto" src="@/assets/logo.png" />
      </router-link>

      <nav class="text-lg text-gray-300">
        <ul class="flex flex-nowrap space-x-8 xs:space-x-4">
          <li v-for="(item, index) in items" :key="index">
            <router-link
              :to="item.route"
              class="flex flex-nowrap items-center space-x-1"
              active-class="!text-white"
            >
              <span :class="item.icon" class="sm:hidden text-3xl"></span>
              <span class="hidden sm:inline">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <router-link to="/" class="px-4">
        <img alt="MiniTube" class="h-4 w-auto" src="@/assets/logo.png" />
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

const items = computed(() => [
  { title: "Library", icon: "mdi mdi-play", route: { name: "home" } },
  { title: "Explore", icon: "mdi mdi-play", route: { name: "home" } },
  { title: "Account", icon: "mdi mdi-play", route: { name: "home" } },
]);
</script>

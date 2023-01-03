<template>
  <header class="sticky top-0 z-10 w-full">
    <div class="navbar bg-black text-gray-400">
      <router-link to="/" class="px-4 flex-1">
        <img alt="MiniTube" class="h-4 w-auto" src="@/assets/logo.png" />
      </router-link>

      <nav class="px-4">
        <ul class="flex flex-nowrap space-x-6">
          <li v-for="(item, index) in items" :key="index">
            <router-link
              :to="item.route"
              class="flex flex-nowrap items-center space-x-2"
              active-class="!text-white"
            >
              <div
                class="sm:hidden tooltip tooltip-bottom"
                :data-tip="item.title"
              >
                <span :class="item.icon" class="text-2xl"></span>
              </div>
              <span class="hidden font-medium sm:inline">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div
        class="divider divider-horizontal before:bg-white/10 after:bg-white/10 mx-1 py-2 sm:hidden"
      ></div>

      <nav class="px-4">
        <ul class="flex flex-nowrap space-x-6">
          <li>
            <router-link
              :to="{ name: 'search' }"
              data-tip="Search"
              class="tooltip tooltip-bottom"
              active-class="!text-white"
            >
              <span class="text-2xl mdi mdi-bell-outline"></span>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ name: 'account' }"
              data-tip="Account"
              class="tooltip tooltip-bottom"
              active-class="!text-white"
            >
              <span class="text-2xl mdi mdi-account-outline"></span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

const items = computed(() => [
  {
    title: "Home",
    icon: "mdi mdi-home",
    route: { name: "home" },
  },
  {
    title: "Explore",
    icon: "mdi mdi-compass",
    route: { name: "about" },
  },
  {
    title: "Library",
    icon: "mdi mdi-play-circle",
    route: { name: "about" },
  },
]);
</script>

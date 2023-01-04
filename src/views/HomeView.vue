<template>
  <div class="drawer drawer-end">
    <input id="filter-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <app-navigation />
      <post-hero />
      <post-overview />
    </div>

    <div class="drawer-side">
      <label for="filter-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useComponents } from "@/composables";

const { AppNavigation, PostHero, PostOverview } = useComponents();
</script>

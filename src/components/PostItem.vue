<template>
  <div ref="el" class="min-h-[20rem] h-[20rem] cursor-pointer">
    <template v-if="visible">
      <router-link :to="route">
        <div ref="card" class="card card-compact rounded-none">
          <figure></figure>

          <div class="card-body gap-1">
            <h2 class="card-title leading-none text-white text-sm">
              {{ item.name }}
            </h2>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useElementVisibility } from "@vueuse/core";
import type { PostModel } from "@/interfaces";

const props = defineProps<{
  item: PostModel;
}>();

const el = ref<HTMLElement | null>(null);
const card = ref<HTMLElement | null>(null);

const route = {
  name: "post",
  params: { id: props.item.id, slug: props.item.slug },
};

const visible = useElementVisibility(el);
</script>

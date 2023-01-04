<template>
  <div ref="el" class="min-h-[20rem] h-[20rem] cursor-pointer">
    <template v-if="visible">
      <router-link
        :to="{ name: 'post', params: { id: item.id, slug: item.slug } }"
      >
        <div ref="card" class="card card-compact rounded-none">
          <figure>
            <img
              :alt="item.name"
              :src="item.thumbnail"
              class="relative w-full h-52 rounded-xl text-transparent"
              loading="lazy"
            />

            <template v-if="item.preview">
              <video
                v-show="hover || pressed"
                :src="item.preview"
                class="absolute inset-0 w-full h-52 rounded-xl object-fill"
                autoplay
                muted
                loop
              />
            </template>
          </figure>

          <div class="card-body gap-1">
            <h2 class="card-title leading-none text-white text-sm">
              {{ item.name }}
            </h2>

            <template v-if="item.type === 'video'">
              <p class="separator bullet font-normal text-gray-300 text-xs">
                <span>{{ duration }}</span>
                <span v-if="season || episode">
                  {{ season }}{{ episode }}
                </span>
                <span>{{ created }}</span>
              </p>

              <p class="separator font-medium text-gray-300 text-xs">
                <span v-for="(tag, index) in item.tags" :key="index">
                  {{ tag.name }}
                </span>
              </p>
            </template>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  useElementHover,
  useElementVisibility,
  useMousePressed,
} from "@vueuse/core";
import { useHelpers } from "@/composables";
import type { PostModel } from "@/interfaces";

const props = defineProps<{
  item: PostModel;
}>();

const el = ref<HTMLElement | null>(null);
const card = ref<HTMLElement | null>(null);

const hover = useElementHover(card);
const visible = useElementVisibility(el);
const { pressed } = useMousePressed({ target: card });
const { date, time } = useHelpers();

const created = computed(() => date(props.item?.created_at || 0));
const duration = computed(() => time(props.item.size || "0"));
const season = computed(() => props.item.season);
const episode = computed(() => props.item.episode);
</script>

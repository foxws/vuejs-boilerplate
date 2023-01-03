<template>
  <div class="card m-5 w-96 rounded-sm bg-white">
    <div class="card-body">
      <h2 class="card-title">Login</h2>

      <div v-if="state.message" class="alert alert-error my-3 text-base-100">
        <div>
          <span>Please check your credentials.</span>
        </div>
      </div>

      <form @submit.prevent="login">
        <div class="form-control mb-3 w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>

          <input
            v-model.trim="form.email"
            type="email"
            placeholder="Email"
            class="input input-bordered input-md w-full"
            required
          />

          <label v-if="error('email')" class="label">
            <span class="label-text-alt">
              {{ error("email")?.find(Boolean) }}
            </span>
          </label>
        </div>

        <div class="form-control mb-3 w-full">
          <label class="label">
            <span class="label-text">Password</span>
          </label>

          <input
            v-model.trim="form.password"
            type="password"
            placeholder="Password"
            class="input input-bordered input-md w-full"
            required
          />

          <label v-if="error('password')" class="label">
            <span class="label-text-alt">
              {{ error("password")?.find(Boolean) }}
            </span>
          </label>
        </div>

        <div class="card-actions pt-3 justify-end">
          <button class="btn btn-md">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useTitle } from "@vueuse/core";
import { useApi, useValidation } from "@/composables";
import type { AuthResponse } from "@/interfaces";

const form = reactive({
  email: "",
  password: "",
  device_name: navigator.userAgent,
});

const { api, assign } = useApi();
const { fill, reset, error, state } = useValidation();

const login = async () => {
  reset();

  const { error: errors, data } = await api("login")
    .post(form)
    .json<AuthResponse>();

  if (errors.value) {
    return fill(data.value);
  }

  // Overwrite bearer
  assign(data.value || {});

  // Hard refresh
  window.location.href = "/";
};

onMounted(() => useTitle("Log In | MiniTube"));
</script>

import { readonly } from "vue";
import { stringify as qs } from "qs";
import {
  createFetch,
  set,
  useLocalStorage,
  type CreateFetchOptions,
} from "@vueuse/core";

const state = useLocalStorage("api", { token: "" });

const options = () =>
  <CreateFetchOptions>{
    baseUrl: import.meta.env.VITE_API_URL,
    options: {
      beforeFetch({ options }) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${state.value.token}`,
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        };

        return { options };
      },
    },
    fetchOptions: {
      mode: "cors",
    },
  };

export function useApi() {
  const api = createFetch(options());

  const assign = (obj: object) => set(state, JSON.parse(JSON.stringify(obj)));

  const update = (obj: object) => set(state, obj);

  const stringify = (uri: unknown) =>
    qs(uri, {
      encodeValuesOnly: true,
      arrayFormat: "comma",
      skipNulls: true,
      strictNullHandling: true,
    });

  return {
    api,
    assign,
    update,
    stringify,
    state: readonly(state),
  };
}

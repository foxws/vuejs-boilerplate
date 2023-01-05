import { reactive, readonly } from "vue";
import { useApi } from "@/composables";
import type {
  PostModel,
  PostQuery,
  PostsResponse,
  PostsState,
} from "@/interfaces";

const initialState = <PostsState>{};

const state = reactive({ ...initialState });

export function usePosts() {
  const { api, stringify } = useApi();

  const initialize = async (payload?: PostQuery, reset?: boolean) => {
    if (!reset && typeof state.meta?.first_page_url === "string") return;

    set(payload, reset);

    const uri = stringify(state.filter).toString();
    const { data } = await api(`posts?${uri}`).get().json<PostsResponse>();

    return fill(data.value);
  };

  const set = (payload?: PostQuery, reset?: boolean) => {
    if (reset) Object.assign(state, initialState);

    state.filter = { ...state.filter, ...payload?.filter };
    state.sort = payload?.sort;
  };

  const get = async () => {
    const { data } = await api(state.meta?.next_page_url || "")
      .get()
      .json<PostsResponse>();

    return fill(data.value);
  };

  const fill = (payload: PostsResponse | null) => {
    if (typeof state.data === "undefined") state.data = [];

    state.data = state.data.concat(payload?.data || []);
    state.meta = payload?.meta;
  };

  const merge = (payload: PostModel) => {
    const index = state.data?.findIndex((obj) => obj.id == payload.id) || -1;

    if (typeof state.data !== "undefined" && index > -1) {
      state.data[index] = { ...state.data[index], ...payload };
    }
  };

  const slice = (payload: PostModel) => {
    if (typeof state.data !== "undefined") {
      state.data = state.data.filter((obj) => obj.id != payload.id);
    }
  };

  return {
    initialize,
    set,
    get,
    merge,
    slice,
    state: readonly(state),
  };
}

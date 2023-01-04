import { reactive, readonly } from "vue";
import { useTitle } from "@vueuse/core";
import { useApi, useEcho, usePosts } from "@/composables";
import type { PostModel, PostResponse, PostState } from "@/interfaces";

const initialState = <PostState>{
  data: undefined,
  meta: undefined,
  error: undefined,
};

const state = reactive({ ...initialState });

export function usePost() {
  const { api } = useApi();
  const { echo } = useEcho();
  const { merge, slice } = usePosts();

  const initialize = async (id: string | string[]) => {
    if (id !== state.data?.id) {
      // Reset post
      destroy();

      // Init Websocket
      subscribe(id);
    }

    const { error, data } = await api(`posts/${id}`).get().json<PostResponse>();

    state.error = error || undefined;

    // Fill state
    fill(data.value);

    // Document title
    useTitle(`${state.data?.name || "Not Available"} | MiniTube`);
  };

  const reset = () => Object.assign(state, initialState);

  const save = async (payload: PostModel) => {
    const { error, data } = await api(`posts/${payload.id}`)
      .put(payload)
      .json<PostResponse>();

    if (!error.value) {
      merge(<PostModel>data.value?.data);
    }

    return { error, data };
  };

  const remove = async (payload: PostModel) => {
    const { error, data } = await api(`posts/${payload.id}`)
      .delete(payload)
      .json<PostResponse>();

    if (!error.value) {
      slice(<PostModel>data.value?.data);
    }

    return { error, data };
  };

  const destroy = () => {
    unsubscribe(state.data?.id || "");
    reset();
  };

  const fill = (payload: PostResponse | null) => {
    state.data = payload?.data;
    state.meta = payload?.meta;
  };

  const subscribe = (id: string | string[]) =>
    echo
      .private(`post.${id}`)
      .listen(".post.deleted", () => initialize(id))
      .listen(".post.saved", () => initialize(id));

  const unsubscribe = (id: string | string[]) => echo.leave(`post.${id}`);

  return {
    initialize,
    save,
    remove,
    destroy,
    state: readonly(state),
  };
}

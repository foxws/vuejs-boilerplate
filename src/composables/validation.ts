import type { ValidationResponse } from "@/interfaces";
import { reactive, readonly } from "vue";

const initialState = <ValidationResponse>{
  errors: undefined,
  message: undefined,
};

export function useValidation() {
  const state = reactive({ ...initialState });

  const reset = () => Object.assign(state, initialState);

  const fill = (response: unknown) => Object.assign(state, response);

  const error = (field: string) => state.errors?.[field];

  return {
    reset,
    fill,
    error,
    state: readonly(state),
  };
}

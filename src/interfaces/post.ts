import type {
  Model,
  ModelsFilters,
  ModelsMeta,
  ModelsResponse,
} from "@/interfaces";

export interface PostModel extends Model {
  //
}

export interface PostResponse {
  data: PostModel | undefined;
  meta: object | undefined;
}

export type PostsMeta = ModelsMeta;

export interface PostsResponse extends ModelsResponse {
  data: PostModel[];
}

export interface PostsFilters extends ModelsFilters {
  id?: string | undefined;
  sort?: string | undefined;
  type?: string | undefined;
  query?: string | undefined;
}

export interface PostState {
  data: PostModel | undefined;
  meta: object | undefined;
  error: unknown | undefined;
}

export interface PostsState {
  data: PostModel[] | undefined;
  meta: PostsMeta | undefined;
  filters: PostsFilters | undefined;
  selected: PostModel[] | undefined;
}

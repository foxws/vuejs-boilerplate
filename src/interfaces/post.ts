import type {
  Model,
  ModelsFilters,
  ModelsMeta,
  ModelsResponse,
} from "@/interfaces";

export interface PostModel extends Model {
  content?: string;
  summary?: string;
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
  list?: string | undefined;
  query?: string | undefined;
}

export interface PostQuery {
  filter?: PostsFilters | undefined;
  sort?: string | undefined;
}

export interface PostState {
  data: PostModel | undefined;
  meta: object | undefined;
  error: unknown | undefined;
}

export interface PostsState {
  data: PostModel[] | undefined;
  meta: PostsMeta | undefined;
  filter: PostsFilters | undefined;
  sort: string | string[] | undefined;
}

export interface AuthResponse {
  token: string;
}

export interface ValidationErrors {
  [index: number | string]: string[];
}

export interface ValidationResponse {
  message: string | undefined;
  errors: ValidationErrors | undefined;
}

export interface Model {
  id: string;
  slug?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ModelResponse {
  data: Model;
  meta: ModelsMeta;
  links: ModelsLinks;
}

export interface ModelsMeta {
  first_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ModelsLinks {
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
}

export interface ModelsFilters {
  page?: number | null;
  size?: number | null;
}

export interface ModelsResponse {
  data: Model[];
  meta: ModelsMeta;
  links: ModelsLinks;
}

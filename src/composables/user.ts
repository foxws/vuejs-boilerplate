import type { Model } from "@/interfaces";

export interface UserPreferences {
  autoplay: boolean;
  muteVideos: boolean;
}

export interface UserModel extends Model {
  avatar_url?: string;
  email?: string;
  permissions?: string[];
  roles?: string[];
  settings?: UserPreferences;
}

export interface LoginResponse {
  token: string;
  user: UserModel;
}

import type { Model } from "@/interfaces";

export interface UserPreferences {
  autoplay: boolean;
  muteVideos: boolean;
}

export interface UserModel extends Model {
  avatar?: string;
  email?: string;
  permissions?: string[];
  roles?: string[];
  settings?: UserPreferences;
}

import { useApi } from "@/composables";
import Pusher from "pusher-js";
import Echo from "laravel-echo";
import type { PusherChannel } from "laravel-echo/dist/channel";

const { api } = useApi();

const echo = new Echo({
  broadcaster: "pusher",
  key: import.meta.env.VITE_WS_KEY,
  cluster: import.meta.env.VITE_WS_CLUSTER,
  wsHost: import.meta.env.VITE_WS_HOST,
  wsPort: import.meta.env.VITE_WS_PORT,
  wssPort: import.meta.env.VITE_WS_PORT,
  forceTLS: true,
  encrypted: true,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  authEndpoint: `${import.meta.env.VITE_API_URL}/broadcasting/auth`,
  authorizer: (channel: PusherChannel) => ({
    // eslint-disable-next-line @typescript-eslint/ban-types
    authorize: async (socketId: string, callback: Function) => {
      const { error, data } = await api("broadcasting/auth")
        .post({
          socket_id: socketId,
          channel_name: channel.name as string,
        })
        .json();

      callback(!!error.value, data.value);
    },
  }),
});

export function useEcho() {
  return {
    Pusher,
    echo,
  };
}

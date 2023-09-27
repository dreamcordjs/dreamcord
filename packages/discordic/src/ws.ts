import WebSocket from "ws";
import { Client } from "./client";
import { Constants } from "./utils/consts";

export class WebSocketManager {
  private socket!: WebSocket;
  private interval: ReturnType<typeof setInterval> | null = null;
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async connect(token: string) {
    try {
      this.socket = new WebSocket(Constants.Gateway);

      this.socket.on("open", () => this.identify(token));

      this.socket.on("message", async (data) => {
        let payload = JSON.parse(data.toString());
        const { t: event, op, d } = payload;
        switch (op) {
          case 10:
            {
              const { heartbeat_interval } = d;
              this.interval = this.heartbeat(heartbeat_interval);
            }
            break;
          case 0:
            {
              console.log(payload)
              const module = await import(`./handlers/${event}.ts`)
                .then((x) => x?.default)
                .catch(() => null);
              if (!module) return;
              module(this.client, payload);
            }
            break;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  private heartbeat(ms: number) {
    return setInterval(() => {
      this.socket.send(JSON.stringify({ op: 1, d: null }));
    }, ms);
  }

  private identify(token: string) {
    this.socket.send(
      JSON.stringify({
        op: 2,
        d: {
          token,
          intents: this.client.options.intents,
          properties: {
            $os: this.client.options.properties?.os ?? "linux",
            $browser: this.client.options.properties?.os ?? "discordic",
            $device: this.client.options.properties?.os ?? "discordic",
          },
        },
      })
    );
  }
}

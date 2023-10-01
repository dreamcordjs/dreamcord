import { Client } from "../client";
import { Message } from "../models/message";
import { Presence } from "./presence";
import { Intents } from "./intents";

export interface ClientOptions {
  intents: number | Array<keyof typeof Intents | number>;
  properties?: {
    os?: string;
    browser?: string;
    device?: string;
  };
  presence?: Presence;
}

export interface ClientEvents {
  ready: [client: Client];
  messageCreate: [message: Message];
}

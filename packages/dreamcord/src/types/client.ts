import { Client } from "../client";
import { Message } from "../models/message";
import { Presence } from "./presence";
import { Intents } from "./intents";

export interface ClientOptions {
  intents: (keyof typeof Intents)[] | (typeof Intents)[] | number | bigint;
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

import { Client } from "../client";
import { Message } from "../models/message";
import { Presence } from "./presence";

export interface ClientOptions {
  intents: number | bigint;
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

import "isomorphic-fetch";

import { Client } from "./client";
import { MessageOptions } from "./types/message";
import { Constants, Endpoints } from "./utils/consts";

export class RestAPIHandler {
  private _token: string = "";
  private headers: {
    "Content-Type": "application/json";
    Authorization: `Bot ${string}`;
  } = {
    "Content-Type": "application/json",
    Authorization: "Bot <token>",
  };

  constructor(private client: Client) {
    Object.defineProperty(this, "_token", {
      enumerable: false,
    });
  }

  async fetchGuild(id: string) {
    const response = await fetch(
      `${Constants.API}/${Endpoints.Guilds}/${id}?with_counts=true`,
      { headers: this.headers }
    );
    return response.json();
  }

  async fetchUser(userId: string) {
    const response = await fetch(
      `${Constants.API}/${Endpoints.Users}/${userId}`,
      { headers: this.headers }
    );
    return response.json();
  }

  async fetchChannel(id: string) {
    const response = await fetch(
      `${Constants.API}/${Endpoints.Channels}/${id}`,
      { headers: this.headers }
    );
    return response.json();
  }

  async createMessage(options: MessageOptions, id: string) {
    const response = await fetch(
      `${Constants.API}/${Endpoints.Channels}/${id}/${Endpoints.Messages}`,
      {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(options),
      }
    );
    return response.json();
  }

  public set token(token: string) {
    this._token = token;
    this.headers.Authorization = `Bot ${this._token}`;
  }
}
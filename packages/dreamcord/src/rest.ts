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

  async editMessage(
    options: MessageOptions,
    channelId: string,
    messageId: string
  ) {
    const response = await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Messages}/${messageId}`,
      {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(options),
      }
    );
    return response.json();
  }

  async deleteMessage(channelId: string, messageId: string) {
    await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Messages}/${messageId}`,
      {
        method: "DELETE",
        headers: this.headers,
      }
    );
  }

  async createReaction(channelId: string, messageId: string, emoji: string) {
    await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Messages}/${messageId}/reactions/${emoji}/@me`,
      {
        method: "PUT",
        headers: this.headers,
      }
    );
  }

  async pinMessage(channelId: string, messageId: string) {
    await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Pins}/${messageId}`,
      {
        method: "PUT",
        headers: this.headers,
      }
    );
  }

  async unpinMessage(channelId: string, messageId: string) {
    await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Pins}/${messageId}`,
      {
        method: "DELETE",
        headers: this.headers,
      }
    );
  }

  async triggerTypingIndicator(channelId: string) {
    await fetch(
      `${Constants.API}/${Endpoints.Channels}/${channelId}/${Endpoints.Typing}`,
      {
        method: "POST",
        headers: this.headers,
      }
    );
  }

  public set token(token: string) {
    this._token = token;
    this.headers.Authorization = `Bot ${this._token}`;
  }
}

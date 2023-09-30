import { APIChannel, ChannelType } from "@discordic/api-types";
import { Client } from "../client";
import { MessageOptions } from "../types/message";
import { Message } from "./message";

export class Channel {
  /**
   * The client that initialized this channel.
   */
  public client: Client;

  /**
   * The ID of this channel.
   */
  public id!: string;

  /**
   * The name of this channel.
   */
  public name: string | undefined;

  /**
   * The type of channel.
   */
  public type!: ChannelType;

  /**
   * The ID of the guild this channel is in.
   */
  public guildId: string | undefined;

  constructor(client: Client, data: APIChannel) {
    this.client = client;
    this._patch(data);
  }

  private _patch(data: APIChannel) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.guildId = data.guild_id;
  }

  /**
   * Send a message in this channel.
   */
  public async send(options: string | MessageOptions) {
    let data: any;

    if(typeof options === "string") {
      data = {
        content: options
      }
    } else {
      data = {
        ...options
      }
    }

    const response = await this.client.rest.createMessage(data, this.id);
    if (this.guildId) response.guild_id = this.guildId;
    return new Message(this.client, response);
  }
}

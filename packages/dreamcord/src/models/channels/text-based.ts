import { APIChannel } from "@dreamcord/api-types";
import { Client } from "../../client";
import { MessageOptions } from "../../types/message";
import { Message } from "../message";
import { Channel } from "./base";

export class TextBasedChannel extends Channel {
  constructor(client: Client, data: APIChannel) {
    super(client, data);
  }

  /**
   * Send a message in this channel.
   */
  public async send(options: string | MessageOptions) {
    let data: any;

    if (typeof options === "string") {
      data = {
        content: options,
      };
    } else {
      data = options;
    }

    const response = await this.client.rest.createMessage(data, this.id);
    if (this.guildId) response.guild_id = this.guildId;
    return new Message(this.client, response);
  }

  /**
   * Sends a typing indicator in this channel.
   */
  public async sendTyping() {
    await this.client.rest.triggerTypingIndicator(this.id);
  }
}

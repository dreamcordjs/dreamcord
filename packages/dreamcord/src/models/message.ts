import { Client } from "../client";
import { If } from "../types/if";
import { Intents } from "../types/intents";
import { MessageOptions } from "../types/message";
import { TextBasedChannel } from "./channels/text-based";
import { Emoji } from "./emoji";
import { Guild } from "./guild";
import { GuildMember } from "./guild-member";

export class Message<InGuild extends boolean = boolean> {
  /**
   * The client that initialized this message
   */
  public client: Client;

  /**
   * The ID of this message
   */
  public id!: string;

  /**
   * The content of this message. Requires the {@link Intents.MessageContent MessageContent intent}
   * @requires {@link Intents.MessageContent}
   */
  public content!: string;

  /**
   * The author ID of this message
   */
  public authorId!: string;

  /**
   * The author of this message as a guild member
   */
  public member!: If<InGuild, GuildMember>;

  /**
   * The guild ID this message was sent in
   */
  public guildId!: If<InGuild, string>;

  /**
   * The channel ID this message was sent in
   */
  public channelId!: string;

  public readonly cacheType: InGuild = Boolean(this.guildId) as InGuild;

  constructor(client: Client, data: any) {
    this.client = client;
    this._patch(data);
  }

  private _patch(data: any) {
    this.id = data.id;
    this.content = data.content;
    this.guildId = data.guild_id ?? null;
    this.authorId = data.author.id;
    this.member = data.member ?? null;
    this.channelId = data.channel_id;
  }

  /**
   * The author of this message
   */
  get author() {
    return this.client.users.get(this.authorId)!;
  }

  /**
   * The channel this message was sent in
   */
  get channel() {
    return this.client.channels.get(this.channelId)! as TextBasedChannel;
  }

  /**
   * Whether this message was sent in a guild
   */
  public inGuild(): this is Message<true> {
    return Boolean(this.guildId);
  }

  /**
   * The guild this message was sent in if it was sent in a guild
   */
  public get guild(): If<InGuild, Guild> {
    return (
      this.guildId ? this.client.guilds.get(this.guildId) ?? null : null
    ) as If<InGuild, Guild>;
  }

  /**
   * Sends an inline reply to this message
   * @see https://support.discord.com/hc/en-us/articles/360057382374-Replies-FAQ
   */
  public reply(options: string | MessageOptions) {
    let data: any;

    if (typeof options === "string") {
      data = {
        content: options,
      };
    } else {
      data = options;
    }

    data.message_reference = {
      message_id: this.id,
    };

    return this.channel.send(data);
  }

  /**
   * Edit this message
   */
  public async edit(options: string | MessageOptions) {
    let data: any;

    if (typeof options === "string") {
      data = {
        content: options,
      };
    } else {
      data = options;
    }

    const response = await this.client.rest.editMessage(
      data,
      this.channel.id,
      this.id
    );
    if (this.guildId) response.guild_id = this.guildId;
    return new Message(this.client, response);
  }

  /**
   * Delete this message
   */
  public async delete() {
    await this.client.rest.deleteMessage(this.channel.id, this.id);
    return this;
  }

  /**
   * React to this message
   */
  public async react(emoji: string | Emoji) {
    let reaction: string;

    if (typeof emoji === "string") {
      reaction = emoji;
    } else {
      reaction = `${emoji.name}:${emoji.id}`;
    }

    await this.client.rest.createReaction(this.channel.id, this.id, reaction);
    return this;
  }

  /**
   * Pin this message
   */
  public async pin() {
    await this.client.rest.pinMessage(this.channel.id, this.id);
    return this;
  }

  /**
   * Unpin this message
   */
  public async unpin() {
    await this.client.rest.unpinMessage(this.channel.id, this.id);
    return this;
  }
}

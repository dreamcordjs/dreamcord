import { Client } from "../client";
import { If } from "../types/if";
import { Guild } from "./guild";
import { User } from "./user";

export class Message<InGuild extends boolean = boolean> {
  /**
   * The client that initialized this message.
   */
  public client: Client;

  /**
   * The ID of this message.
   */
  public id!: string;

  /**
   * The content of this message. Requires the MessageContent intent.
   * @requires Intents.MessageContent
   */
  public content!: string;

  /**
   * The author of this message.
   */
  public author!: User;

  /**
   * The author ID of this message.
   */
  public authorId!: User;

  /**
   * The guild ID this message was sent in.
   */
  public guildId!: string;

  public readonly cacheType: InGuild = Boolean(this.guildId) as InGuild;

  constructor(client: Client, data: any) {
    this.client = client;
    this._patch(data);
  }

  private async _patch(data: any) {
    this.id = data.id;
    this.content = data.content;
    this.guildId = data.guild_id ?? null;
    this.authorId = data.author.id;

    let user = this.client.users.get(data.author.id);
    this.author = user!;
  }

  public inGuild(): this is Message<true> {
    return Boolean(this.guildId);
  }

  /**
   * The guild this message was sent in if it was sent in a guild.
   */
  public get guild(): If<InGuild, Guild> {
    return (
      this.guildId ? this.client.guilds.get(this.guildId) ?? null : null
    ) as If<InGuild, Guild>;
  }
}

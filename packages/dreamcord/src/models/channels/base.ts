import { APIChannel, ChannelType } from "@dreamcord/api-types";
import { Client } from "../../client";
import { TextBasedChannel } from "./text-based";

export class Channel {
  /**
   * The client that initialized this channel
   */
  public client: Client;

  /**
   * The ID of this channel
   */
  public id!: string;

  /**
   * The name of this channel
   */
  public name: string | undefined;

  /**
   * The type of channel
   */
  public type!: ChannelType;

  /**
   * The ID of the guild this channel is in
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

  public isTextBased(): this is TextBasedChannel {
    return [
      ChannelType.AnnouncementThread,
      ChannelType.DM,
      ChannelType.GroupDM,
      ChannelType.GuildAnnouncement,
      ChannelType.GuildForum,
      ChannelType.GuildMedia,
      ChannelType.GuildStageVoice,
      ChannelType.GuildText,
      ChannelType.GuildVoice,
      ChannelType.PublicThread,
      ChannelType.PrivateThread,
    ].includes(this.type);
  }

  /**
   * When concatenated with a string, this automatically returns the channel's mention instead of the Channel object
   */
  public toString() {
    return `<#${this.id}>`;
  }
}

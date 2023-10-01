import { APIGuildMember, ImageURLOptions } from "@dreamcord/api-types";
import { Client } from "../client";
import { Guild } from "./guild";
import { User } from "./user";

export class GuildMember {
  /**
   * The client that initialized this member
   */
  public client: Client;

  /**
   * The user that this member represents
   */
  public user!: User;

  /**
   * The guild this member is part of
   */
  public guild!: Guild;

  /**
   * This member's nickname
   */
  public nickname: string | null = null;

  /**
   * The avatar hash of this member
   */
  public avatar: string | null = null;

  /**
   * The timestamp this member joined the guild at
   */
  public joinedTimestamp: number | null = null;

  /**
   * The last timestamp this member started boosting the guild
   */
  public premiumSinceTimestamp: number | null = null;

  /**
   * The timestamp this member's timestamp will be removed
   */
  public communicationDisabledUntilTimestamp: number | null = null;

  constructor(
    client: Client,
    data: APIGuildMember & { id?: string },
    guild: Guild,
  ) {
    this.client = client;
    this.guild = guild;

    let user: User | undefined;
    let id: string | undefined;
    if (!data.user && data.id) {
      user = client.users.get((id = data.id));
    } else if (data.user) {
      user = new User(this.client, data.user);
      id = user.id;
      this.client.users.set(user.id, user);
    }

    if (!user)
      throw new TypeError(
        `Member recieved without a user${
          id === undefined ? " or ID." : `: ${id}`
        }`,
      );
    else this.user = user;

    this._patch(data);
  }

  private _patch(data: APIGuildMember) {
    if ("nick" in data && data.nick) this.nickname = data.nick;
    if ("avatar" in data && data.avatar) {
      if (typeof data.avatar === "string") this.avatar = data.avatar;
      else this.avatar = null;
    }
  }

  /**
   * The ID of this member
   */
  public get id() {
    return this.user.id;
  }

  /**
   * The nickname of this member, or their {@link User.displayName} if they don't have one
   */
  public get displayName() {
    return this.nickname ?? this.user.displayName;
  }

  /**
   * The time this member joined the guild
   */
  public get joinedAt() {
    return this.joinedTimestamp ? new Date(this.joinedTimestamp) : null;
  }

  /**
   * The last time this member started boosting the guild
   */
  public get premiumSince() {
    return this.premiumSinceTimestamp
      ? new Date(this.premiumSinceTimestamp)
      : null;
  }

  /**
   * Whether this member is currently timed out
   */
  public isCommunicationDisabled() {
    return this.communicationDisabledUntilTimestamp
      ? this.communicationDisabledUntilTimestamp > Date.now()
      : false;
  }

  /**
   * The URL of this member's guild avatar
   */
  public avatarURL(options: ImageURLOptions = {}) {
    return (
      this.avatar &&
      this.client.cdn.guildMemberAvatar(
        this.guild.id,
        this.displayName,
        this.avatar,
        options,
      )
    );
  }

  /**
   * The URL of this member's guild avatar or their {@link User.displayAvatarURL}
   */
  public displayAvatarURL(options: ImageURLOptions = {}) {
    return this.avatarURL(options) ?? this.user.displayAvatarURL(options);
  }
}

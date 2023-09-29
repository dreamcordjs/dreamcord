import { APIUser } from "./user";

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMember {
  /**
   * The user this guild member represents
   */
  user?: APIUser;

  /**
   * This user's guild nickname
   */
  nick?: string;

  /**
   * The member's guild avatar hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  avatar?: string;

  /**
   * Array of role object IDs
   * @see https://discord.com/developers/docs/topics/permissions#role-object
   */
  roles: string[];

  /**
   * When the user joined the guild
   */
  joined_at: string;

  /**
   * When the user started boosting the guild
   * @see https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-
   */
  premium_since?: string;

  /**
   * Whether the user is deafened in voice channels
   */
  deaf: boolean;

  /**
   * Whether the user is muted in voice channels
   */
  mute: boolean;

  /**
   * Guild member flags represented as a bit set, defaults to 0
   * @see https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
   */
  flags: GuildMemberFlags;

  /**
   * Whether the user has not yet passed the guild's Membership Screening requirements
   * @see https://discord.com/developers/docs/resources/guild#membership-screening-object
   */
  pending?: boolean;

  /**
   * Total permissions of the member in the channel, including overwrites, returned when in the interaction object
   */
  permissions?: string;

  /**
   * When the user's timeout will expire and the user will be able to communicate in the guild again, `null` or a time in the past if the user is not timed out
   * @see https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ
   */
  communication_disabled_until?: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
 */
export enum GuildMemberFlags {
  /**
   * Member has left and rejoined the guild
   */
  DidRejoin = 1 << 0,

  /**
   * Member has completed onboarding
   */
  CompletedOnboarding = 1 << 1,

  /**
   * Member is exempt from guild verification requirements
   */
  BypassesVerification = 1 << 2,

  /**
   * Member has started onboarding
   */
  StartedOnborading = 1 << 3,
}

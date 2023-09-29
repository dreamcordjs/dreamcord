/**
 * https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface APIUser {
  /**
   * The user's ID
   */
  id: string;

  /**
   * The user's username, not unique across the platform
   */
  username: string;

  /**
   * The user's Discord-tag
   */
  discriminator: string;

  /**
   * The user's display name, if it is set.
   * For bots, this is the application name
   */
  global_name?: string;

  /**
   * The user's avatar hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  avatar: string;

  /**
   * Whether the user belongs to an OAuth2 application
   */
  bot?: boolean;

  /**
   * Whether the user is an Official Discord System user (part of the urgent message system)
   */
  system?: boolean;

  /**
   * Whether the user has two factor enabled on their account
   */
  mfa_enabled?: boolean;

  /**
   * The user's banner hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  banner: string | null;

  /**
   * The user's banner color encoded as an integer representation of hexadecimal color code
   */
  accent_color: number | null;

  /**
   * The user's chosen language option
   * @see https://discord.com/developers/docs/reference#locales
   */
  locale?: string;

  /**
   * The flags on a user's account
   * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
   */
  flags?: UserFlags;

  /**
   * The type of Nitro subscription on a user's account
   * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
   */
  premium_type: UserPremiumType;

  /**
   * The public flags on a user's account
   * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
   */
  public_flags?: UserFlags;

  /**
   * The user's avatar decoration hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  avatar_decoration?: string;
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum UserFlags {
  /**
   * Discord employee
   */
  Staff = 1 << 0,

  /**
   * Partnered server owner
   */
  Partner = 1 << 1,

  /**
   * HypeSquad Events member
   */
  HypeSquad = 1 << 2,

  /**
   * Bug hunter level 1
   */
  BugHunterLevel1 = 1 << 3,

  /**
   * House Bravery member
   */
  HypeSquadOnlineHouse1 = 1 << 6,

  /**
   * House Brilliance member
   */
  HypeSquadOnlineHouse2 = 1 << 7,

  /**
   * House Balance member
   */
  HypeSquadOnlineHouse3 = 1 << 8,

  /**
   * Early Nitro supporter
   */
  PremiumEarlySupporter = 1 << 9,

  /**
   * User is a team
   * @see https://discord.com/developers/docs/topics/teams
   */
  TeamPseudoUser = 1 << 10,

  /**
   * Bug hunter level 2
   */
  BugHunterLevel2 = 1 << 14,

  /**
   * Verified bot
   */
  VerifiedBot = 1 << 16,

  /**
   * Early verified bot developer
   * @deprecated No longer obtainable
   */
  VerifiedDeveloper = 1 << 17,

  /**
   * Moderator Programs Alumni
   * @see https://discord.com/blog/announcing-our-latest-profile-badge-the-certified-discord-moderator
   */
  CertifiedModerator = 1 << 18,

  /**
   * Bot uses only HTTP interactions and is shown in the online member list
   * @see https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction
   */
  BotHTTPInteractions = 1 << 19,

  /**
   * User is an Active Developer
   * @see https://support-dev.discord.com/hc/articles/10113997751447
   */
  ActiveDeveloper = 1 << 22,
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum UserPremiumType {
  None,
  NitroClassic,
  Nitro,
  NitroBasic,
}

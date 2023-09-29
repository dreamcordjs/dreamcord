import { APIEmoji } from "./emoji";
import { APIRole } from "./role";
import { APISticker } from "./sticker";
import { APIWelcomeScreen } from "./welcome-screen";

export interface APIGuild {
  /**
   * Guild ID
   */
  id: string;

  /**
   * Guild name (2-100 characters, excluding trailing and leading whitespace)
   */
  name: string;

  /**
   * Icon hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  icon: string | null;

  /**
   * Icon hash, returned when in the template object
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  iconHash?: string | null;

  /**
   * Splash hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  splash: string | null;

  /**
   * Discovery splash hash; only present for guilds with the `Discoverable` feature
   */
  discovery_splash: string | null;

  /**
   * `true` if the user is the owner of the guild
   *
   * Only sent when using the {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds GET Current User Guilds} endpoint and are relative to the requested user
   * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
   */
  owner?: boolean;

  /**
   * ID of owner
   */
  owner_id: string;

  /**
   * Total permissions for the user in the guild (excludes overwrites and implicit permissions)
   *
   * Only sent when using the {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds GET Current User Guilds} endpoint and are relative to the requested user
   * @see https://discord.com/developers/docs/resources/user#get-current-user-guilds
   * @see https://discord.com/developers/docs/topics/permissions#implicit-permissions
   */
  permissions?: string;

  /**
   * Voice region ID for the guild
   * @deprecated Replaced by {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure channel.rtc_region}.
   * @see https://discord.com/developers/docs/resources/voice#voice-region-object
   */
  region?: string;

  /**
   * ID of AFK channel
   */
  afk_channel_id: string;

  /**
   * AFK timeout in seconds
   */
  afk_timeout: number;

  /**
   * `true` if the server widget is enabled
   */
  widget_enabled?: boolean;

  /**
   * The channel id that the widget will generate an invite to, or `null` if set to no invite
   */
  widget_channel_id?: string | null;

  /**
   * Verification level required for the guild
   * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
   */
  verification_level: VerificationLevel;

  /**
   * Default message notifications level
   * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
   */
  default_message_notifications: MessageNotificationLevel;

  /**
   * Explicit content filter level
   * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
   */
  explicit_content_filter: number;

  /**
   * Roles in the guild
   */
  roles: APIRole[];

  /**
   * Custom guild emojis
   */
  emojis: APIEmoji[];

  /**
   * Enabled guild features
   */
  features: GuildFeature[];

  /**
   * Required MFA level for the guild
   * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
   */
  mfa_level: MfaLevel;

  /**
   * Application ID of the guild creator if it is bot-created
   */
  application_id: string | null;

  /**
   * The ID of the channel where guild notices such as welcome messages and boost events are posted
   */
  system_channel_id: string | null;

  /**
   * System channel flags
   * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
   */
  system_channel_flags: SystemChannelFlags;

  /**
   * The ID of the channel where Community guilds can display rules and/or guidelines
   */
  rules_channel_id: string | null;

  /**
   * The maximum number of presences for the guild (`null` is always returned, apart from the largest of guilds)
   */
  max_presences?: number | null;

  /**
   * The maximum number of members for the guild
   */
  max_members?: number;

  /**
   * The vanity url code for the guild
   */
  vanity_url_code: string | null;

  /**
   * The description of the guild
   */
  description: string | null;

  /**
   * Banner hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  banner: string | null;

  /**
   * Premium tier (Server Boost level)
   * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
   */
  premium_tier: PremiumTier;

  /**
   * The number of boosts this guild currently has
   */
  premium_subscription_count?: number;

  /**
   * The preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
   * @see https://discord.com/developers/docs/reference#locales
   */
  preferred_locale: string;

  /**
   * The ID of the channel where admins and moderators of Community guilds receive notices from Discord
   */
  public_updates_channel_id: string | null;

  /**
   * The maximum amount of users in a video channel
   */
  max_video_channel_users?: number;

  /**
   * The maximum amount of users in a stage video channel
   */
  max_stage_video_channel_users?: number;

  /**
   * Approximate number of members in this guild, returned from the `GET /guilds/<id>` and `/users/@me/guilds` endpoints when `with_counts` is `true`
   */
  approximate_member_count?: number;

  /**
   * Approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` and `/users/@me/guilds` endpoints when `with_counts` is `true`
   */
  approximate_presence_count?: number;

  /**
   * The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
   * @see https://discord.com/developers/docs/resources/invite#invite-object
   */
  welcome_screen?: APIWelcomeScreen;

  /**
   * Guild NSFW level
   * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
   */
  nsfw_level: GuildNSFWLevel;

  /**
   * Custom guild stickers
   */
  stickers?: APISticker[];

  /**
   * Whether the guild has the boost progress bar enabled
   */
  premium_progress_bar_enabled: boolean;

  /**
   * The ID of the channel where admins and moderators of Community guilds receive safety alerts from Discord
   */
  safety_alerts_channel_id: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum VerificationLevel {
  /**
   * Unrestricted
   */
  None,

  /**
   * Must have verified email on account
   */
  Low,

  /**
   * Must be registered on Discord for longer than 5 minutes
   */
  Medium,

  /**
   * Must be a member of the server for longer than 10 minutes
   */
  High,

  /**
   * Must have a verified phone number
   */
  VeryHigh,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum MessageNotificationLevel {
  /**
   * Members will receive notifications for all messages by default
   */
  AllMessages,

  /**
   * Members will receive notifications only for messages that `@mention` them by default
   */
  OnlyMentions,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum ExplicitContentFilterLevel {
  /**
   * Media content will not be scanned
   */
  Disabled,

  /**
   * Media content sent by members without roles will be scanned
   */
  MembersWithoutRoles,

  /**
   * Media content sent by all members will be scanned
   */
  AllMembers,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum GuildNSFWLevel {
  Default,
  Explicit,
  Safe,
  AgeRestricted,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum PremiumTier {
  /**
   * Guild has not unlocked any Server Boost perks
   */
  None,

  /**
   * Guild has unlocked Server Boost level 1 perks
   */
  Tier1,

  /**
   * Guild has unlocked Server Boost level 2 perks
   */
  Tier2,

  /**
   * Guild has unlocked Server Boost level 3 perks
   */
  Tier3,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export enum GuildFeature {
  /**
   * Guild has access to set an animated guild banner image
   */
  AnimatedBanner = "ANIMATED_BANNER",

  /**
   * Guild has access to set an animated guild icon
   */
  AnimatedIcon = "ANIMATED_ICON",

  /**
   * Guild is using the old permissions configuration behavior
   * @see https://discord.com/developers/docs/change-log#upcoming-application-command-permission-changes
   */
  ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",

  /**
   * Guild has set up auto moderation rules
   */
  AutoModeration = "AUTO_MODERATION",

  /**
   * Guild has access to set a guild banner image
   */
  Banner = "BANNER",

  /**
   * Guild can enable welcome screen, Membership Screening and discovery, and receives community updates
   */
  Community = "COMMUNITY",

  /**
   * Guild has enabled monetization
   */
  CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",

  /**
   * Guild has enabled the role subscription promo page
   */
  CreatorStorePage = "CREATOR_STORE_PAGE",

  /**
   * Guild has been set as a support server on the App Directory
   */
  DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",

  /**
   * Guild is able to be discovered in the directory
   */
  Discoverable = "DISCOVERABLE",

  /**
   * Guild is able to be featured in the directory
   */
  Featurable = "FEATURABLE",

  /**
   * Guild is listed in a directory channel
   */
  HasDirectoryEntry = "HAS_DIRECTORY_ENTRY",

  /**
   * Guild is a Student Hub
   * @see https://support.discord.com/hc/articles/4406046651927
   * @unstable This feature is currently not documented by Discord, but has known value
   */
  Hub = "HUB",

  /**
   * Guild has disabled invite usage, preventing users from joining
   */
  InvitesDisabled = "INVITES_DISABLED",

  /**
   * Guild has access to set an invite splash background
   */
  InviteSplash = "INVITE_SPLASH",

  /**
   * Guild is in a Student Hub
   * @see https://support.discord.com/hc/articles/4406046651927
   * @unstable This feature is currently not documented by Discord, but has known value
   */
  LinkedToHub = "LINKED_TO_HUB",

  /**
   * Guild has enabled Membership Screening
   */
  MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",

  /**
   * Guild has enabled monetization
   * @unstable This feature is no longer documented by Discord
   */
  MonetizationEnabled = "MONETIZATION_ENABLED",

  /**
   * Guild has increased custom sticker slots
   */
  MoreStickers = "MORE_STICKERS",

  /**
   * Guild has access to create news channels
   */
  News = "NEWS",

  /**
   * Guild is partnered
   */
  Partnered = "PARTNERED",

  /**
   * Guild can be previewed before joining via Membership Screening or the directory
   */
  PreviewEnabled = "PREVIEW_ENABLED",

  /**
   * Guild has access to create private threads
   */
  PrivateThreads = "PRIVATE_THREADS",

  /**
   * Guild has disabled alerts for join raids in the configured safety alerts channel
   */
  RaidAlertsDisabled = "RAID_ALERTS_DISABLED",

  RelayEnabled = "RELAY_ENABLED",

  /**
   * Guild is able to set role icons
   */
  RoleIcons = "ROLE_ICONS",

  /**
   * Guild has role subscriptions that can be purchased
   */
  RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",

  /**
   * Guild has enabled role subscriptions
   */
  RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",

  /**
   * Guild has enabled ticketed events
   */
  TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",

  /**
   * Guild has access to set a vanity URL
   */
  VanityURL = "VANITY_URL",

  /**
   * Guild is verified
   */
  Verified = "VERIFIED",

  /**
   * Guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
   */
  VIPRegions = "VIP_REGIONS",

  /**
   * Guild has enabled the welcome screen
   */
  WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum MfaLevel {
  /**
   * Guild has no MFA/2FA requirement for moderation actions
   */
  None,

  /**
   * Guild has a 2FA requirement for moderation actions
   */
  Elevated,
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum SystemChannelFlags {
  /**
   * Suppress member join notifications
   */
  SuppressJoinNotifications = 1 << 0,

  /**
   * Suppress server boost notifications
   */
  SuppressPremiumSubscriptions = 1 << 1,

  /**
   * Suppress server setup tips
   */
  SuppressGuildReminderNotifications = 1 << 2,

  /**
   * Hide member join sticker reply buttons
   */
  SuppressJoinNotificationReplies = 1 << 3,

  /**
   * Suppress role subscription purchase and renewal notifications
   */
  SuppressRoleSubscriptionPurchaseNotifications = 1 << 4,

  /**
   * Hide role subscription sticker reply buttons
   */
  SuppressRoleSubscriptionPurchaseNotificationReplies = 1 << 5,
}

import { APIGuildMember } from "./member";
import { APIThreadMetadata, ThreadAutoArchiveDuration } from "./thread";
import { APIUser } from "./user";

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface APIChannel {
  /**
   * The ID of this channel
   */
  id: string;

  /**
   * The type of channel
   * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
   */
  type: ChannelType;

  /**
   * The ID of the guild (may be missing for some channel objects received over gateway guild dispatches)
   */
  guild_id?: string;

  /**
   * Sorting position of the channel
   */
  position?: number;

  /**
   * Explicit permission overwrites for members and roles
   * @see https://discord.com/developers/docs/resources/channel#overwrite-object
   */
  permission_overwrites: APIChannelOverwrite[];

  /**
   * The name of the channel
   * (1-100 characters)
   */
  name?: string;

  /**
   * The channel topic (0-4096 characters for `GuildForum` and `GuildMedia` channels, 0-1024 characters for all others)
   */
  topic?: string;

  /**
   * Whether the channel is NSFW
   */
  nsfw?: boolean;

  /**
   * The ID of the last message sent in this channel (or thread for `GuildForum` or `GuildMedia` channels) (may not point to an existing or valid message or thread)
   */
  last_message_id?: string;

  /**
   * The bitrate (in bits) of the voice channel
   */
  bitrate?: number;

  /**
   * The user limit of the voice channel
   */
  user_limit?: number;

  /**
   * Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `ManageMessages` or `ManageChannel`, are unaffected
   *
   * This also applies to thread creation. Users can send one message and create one thread during each interval
   */
  rate_limit_per_user?: number;

  /**
   * The recipients of the DM
   */
  recipients?: APIUser;

  /**
   * Icon hash of the group DM
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  icon?: string;

  /**
   * ID of the creator of the group DM or thread
   */
  owner_id?: string;

  /**
   * Application id of the group DM creator if it is bot-created
   */
  application_id?: string;

  /**
   * For group DM channels: whether the channel is managed by an application via the `gdm.join` OAuth2 scope
   */
  managed?: boolean;

  /**
   * For guild channels: ID of the parent category for a channel (each parent category can contain up to 50 channels)
   *
   * For threads: ID of the text channel this thread was created
   */
  parent_id?: string;

  /**
   * When the last pinned message was pinned. This may be `null` in events such as `GuildCreate` when a message is not pinned.
   */
  last_pin_timestamp?: string;

  /**
   * Voice region ID for the voice channel, automatic when set to `null`
   */
  rtc_region?: string | null;

  /**
   * The camera video quality mode of the voice channel, 1 when not present
   * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
   */
  video_quality_mode?: VideoQualityMode;

  /**
   * Number of messages (not including the initial message or deleted messages) in a thread
   *
   * For threads created before July 1, 2022, the message count is inaccurate when it's greater than 50
   */
  message_count?: number;

  /**
   * An approximate count of users in a thread, stops counting at 50
   */
  member_count?: number;

  /**
   * Thread-specific fields not needed by other channels
   */
  thread_metadata: APIThreadMetadata[];

  /**
   * Thread member object for the current user, if they have joined the thread, only included on certain API endpoints
   */
  member?: APIGuildMember;

  /**
   * Default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
   */
  default_auto_archive_duration?: ThreadAutoArchiveDuration;

  /**
   * Computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
   */
  permissions?: string;

  /**
   * Channel flags combined as a bitfield
   * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
   * @see https://en.wikipedia.org/wiki/Bit_field
   */
  flags?: ChannelFlags;

  /**
   * Number of messages ever sent in a thread
   *
   * Similar to `message_count` on message creation, but will not decrement the number when a message is deleted
   */
  total_message_sent?: number;

  /**
   * The IDs of the set of tags that have been applied to a thread in a `GuildForum` or a `GuildMedia` channel
   */
  available_tags?: string;

  /**
   * The emoji to show in the add reaction button on a thread in a `GuildForum` or a `GuildMedia` channel
   */
  default_reaction_emoji?: APIDefaultReactionEmoji;

  /**
   * The initial `rate_limit_per_user` to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
   */
  default_thread_rate_limit_per_user?: number;

  /**
   * The default sort order type used to order posts in `GuuldForum` and `GuildMedia` channels. Defaults to `null`, which indicates a preferred sort order hasn't been set by a channel admin
   * @see https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
   */
  default_sort_order?: SortOrderType | null;

  /**
   * the default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
   */
  default_forum_layout?: ForumLayoutType;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
  /**
   * A text channel within a server
   */
  GuildText,

  /**
   * A direct message between users
   */
  DM,

  /**
   * A voice channel within a server
   */
  GuildVoice,

  /**
   * A direct message between multiple users
   */
  GroupDM,

  /**
   * An organizational category that contains up to 50 channels
   * @see https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101
   */
  GuildCategory,

  /**
   * A channel that users can follow and crosspost into their own server
   * @see https://support.discord.com/hc/en-us/articles/360032008192
   */
  GuildAnnouncement,

  /**
   * A temporary sub-channel within a `GuildAnnouncement` channel
   */
  AnnouncementThread = 10,

  /**
   * A temporary sub-channel within a `GuildText` or `GuildForum` channel
   */
  PublicThread,

  /**
   * A temporary sub-channel within a `GuildText` channel that is only viewable by those invited and those with the `ManageThreads` permission
   */
  PrivateThread,

  /**
   * A voice channel for hosting events with an audience
   * @see https://support.discord.com/hc/en-us/articles/1500005513722
   */
  GuildStageVoice,

  /**
   * The channel in a hub containing the listed servers
   * @see https://support.discord.com/hc/en-us/articles/4406046651927-Discord-Student-Hubs-FAQ
   */
  GuildDirectory,

  /**
   * Channel that can only contain threads
   */
  GuildForum,

  /**
   * Channel that can only contain threads, similar to `GuildForum` channels
   * @see https://creator-support.discord.com/hc/articles/14346342766743
   * @unstable This is still in active development. Avoid implementing any features that are not documented, since they are subject to change without notice!
   */
  GuildMedia,

  /**
   * A channel that users can follow and crosspost into their own server
   * @see https://support.discord.com/hc/en-us/articles/360032008192
   * @deprecated This is the old name for `GuildAnnouncement`
   */
  GuildNews = 5,
}

export enum ChannelOverwriteType {
  Role,
  Member,
}

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface APIChannelOverwrite {
  /**
   * Role or user ID
   */
  id: string;

  /**
   * Either 0 (role) or 1 (member)
   */
  type: ChannelOverwriteType;

  /**
   * Permission bit set
   * @see https://discord.com/developers/docs/topics/permissions#permissions
   */
  allow: string;

  /**
   * Permission bit set
   * @see https://discord.com/developers/docs/topics/permissions#permissions
   */
  deny: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum VideoQualityMode {
  /**
   * Discord chooses the quality for optimal performance
   */
  Auto = 1,

  /**
   * 720p
   */
  Full,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlags {
  /**
   * This thread is pinned to the top of its parent `GuildForum` or `GuildMedia` channel
   */
  Pinned = 1 << 1,

  /**
   * Whether a tag is required to be specified when creating a thread in a `GuildForum` or a `GuildMedia` channel. Tags are specified in the `applied_tags` field.
   */
  RequireTag = 1 << 4,

  /**
   * When set hides the embedded media download options.
   *
   * Available only for media channels
   */
  HideMediaDownloadOptions = 1 << 15,
}

/**
 * https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure
 */
export interface APIDefaultReactionEmoji {
  /**
   * The ID of a guild's custom emoji
   */
  emoji_id?: string;

  /**
   * The unicode character of the emoji
   */
  emoji_name?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum SortOrderType {
  /**
   * Sort forum posts by activity
   */
  LatestActivity,

  /**
   * Sort forum posts by creation time (from most recent to oldest)
   */
  CreationDate,
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types
 */
export enum ForumLayoutType {
  /**
   * No default has been set for forum channel
   */
  NotSet,

  /**
   * Display posts as a list
   */
  ListView,

  /**
   * Display posts as a collection of tiles
   */
  GalleryView,
}

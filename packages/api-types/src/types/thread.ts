import { APIGuildMember } from "./member";

/**
 * https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure
 */
export interface APIThreadMetadata {
  /**
   * Whether the thread is archived
   */
  archived: boolean;

  /**
   * Duration in minutes to automatically archive the thread after recent activity
   *
   * Can be set to: 60, 1440, 4320, 10080
   */
  auto_archive_duration: ThreadAutoArchiveDuration;

  /**
   * Timestamp when the thread's archive status was last changed, used for calculating recent activity
   */
  archive_timestamp: string;

  /**
   * Whether the thread is locked; when a thread is locked, only users with `ManageThreads` can unarchive it
   */
  locked: boolean;

  /**
   * Whether non-moderators can add other non-moderators to a thread; only available on private threads
   */
  invitable?: boolean;

  /**
   * Timestamp when the thread was created; only populated for threads created after January 9, 2022
   */
  create_timestamp?: string;
}

export enum ThreadAutoArchiveDuration {
  OneHour = 60,
  OneDay = 1_440,
  ThreeDays = 4_320,
  OneWeek = 10_080,
}

/**
 * https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure
 */
export interface APIThreadMember {
  /**
   * ID of the thread
   *
   * Omitted on the member sent within each thread in the `GuildCreate` event.
   */
  id?: string;

  /**
   * ID of the user
   */
  user_id?: string;

  /**
   * Time the user last joined the thread
   */
  join_timestamp: string;

  /**
   * Any user-thread settings, currently only used for notifications
   */
  flags: number;

  /**
   * Additional information about the user
   *
   * Only present when `with_member` is set to `true` when calling {@link https://discord.com/developers/docs/resources/channel#list-thread-members List Thread Members} or {@link https://discord.com/developers/docs/resources/channel#get-thread-member Get Thread Member}.
   */
  member?: APIGuildMember;
}

import { APIUser } from "./user";

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmoji {
  /**
   * Emoji ID
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  id: string | null;

  /**
   * Emoji name
   *
   * Can be null only in reaction emoji objects
   */
  name: string | null;

  /**
   * Roles allowed to use this emoji
   */
  roles?: string[];

  /**
   * User that created this emoji
   */
  user?: APIUser;

  /**
   * Whether this emoji must be wrapped in colons
   */
  require_colons?: boolean;

  /**
   * Whether this emoji is managed
   */
  managed?: boolean;

  /**
   * Whether this emoji is animated
   */
  animated?: boolean;

  /**
   * Whether this emoji can be used, may be false due to loss of Server Boosts
   */
  available?: boolean;
}

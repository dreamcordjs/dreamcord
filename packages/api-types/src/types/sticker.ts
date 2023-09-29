import { APIUser } from "./user";

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure
 */
export interface APISticker {
  /**
   * ID of the sticker
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  id: string;

  /**
   * For standard stickers, ID of the pack the sticker is from
   */
  pack_id?: string;

  /**
   * Name of the sticker
   */
  name: string;

  /**
   * Description of the sticker
   */
  description: string | null;

  /**
   * Autocomplete/suggestion tags for the sticker (max 200 characters)
   *
   * A comma separated list of keywords is the format used for this by standard stickers, but this is just a convention. Incidentally the client will always use a name generated from an emoji as the value of this field when creating or modifying a guild sticker.
   */
  tags: string;

  /**
   * Previously the sticker asset hash, now an empty string
   * @deprecated
   */
  asset?: string;

  /**
   * Type of sticker
   * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
   */
  type: StickerType;

  /**
   * Type of sticker format
   * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
   */
  format_type: StickerFormatType;

  /**
   * Whether this guild sticker can be used, may be `false` due to loss of Server Boosts
   */
  available?: boolean;

  /**
   * ID of the guild that owns this sticker
   */
  guild_id?: string;

  /**
   * The user that uploaded the guild sticker
   */
  user?: APIUser;

  /**
   * The standard sticker's sort order within its pack
   */
  sort_value?: number;
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export enum StickerType {
  /**
   * An official sticker in a pack
   */
  Standard = 1,

  /**
   * A sticker uploaded to a guild for the guild's members
   */
  Guild,
}

/**
 * https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
export enum StickerFormatType {
  PNG = 1,
  APNG,
  LOTTIE,
  GIF,
}

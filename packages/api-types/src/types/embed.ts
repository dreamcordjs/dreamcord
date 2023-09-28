/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-structure
 *
 * Length limit: 6000 characters
 */
export interface APIEmbed {
  /**
   * Title of embed
   *
   * Length limit: 256 characters
   */
  title?: string;

  /**
   * Type of embed (always "rich" for webhook embeds)
   * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-types
   */
  type?: EmbedType;

  /**
   * Description of embed
   *
   * Length limit: 4096 characters
   */
  description?: string;

  /**
   * URL of embed
   */
  url?: string;

  /**
   * Timestamp of embed content in an ISO8601 timestamp.
   */
  timestamp?: string;

  /**
   * Color code of the embed
   */
  color?: string;

  /**
   * Footer information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
   */
  footer?: APIEmbedFooter;

  /**
   * Image information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
   */
  image?: APIEmbedImage;

  /**
   * Thumbnail information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
   */
  thumbnail?: APIEmbedThumbnail;

  /**
   * Video information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
   */
  video?: APIEmbedVideo;

  /**
   * Provider information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
   */
  provider?: APIEmbedProvider;

  /**
   * Author information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
   */
  author?: APIEmbedAuthor;

  /**
   * Fields information
   * @see https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
   */
  fields?: APIEmbedField[];
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-types
 * @deprecated *Embed types should be considered deprecated and might be removed in a future API version*
 */
export enum EmbedType {
  /**
   * Generic embed rendered from embed attributes
   */
  Rich = "rich",

  /**
   * Image embed
   */
  Image = "image",

  /**
   * Video embed
   */
  Video = "video",

  /**
   * Animated gif image embed rendered as a video embed
   */
  GIFV = "gifv",

  /**
   * Article embed
   */
  Article = "article",

  /**
   * Link embed
   */
  Link = "link",

  /**
   * Auto moderation alert embed
   * @unstable This embed type is currently not documented by Discord, but it is returned in the auto moderation system messages.
   */
  AutoModerationMessage = "auto_moderation_message",
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface APIEmbedFooter {
  /**
   * Footer text
   */
  text: string;

  /**
   * URL of the footer icon
   * (only supports http(s) and attachments)
   */
  icon_url?: string;

  /**
   * A proxied URL of footer icon.
   */
  proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface APIEmbedImage {
  /**
   * Source URL of image
   * (only supports http(s) and attachments)
   */
  url: string;

  /**
   * A proxied URL of the image
   */
  proxy_url?: string;

  /**
   * Height of image
   */
  height?: number;

  /**
   * Width of image
   */
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnail {
  /**
   * Source URL of thumbnail
   * (only supports http(s) and attachments)
   */
  url: string;

  /**
   * A proxied URL of the thumbnail
   */
  proxy_url?: string;

  /**
   * Height of thumbnail
   */
  height?: number;

  /**
   * Width of thumbnail
   */
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface APIEmbedVideo {
  /**
   * Source URL of video
   * (only supports http(s) and attachments)
   */
  url: string;

  /**
   * A proxied URL of the video
   */
  proxy_url?: string;

  /**
   * Height of video
   */
  height?: number;

  /**
   * Width of video
   */
  width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface APIEmbedProvider {
  /**
   * Name of provider
   */
  name?: string;

  /**
   * URL of provider
   */
  url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface APIEmbedAuthor {
  /**
   * Name of author
   */
  name: string;

  /**
   * URL of author
   * (only supports http(s))
   */
  url?: string;

  /**
   * URL of author icon
   * (only supports http(s) and attachments)
   */
  icon_url?: string;

  /**
   * A proxied URL of author icon
   */
  proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface APIEmbedField {
  /**
   * Name of the field
   */
  name: string;

  /**
   * Value of the field
   */
  value: string;

  /**
   * Whether or not this field should display inline
   */
  inline?: boolean;
}

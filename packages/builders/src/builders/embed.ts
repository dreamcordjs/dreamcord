import {
  APIEmbed,
  APIEmbedAuthor,
  APIEmbedField,
  APIEmbedFooter,
  APIEmbedImage,
} from "@discordic/api-types";
import { RestOrArray, normalizeArray } from "../utils/normalizeArray";

/**
 * A tuple satisfying the RGB color model.
 * @see https://developer.mozilla.org/docs/Glossary/RGB
 */
export type RGBTuple = [red: number, green: number, blue: number];

/**
 * The base icon data typically used in payloads.
 */
export interface IconData {
  /**
   * The URL of the icon.
   */
  iconURL?: string;
  /**
   * The proxy URL of the icon.
   */
  proxyIconURL?: string;
}

/**
 * Represents the author data of an embed.
 */
export type EmbedAuthorData = IconData &
  Omit<APIEmbedAuthor, "icon_url" | "proxy_icon_url">;

/**
 * Represents the author options of an embed.
 */
export type EmbedAuthorOptions = Omit<EmbedAuthorData, "proxyIconURL">;

/**
 * Represents the footer data of an embed.
 */
export type EmbedFooterData = IconData &
  Omit<APIEmbedFooter, "icon_url" | "proxy_icon_url">;

/**
 * Represents the footer options of an embed.
 */
export type EmbedFooterOptions = Omit<EmbedFooterData, "proxyIconURL">;

/**
 * Represents the image data of an embed.
 */
export interface EmbedImageData extends Omit<APIEmbedImage, "proxy_url"> {
  /**
   * The proxy URL for the image.
   */
  proxyURL?: string;
}

export class EmbedBuilder {
  public readonly data: APIEmbed;

  public constructor(data: APIEmbed = {}) {
    this.data = { ...data };
    if (data.timestamp)
      this.data.timestamp = new Date(data.timestamp).toISOString();
  }

  /**
   * Appends fields to the embed.
   * @remarks
   * This method accepts either an array of fields or a variable number of field parameters.
   * The maximum amount of fields that can be added is 25.
   * @example
   * Using an array:
   * ```ts
   * const fields: APIEmbedField[] = ...;
   * const embed = new EmbedBuilder()
   * 	.addFields(fields);
   * ```
   * @example
   * Using rest parameters (variadic):
   * ```ts
   * const embed = new EmbedBuilder()
   * 	.addFields(
   * 		{ name: 'Field 1', value: 'Value 1' },
   * 		{ name: 'Field 2', value: 'Value 2' },
   * 	);
   * ```
   * @param fields - The fields to add
   */
  public addFields(...fields: RestOrArray<APIEmbedField>) {
    const normalizedFields = normalizeArray(fields);
    if (normalizedFields.length + (this.data.fields?.length || 0) > 25)
      throw new Error("Only 25 fields can be in one embed.");

    if (this.data.fields) this.data.fields.push(...normalizedFields);
    else this.data.fields = normalizedFields;
    return this;
  }

  /**
   * Removes, replaces, or inserts fields for this embed.
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice | Array.prototype.splice()}.
   * The maximum amount of fields that can be added is 25.

   * It's useful for modifying and adjusting order of the already-existing fields of an embed.
   * @example
   * Remove the first field:
   * ```ts
   * embed.spliceFields(0, 1);
   * ```
   * @example
   * Remove the first n fields:
   * ```ts
   * const n = 4;
   * embed.spliceFields(0, n);
   * ```
   * @example
   * Remove the last field:
   * ```ts
   * embed.spliceFields(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of fields to remove
   * @param fields - The replacing field objects
   */
  public spliceFields(
    index: number,
    deleteCount: number,
    ...fields: APIEmbedField[]
  ) {
    if (fields.length + (this.data.fields?.length || 0) > 25)
      throw new Error("Only 25 fields can be in one embed.");

    if (this.data.fields)
      this.data.fields.splice(index, deleteCount, ...fields);
    else this.data.fields = fields;
    return this;
  }

  /**
   * Sets the fields for this embed.
   * @remarks
   * This method is an alias for {@link EmbedBuilder.spliceFields}. More specifically,
   * it splices the entire array of fields, replacing them with the provided fields.
   *
   * You can set a maximum of 25 fields.
   * @param fields - The fields to set
   */
  public setFields(...fields: RestOrArray<APIEmbedField>) {
    this.spliceFields(
      0,
      this.data.fields?.length ?? 0,
      ...normalizeArray(fields)
    );
    return this;
  }

  /**
   * Sets the author of this embed.
   * @param options - The options to use
   */
  public setAuthor(options: EmbedAuthorOptions | null) {
    if (options === null) {
      this.data.author = undefined;
      return this;
    }

    this.data.author = {
      name: options.name,
      url: options.url,
      icon_url: options.iconURL,
    };
    return this;
  }

  /**
   * Sets the color of this embed.
   * @param color - The color to use
   */
  public setColor(color: RGBTuple | number | null) {
    if (Array.isArray(color)) {
      const [red, green, blue] = color;
      this.data.color = (red << 16) + (green << 8) + blue;
      return this;
    }

    this.data.color = color ?? undefined;
    return this;
  }

  /**
   * Sets the description of this embed.
   * @param description - The description to use
   */
  public setDescription(description: string | null) {
    this.data.description = description ?? undefined;
    return this;
  }

  /**
   * Sets the footer of this embed.
   * @param options - The footer to use
   */
  public setFooter(options: EmbedFooterOptions | null) {
    if (options === null) {
      this.data.footer = undefined;
      return this;
    }

    this.data.footer = { text: options.text, icon_url: options.iconURL };
    return this;
  }

  /**
   * Sets the image of this embed.
   * @param url - The image URL to use
   */
  public setImage(url: string | null) {
    this.data.image = url ? { url } : undefined;
    return this;
  }

  /**
   * Sets the thumbnail of this embed.
   * @param url - The thumbnail URL to use
   */
  public setThumbnail(url: string | null) {
    this.data.thumbnail = url ? { url } : undefined;
    return this;
  }

  /**
   * Sets the timestamp of this embed.
   * @param timestamp - The timestamp or date to use
   */
  public setTimestamp(timestamp: Date | number | null = Date.now()) {
    this.data.timestamp = timestamp
      ? new Date(timestamp).toISOString()
      : undefined;
    return this;
  }

  /**
   * Sets the title for this embed.
   * @param title - The title to use
   */
  public setTitle(title: string | null) {
    this.data.title = title ?? undefined;
    return this;
  }

  /**
   * Sets the URL of this embed.
   * @param url - The URL to use
   */
  public setURL(url: string | null) {
    this.data.url = url ?? undefined;
    return this;
  }

  /**
   * Serializes this builder to API-compatible JSON data.
   */
  public toJSON() {
    return this.data;
  }
}

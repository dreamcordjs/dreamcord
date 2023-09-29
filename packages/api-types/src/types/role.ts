/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-structure
 */
export interface APIRole {
  /**
   * Role ID
   */
  id: string;

  /**
   * Role name
   */
  name: string;

  /**
   * Integer representation of hexadecimal color code
   */
  color: number;

  /**
   * If this role is pinned in the user listing
   */
  hoist: boolean;

  /**
   * Role icon hash
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  icon?: string | null;

  /**
   * Role unicode emoji
   */
  unicode_emoji?: string | null;

  /**
   * Position of this role
   */
  position: number;

  /**
   * Permission bit set
   */
  permissions: string;

  /**
   * Whether this role is managed by an integration
   */
  managed: boolean;

  /**
   * Whether this role is mentionable
   */
  mentionable: boolean;

  /**
   * The tags this role has
   */
  tags?: APIRoleTags;

  /**
   * Role flags combined as a bitfield
   * @see https://discord.com/developers/docs/topics/permissions#role-object-role-flags
   * @see https://en.wikipedia.org/wiki/Bit_field
   */
  flags: RoleFlags;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
 *
 * Tags with type `null` represent booleans. They will be present and set to `null` if they are "true", and will be not present if they are "false".
 */
export interface APIRoleTags {
  /**
   * The ID of the bot this role belongs to
   */
  bot_id?: string;

  /**
   * The ID of the integration this role belongs to
   */
  integration_id?: string;

  /**
   * Whether this is the guild's Booster role
   */
  premium_subscriber?: null;

  /**
   * The ID of this role's subscription sku and listing
   */
  subscription_listing_id?: string;

  /**
   * Whether this role is available for purchase
   */
  available_for_purchase?: null;

  /**
   * Whether this role is a guild's linked role
   */
  guild_connections?: null;
}

/**
 * https://discord.com/developers/docs/topics/permissions#role-object-role-flags
 */
export enum RoleFlags {
  /**
   * Role can be selected by members in an onboarding prompt
   * @see https://discord.com/developers/docs/resources/guild#guild-onboarding-object
   */
  InPrompt = 1 << 0,
}

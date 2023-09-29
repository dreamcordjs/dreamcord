/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
 */
export interface APIWelcomeScreen {
  /**
   * The server description shown in the welcome screen
   */
  description: string | null;

  /**
   * The channels shown in the welcome screen, up to 5
   */
  welcome_channels: APIWelcomeChannel[];
}

/**
 * https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
 */
export interface APIWelcomeChannel {
  /**
   * The channel's ID
   */
  channel_id: string;

  /**
   * The description shown for the channel
   */
  description: string;

  /**
   * The emoji ID, if the emoji is custom
   * @see https://discord.com/developers/docs/reference#image-formatting
   */
  emoji_id: string | null;

  /**
   * The emoji name if custom, the unicode character if standard, or `null` if no emoji is set
   */
  emoji_name: string | null;
}

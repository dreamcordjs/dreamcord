import { Client } from "../client";
import { VerificationLevel } from "../types/guild";
import { ImageURLOptions } from "../types/images";

export class Guild {
  /**
   * The client that initialized this guild.
   */
  public client: Client;

  /**
   * The ID of this guild.
   */
  public id!: string;

  /**
   * The name of this guild.
   */
  public name!: string;

  /**
   * The icon {@link https://discord.com/developers/docs/reference#image-formatting hash} of this guild.
   */
  public icon!: string;

  /**
   * Verification level required for this guild.
   */
  public verificationLevel!: VerificationLevel;

  /**
   * The vanity URL code for this guild.
   */
  public vanityUrlCode!: string | null;

  constructor(client: Client, data: any) {
    this.client = client;
    this._patch(data);
  }

  private _patch(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.verificationLevel = data.verification_level;
    this.vanityUrlCode = data.vanity_url_code;
  }

  /**
   * The icon URL for this guild.
   */
  public iconURL(options?: ImageURLOptions) {
    return this.client.cdn.icon(this.id, this.icon, options);
  }
}

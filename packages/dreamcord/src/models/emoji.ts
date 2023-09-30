import { APIEmoji } from "@dreamcord/api-types";
import { Client } from "../client";

export class Emoji {
  /**
   * The client that initialized this emoji
   */
  public client: Client;

  /**
   * The ID of this emoji
   */
  public id!: string | null;

  /**
   * The name of this emoji
   */
  public name!: string | null;

  /**
   * Whether this emoji is managed
   */
  public managed!: boolean;

  /**
   * Whether this emoji is animated
   */
  public animated!: boolean;

  /**
   * Whether this emoji can be used, may be false due to loss of Server Boosts
   */
  public available!: boolean;

  constructor(client: Client, data: APIEmoji) {
    this.client = client;
    this._patch(data);
  }

  private _patch(data: APIEmoji) {
    this.id = data.id;
    this.name = data.name;
    this.managed = !!data.managed;
    this.animated = !!data.animated;
    this.available = !!data.available;
  }

  /**
   * Convert this emoji into a usable string for the API
   */
  public toString() {
    return this.id
      ? `<${this.animated ? "a" : ""}:${this.name}:${this.id}>`
      : this.name!;
  }
}

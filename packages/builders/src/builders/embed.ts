import { Embed } from "discordic";

export class EmbedBuilder {
  public readonly data: Embed;

  public constructor(data: Embed = {}) {
    this.data = { ...data };
    if (data.timestamp)
      this.data.timestamp = new Date(data.timestamp).toISOString();
  }

  public setTitle(title: string | null): this {
    this.data.title = title ?? undefined;
    return this;
  }

  public setDescription(description: string | null): this {
    this.data.description = description ?? undefined;
    return this;
  }

  public toJSON() {
    return this.data;
  }
}

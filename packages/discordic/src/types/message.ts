import { APIEmbed } from "@discordic/api-types";

export type MessageOptions = {
  tts?: boolean
} & ({ content: string; embeds?: undefined } | { content?: undefined; embeds: APIEmbed[] } | { content: string; embeds: APIEmbed[] });
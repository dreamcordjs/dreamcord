import "dotenv/config";

import { Client } from "./client";
import { Intents } from "./types/intents";
const client = new Client({
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.on("messageCreate", (message) => {
  if (!message.inGuild()) return;
});

client.connect(process.env.TOKEN!);

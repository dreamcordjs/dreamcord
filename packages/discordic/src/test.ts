import { Client } from "./client";
import { Intents } from "./types/intents";
const client = new Client({
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.on("messageCreate", (message) => {
  if(!message.inGuild()) return;
});

client.connect(
  "MTE1MzY2MTQ4NzgxMDg5MTg4Ng.GK3D83.cPRkX6Hq4T9paCXMaz8fbXTCpHx6BpURLpmAHU"
);

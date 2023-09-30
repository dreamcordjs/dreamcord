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
  if (!message.inGuild() || message.author.bot) return;
  if (message.content === "test") {
    message.channel
      .send({
        content: "test",
      })
      .then((message) =>
        message.edit({
          content: "test!",
        })
      )
      .then((message) => message.react("🔥"))
      .then((message) =>
        message.react(message.guild?.emojis.get("1046366360604786688")!)
      )
      .then((message) => message.delete());
  }
});

client.connect(process.env.TOKEN!);

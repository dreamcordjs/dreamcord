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
    message.channel.sendTyping();

    setTimeout(() => {
      message.channel
        .send({
          content: "test",
        })
        .then(async (message) => {
          await message.edit({
            content: "test!",
          });
          await message.react("🔥");
          await message.react(
            message.guild!.emojis.get("1046366360604786688")!
          );
          await message.pin();
          await message.unpin();
          await message.delete();
        });
    }, 1000);
  }
});

client.connect(process.env.TOKEN!);

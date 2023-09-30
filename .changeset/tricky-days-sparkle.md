---
"discordic": minor
---

Add more cross-compatibility with discord.js for sending messages.

```ts
client.on("messageCreate", (message) => {
  message.reply("test!"); // now works!
  message.channel.send("test!"); // now works!
});
```

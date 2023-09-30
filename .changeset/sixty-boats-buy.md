---
"dreamcord": minor
---

Add reacting to messages.

```js
client.on("messageCreate", async (message) => {
  const msg = await message.reply({
    content: "hello world!",
  });

  msg.react("👋"); // use a unicode emoji
  msg.react(message.guild.emojis.get("1046366360604786688")); // or a guild emoji
});
```

---
"dreamcord": minor
---

Allow strings for sending messages.

```ts
client.on("messageCreate", (message) => {
  message.reply("hello world!"); // replies to message with content "hello world!"
  message.channel.send("hello world!"); // sends a message in channel with content "hello world!"
});
```

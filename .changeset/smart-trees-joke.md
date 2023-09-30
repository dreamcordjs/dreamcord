---
"discordic": minor
---

Add replying to messages.

```ts
client.on("messageCreate", (message) => {
  message.reply({
    content: "test!",
  });
});
```

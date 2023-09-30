---
"dreamcord": minor
---

Add sending of typing indicator in a channel.

```ts
client.on("messageCreate", (message) => {
  message.channel.sendTyping();
});
```

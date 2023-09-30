---
"dreamcord": minor
---

Add pinning and unpinning messages.

```js
client.on("messageCreate", async (message) => {
  const msg = await message.reply({
    content: "hello world!",
  });

  msg.pin();
  msg.unpin();
});
```

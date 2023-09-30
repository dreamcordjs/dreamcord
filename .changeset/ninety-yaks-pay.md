---
"dreamcord": minor
---

Add deleting of messages.

```js
client.on("messageCreate", async (message) => {
  const msg = await message.reply({
    content: "hello world!",
  });

  msg.delete();
});
```

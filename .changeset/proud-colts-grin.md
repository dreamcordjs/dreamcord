---
"dreamcord": minor
---

Add editing of messages.

```js
client.on("messageCreate", async (message) => {
  const msg = await message.reply({
    content: "hello wordl!",
  });

  msg.edit({
    content: "hello world!",
  });
});
```

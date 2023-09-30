---
"dreamcord": minor
---

Add guild member.

```ts
client.on("messageCreate", (message) => {
  // Logs out the member's nickname, or `undefined`
  console.log(message.member.nickname);
});
```

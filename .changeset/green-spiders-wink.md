---
"@discordic/builders": patch
---

Finish EmbedBuilder and all it's functions.

Example:

```ts
const embed = new EmbedBuilder()
  .setAuthor({
    name: "name",
    iconURL: "https://github.com/ToastedDev.png",
  })
  .setTitle("title")
  .setDescription("description")
  .addFields({ name: "name", value: "value" })
  .setImage("https://github.com/ToastedDev.png")
  .setThumbnail("https://github.com/ToastedDev.png")
  .setColor([255, 255, 255])
  .setFooter({
    name: "name",
    iconURL: "https://github.com/ToastedDev.png",
  });
```

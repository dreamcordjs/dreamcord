# @discordic/builders

## 0.0.2

### Patch Changes

- f1071bc: Finish EmbedBuilder and all it's functions.

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

- Updated dependencies [f1071bc]
  - @discordic/api-types@0.0.2

## 0.0.1

### Patch Changes

- d771b68: First ever release of Discordic.
- Updated dependencies [d771b68]
  - @discordic/api-types@0.0.1
  - discordic@0.0.1

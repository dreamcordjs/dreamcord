# @dreamcord/builders

## 0.0.5

### Patch Changes

- Updated dependencies [7e07542]
  - @dreamcord/api-types@0.0.5

## 0.0.4

### Patch Changes

- fe59499: Add `.npmignore`.
- Updated dependencies [fe59499]
  - @dreamcord/api-types@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [0d3ba97]
  - @dreamcord/api-types@0.0.3

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
  - @dreamcord/api-types@0.0.2

## 0.0.1

### Patch Changes

- d771b68: First ever release of Dreamcord.
- Updated dependencies [d771b68]
  - @dreamcord/api-types@0.0.1
  - dreamcord@0.0.1

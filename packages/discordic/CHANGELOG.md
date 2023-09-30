# discordic

## 0.1.0

### Minor Changes

- 6e6ac87: Add replying to messages.

  ```ts
  client.on("messageCreate", (message) => {
    message.reply({
      content: "test!",
    });
  });
  ```

- 8ddea67: Add more cross-compatibility with discord.js for sending messages.

  ```ts
  client.on("messageCreate", (message) => {
    message.reply("test!"); // now works!
    message.channel.send("test!"); // now works!
  });
  ```

## 0.0.5

### Patch Changes

- 9c4fd07: Fix [`Message.authorId`](https://toasteddev.github.io/discordic/api/discordic/class/Message#authorId) type.

## 0.0.4

### Patch Changes

- Updated dependencies [fe59499]
  - @discordic/api-types@0.0.4

## 0.0.3

### Patch Changes

- 0d3ba97: Update documentation.
- Updated dependencies [0d3ba97]
  - @discordic/api-types@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [f1071bc]
  - @discordic/api-types@0.0.2

## 0.0.1

### Patch Changes

- d771b68: First ever release of Discordic.
- Updated dependencies [d771b68]
  - @discordic/api-types@0.0.1

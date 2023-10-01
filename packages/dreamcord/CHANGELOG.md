# dreamcord

## 0.1.0

### Minor Changes

- ef868c2: Add pinning and unpinning messages.

  ```js
  client.on("messageCreate", async (message) => {
    const msg = await message.reply({
      content: "hello world!",
    });

    msg.pin();
    msg.unpin();
  });
  ```

- d6e340e: Allow strings for intents.

  ```js
  const client = new Client({
    intents: ["Guilds"],
  });
  ```

- cc8e5ce: Add replying to messages.

  ```ts
  client.on("messageCreate", (message) => {
    message.reply({
      content: "hello world!",
    });
  });
  ```

- 410a27b: Split out base channel and text based channels.
- f631c2d: Add sending of typing indicator in a channel.

  ```ts
  client.on("messageCreate", (message) => {
    message.channel.sendTyping();
  });
  ```

- dd9c432: Add deleting of messages.

  ```js
  client.on("messageCreate", async (message) => {
    const msg = await message.reply({
      content: "hello world!",
    });

    msg.delete();
  });
  ```

- 3780a44: Add editing of messages.

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

- 9b32f81: Make documentation more consistent
- 00e16de: Add toString() for channels.

  ```ts
  // Logs: Hello from <#123456789012345678>!
  console.log(`Hello from ${channel}!`);
  ```

- 9b32f81: Add guild member.

  ```ts
  client.on("messageCreate", (message) => {
    // Logs out the member's nickname, or `undefined`
    console.log(message.member.nickname);
  });
  ```

- 7e07542: Add reacting to messages.

  ```js
  client.on("messageCreate", async (message) => {
    const msg = await message.reply({
      content: "hello world!",
    });

    msg.react("👋"); // use a unicode emoji
    msg.react(message.guild.emojis.get("1046366360604786688")); // or a guild emoji
  });
  ```

- cc8e5ce: Allow strings for sending messages.

  ```ts
  client.on("messageCreate", (message) => {
    message.reply("hello world!"); // replies to message with content "hello world!"
    message.channel.send("hello world!"); // sends a message in channel with content "hello world!"
  });
  ```

### Patch Changes

- Updated dependencies [7e07542]
  - @dreamcord/api-types@0.0.5

## 0.0.5

### Patch Changes

- 9c4fd07: Fix [`Message.authorId`](https://dreamcordjs.github.io/dreamcord/api/dreamcord/class/Message#authorId) type.

## 0.0.4

### Patch Changes

- Updated dependencies [fe59499]
  - @dreamcord/api-types@0.0.4

## 0.0.3

### Patch Changes

- 0d3ba97: Update documentation.
- Updated dependencies [0d3ba97]
  - @dreamcord/api-types@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [f1071bc]
  - @dreamcord/api-types@0.0.2

## 0.0.1

### Patch Changes

- d771b68: First ever release of Dreamcord.
- Updated dependencies [d771b68]
  - @dreamcord/api-types@0.0.1

# Eris

Coming from [Eris](https://abal.moe/Eris/)? Don't worry, we'll help you move to Dreamcord!

## Specifying your token

On [Eris](https://abal.moe/Eris/), you might've specified your bot token like this:

```js title="index.js" showLineNumbers
const bot = new Eris("Bot <your bot's token>");
```

But on Dreamcord, you specify your bot token in the `connect` function, like this:

```js title="index.js" showLineNumbers
client.connect("<your bot's token>");
```

This is similar to how [discord.js](https://discord.js.org) does it.

## Specifying intents

On [Eris](https://abal.moe/Eris/), you might've specified intents like this:

```js title="index.js" showLineNumbers
const bot = new Eris("Bot <your bot's token>", {
  intents: ["guilds", "guildMessages"],
});
```

But on Dreamcord, you specify intents using `PascalCase` instead of `camelCase`, like this:

```js title="index.js" showLineNumbers
const client = new Client({
  intents: ["Guilds", "GuildMessages"],
});
```

Or through the `Intents` enum, like this:

```js title="index.js" showLineNumbers
// Import the `Intents` enum from dreamcord
import { Intents } from "dreamcord";

const client = new Client({
  intents: [Intents.Guilds, Intents.GuildMessages],
});
```

Or maybe even a mix of both!

```js title="index.js" showLineNumbers
// Import the `Intents` enum from dreamcord
import { Intents } from "dreamcord";

const client = new Client({
  intents: ["Guilds", Intents.GuildMessages],
});
```

This is similar to how [discord.js](https://discord.js.org) and [Oceanic](https://github.com/OceanicJS/Oceanic) does it.

## Sending a message

On [Eris](https://abal.moe/Eris/), you might've sent messages like this:

```js title="index.js" showLineNumbers
bot.createMessage(message.channel.id, "Hello!");
```

And for embeds, you might've done this:

```js title="index.js" showLineNumbers
bot.createMessage(message.channel.id, {
  embeds: [
    {
      title: "I'm an embed!",
      description:
        "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
    },
  ],
});
```

But on Dreamcord, you can send messages by using `message.channel.send`, like this:

```js title="index.js" showLineNumbers
message.channel.send("Hello!");
```

Or for embeds, like this:

```js title="index.js" showLineNumbers
message.channel.send({
  embeds: [
    {
      title: "I'm an embed!",
      description:
        "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
    },
  ],
});
```

This is similar to how [discord.js](https://discord.js.org) does it.

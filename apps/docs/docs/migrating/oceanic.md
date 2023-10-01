# Oceanic

Coming from [Oceanic](https://github.com/OceanicJS/Oceanic)? Don't worry, we'll help you move to Dreamcord!

## Specifying your token

On [Oceanic](https://github.com/OceanicJS/Oceanic), you might've specified your bot token like this:

```js title="index.js" showLineNumbers
const client = new Client({ auth: "Bot <your bot's token>" });
```

But on Dreamcord, you specify your bot token in the `connect` function, like this:

```js title="index.js" showLineNumbers
client.connect("<your bot's token>");
```

This is similar to how [discord.js](https://discord.js.org) does it.

## Specifying intents

On [Oceanic](https://github.com/OceanicJS/Oceanic), you might've specified intents like this:

```js title="index.js" showLineNumbers
const client = new Client({
  auth: "Bot <your bot's token>",
  gateway: {
    intents: ["GUILDS", "GUILD_MESSAGES"],
  },
});
```

But on Dreamcord, you specify intents directly in the options instead of in the `gateway` property, and by using `PascalCase` instead of `SCREAMING_SNAKE_CASE`, like this:

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

This is similar to how [discord.js](https://discord.js.org) does it.

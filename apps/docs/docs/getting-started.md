# Getting Started

Make a simple Discord bot that logs into the Discord gateway in just a few steps!

Requirements:

- A [Discord account](https://discord.com)
- A [Discord bot application](https://discord.com/developers/applications)
- [Node.js](https://nodejs.org)
- Some knowledge of [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

---

1. Install the package:

```bash npm2yarn
npm install discordic
```

2. Add some code for a basic bot:

```js title="index.js" showLineNumbers
import { Client } from "./client";
import { Intents } from "./types/intents";
const client = new Client({
  intents: Intents.Guilds,
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`);
});

client.connect("<insert your bot's token>");
```

3. Run the file:

```bash
# If you named the bot file something else,
# replace "index.js" with your own name.
node index.js
```

4. Success!
   Now your bot should be online on Discord. If it isn't, contact us on Discord or make an [issue on GitHub](https://github.com/ToastedDev/discordic/issues/new)!

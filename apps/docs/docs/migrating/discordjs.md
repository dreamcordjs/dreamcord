# Discord.js

Coming from [discord.js](https://discord.js.org)? Don't worry, we'll help you move to Dreamcord!

## Logging in

On [discord.js](https://discord.js.org), you might've logged into the bot like this:

```js title="index.js" showLineNumbers
client.login("<your bot's token>");
```

But on Dreamcord, you log into your bot like this:

```js title="index.js" showLineNumbers
client.connect("<your bot's token>");
```

:::note

We do have a `login`, but we highly recommend using `connect` instead.

:::

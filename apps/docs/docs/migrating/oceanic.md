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

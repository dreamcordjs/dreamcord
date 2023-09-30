import { GatewayPayload } from "@dreamcord/api-types";
import { Client } from "../client";
import { ClientUser } from "../models/client-user";
import { Guild } from "../models/guild";

export default async (client: Client, payload: GatewayPayload) => {
  const { user, guilds } = payload.d;

  client.user = new ClientUser(client, user);

  for (const g of guilds) {
    if (!client.guilds.has(g.id)) {
      const fetchedGuild = await client.rest.fetchGuild(g.id);
      const guild = new Guild(client, fetchedGuild);
      client.guilds.set(guild.id, guild);
    }
  }

  client.emit("ready", client);
  client.ready = true;
};

import { GatewayPayload } from "@discordic/api-types";
import { Client } from "../client";
import { Channel } from "../models/channel";
import { Message } from "../models/message";
import { User } from "../models/user";

export default async (client: Client, payload: GatewayPayload) => {
  let user = client.users.get(payload.d.author.id);
  if (!user) {
    const fetchedUser = await client.rest.fetchUser(payload.d.author.id);
    user = new User(client, fetchedUser);
    client.users.set(payload.d.author.id, user);
  }

  let channel = client.channels.get(payload.d.channel_id);
  if (!channel) {
    const fetchedChannel = await client.rest.fetchChannel(payload.d.channel_id);
    channel = new Channel(client, fetchedChannel);
    client.channels.set(payload.d.channel_id, channel);
  }

  client.emit("messageCreate", new Message(client, payload.d));
};

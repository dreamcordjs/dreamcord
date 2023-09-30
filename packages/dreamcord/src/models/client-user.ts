import { APIUser } from "@dreamcord/api-types";
import { Client } from "../client";
import { User } from "./user";

export class ClientUser extends User {
  constructor(client: Client, data: APIUser) {
    super(client, data);
  }
}

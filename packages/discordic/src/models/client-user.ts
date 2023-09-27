import { Client } from "../client";
import { User } from "./user";

export class ClientUser extends User {
  constructor(client: Client, data: any) {
    super(client, data);
  }
}

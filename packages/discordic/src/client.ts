import EventEmitter from "events";
import { CDN } from "./cdn";
import { Channel } from "./models/channel";
import { ClientUser } from "./models/client-user";
import { Guild } from "./models/guild";
import { User } from "./models/user";
import { RestAPIHandler } from "./rest";
import { ClientEvents, ClientOptions } from "./types/client";
import { WebSocketManager } from "./ws";

export declare interface Client {
  on<E extends keyof ClientEvents>(
    eventName: E,
    listener: (...args: ClientEvents[E]) => void
  ): this;
  off<E extends keyof ClientEvents>(
    eventName: E,
    listener: (...args: ClientEvents[E]) => void
  ): this;
  emit<E extends keyof ClientEvents>(
    eventName: E,
    ...args: ClientEvents[E]
  ): boolean;
}

export class Client<Ready extends boolean = boolean> extends EventEmitter {
  public ready: Ready = false as Ready;

  private socket: WebSocketManager = new WebSocketManager(this);

  /**
   * The rest API handler for this client.
   */
  public rest: RestAPIHandler = new RestAPIHandler(this);

  /**
   * The CDN handler for this client.
   */
  public cdn: CDN = new CDN();

  /**
   * The options for this client.
   */
  public options: ClientOptions;

  private _user!: ClientUser;

  /**
   * All users that are currently cached.
   */
  public users: Map<string, User> = new Map();

  /**
   * All guilds that are currently cached.
   */
  public guilds: Map<string, Guild> = new Map();

  /**
   * All channels that are currently cached.
   */
  public channels: Map<string, Channel> = new Map();

  constructor(options: ClientOptions) {
    super();

    if (!options.intents) throw new SyntaxError("Intents must be specified.");
    this.options = options;
  }

  /**
   * Connect to the Discord gateway.
   */
  public async connect(token: string) {
    this.rest.token = token;
    await this.socket.connect(token);
  }

  /**
   * Connect to the Discord gateway.
   * @deprecated Use {@link Client.connect} instead.
   */
  public async login(token: string) {
    return this.connect(token);
  }

  /**
   * The user used to log in.
   */
  public get user() {
    return this._user;
  }

  public set user(user: ClientUser) {
    this._user = user;
  }
}

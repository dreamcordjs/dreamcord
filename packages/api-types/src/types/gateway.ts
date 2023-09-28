/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum GatewayOpCodes {
  /**
   * An event was dispatched
   */
  Dispatch,

  /**
   * Fired periodically by the client to keep the connection alive
   */
  Heartbeat,

  /**
   * Starts a new session during the initial handshake
   */
  Identify,

  /**
   * Update the client's presence
   */
  PresenceUpdate,

  /**
   * Used to join/leave or move between voice channels
   */
  VoiceStateUpdate,

  /**
   * Resume a previous session that was disconnected
   */
  Resume,

  /**
   * You should attempt to reconnect and resume immediately
   */
  Reconnect,

  /**
   * Request information about offline guild members in a large guild
   */
  RequestGuildMembers,

  /**
   * The session has been invalidated. You should reconnect and identify/resume accordingly
   */
  InvalidSession,

  /**
   * Sent immediately after connecting, contains the `heartbeat_interval` to use
   */
  Hello,

  /**
   * Sent in response to receiving a heartbeat to acknowledge that it has been received
   */
  HeartbeatAck,
}

/**
 * https://discord.com/developers/docs/topics/gateway-events#payload-structure
 */
export type GatewayPayload<T extends object = any> = {
  /**
   * {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes Gateway opcode}, which indicates the payload type
   */
  op: GatewayOpCodes;

  /**
   * Event data
   */
  d?: T;

  /**
   * Sequence number of event used for {@link https://discord.com/developers/docs/topics/gateway#resuming resuming sessions} and {@link https://discord.com/developers/docs/topics/gateway#sending-heartbeats heartbeating}
   */
  s?: number;

  /**
   * Event name
   */
  t?: string;
};

/**
 * https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
 */
export enum ActivityType {
	/**
	 * Playing {game}
	 */
	Playing,
	/**
	 * Streaming {details}
	 */
	Streaming,
	/**
	 * Listening to {name}
	 */
	Listening,
	/**
	 * Watching {details}
	 */
	Watching,
	/**
	 * {emoji} {state}
	 */
	Custom,
	/**
	 * Competing in {name}
	 */
	Competing,
}

export interface Activity {
  name: string;
  state?: string;
  url?: string;
  type?: ActivityType
}

export interface Presence {
  status?: "online" | "idle" | "dnd" | "offline" | "invisible";
  afk?: boolean;
  activities?: Activity[]
}

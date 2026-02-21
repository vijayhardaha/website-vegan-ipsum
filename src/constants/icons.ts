import { LiaHashtagSolid, LiaUserFriendsSolid } from "react-icons/lia";

/**
 * Defines the available icon names and their corresponding React components.
 * This mapping allows for easy reference and usage of icons throughout the application.
 */
export type IconName = keyof typeof ICONS;

/**
 * A constant object that maps icon names to their corresponding React components.
 * This allows for easy retrieval and usage of icons based on their names.
 */
export const ICONS = {
	users: LiaUserFriendsSolid,
	hashtag: LiaHashtagSolid,
} as const;

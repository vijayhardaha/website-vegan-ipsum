import { LiaHashtagSolid, LiaUserFriendsSolid } from "react-icons/lia";
import { VscSymbolColor, VscCode, VscTools, VscMerge } from "react-icons/vsc";

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
	paint: VscSymbolColor,
	code: VscCode,
	merge: VscMerge,
	tools: VscTools,
} as const;

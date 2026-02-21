import {
	LiaCloudSolid,
	LiaCodeSolid,
	LiaGithub,
	LiaGlobeSolid,
	LiaHandshake,
	LiaHashtagSolid,
	LiaLightbulb,
	LiaNpm,
	LiaStarOfLifeSolid,
	LiaTerminalSolid,
	LiaUserFriendsSolid,
	LiaWhmcs,
} from "react-icons/lia";
import { RiArrowRightLine } from "react-icons/ri";
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
	arrowRight: RiArrowRightLine,
	cloud: LiaCloudSolid,
	code: VscCode,
	code2: LiaCodeSolid,
	gears: LiaWhmcs,
	github: LiaGithub,
	globe: LiaGlobeSolid,
	handShake: LiaHandshake,
	hashtag: LiaHashtagSolid,
	lightBulb: LiaLightbulb,
	merge: VscMerge,
	npm: LiaNpm,
	paint: VscSymbolColor,
	star: LiaStarOfLifeSolid,
	terminal: LiaTerminalSolid,
	tools: VscTools,
	users: LiaUserFriendsSolid,
} as const;

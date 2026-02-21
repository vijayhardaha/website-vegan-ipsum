import { FaXTwitter, FaGithub, FaInstagram, FaBriefcase } from "react-icons/fa6";
import { FcPanorama, FcComboChart, FcProcess, FcBiomass } from "react-icons/fc";
import {
	LiaBoltSolid,
	LiaBookOpenSolid,
	LiaBookSolid,
	LiaBriefcaseSolid,
	LiaCloudSolid,
	LiaCodeSolid,
	LiaCogSolid,
	LiaCogsSolid,
	LiaCubeSolid,
	LiaGithub,
	LiaGlobeSolid,
	LiaHandshake,
	LiaHashtagSolid,
	LiaLaptopCodeSolid,
	LiaLightbulb,
	LiaNpm,
	LiaPlugSolid,
	LiaStarOfLifeSolid,
	LiaTerminalSolid,
	LiaUser,
	LiaUserFriendsSolid,
	LiaWhmcs,
} from "react-icons/lia";
import { RiArrowRightLine, RiExternalLinkLine } from "react-icons/ri";
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
	biomass: FcBiomass,
	comboChart: FcComboChart,
	panorama: FcPanorama,
	process: FcProcess,

	bolt: LiaBoltSolid,
	book: LiaBookSolid,
	bookOpen: LiaBookOpenSolid,
	briefCase: LiaBriefcaseSolid,
	cloud: LiaCloudSolid,
	code2: LiaCodeSolid,
	cog: LiaCogSolid,
	cogs: LiaCogsSolid,
	cube: LiaCubeSolid,
	gears: LiaWhmcs,
	github: LiaGithub,
	globe: LiaGlobeSolid,
	handShake: LiaHandshake,
	hashtag: LiaHashtagSolid,
	laptop: LiaLaptopCodeSolid,
	lightBulb: LiaLightbulb,
	npm: LiaNpm,
	plug: LiaPlugSolid,
	star: LiaStarOfLifeSolid,
	terminal: LiaTerminalSolid,
	user: LiaUser,
	users: LiaUserFriendsSolid,

	arrowRight: RiArrowRightLine,
	externalLink: RiExternalLinkLine,

	faGithub: FaGithub,
	faInstagram: FaInstagram,
	faXTwitter: FaXTwitter,
	faBriefcase: FaBriefcase,

	code: VscCode,
	merge: VscMerge,
	paint: VscSymbolColor,
	tools: VscTools,
} as const;

import { FaXTwitter, FaGithub, FaInstagram, FaBriefcase } from 'react-icons/fa6';
import {
  FcBiomass,
  FcComboChart,
  FcCommandLine,
  FcElectronics,
  FcFlashOn,
  FcGlobe,
  FcNook,
  FcPanorama,
  FcProcess,
  FcPuzzle,
  FcReading,
  FcSettings,
  FcSportsMode,
  FcTodoList,
  FcWorkflow,
} from 'react-icons/fc';
import {
  LiaBoltSolid,
  LiaCloudSolid,
  LiaCodeSolid,
  LiaCogsSolid,
  LiaCubeSolid,
  LiaGithub,
  LiaGlobeSolid,
  LiaKeyboardSolid,
  LiaLaptopCodeSolid,
  LiaNpm,
  LiaPaletteSolid,
  LiaPeopleCarrySolid,
  LiaSearchSolid,
  LiaTerminalSolid,
  LiaUserTieSolid,
} from 'react-icons/lia';
import { MdOutlineArrowForward, MdOutlineArrowOutward } from 'react-icons/md';

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
  bolt: LiaBoltSolid,
  cloud: LiaCloudSolid,
  code: LiaCodeSolid,
  cogs: LiaCogsSolid,
  cube: LiaCubeSolid,
  github: LiaGithub,
  globe: LiaGlobeSolid,
  keyboard: LiaKeyboardSolid,
  laptop: LiaLaptopCodeSolid,
  npm: LiaNpm,
  palette: LiaPaletteSolid,
  peopleCarry: LiaPeopleCarrySolid,
  search: LiaSearchSolid,
  terminal: LiaTerminalSolid,
  userTie: LiaUserTieSolid,

  arrowRight: MdOutlineArrowForward,
  arrowOutward: MdOutlineArrowOutward,

  faBriefcase: FaBriefcase,
  faGithub: FaGithub,
  faInstagram: FaInstagram,
  faXTwitter: FaXTwitter,

  fcBiomass: FcBiomass,
  fcChart: FcComboChart,
  fcCli: FcCommandLine,
  fcElectronics: FcElectronics,
  fcFlash: FcFlashOn,
  fcGlobe: FcGlobe,
  fcNook: FcNook,
  fcPanorama: FcPanorama,
  fcProcess: FcProcess,
  fcPuzzle: FcPuzzle,
  fcReading: FcReading,
  fcRun: FcSportsMode,
  fcSettings: FcSettings,
  fcTodo: FcTodoList,
  fcWorkflow: FcWorkflow,
} as const;

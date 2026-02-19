import { ReactNode } from "react";

import { FiInfo } from "react-icons/fi";

import { Tooltip } from "@/components/ui/tooltip";

// Define TypeScript types for the component props
interface HelpTipProps {
	text: string;
}

/**
 * HelpTip component displays an informational icon with a tooltip.
 *
 * @param {HelpTipProps} props - Component props.
 * @returns {ReactNode} The rendered HelpTip component.
 */
export const HelpTip = ({ text }: HelpTipProps): ReactNode => (
	<Tooltip text={text} className="!max-w-80">
		<FiInfo className="text-foreground h-4 w-4 cursor-help" />
	</Tooltip>
);

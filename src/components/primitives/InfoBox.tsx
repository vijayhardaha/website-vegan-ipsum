import type { JSX, ReactNode } from "react";

import Icon from "@/components/primitives/Icon";
import { cn } from "@/utils/classnames";

/**
 * Props definition for InfoBox component
 */
export interface InfoBoxProps {
	// Main content rendered inside the info box
	children: ReactNode;
	// Optional additional CSS classes to extend or override styles
	className?: string;
}

/**
 * InfoBox
 *
 * Reusable informational container component
 * with built-in icon and optional label.
 *
 * @param {InfoBoxProps} props - Component properties
 * @returns {JSX.Element} - The rendered component
 */
export default function InfoBox({ children, className = "" }: InfoBoxProps): JSX.Element {
	return (
		<div
			className={cn(
				"bg-primary-muted border-primary/40 text-primary-dark flex items-start gap-2 rounded-3xl border px-4 py-3 text-sm leading-relaxed",
				className
			)}
		>
			<span className="relative top-0.25 flex-shrink-0 text-xl">
				<Icon name="infoCircle" />
			</span>

			<p>{children}</p>
		</div>
	);
}

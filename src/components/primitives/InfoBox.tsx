import type { JSX, ReactNode } from "react";

import { RiFileList2Line } from "react-icons/ri";

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
				"bg-primary-muted border-primary/40 text-primary-dark rounded-3xl border p-6 leading-relaxed",
				className
			)}
		>
			<div className="relative mb-4 flex items-center gap-2 text-2xl font-bold">
				<RiFileList2Line /> <span className="text-xl">Note</span>
			</div>

			<p>{children}</p>
		</div>
	);
}

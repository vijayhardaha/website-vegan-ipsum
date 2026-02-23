import type { JSX } from "react";

import { cn } from "@/utils/classnames";

/**
 * This component renders a list of tags as styled badges. It is used to display key features or attributes in a visually appealing way.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.tags - An array of strings representing the tags to be displayed.
 * @param {string[]} props.center - A boolean indicating whether the tags should be centered. Defaults to `false`.
 * @returns {JSX.Element} The rendered component.
 */
export default function PageTags({
	tags,
	center = false,
}: {
	tags: string[];
	center?: boolean;
}): JSX.Element {
	return (
		<div
			className={cn("mb-6 flex flex-wrap items-center gap-3", center ? "justify-center" : "")}
		>
			{tags.map((tag: string, index: number) => (
				<span
					key={index}
					className="border-primary/30 inline-flex items-center rounded-2xl border bg-white px-3 py-1.5 text-xs font-bold shadow-sm"
				>
					{tag}
				</span>
			))}
		</div>
	);
}

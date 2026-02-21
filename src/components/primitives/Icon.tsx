import type { JSX, SVGProps } from "react";

import { IconName, ICONS } from "@/constants/icons";
import { cn } from "@/utils/classnames";

/**
 * Props for the Icon component.
 */
interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName;
	className?: string;
	size?: number | string | undefined;
}

/**
 * Classes for different icon sizes, allowing for easy application of size-based styles to the icons.
 */
const sizeClasses = {
	1: "h-1 w-1",
	2: "h-2 w-2",
	3: "h-3 w-3",
	4: "h-4 w-4",
	5: "h-5 w-5",
	6: "h-6 w-6",
	7: "h-7 w-7",
	8: "h-8 w-8",
	9: "h-9 w-9",
	10: "h-10 w-10",
	11: "h-11 w-11",
	12: "h-12 w-12",
	13: "h-13 w-13",
	14: "h-14 w-14",
	15: "h-15 w-15",
	16: "h-16 w-16",
	17: "h-17 w-17",
	18: "h-18 w-18",
	19: "h-19 w-19",
	20: "h-20 w-20",
} as const;

/**
 * Icon component for rendering SVG icons based on the provided name.
 *
 * @param {IconProps} props - The properties for the Icon component, including the name of the icon and additional SVG props.
 * @returns {JSX.Element} The rendered component.
 */
export default function Icon({
	name,
	className,
	size = undefined,
	...props
}: IconProps): JSX.Element {
	const Component = ICONS[name];

	const numericSize = size ? Number(size) : undefined;

	const sizeClass = numericSize ? sizeClasses[numericSize as keyof typeof sizeClasses] : "";

	return <Component className={cn(sizeClass, className)} aria-hidden={true} {...props} />;
}

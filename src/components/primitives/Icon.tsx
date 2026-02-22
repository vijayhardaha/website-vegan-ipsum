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
	1: "size-1",
	2: "size-2",
	3: "size-3",
	4: "size-4",
	5: "size-5",
	6: "size-6",
	7: "size-7",
	8: "size-8",
	9: "size-9",
	10: "size-10",
	11: "size-11",
	12: "size-12",
	13: "size-13",
	14: "size-14",
	15: "size-15",
	16: "size-16",
	17: "size-17",
	18: "size-18",
	19: "size-19",
	20: "size-20",
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

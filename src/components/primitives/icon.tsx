import { SVGProps } from "react";

import { IconName, ICONS } from "@/constants/icons";
import { cn } from "@/utils/classnames";

/**
 * Props for the Icon component.
 */
interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName;
}

/**
 * Icon component for rendering SVG icons based on the provided name.
 *
 * @param {IconProps} props - The properties for the Icon component, including the name of the icon and additional SVG props.
 * @returns The rendered component.
 */
export function Icon({ name, className, ...props }: IconProps) {
	const Component = ICONS[name];

	return <Component className={cn("h-4 w-4", className)} aria-hidden="true" {...props} />;
}

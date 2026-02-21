import { forwardRef, ReactNode } from "react";
import type { JSX, LabelHTMLAttributes } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/classnames";

/**
 * Props for the Label component.
 */
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string;
	children: ReactNode;
	htmlFor: string;
}

/**
 * Styling variants for the Label component
 */
const labelVariants = cva(
	"text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
);

/**
 * Label component for form elements with accessibility features
 *
 * @param {LabelProps} props - The properties for the Label component, including className, children, and htmlFor.
 * @returns {JSX.Element} The rendered component.
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className = "", children, htmlFor, ...props }, ref): JSX.Element => (
		<label ref={ref} className={cn(labelVariants(), className)} htmlFor={htmlFor} {...props}>
			{children}
		</label>
	)
);

Label.displayName = "Label";

export default Label;

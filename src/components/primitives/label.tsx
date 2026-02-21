"use client";

import { forwardRef, LabelHTMLAttributes, ReactNode } from "react";

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
 * @param {LabelProps} props - Component props
 * @returns {ReactNode} The Label component
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className = "", children, htmlFor, ...props }, ref): ReactNode => (
		<label ref={ref} className={cn(labelVariants(), className)} htmlFor={htmlFor} {...props}>
			{children}
		</label>
	)
);

Label.displayName = "Label";

export default Label;

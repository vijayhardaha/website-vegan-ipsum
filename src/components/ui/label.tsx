"use client";

import { forwardRef } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/classnames";

// Define TypeScript types for the component props
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	className?: string;
	children: React.ReactNode;
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
 * @returns {React.ReactNode} The Label component
 */
const Label = forwardRef<HTMLLabelElement, LabelProps>(
	({ className = "", children, htmlFor, ...props }, ref) => (
		<label ref={ref} className={cn(labelVariants(), className)} htmlFor={htmlFor} {...props}>
			{children}
		</label>
	)
);

Label.displayName = "Label";

export { Label, labelVariants };

import { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/classnames";

/**
 * Props for the Input component.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type?: string;
}

/**
 * Input component for text entry, file uploads, and other input types.
 *
 * @param {InputProps} props - Component props
 * @returns {ReactNode} Input component
 */
export default function Input({ className, type = "text", ...props }: InputProps): ReactNode {
	return (
		<input
			type={type}
			autoComplete="off"
			spellCheck="false"
			data-slot="input"
			className={cn(
				// Core layout and sizing
				"flex h-12 w-full min-w-0 px-3 py-1",

				// Font and text
				"rounded-lg text-base",

				// Typography
				"placeholder:text-muted-foreground/50 file:text-foreground",

				// Colors and borders
				"border-input text-foreground bg-input/20 border",
				"selection:bg-foreground selection:text-background",

				// Focus and validation states
				"focus:border-input focus:ring-input focus:ring-2 focus:ring-offset-2",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",

				// Disabled states
				"disabled:cursor-not-allowed disabled:opacity-50",

				// Transitions and outline
				"transition-[color,box-shadow] outline-none",

				// Data output
				"data-[output]:outline-none data-[output]:focus:ring-0 data-[output]:focus:outline-none",
				"data-[output]:focus:border-input",
				className
			)}
			{...props}
		/>
	);
}

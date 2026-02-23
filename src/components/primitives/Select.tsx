import { ChangeEvent } from "react";
import type { JSX, ReactNode, SelectHTMLAttributes } from "react";

import { cn } from "@/utils/classnames";

/**
 * Defines the shape of an option item for the Select component,
 * including a label, value, and optional disabled state.
 */
interface Options {
	label: string;
	value: string;
	disabled?: boolean;
}

/**
 * Props for the Select component, extending standard select attributes and adding custom options and value handling.
 */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	/** Additional CSS classes for the select element. */
	className?: string;
	/** Array of options to render (label/value pairs). If omitted, children are rendered. */
	options?: Options[];
	/** Controlled selected value */
	value?: string;
	/** Callback that receives the selected value */
	onValueChange?: (value: string) => void;
	/** Optional children (if not using options prop) */
	children?: ReactNode;
}

/**
 * Select dropdown component matching the project's input/textarea styles.
 * Accepts an `options` array of `{ label, value }` and a controlled `value`.
 */
export default function Select({
	className,
	options,
	value,
	onValueChange,
	children,
	...props
}: SelectProps): JSX.Element {
	/**
	 * Handles changes to the select element, calling the onValueChange callback if provided.
	 *
	 * @param {ChangeEvent} e - The change event from the select element
	 */
	function handleChange(e: ChangeEvent<HTMLSelectElement>) {
		onValueChange?.(e.target.value);
		if (props.onChange) props.onChange(e as ChangeEvent<HTMLSelectElement>);
	}

	return (
		<select
			data-slot="select"
			className={cn(
				// Layout & spacing
				"flex h-12 w-full min-w-0 px-3 py-1 pr-8",

				// Font and text
				"rounded-3xl text-base",

				// Placeholder & colors
				"placeholder:text-muted-foreground/50",

				// Background & border
				"border-input text-foreground bg-input/20 border",

				// Focus styles
				"focus:border-input focus:ring-input focus:ring-2 focus:ring-offset-2",

				// Validation
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",

				// Disabled
				"disabled:cursor-not-allowed disabled:opacity-50",

				// Transitions
				"transition-[color,box-shadow] outline-none",

				className
			)}
			value={value}
			onChange={handleChange}
			{...props}
		>
			{options
				? options.map((opt) => (
						<option key={opt.value} value={opt.value} disabled={opt.disabled}>
							{opt.label}
						</option>
					))
				: children}
		</select>
	);
}

import { cn } from "@/utils/classNameUtils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	children?: React.ReactNode;
}

/**
 * Select dropdown component matching the project's input/textarea styles.
 * @param {InputProps} props - Component props
 * @returns {React.ReactNode} Input component
 */
interface OptionItem {
	label: string;
	value: string;
	disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	/** Array of options to render (label/value pairs). If omitted, children are rendered. */
	options?: OptionItem[];
	/** Controlled selected value */
	value?: string;
	/** Callback that receives the selected value */
	onValueChange?: (value: string) => void;
}

/**
 * Select dropdown component matching the project's input/textarea styles.
 * Accepts an `options` array of `{ label, value }` and a controlled `value`.
 */
function Select({
	className,
	options,
	value,
	onValueChange,
	children,
	...props
}: SelectProps): React.ReactNode {
	/**
	 * Handles changes to the select element, calling the onValueChange callback if provided.
	 *
	 * @param {React.ChangeEvent} e - The change event from the select element
	 */
	function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
		onValueChange?.(e.target.value);
		if (props.onChange) props.onChange(e as React.ChangeEvent<HTMLSelectElement>);
	}

	return (
		<select
			data-slot="select"
			className={cn(
				// Layout & spacing
				"flex h-12 w-full min-w-0 px-3 py-1 pr-8",

				// Font and text
				"rounded-lg text-base",

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

export { Select };

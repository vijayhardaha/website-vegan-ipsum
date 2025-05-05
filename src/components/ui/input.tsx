import { cn } from "@/utils/classNameUtils";

// Define TypeScript types for the component props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

/**
 * Input component for text entry, file uploads, and other input types.
 *
 * @param {InputProps} props - Component props
 * @returns {React.JSX.Element} Input component
 */
function Input({ className, type = "text", ...props }: InputProps): React.JSX.Element {
  return (
    <input
      type={type}
      autoComplete="off"
      spellCheck="false"
      data-slot="input"
      className={cn(
        // Core layout and sizing
        "flex h-10 w-full min-w-0 px-3 py-1",

        // Font and text
        "text-base",

        // Typography
        "placeholder:text-muted-foreground/50 file:text-foreground",

        // Colors and borders
        "border-input text-foreground border bg-transparent",
        "selection:bg-foreground selection:text-background",

        // Focus and validation states
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",

        // Disabled states
        "disabled:cursor-not-allowed disabled:opacity-50",

        // Transitions and outline
        "transition-[color,box-shadow] outline-none",

        // Data output
        "data-[output]:outline-none data-[output]:focus-visible:ring-0 data-[output]:focus-visible:outline-none",
        "data-[output]:focus-visible:border-input",
        className
      )}
      {...props}
    />
  );
}

export { Input };

import { type ChangeEvent, type JSX, type ReactNode, type SelectHTMLAttributes } from 'react';

import { cn } from '@/utils/classnames';

interface Options {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: Options[];
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}

const SELECT_CLASSES =
  'flex h-12 w-full min-w-0 px-3 py-1 pr-8 rounded-3xl text-base '
  + 'placeholder:text-muted-foreground/50 '
  + 'border-input text-foreground bg-input/20 border '
  + 'focus:border-input focus:ring-input focus:ring-2 focus:ring-offset-2 '
  + 'aria-invalid:border-destructive aria-invalid:ring-destructive/20 '
  + 'disabled:cursor-not-allowed disabled:opacity-50 '
  + 'transition-[color,box-shadow] outline-none';

/**
 * Select dropdown component matching the project's input/textarea styles.
 * Accepts an `options` array of `{ label, value }` and a controlled `value`.
 *
 * @param {SelectProps} props - The component props
 *
 * @returns {JSX.Element} The rendered select component
 */
export default function Select({
  className,
  options,
  value,
  onValueChange,
  children,
  ...props
}: SelectProps): JSX.Element {
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    onValueChange?.(e.target.value);
    if (props.onChange) props.onChange(e as ChangeEvent<HTMLSelectElement>);
  }

  return (
    <select
      data-slot="select"
      className={cn(SELECT_CLASSES, className)}
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

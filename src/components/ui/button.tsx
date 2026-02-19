"use client";

import {
	ButtonHTMLAttributes,
	forwardRef,
	HTMLAttributes,
	isValidElement,
	ReactElement,
	ReactNode,
	Ref,
	RefObject,
} from "react";
import { cloneElement } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/classnames";

/**
 * Slot component for polymorphic prop forwarding.
 */
type SlotProps = {
	children: ReactNode; // Allow any valid ReactNode (string, ReactElement, etc.)
} & HTMLAttributes<HTMLElement>;

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
	if (!isValidElement(children)) {
		return null;
	}

	// Ensure children.props is always an object before spreading
	const childProps = children.props && typeof children.props === "object" ? children.props : {};

	return cloneElement(children, {
		...props,
		...childProps, // Spread props and ensure children.props is valid
		ref: (childRef: HTMLElement | null) => {
			if (typeof ref === "function") {
				ref(childRef);
			} else if (ref && childRef) {
				(ref as RefObject<HTMLElement>).current = childRef;
			}

			// Handle the child's original ref separately
			const { ref: childOriginalRef } = children as ReactElement & {
				ref?: Ref<HTMLElement>;
			};
			if (typeof childOriginalRef === "function") {
				childOriginalRef(childRef);
			} else if (childOriginalRef && childRef) {
				(childOriginalRef as RefObject<HTMLElement>).current = childRef;
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} as any); // Use `as any` to bypass TypeScript's type checking for `ref`
});

Slot.displayName = "Slot";

/**
 * Button component with multiple variants and sizes.
 */
const buttonVariants = cva(
	[
		"inline-flex items-center justify-center gap-1",
		"whitespace-nowrap shrink-0 border",
		"text-sm font-semibold leading-none rounded-lg",
		"cursor-pointer disabled:pointer-events-none disabled:opacity-50",
		"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		"transition-colors no-underline hover:no-underline",
	],
	{
		variants: {
			variant: {
				primary: [
					"bg-primary border-primary text-primary-foreground",
					"hover:bg-primary/80 hover:border-primary/80 hover:text-primary-foreground",
					"focus:ring-primary-muted",
				].join(" "),
				"primary-outline": [
					"bg-transparent border-primary text-primary",
					"hover:bg-primary/80 hover:border-primary/80 hover:text-primary-foreground",
					"focus:ring-primary-muted",
				].join(" "),
				secondary: [
					"bg-secondary border-secondary text-secondary-foreground",
					"hover:bg-secondary/60 hover:border-secondary/60 hover:text-secondary-foreground",
					"focus:ring-secondary/50",
				].join(" "),
				"secondary-outline": [
					"bg-transparent border-secondary text-secondary",
					"hover:bg-secondary/60 hover:border-secondary/60 hover:text-secondary-foreground",
					"focus:ring-secondary/50",
				].join(" "),
				white: [
					"bg-white border-white text-secondary-dark",
					"hover:bg-white/80 hover:border-white/80 hover:text-secondary-dark",
					"focus:ring-secondary/50",
				].join(" "),
				"white-outline": [
					"bg-transparent border-white text-white",
					"hover:bg-white hover:border-white hover:text-secondary-dark",
					"focus:ring-secondary/50",
				].join(" "),
				link: [
					"border-none",
					"text-primary underline-offset-3 !p-0",
					"hover:underline focus:ring-0",
				].join(" "),
			},
			size: {
				sm: "h-8 gap-1.5 px-4 text-xs",
				md: "h-10 px-6 py-2 text-xs",
				lg: "h-12 px-8",
				xl: "h-14 px-10 text-base border-2",
				icon: "size-10 p-1 active:translate-y-0",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

/**
 * Button component with various styles and sizes.
 */
type ButtonProps = {
	className?: string;
	variant?:
		| "primary"
		| "primary-outline"
		| "secondary"
		| "secondary-outline"
		| "white"
		| "white-outline"
		| "link";
	size?: "md" | "sm" | "lg" | "xl" | "icon";
	asChild?: boolean;
	children: ReactNode; // Allow any valid ReactNode (string, ReactElement, etc.)
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		// Ensure props is an object before spreading
		const validProps = props && typeof props === "object" ? props : {};

		return (
			<Comp
				data-slot="button"
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...validProps}
			>
				{children}
			</Comp>
		);
	}
);

Button.displayName = "Button"; // Set the display name for the Button component

export { Button, buttonVariants };
